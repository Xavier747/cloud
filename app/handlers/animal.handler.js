const Animal = require('../models/animal');

const listAnimal = async (req, res) => {
    try {
        const animals = await Animal.getAnimals();
        res.json(animals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertAnimal = async (req, res) => {
    try {
        const animal = await Animal.insert(req.body);
        res.status(201).json(animal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAnimal = async (req, res) => {
    try {
        const animal = await Animal.update(req.body, req.params.id);
        res.json(animal); // Por defecto 200
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAnimal = async (req, res) => {
    try {
        const animal = await Animal.delete(req.params.id);
        res.json(animal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listAnimal,
    insertAnimal,
    updateAnimal,
    deleteAnimal,
};