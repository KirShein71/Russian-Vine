import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";







function Popular() {
    

    return(
        <div className="popular">
            <div className="container">
                <h3 className="popular__title">Популярное</h3>
                <div className="popular__content">
                   <Carousel show={3} />
                </div>
                
                    <button className="popular__button">
                    <Link to="/catalog">
                        <p>все вина</p>
                    </Link>
                    </button>
                
            </div>
        </div>
    )
}

export default Popular;