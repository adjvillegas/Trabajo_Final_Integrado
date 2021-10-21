import React, { createContext, useContext, useEffect, useState }  from 'react'
import axios  from 'axios';

export const CartContext = createContext({});
//Hook para importación del CartContext
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ( {children} ) => {

    const [ currentDB, setCurrentDB ] = useState()
    const [order, setOrder] = useState([])
    
    const changeCurrentDB = async ( value ) => {
  
        setCurrentDB(value)

        await axios.post('http://localhost:8080/', {
            value: value
        })

    }

    useEffect(() => {
        setCurrentDB('0')
    }, []);

    return (

        <CartContext.Provider value={
            {
                currentDB,
                order,
                changeCurrentDB
            }}>        
            {children}
        </CartContext.Provider>
    )
}