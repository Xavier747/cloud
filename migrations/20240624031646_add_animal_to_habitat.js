/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('habitat', function(table) {
        // Agregar la columna id_animal
        table.integer('id_animal').unsigned();

        // Configurar la clave foránea
        table.foreign('id_animal').references('id').inTable('animal');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('habitat', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('id_animal');

        // Eliminar la columna id_animal
        table.dropColumn('id_animal');
    });
};
