import React from "react";
import CatalogVine from "../components/CatalogVine"
import Popular from "../components/Popular"
import Events from "../components/Events"
import Information from "../components/Information";

function Home() {
    return(
        <>
            <CatalogVine/>
            <Popular/>
            <Events/>
            <Information/>
        </>
    )
}

export default Home;