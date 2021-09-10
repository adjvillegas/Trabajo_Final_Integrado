import React from 'react'

//React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import productShow from '../components/ProductShow.js';
import productCreate from '../components/ProductCreate.js'

//Provider
// import { CartProvider } from '../providers/CartContext.js';

const RouterApp = () => {
    return (
        // <CartProvider>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={productShow}></Route>
                        <Route path="/category/:key" exact component={productCreate}></Route>
                    </Switch>
                </div>
            </Router>
        // </CartProvider>
    )
}

export default RouterApp
