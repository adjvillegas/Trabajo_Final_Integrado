import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useParams } from 'react-router';

const ProductShow = () => {

    const [Products, setProducts] = useState([])

    const { Id } = useParams()

    useEffect(() => {

        async function myRequest() {
            
            let response
            debugger
    
                response = await axios(`http://localhost:8080/productos/listar/${Id}`)

            setProducts(response.data[0])

        };

        myRequest();
    }, [Id]);

    return (
        <div>
            <h1>{Products.descripcion}</h1>
            <h2>{Products.precio}</h2>
            <h3>{Products.stock}</h3>
        </div>
    )
}

export default ProductShow
