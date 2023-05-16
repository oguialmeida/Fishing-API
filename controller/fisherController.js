const { Person } = require("../model/fisher");

exports.list = async (_, res) => {
  Person.findAll({
    order: [["id", "DESC"]],
  }).then((posts) => res.send(posts));
};

exports.save = async (req, res) => {
  const { id, name, state, city, age, modality, fish_weight, fish_type } =
    req.body;

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
