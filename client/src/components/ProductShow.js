import React, { useState, useEffect } from 'react'

// import { useParams } from 'react-router'
//Components
import CardCardProps from './CardCardProps'


const ProductShow = () => {

    const [ products, setProducts ] = useState()

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

   const response = await fetch('http://localhost:8080/productos/listar/', requestOptions)
   try {
    const body = await response.json();
    debugger
    console.log(body)
     if (response.status !== 200) {
         throw Error(body.message)
     }
     return body 
   } catch (error) {
       debugger
   }

   // .then(response => {
        //     debugger
        //     response.json()
        // } )
        // .then((json) => {
        //     console.log(json)
        //     setProducts(json)
        // })
    }

    useEffect(() => {
    
        callRead()
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));


    },[])


    return (
        <div>
            <CardCardProps></CardCardProps>
      </div>
    );

}

export default ProductShow
