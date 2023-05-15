const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
    const user = {id: 1, name: "Johny Teste"};
    res.json(user);
});

router.post("/user", (req, res) => {
    const { name } = req.body;
    const newUser = {id: 2, name};
    res.status(201).json(newUser);
});

module.exports = router;