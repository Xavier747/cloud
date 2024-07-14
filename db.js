const knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');

const knexInstance = knex(knexConfig.development); // Crear instancia de knex

Model.knex(knexInstance); // Configurar objection con la instancia de knex

module.exports = knexInstance; // Exportar la instancia de knex configurada
