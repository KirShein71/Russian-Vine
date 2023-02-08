import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";



function Popular() {
    return(
        <div className="popular">
            <div className="container">
                <h3 className="popular__title">Популярное</h3>
                <div className="popular__content">
                   <Carousel show={4}/>
                </div>
                <Link to="/catalog">
                    <button className="popular__button">все вина</button>
                </Link>
            </div>
        </div>
    )
}

export default Popular;