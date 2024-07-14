const express = require('express');
const router = express.Router();

// Importar handlers para cada modelo
const customerHandler = require('./app/handlers/customer.handler');
const animalHandler = require('./app/handlers/animal.handler');
const cuidadorHandler = require('./app/handlers/cuidador.handler');
const alimentacionHandler = require('./app/handlers/alimentacion.handler');
const habitatHandler = require('./app/handlers/habitat.handler');
const visitaHandler = require('./app/handlers/visita.handler');

// Rutas para el modelo Customer
router.get('/customers', customerHandler.listCustomer); // Obtener todos los clientes
router.post('/customers', customerHandler.insertCustomer); // Insertar un nuevo cliente
router.patch('/customers/:id', customerHandler.updateCustomer); // Actualizar un cliente por ID
router.delete('/customers/:id', customerHandler.deleteCustomer); // Eliminar un cliente por ID

// Rutas para el modelo Animal
router.get('/animals', animalHandler.listAnimal); // Obtener todos los animales
router.post('/animals', animalHandler.insertAnimal); // Insertar un nuevo animal
router.patch('/animals/:id', animalHandler.updateAnimal); // Actualizar un animal por ID
router.delete('/animals/:id', animalHandler.deleteAnimal); // Eliminar un animal por ID

// Rutas para el modelo Cuidador
router.get('/cuidadores', cuidadorHandler.listCuidador); // Obtener todos los cuidadores
router.post('/cuidadores', cuidadorHandler.insertCuidador); // Insertar un nuevo cuidador
router.patch('/cuidadores/:id', cuidadorHandler.updateCuidador); // Actualizar un cuidador por ID
router.delete('/cuidadores/:id', cuidadorHandler.deleteCuidador); // Eliminar un cuidador por ID

// Rutas para el modelo Alimentacion
router.get('/alimentaciones', alimentacionHandler.listAlimentacion); // Obtener todas las alimentaciones
router.post('/alimentaciones', alimentacionHandler.insertAlimentacion); // Insertar una nueva alimentacion
router.patch('/alimentaciones/:id', alimentacionHandler.updateAlimentacion); // Actualizar una alimentacion por ID
router.delete('/alimentaciones/:id', alimentacionHandler.deleteAlimentacion); // Eliminar una alimentacion por ID

// Rutas para el modelo Habitat
router.get('/habitats', habitatHandler.listHabitat); // Obtener todos los habitats
router.post('/habitats', habitatHandler.insertHabitat); // Insertar un nuevo habitat
router.patch('/habitats/:id', habitatHandler.updateHabitat); // Actualizar un habitat por ID
router.delete('/habitats/:id', habitatHandler.deleteHabitat); // Eliminar un habitat por ID

// Rutas para el modelo Visita
router.get('/visitas', visitaHandler.listVisita); // Obtener todas las visitas
router.post('/visitas', visitaHandler.insertVisita); // Insertar una nueva visita
router.patch('/visitas/:id', visitaHandler.updateVisita); // Actualizar una visita por ID
router.delete('/visitas/:id', visitaHandler.deleteVisita); // Eliminar una visita por ID

module.exports = router;