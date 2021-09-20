import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Table } from 'semantic-ui-react';

import TableRow from './TableRow.js';

const ProductMaintenance = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        async function myRequest() {
            
            const response = await axios(`http://localhost:8080/productos/listar/`)
    
        setProducts(response.data)

    }

    myRequest()

        
    }, [])

    return (
        <div>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine textAlign='center'>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Código</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Descripcion</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Precio</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Cantidad</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>URL</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Eliminar</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Modificar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                        { products.map( item => {
                            return(
                                <TableRow key={item.id} row={item}/>
                            )
                        })
                        }

                </Table.Body>

            </Table>
        </div>
    )
}

export default ProductMaintenance
