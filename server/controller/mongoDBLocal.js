const mongoose = require('mongoose');

class MongoDBBLocal {

    constructor() {

        this.mongoProducto = this.inicialice('mongodb://localhost:27017/ecommerce').catch(err => console.log(err));

    } 

    inicialice = async(URL) => {

        let rta = await mongoose.connect(URL);

        const productosCollection = 'productos';

        const productosSchema = new mongoose.Schema({
            nombre: String,
            descripcion: String,
            codigo: String,
            foto: String,
            precio: Number,
            stock: Number,
        })

        return mongoose.model(productosCollection, productosSchema);
    }

    readForId = async (archivo, id) => {


        if (id) {
            let productoReadOnly= await mongoProducto.find({id: id})
            return productoReadOnly
        } else {
            let productoReadAll = await mongoProducto.find({})
            return productoReadAll
        }

    }

    download = async (archivo, data) => {

        const productoSaveModel = new this.mongoProducto(data)

        let productoSave = await productoSaveModel.save()

        return productoSave;
    }

    update = async (archivo, data, id) => {


            let productoUpdate = await this.mongoProducto.updateOne( {id: id}, {
                $set: {precio: 110}
            } )
            
            return productoUpdate
    }

    delete =  async (archivo, id) => {

        let productoDelete = await this.mongoProducto.deleteOne( {id: id} )

        return productoDelete
    }

}

module.exports = MongoDBBLocal;