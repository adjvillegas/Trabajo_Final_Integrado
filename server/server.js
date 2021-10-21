const express = require('express');
const app = express();

const PORT = 8080;

let persistencia = '0'

// const api = require('./rutas/api.rutas.js');

const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const Archivo = require('./controller/fileSystem');

const MySQLMariaDBLocal = require('./controller/MySQLMariaDBLocal')
const MySQLMariaDBDBaaS = require('./controller/MySQLMariaDBDBaaS')

const SQLite3D = require('./controller/SQLite3');
const mongoDBLocal = require('./controller/mongoDBLocal');
const MongoDBBDaaS = require('./controller/mongoDBDBaaS');

const Firebase = require('./controller/Firebase');

const routeCarrito = require('./rutas/carrito/carrito.rutas');
const routeProducto = require('./rutas/productos/productos.rutas');

const setPersistencia = (myValue) => {

    switch (myValue) {
        case '0':
            // return new Archivo()
            app.use('/productos', 'Archivo');
            return 'Archivo';
            break;
        case '1':
            // return new MySQLMariaDBLocal()
            app.use('/productos', 'MySQLMariaDBLocal');
            return 'MySQLMariaDBLocal'
            break;
        case '2':
            return new MySQLMariaDBDBaaS()
            break;
        case '3':
            return new SQLite3D()
            break;
        case '4':
            return new mongoDBLocal()
            break;
        case '5':
            return new MongoDBBDaaS()
            break;
        case '6':
            return new Firebase()
            break;
        default:
            return new Archivo()
            break;
    }

}

app.get('/', (req, res ) => {
    res.json({"value": 0})
})

app.post('/', (req, res ) => {
    console.log(req.body.value)
    const { value } = req.body;

    persistencia = value

    res.send(value)
})

// 

// let persistencia;

// app.get('', (req, res, next) => {
//     console.log('stoy')
//     const algo = '0'

//     switch (algo) {
//         case '0':

//             persistencia = new Archivo()

//             console.log(`persistencia Archivo ${persistencia}`)

//             next()
//             console.log('persistencia Archivo luego del next')
//             break;

//         default:
//             break;
//     }
// })



app.use('/carrito', routeCarrito);
// app.use('/productos', routeProducto(setPersistencia(persistencia)));

const server = app.listen(PORT, () => {
    console.log('server iniciado')
});

server.on("error", err => console.log(err));
