const option = {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "prueba"
    }
}

const knex = require('knex')(option);

class MySQLMariaDBLocal {

    constructor() {

        this.knex = knex;
    }


    readForId = async (archivo, id) => {


        if (id) {
            this.knex.from(archivo).select('id', id)
                .then((rows) => {
                    return rows
                })
                .catch((err) => { console.log(err); throw err })
                .finally(() => knex.destroy());
        } else {
            this.knex.from(archivo).select("*")
                .then((rows) => {
                    return rows
                })
                .catch((err) => { console.log(err); throw err })
                .finally(() => this.knex.destroy());
        }

    }

    download = async (archivo, data) => {

        this.knex.schema.createTable(archivo, table => {
            table.increments('id')
            table.string(data.nombre)
            table.string(data.descripcion)
            table.string(data.codigo)
            table.string(data.foto)
            table.integer(data.precio)
            table.integer(data.stock)
        })
            .then(() => { message: 'OK' })
            .catch((err) => { console.log(err); throw err })
            .finally(() => this.knex.destroy());


    }

    update = async (archivo, data, id) => {


        this.knex.from(archivo).where('id', id).update({ precio: data.precio })
            .then(() => { message: 'OK' })
            .catch((err) => { console.log(err); throw err; })
            .finally(() => this.knex.knex.destroy());
    }

    delete = async (archivo, id) => {


        this.knex.from(archivo).del()
            .then(() => { message: 'OK' })
            .catch((err) => { console.log(err); throw err; })
            .finally(() => this.knex.destroy());
    }


}


module.exports = MySQLMariaDBLocal;