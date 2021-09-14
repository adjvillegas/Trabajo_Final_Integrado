import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'
//Components
import CardCardProps from './CardCardProps'


const ProductShow = () => {

    const [products, setProducts] = useState()

    useEffect(async () => {

        const result = await axios('http://localhost:8080/productos/listar/')
        setProducts(result.data)
        debugger
    }, [])


    return (
        <div>
            {/* {products.map(item => { */}
                {/* return ( */}
                    {/* <CardCardProps key={item.id} producto={item}/> */}
                    <CardCardProps/>
                {/* ) */}
            {/* })} */}

        </div>  
    );

}

export default ProductShow
