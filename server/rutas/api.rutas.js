const express = require('express');
const api = express();

//Rutas
const routeCarrito = require('./carrito/carrito.rutas');
const routeProducto = require('./productos/productos.rutas');

const Archivo = require('../controller/archivoClass');

let persistencia = new Archivo();

api.get('/', (req, res) => {
    console.log('stoy')
    const algo = '0'

    switch (algo) {
        case '0':

            persistencia = new Archivo()

            break;
    
        default:
            break;
    }
})

api.use('/carrito', routeCarrito);
api.use('/productos', routeProducto(persistencia));

module.exports = api;