const Cuidador = require('../models/cuidador');

const listCuidador = async (req, res) => {
    try {
        const cuidadores = await Cuidador.getCuidadores();
        res.json(cuidadores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertCuidador = async (req, res) => {
    try {
        const cuidador = await Cuidador.insert(req.body);
        res.status(201).json(cuidador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCuidador = async (req, res) => {
    try {
        const cuidador = await Cuidador.update(req.body, req.params.id);
        res.json(cuidador); // Por defecto 200
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCuidador = async (req, res) => {
    try {
        const cuidador = await Cuidador.delete(req.params.id);
        res.json(cuidador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listCuidador,
    insertCuidador,
    updateCuidador,
    deleteCuidador,
};