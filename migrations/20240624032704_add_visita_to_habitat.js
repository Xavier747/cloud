/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('habitat', function(table) {
        // Agregar la columna id_vegetacion
        table.integer('id_visita').unsigned().notNullable();

        // Configurar la clave foránea
        table.foreign('id_visita').references('id').inTable('visita');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('habitat', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('id_visita');

        // Eliminar la columna id_vegetacion
        table.dropColumn('id_visita');
    });
};
