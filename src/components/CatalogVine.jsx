import React from "react";
import CatalogVineCard from "./CatalogVineCard";

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
                <div className="catalogvine__content">
                    {typeVine.map((obj)=>(<CatalogVineCard key={typeVine} {...obj}/>))}
                </div>
            </div>
        </div>
    )
}

export default CatalogVine;