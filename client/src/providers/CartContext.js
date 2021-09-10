import React, { createContext, useContext, useState }  from 'react'

export const CartContext = createContext({});
//Hook para importación del CartContext
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ( {children} ) => {
    const [order, setOrder] = useState([])

    return (

        <CartContext.Provider value={
            {
                carts,
            }}>        
            {children}
        </CartContext.Provider>
    )
}