const { Model } = require('objection');

class Alimentacion extends Model {
    static get tableName() {
        return 'alimentacion';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['tipo_comida', 'cantidad', 'hora_alimentacion'],
            properties: {
                id: { type: 'integer' },
                tipo_comida: { type: 'string', minLength: 1 },
                cantidad: { type: 'number', minimum: 0 },
                hora_alimentacion: { type: 'string', format: 'time' },
                observaciones: { type: 'string' },
                costo: { type: 'integer' }

            }
        };
    }

    static async getAlimentaciones() {
        return await Alimentacion.query(); // Equivalente a: SELECT * FROM alimentacion;
    }

    static async insert(data) {
        return await Alimentacion.query().insert(data); // Equivalente a: INSERT INTO alimentacion VALUES (data);
    }

    static async update(data, id) {
        return await Alimentacion.query().patch(data).findById(id); // Equivalente a: UPDATE alimentacion SET data WHERE id = id;
    }

    static async delete(id) {
        return await Alimentacion.query().deleteById(id); // Equivalente a: DELETE FROM alimentacion WHERE id = id;
    }
}

module.exports = Alimentacion;