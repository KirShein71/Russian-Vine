import React from "react";

function CatalogVineCard({title, imgUrl}) {

    const [isHovering, setIsHovering] = React.useState(false)
    const HadleMouseOver = () => {
        setIsHovering(true)
    }
    const HadleMouseOut = () => {
        setIsHovering(false)
    }

    return(
        <div onMouseOver={HadleMouseOver} onMouseOut={HadleMouseOut} className="catalogvinecard">
            <div className="catalogvinecard__content">
            {isHovering && (<div  className="catalogvinecard__image">
                    <img width={234} height={347} src={imgUrl} alt="img__wine"/>
                </div>)}
                <h2  className="catalogvinecard__title">{title}</h2>
            </div>
        </div>
    )
}

export default CatalogVineCard;