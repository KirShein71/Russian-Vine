import React from "react";
import Carousel from "./Carousel";



function Popular() {



    return(
        <div className="popular">
            <div className="container">
                <h3 className="popular__title">Популярное</h3>
                <div className="popular__content">
                   <Carousel show={4}/>
                </div>
                <button className="popular__button">все вина</button>
            </div>
        </div>
    )
}

export default Popular;