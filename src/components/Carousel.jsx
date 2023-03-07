import React from "react";
import PopularCard from "./PopularCard";
import slider from "../slider.json"

function Carousel({show}) {

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [length, setLength] = React.useState(slider.length)
    const [touchPosition, setTouchPosition] = React.useState(null)

    React.useEffect(()=>{
        setLength(length)
    }, [slider])
    
    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition
        if(touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            next()
        }
        if (diff < -5) {
            prev()
        }
        setTouchPosition(null)
    }

    return(
        <div className="carousel">
            <div className="carousel__container">
                <div className="carousel__wrapper">
                {currentIndex > 0 &&
                <button button onClick={prev} className="left-arrow">&lt;</button>}
                    <div className="carousel-content__wrapper" onTouchStart={handleTouchStart} 
                    onTouchMove={handleTouchMove}>
                        <div  className={`carousel__content show-${show}`} 
                            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                            {slider.map((obj)=>(<PopularCard key={slider.id} {...obj}/>))}
                        </div>
                    </div>
                    {currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">&gt;</button>}
                </div>
            </div>
        </div>
    )
}

export default Carousel;