import React from "react";
import axios from "axios";
import Winecard from '../components/Winecard'


function Catalog() {

    const [items, setItems] = React.useState([])

    React.useEffect(()=>{
        const axiosData = async ()=>{
            try {
                const res = await axios.get('https://63e38111c919fe386c07dffa.mockapi.io/items')
                    setItems(res.data)
            } catch {
                alert('error')
            }
        }
            axiosData()
    }, [])

    return(
        <div className="catalog">
            <div className="container">
                <h3 className="catalog__title">Все вина</h3>
                <div className="catalog__content">
                    {items.map((obj)=>(<Winecard key={obj.id} {...obj}/>))}
                </div>
            </div>
        </div>
    )
}

export default Catalog;