/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('cuidador', function(table) {
        // Agregar la columna id_vegetacion
        table.integer('id_alimentacion').unsigned().notNullable();

        // Configurar la clave foránea
        table.foreign('id_alimentacion').references('id').inTable('alimentacion');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('cuidador', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('id_alimentacion');

        // Eliminar la columna id_vegetacion
        table.dropColumn('id_alimentacion');
    });
};
