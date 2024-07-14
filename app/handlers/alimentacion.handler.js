const Alimentacion = require('../models/alimentacion');

const listAlimentacion = async (req, res) => {
    try {
        const alimentaciones = await Alimentacion.getAlimentaciones();
        res.json(alimentaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertAlimentacion = async (req, res) => {
    try {
        const alimentacion = await Alimentacion.insert(req.body);
        res.status(201).json(alimentacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAlimentacion = async (req, res) => {
    try {
        const alimentacion = await Alimentacion.update(req.body, req.params.id);
        res.json(alimentacion); // Por defecto 200
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAlimentacion = async (req, res) => {
    try {
        const alimentacion = await Alimentacion.delete(req.params.id);
        res.json(alimentacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listAlimentacion,
    insertAlimentacion,
    updateAlimentacion,
    deleteAlimentacion,
};