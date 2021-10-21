const express = require('express');

module.exports = ( oClass ) => {

    const routerProduct = express.Router()

    routerProduct.use(express.json());
    routerProduct.use(express.urlencoded({extended: true}))

    routerProduct.get('/mode', (req,res) => {
        res.send(oClass)
    })

    routerProduct.get('/listar/:id?', (req, res) => {

            const fileRead = async(id) => {
                
                const response = await oClass.readForId('productos', id)
        
                res.status(200).send(response).end()
        
            }
        
            fileRead(req.params.id);
        
        

        });

    routerProduct.post('/agregar', (req, res) => {

            const fileSave = async(odata) => {
        
                const respose = await oClass.download('productos', odata);
        
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
            
                    const respose = await oClass.update('productos', odata, id);
            
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

        return routerProduct;

};