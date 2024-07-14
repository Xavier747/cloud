const Habitat = require('../models/habitat');

const listHabitat = async (req, res) => {
    try {
        const habitats = await Habitat.getHabitats();
        res.json(habitats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.insert(req.body);
        res.status(201).json(habitat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.update(req.body, req.params.id);
        res.json(habitat); // Por defecto 200
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.delete(req.params.id);
        res.json(habitat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listHabitat,
    insertHabitat,
    updateHabitat,
    deleteHabitat,
};