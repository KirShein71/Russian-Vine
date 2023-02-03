import React from "react";

function PopularCard({title, price, imageUrl}) {
    return(
        <div className="popularcard">
            <div className="popularcard__content">
                <img height={200} src={imageUrl} alt="img__wine"/>
                <div className="popularcard__title">{title}</div>
                <div className="popularcard__bottom">
                    <div className="popularcard__price">{price} ₽</div>
                    <button className="popularcard__button">в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default PopularCard;