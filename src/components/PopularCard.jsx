import React from "react";

function PopularCard({title, price, imageUrl}) {
    return(
        <div className="popularcard">
            <div className="popularcard__content">
                <div className="popularcard__image">
                    <img height={272} width={70} src={imageUrl} alt="img__wine"/>
                </div>
                <div className="popularcard__title">{title}</div>
                <div className="popularcard__price">{price} ₽</div>
            </div>
        </div>
    )
}

export default PopularCard;