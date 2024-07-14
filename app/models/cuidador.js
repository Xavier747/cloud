const { Model } = require('objection');

class Cuidador extends Model {
    static get tableName() {
        return 'cuidador';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'apellido', 'dni', 'telefono', 'direccion'],
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                apellido: { type: 'string', minLength: 1 },
                dni: { type: 'string', minLength: 1, maxLength: 20 },
                telefono: { type: 'string', minLength: 1 },
                direccion: { type: 'string', minLength: 1 },
                genero: { type: 'string', minLength: 1 }
                
            }
        };
    }

    static async getCuidadores() {
        return await Cuidador.query(); // Equivalente a: SELECT * FROM cuidador;
    }

    static async insert(data) {
        return await Cuidador.query().insert(data); // Equivalente a: INSERT INTO cuidador VALUES (data);
    }

    static async update(data, id) {
        return await Cuidador.query().patch(data).findById(id); // Equivalente a: UPDATE cuidador SET data WHERE id = id;
    }

    static async delete(id) {
        return await Cuidador.query().deleteById(id); // Equivalente a: DELETE FROM cuidador WHERE id = id;
    }
}

module.exports = Cuidador;