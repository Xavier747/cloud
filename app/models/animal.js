const { Model } = require('objection');

class Animal extends Model {
    static get tableName() {
        return 'animal';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'especie', 'fecha_nacimiento', 'habitat'],
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                especie: { type: 'string', minLength: 1 },
                fecha_nacimiento: { type: 'string', format: 'date' },
                habitat: { type: 'string', minLength: 1 },
                color: { type: 'string', minLength: 1 }
            }
        };
    }

    static async getAnimals() {
        return await Animal.query(); // Equivalente a: SELECT * FROM animal;
    }

    static async insert(data) {
        return await Animal.query().insert(data); // Equivalente a: INSERT INTO animal VALUES (data);
    }

    static async update(data, id) {
        return await Animal.query().patch(data).findById(id); // Equivalente a: UPDATE animal SET data WHERE id = id;
    }

    static async delete(id) {
        return await Animal.query().deleteById(id); // Equivalente a: DELETE FROM animal WHERE id = id;
    }
}

module.exports = Animal