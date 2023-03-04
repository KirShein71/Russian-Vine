import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import SideBar from "./components/SideBar";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import FullEvents from "./pages/FullEvents";
import ProductPreview from "./pages/ProductPreview";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";

import './scss/app.scss'
import ThankYouPage from "./components/ThankYouPage";



function App() {
    return (
        <div className="wrapper">
            <Header/>
            <SideBar  pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/preview/:id" element={<ProductPreview/>}/>
                <Route path="/fullevents" element={<FullEvents/>}/>
                <Route path="/reviews" element={<Reviews currentUserId="1"/>}/>
                <Route path="/thankyou" element={<ThankYouPage/>}/>
            </Routes>
            <Footer/>
        </div>
       
    )
}

export default App;
