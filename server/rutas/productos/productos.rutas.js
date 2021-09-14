const express = require('express');
const routerProduct = express.Router();

routerProduct.use(express.json());
routerProduct.use(express.urlencoded({extended: true}))

const Archivo = require('../../controller/archivoClass');

const file = new Archivo();

routerProduct.get('/listar/:id?', (req, res) => {


    const fileRead = async(id) => {
 
        const response = await file.readForId('productos', id)
        response.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS', "Access-Control-Allow-Headers": "If-Modified-Since"});    
        res.write(respose)
        res.end()
    }
 
    fileRead(req.params.id);

});

routerProduct.post('/agregar', (req, res) => {

    const fileSave = async(odata) => {

        const respose = await file.download('productos', odata);

        res.json(respose)

    };

    fileSave({nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        codigo: req.body.codigo,
        foto: req.body.foto,
        precio: req.body.precio,
        stock: req.body.stock})

});

routerProduct.put('/actualizar/:id', (req, res) => {

    const fileUpdate = async(id, odata) => {

        const respose = await file.update('productos', odata, id);

        res.json(respose)

    };

    fileUpdate( req.params.id,
        {    
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            codigo: req.body.codigo,
            foto: req.body.foto,
            precio: req.body.precio,
            stock: req.body.stock

        })    

});

routerProduct.delete('/borrar/:id', (req, res) => {

    const fileDelete = async(id) => {

        const respose = await file.delete('productos', id);

        res.json(respose)

    };

    fileDelete( req.params.id )        

});

module.exports = routerProduct;