import React from "react";
import CatalogVine from "../components/CatalogVine"
import Popular from "../components/Popular"
import Events from "../components/Events"
import Information from "../components/Information";
import AgeConfirm from "../components/AgeConfirm";

function Home({onClosedAgePopup}) {
    const [agePopUp, setAgePopUp] = React.useState(false)
        React.useEffect(()=>{
            let pop_status = localStorage.getItem('pop_status');
            if(!pop_status){
                setAgePopUp(true);
                localStorage.setItem('pop_status',1);
            }
        },[])

  onClosedAgePopup = () => {
        setAgePopUp(false)
    }
    
    return(
        <>
            <CatalogVine/>
            <Popular/>
            <Events/>
            <Information/>
            {agePopUp &&(
                <div className="overlay">
                    <AgeConfirm onClosedAgePopup={onClosedAgePopup}/>
                </div>
            )}
        </>
    )
}

export default Home;