const Visita = require('../models/visita');

const listVisita = async (req, res) => {
    try {
        const visitas = await Visita.getVisitas();
        res.json(visitas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertVisita = async (req, res) => {
    try {
        const visita = await Visita.insert(req.body);
        res.status(201).json(visita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateVisita = async (req, res) => {
    try {
        const visita = await Visita.update(req.body, req.params.id);
        res.json(visita); // Por defecto 200
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteVisita = async (req, res) => {
    try {
        const visita = await Visita.delete(req.params.id);
        res.json(visita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listVisita,
    insertVisita,
    updateVisita,
    deleteVisita,
};