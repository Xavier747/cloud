/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('alimentacion', table => {
        table.increments('id').primary();
        table.string('tipo_comida').notNullable();
        table.decimal('cantidad', 5, 2).notNullable();
        table.time('hora_alimentacion').notNullable();
        table.text('observaciones');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('alimentacion');
  };
