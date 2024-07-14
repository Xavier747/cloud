/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('habitat', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('tipo').notNullable();
        table.string('clima').notNullable();
        table.decimal('tamaño', 10, 2).notNullable(); // en metros cuadrados
        table.string('ubicacion').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('habitat');
  };

