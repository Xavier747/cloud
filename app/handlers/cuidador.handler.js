const Cuidador = require('../models/cuidador');
const Alimentacion = require('../models/alimentacion'); // Asegúrate de importar el modelo relacionado

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
        const { nombre, apellido, dni, telefono, direccion, genero, id_alimentacion } = req.body;

        // Verifica que id_alimentacion exista en la tabla alimentacion
        const alimentacion = await Alimentacion.query().findById(id_alimentacion);
        if (!alimentacion) {
            return res.status(400).json({ error: "El id_alimentacion proporcionado no existe." });
        }

        const cuidador = await Cuidador.insert({
            nombre,
            apellido,
            dni,
            telefono,
            direccion,
            genero,
            id_alimentacion
        });

        res.status(201).json(cuidador);
    } catch (error) {
        console.error("Error al insertar cuidador:", error);
        res.status(500).json({ error: error.message });
    }
};

const updateCuidador = async (req, res) => {
    try {
        const cuidador = await Cuidador.update(req.body, req.params.id);
        res.json(cuidador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCuidador = async (req, res) => {
    try {
        await Cuidador.delete(req.params.id);
        res.json({ message: "Cuidador eliminado con éxito" });
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
