/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('visita', table => {
        table.increments('id').primary();
        table.string('nombre_visitante').notNullable();
        table.date('fecha_visita').notNullable();
        table.time('hora_visita').notNullable();
        table.text('observaciones');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('visita');
  };

