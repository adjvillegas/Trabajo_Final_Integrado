import React, { useState, useEffect } from 'react'
import axios from 'axios';

//Components
import CardCardProps from './CardCardProps'


const ProductList = () => {

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
            {products.map(item => {
                 return ( 
                    <CardCardProps key={item.id} producto={item}/>
                 )
            })}

        </div>  
    );

}

export default ProductList
