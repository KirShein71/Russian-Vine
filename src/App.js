import React from "react";
import Header from "./components/Header"
import CatalogVine from "./components/CatalogVine"
import './scss/app.scss'




function App() {
    return (
        <div className="wrapper">
            <Header/>
            <CatalogVine/>
        </div>
       
    )
}

export default App;
