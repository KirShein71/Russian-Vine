import React from "react";
import CatalogVineCard from "./CatalogVineCard";
import { Link } from "react-router-dom";

function CatalogVine() {

    const typeVine = [
        {"title": "Красное", "imgUrl": "./img/redvine.jpg"},
        {"title": "Белое", "imgUrl": "./img/whitevine.jpg"},
        {"title": "Розовое", "imgUrl": "./img/rosevine.jpg"},
        {"title": "Оранжевое","imgUrl":"./img/orangevine.png"},
        {"title": "Игристое", "imgUrl":"./img/igristoe.png"},
    ]

    return(
        <div className="catalogvine">
            <div className="container">
                <Link to="/catalog">
                <div className="catalogvine__content">
                    {typeVine.map((obj)=>(<CatalogVineCard key={typeVine} {...obj}/>))}
                </div>
                </Link>
            </div>
        </div>
    )
}

export default CatalogVine;