/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('animal', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('especie').notNullable();
        table.date('fecha_nacimiento').notNullable();
        table.string('habitat').notNullable();
        table.timestamps(true, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('animal');
  };
