const express = require('express');
const routerProduct = express.Router();

// const bodyParser = require('body-parser');
// const cors = require('cors')

// routerProduct.use(bodyParser.json());
// routerProduct.use(cors());

routerProduct.use(express.json());
routerProduct.use(express.urlencoded({extended: true}))



const Archivo = require('../../controller/archivoClass');

const file = new Archivo();

routerProduct.get('/listar/:id?', (req, res) => {

    // console.log('llegue')
    // const fileRead = async(id) => {
    //     console.log('llegue01')
    //     const response = await file.readForId('productos', id)
    //     console.log('llegue02')
    //     // res.json(response)
    //     res.status(200).json(response).end()
    //     // res.sendStatus("200")
    //     // res.end()
    // }
 
    // fileRead(req.params.id);

    const articulo = [{
		"nombre": "Producto 2",
		"descripcion": "producto de prueba postman 2",
		"codigo": "AN1TT3S",
		"foto": "NUEVA URL",
		"precio": 170,
		"stock": 101,
		"id": "16311171505921"
	}]

    res.send(articulo)

    console.log('llegue03')
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