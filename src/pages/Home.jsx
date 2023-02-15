import React from "react";
import CatalogVine from "../components/CatalogVine"
import Popular from "../components/Popular"
import Events from "../components/Events"
import Information from "../components/Information";
import AgeConfirm from "../components/AgeConfirm";

function Home({onClosedAgePopup}) {
    const [agePopUp, setAgePopUp] = React.useState(true)
    

    onClosedAgePopup = () => {
        setAgePopUp(false)
    }
    return(
        <>
        
            <CatalogVine/>
            {agePopUp && (
                <div className="overlay__wrapper">
                
                    <AgeConfirm onClosedAgePopup={onClosedAgePopup}/>
                
                    </div>
            )}
            <Popular/>
            <Events/>
            <Information/>
            
        </>
    )
}

export default Home;