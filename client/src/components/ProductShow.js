import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router'
//Components
import CardCardProps from './CardCardProps'


const ProductShow = () => {

    const [ products, setProducts ] = useState()
    // const [items, setItems] = useState([]);

    const callRead = async() => {

        const requestOptions = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json; charset=utf-8'
            },
            mode: 'no-cors'
        };

   fetch('http://localhost:8080/productos/listar/', requestOptions)
        .then(response => {
            debugger
            response.json()
        } )
        .then((json) => {
            console.log(json)
            return(json)
        })
    }

    useEffect(() => {
    
        setProducts(callRead());


    }, [])


    return (
        <div>
            <CardCardProps></CardCardProps>
      </div>
    );

}

export default ProductShow
