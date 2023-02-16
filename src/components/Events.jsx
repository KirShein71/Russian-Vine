import React from 'react'
import Cardevent from './CardEvent';
import event from '../event.json'
import Form from './Form';


function Events({onClickButton}) {
    const [openModul, setOpenModul] = React.useState(false)
    onClickButton = () => {
        setOpenModul(true)
    }

  return (
    <div className='events'>
        <div className='container'>
            <div className='events__title'>наши мероприятия</div>
            <div className='events__content'>
               {event.map((obj)=>(<Cardevent {...obj}/>))}
            </div>
                <button onClick={onClickButton} className='events__button'>Оставить заявку</button>
                {openModul && (
                <div className="overlay">
                    <div onClick={()=>setOpenModul(false)} className="closed">
                        <img src="img/closed.png" alt="closed"/>
                    </div>
                    <Form/>
                </div>
                )}
        </div>
    </div>
  )
}

export default Events;
