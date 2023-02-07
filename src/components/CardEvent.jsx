import React from "react";

function Cardevent({imgUrl, title, description}) {
    const [isHovering, setIsHovering] = React.useState(false)
    const [guidance, setGuidance] = React.useState(true)
    
    const HadleMouseOver = () => {
        setIsHovering(true);
        setGuidance(false)
        
    }
    const HadleMouseOut = () => {
        setIsHovering(false);
        setGuidance(true)
    }
    return(
        <div onMouseOver={HadleMouseOver} onMouseOut={HadleMouseOut} className='events__card'>
            {guidance && (
            <><div className='events__img'>
                    <img src={imgUrl} alt="foto__event"/>
                </div><div className='events__text'>{title}</div></>)}
            {isHovering && (
            <div className="events__description">{description}</div>)}
        </div>
    )
}

export default Cardevent;