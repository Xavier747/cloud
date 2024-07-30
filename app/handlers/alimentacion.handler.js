const Alimentacion = require('../models/alimentacion');

const listAlimentacion = async (req, res) => {
    try {
        const alimentaciones = await Alimentacion.getAlimentaciones();
        res.json(alimentaciones);
    } catch (error) {
        console.error('Error fetching alimentaciones:', error);
        res.status(500).json({ error: error.message });
    }
};

const insertAlimentacion = async (req, res) => {
    try {
        const { tipo_comida, cantidad, hora_alimentacion, observaciones, costo } = req.body;

        // Validación de datos
        if (typeof tipo_comida !== 'string' || tipo_comida.length < 1) {
            return res.status(400).json({ error: 'El tipo de comida es requerido y debe tener al menos 1 carácter.' });
        }

        if (typeof cantidad !== 'number' || isNaN(cantidad) || cantidad < 0) {
            return res.status(400).json({ error: 'La cantidad debe ser un número válido y mayor o igual a 0.' });
        }

        if (!/^[0-2][0-9]:[0-5][0-9]$/.test(hora_alimentacion)) {
            return res.status(400).json({ error: 'La hora de alimentación debe estar en el formato HH:MM.' });
        }

        if (observaciones && typeof observaciones !== 'string') {
            return res.status(400).json({ error: 'Las observaciones deben ser una cadena de texto si están presentes.' });
        }

        if (typeof costo !== 'number' || isNaN(costo) || !Number.isInteger(costo) || costo < 0) {
            return res.status(400).json({ error: 'El costo debe ser un número entero válido y mayor o igual a 0.' });
        }

        const alimentacionData = {
            tipo_comida,
            cantidad,
            hora_alimentacion,
            observaciones,
            costo
        };

        const alimentacion = await Alimentacion.insert(alimentacionData);
        res.status(201).json(alimentacion);
    } catch (error) {
        console.error('Error inserting alimentacion:', error);
        res.status(500).json({ error: error.message });
    }
};

const updateAlimentacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { tipo_comida, cantidad, hora_alimentacion, observaciones, costo } = req.body;

        // Validación de datos
        if (typeof tipo_comida !== 'string' || tipo_comida.length < 1) {
            return res.status(400).json({ error: 'El tipo de comida es requerido y debe tener al menos 1 carácter.' });
        }

        if (typeof cantidad !== 'number' || isNaN(cantidad) || cantidad < 0) {
            return res.status(400).json({ error: 'La cantidad debe ser un número válido y mayor o igual a 0.' });
        }

        if (!/^[0-2][0-9]:[0-5][0-9]$/.test(hora_alimentacion)) {
            return res.status(400).json({ error: 'La hora de alimentación debe estar en el formato HH:MM.' });
        }

        if (observaciones && typeof observaciones !== 'string') {
            return res.status(400).json({ error: 'Las observaciones deben ser una cadena de texto si están presentes.' });
        }

        if (typeof costo !== 'number' || isNaN(costo) || !Number.isInteger(costo) || costo < 0) {
            return res.status(400).json({ error: 'El costo debe ser un número entero válido y mayor o igual a 0.' });
        }

        const alimentacionData = {
            tipo_comida,
            cantidad,
            hora_alimentacion,
            observaciones,
            costo
        };

        const alimentacion = await Alimentacion.update(alimentacionData, id);
        res.json(alimentacion);
    } catch (error) {
        console.error('Error updating alimentacion:', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteAlimentacion = async (req, res) => {
    try {
        const { id } = req.params;
        const alimentacion = await Alimentacion.delete(id);
        res.json(alimentacion);
    } catch (error) {
        console.error('Error deleting alimentacion:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listAlimentacion,
    insertAlimentacion,
    updateAlimentacion,
    deleteAlimentacion,
};
