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

// Function to filter users
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

// Function to delete a user
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).send({ message: 'Person not found' });
    }
    await person.destroy();
    res.send({ message: 'Person deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// Function to update a user
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, state, city, age, modality, fish_weight, fish_type } = req.body;

  try {
    let person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).send({ message: 'Person not found' });
    }

    person.name = name;
    person.state = state;
    person.city = city;
    person.age = age;
    person.modality = modality;
    person.fish_weight = fish_weight;
    person.fish_type = fish_type;

    await person.save();

    res.send(person);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};



