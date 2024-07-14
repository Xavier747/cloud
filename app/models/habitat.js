const { Model } = require('objection');

class Habitat extends Model {
    static get tableName() {
        return 'habitat';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'tipo', 'clima', 'tamaño', 'ubicacion'],
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                tipo: { type: 'string', minLength: 1 },
                clima: { type: 'string', minLength: 1 },
                tamaño: { type: 'number', minimum: 0 },
                ubicacion: { type: 'string', minLength: 1 },
                vegetacion: { type: 'string', minLength: 1 }
                
            }
        };
    }

    static async getHabitats() {
        return await Habitat.query(); // Equivalente a: SELECT * FROM habitat;
    }

    static async insert(data) {
        return await Habitat.query().insert(data); // Equivalente a: INSERT INTO habitat VALUES (data);
    }

    static async update(data, id) {
        return await Habitat.query().patch(data).findById(id); // Equivalente a: UPDATE habitat SET data WHERE id = id;
    }

    static async delete(id) {
        return await Habitat.query().deleteById(id); // Equivalente a: DELETE FROM habitat WHERE id = id;
    }
}

module.exports = Habitat;