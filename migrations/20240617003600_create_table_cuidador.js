/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cuidador', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.string('dni').notNullable().unique();
        table.string('telefono').notNullable();
        table.string('direccion').notNullable();
        table.timestamps(true, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cuidador');
  };
