import React from "react";
import Header from "./components/Header"
import CatalogVine from "./components/CatalogVine"
import Popular from "./components/Popular"
import Events from "./components/Events"
import Information from "./components/Information";

import './scss/app.scss'





function App() {
    return (
        <div className="wrapper">
            <Header/>
            <CatalogVine/>
            <Popular/>
            <Events/>
            <Information/>
        </div>
       
    )
}

export default App;
