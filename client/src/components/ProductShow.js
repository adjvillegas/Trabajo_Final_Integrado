import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'
//Components
import CardCardProps from './CardCardProps'


const ProductShow = () => {

    const [ products, setProducts ] = useState()
//     // const [items, setItems] = useState([]);

    useEffect(async() => {

        const result = await axios('http://localhost:8080/productos/listar/')
        setProducts(result.data)

    }, [])


    return (
        <div>
            <CardCardProps></CardCardProps>
      </div>
    );

}

export default ProductShow
