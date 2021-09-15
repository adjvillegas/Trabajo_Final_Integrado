import React from 'react'

//React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component
import Home from '../components/Home.js';
import MenuNav from '../components/MenuNav';
import ProductList from '../components/ProductList.js';
import ProductShow from '../components/ProductShow.js';
import ProductCreate from '../components/ProductCreate.js';


//Provider
// import { CartProvider } from '../providers/CartContext.js';

const RouterApp = () => {
    return (
        // <CartProvider>
            <Router>
                <div>
                    <MenuNav/>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/Inicio" exact component={Home}></Route>
                        <Route path="/articulos" exact component={ProductList}></Route>
                        <Route path="/detail/:Id" exact component={ProductShow}></Route>
                        <Route path="/productCreate/:key" exact component={ProductCreate}></Route>
                    </Switch>
                </div>
            </Router>
        // </CartProvider>
    )
}

export default RouterApp
