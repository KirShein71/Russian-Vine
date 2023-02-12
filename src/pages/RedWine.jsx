import axios from "axios";
import React from "react";
import Winecard from "../components/Winecard";



function RedWine() {
    const [redWine, setRedWine] = React.useState([])
    
    

    React.useEffect(()=>{
         
        async function fetcRedWine() {
            try {
                const {data} = await axios.get(`https://63e38111c919fe386c07dffa.mockapi.io/items/`);
                setRedWine(data)
            } catch {
                alert('Техническая ошибка')
            }
        }
        fetcRedWine()
    },[]);
    
    return(
        <div className="redwine">
            <div className="container">
                <div className="redwine__content">
                    {redWine.map((obj)=>(<Winecard {...obj}/>))}
                    
                </div>
            </div>
        </div>
    )
}

export default RedWine;