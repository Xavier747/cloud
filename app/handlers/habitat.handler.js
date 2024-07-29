const Habitat = require('../models/habitat');

const listHabitat = async (req, res) => {
    try {
        const habitats = await Habitat.getHabitats();
        res.json(habitats); // Devuelve todos los registros
    } catch (error) {
        console.error('Error fetching habitats:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

const insertHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.insert(req.body);
        res.status(201).json(habitat); // Devuelve el registro creado con estado 201
    } catch (error) {
        console.error('Error inserting habitat:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

const updateHabitat = async (req, res) => {
    try {
        const updatedRows = await Habitat.update(req.body, req.params.id);
        // Verifica si se actualizó algún registro
        if (updatedRows) {
            res.json(updatedRows); // Devuelve el registro actualizado
        } else {
            res.status(404).json({ error: 'Habitat not found' }); // En caso de no encontrar el registro
        }
    } catch (error) {
        console.error('Error updating habitat:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

const deleteHabitat = async (req, res) => {
    try {
        await Habitat.delete(req.params.id);
        res.status(204).send(); // No hay contenido que devolver, estado 204
    } catch (error) {
        console.error('Error deleting habitat:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listHabitat,
    insertHabitat,
    updateHabitat,
    deleteHabitat,
};
