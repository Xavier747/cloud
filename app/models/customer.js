const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Customer extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['name','email'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1},
                email: {type: 'string', format: 'email'},
                age: {type: 'integer'}

            }
        };
    }

    static async getCustomers(){ // metodo para listar clientes
        return await Customer.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar clientes
        return await Customer.query()
            .insert(data); //insert into customer values ....
    }

    static async update(data,id){ //metodo para editar cliente
        return await Customer.query()
            .patch(id,data); //update set data where id = 0
    }

    static async delete(id){ //metodo para eliminar cliente
        return await Customer.query()
            .deleteById(id); //delete from customer where id = 0

    }

}

module.exports = Customer;



