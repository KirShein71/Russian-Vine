import React from "react";


function Winecard({title, price, imageUrl}) {
    return(
        <div className="winecard">
            <div className="winecard__content">
                <div className="wibecrad__img">
                    <img width={119} height={289} src={imageUrl} alt="wine"/>
                </div>
                <div className="winecard__title">{title}</div>
                <div className="winecard__price">{price} ₽</div>
            </div>
        </div>
    )
}

export default Winecard;