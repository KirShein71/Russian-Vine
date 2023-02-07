import React from 'react'
import Cardevent from './CardEvent';
import event from '../event.json'

function Events() {

  return (
    <div className='events'>
        <div className='container'>
            <div className='events__title'>наши мероприятия</div>
            <div className='events__content'>
               {event.map((obj)=>(<Cardevent {...obj}/>))}
            </div>
            <button className='events__button'>подробнее</button>
        </div>
    </div>
  )
}

export default Events;
