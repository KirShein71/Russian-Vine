import React from 'react'
import { Link } from 'react-router-dom';
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
            <Link to="/fullevents">
                <button className='events__button'>подробнее</button>
            </Link>
        </div>
    </div>
  )
}

export default Events;
