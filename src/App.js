import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import RedWine from "./pages/RedWine";
import FullEvents from "./pages/FullEvents";
import ProductPreview from "./pages/ProductPreview";
import Footer from "./components/Footer";

import './scss/app.scss'


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/preview/:id" element={<ProductPreview/>}/>
                <Route path="/fullevents" element={<FullEvents/>}/>
                <Route path="/redwine" element={<RedWine/>}/>
            </Routes>
            <Footer/>
        </div>
       
    )
}

export default App;
