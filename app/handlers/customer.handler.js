const Customer = require('../models/customer');

// Crear una función para el llamado a select del modelo
const listCustomer = async (req, res) => {
    try {
        // Llamado a la función de select
        const customers = await Customer.getCustomers();
        res.json(customers); // Parsear a JSON y retornar la respuesta
    } catch (error) {
        console.error('Error fetching customers:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

const insertCustomer = async (req, res) => {
    try {
        const customer = await Customer.insert(req.body);
        // 201 para crear
        res.status(201).json(customer);
    } catch (error) {
        console.error('Error inserting customer:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.update(req.body, req.params.id);
        // 200 por defecto
        res.json(customer); // Corregido de `res.jason` a `res.json`
    } catch (error) {
        console.error('Error updating customer:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        await Customer.delete(req.params.id);
        // 204 para eliminar
        res.status(204).send(); // No hay contenido que devolver
    } catch (error) {
        console.error('Error deleting customer:', error); // Imprime el error en el servidor
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};
