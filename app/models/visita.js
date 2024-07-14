const { Model } = require('objection');

class Visita extends Model {
    static get tableName() {
        return 'visita';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre_visitante', 'fecha_visita', 'hora_visita'],
            properties: {
                id: { type: 'integer' },
                nombre_visitante: { type: 'string', minLength: 1 },
                fecha_visita: { type: 'string', format: 'date' },
                hora_visita: { type: 'string', format: 'time' },
                observaciones: { type: 'string' },
                lugar: { type: 'string' },
            }
        };
    }

    static async getVisitas() {
        return await Visita.query(); // Equivalente a: SELECT * FROM visita;
    }

    static async insert(data) {
        return await Visita.query().insert(data); // Equivalente a: INSERT INTO visita VALUES (data);
    }

    static async update(data, id) {
        return await Visita.query().patch(data).findById(id); // Equivalente a: UPDATE visita SET data WHERE id = id;
    }

    static async delete(id) {
        return await Visita.query().deleteById(id); // Equivalente a: DELETE FROM visita WHERE id = id;
    }
}

module.exports = Visita;