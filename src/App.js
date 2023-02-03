import React from "react";
import Header from "./components/Header"
import CatalogVine from "./components/CatalogVine"
import Popular from "./components/Popular"
import Events from "./components/Events"
import './scss/app.scss'




function App() {
    return (
        <div className="wrapper">
            <Header/>
            <CatalogVine/>
            <Popular/>
            <Events/>
        </div>
       
    )
}

export default App;
