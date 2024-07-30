const { Model } = require('objection'); // Llamar model de la librería objection (hereda las características para realizar un modelo)

class Customer extends Model { // Creo la herencia del modelo
    static get tableName() { // Especifica el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para una lista
            required: ['name', 'email'], // Campos requeridos
            properties: { // Estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                direccion: { type: 'string', minLength: 1 },
                telefono: { type: 'string', minLength: 1 },
                age: { type: 'integer' } // Asegúrate de que 'age' es un número entero
            }
        };
    }

    static async getCustomers() { // Método para listar clientes
        return await Customer.query(); // SELECT * FROM customer
    }

    static async insert(data) { // Método para insertar clientes
        return await Customer.query()
            .insert(data); // INSERT INTO customer VALUES (...)
    }

    static async update(data, id) { // Método para editar cliente
        return await Customer.query()
            .patch(data) // PATCH para actualizar los campos
            .where('id', id); // WHERE id = ?
    }

    static async delete(id) { // Método para eliminar cliente
        return await Customer.query()
            .deleteById(id); // DELETE FROM customer WHERE id = ?
    }
}

module.exports = Customer;
