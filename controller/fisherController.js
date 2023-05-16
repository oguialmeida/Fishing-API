const Person  = require("../model/fisher");

// Function to list users
exports.list = async (_, res) => {
  Person.findAll({
    order: [["id", "DESC"]],
  })
    .then((posts) => res.send(posts))
    .catch((error) => console.error(error));
};

// Function to save users
exports.save = async (req, res) => {
  const { id, name, state, city, age, modality, fish_weight, fish_type } = req.body;

  Person.create({
    id,
    name,
    state,
    city,
    age,
    modality,
    fish_weight,
    fish_type,
  }).then((post) => res.send(post));
};

// function to filter users
exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).send({ message: 'Person not found' });
    }
    res.send(person);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

