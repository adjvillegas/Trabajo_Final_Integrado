import React, { useState, useEffect } from 'react'

//Components
import CardCardProps from './CardCardProps'


const ProductShow = () => {

    const [ products, setProducts ] = useState()
    // const [items, setItems] = useState([]);

    useEffect(() => {
        
       fetch('http://localhost:8080/listar')
       .then(response => response.json())
       .then((json) => {
           console.log(json)
           
       })

    }, [products])


    return (
        <div>
            <CardCardProps></CardCardProps>
      </div>
    );

}

export default ProductShow
