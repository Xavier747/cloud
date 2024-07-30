const Visita = require('../models/visita');

const listVisita = async (req, res) => {
    try {
        const visitas = await Visita.getVisitas();
        res.json(visitas);
    } catch (error) {
        console.error('Error al obtener visitas:', error);
        res.status(500).json({ error: 'Error al obtener visitas' });
    }
};

const insertVisita = async (req, res) => {
    try {
        console.log('Datos recibidos para insertar:', req.body); // Depuración
        const visita = await Visita.insert(req.body);
        res.status(201).json(visita);
    } catch (error) {
        console.error('Error al insertar visita:', error);
        if (error.code === '23505') {
            res.status(409).json({ error: 'Visita ya existe' });
        } else {
            res.status(500).json({ error: 'Error al insertar visita' });
        }
    }
};

const updateVisita = async (req, res) => {
    try {
        const visita = await Visita.update(req.body, req.params.id);
        if (visita) {
            res.json(visita);
        } else {
            res.status(404).json({ error: 'Visita no encontrada' });
        }
    } catch (error) {
        console.error('Error al actualizar visita:', error);
        res.status(500).json({ error: 'Error al actualizar visita' });
    }
};

const deleteVisita = async (req, res) => {
    try {
        const result = await Visita.delete(req.params.id);
        if (result) {
            res.json({ message: 'Visita eliminada' });
        } else {
            res.status(404).json({ error: 'Visita no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar visita:', error);
        res.status(500).json({ error: 'Error al eliminar visita' });
    }
};

module.exports = {
    listVisita,
    insertVisita,
    updateVisita,
    deleteVisita,
};
