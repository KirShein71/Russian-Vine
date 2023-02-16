import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from '../redax/slices/sortSlice'


function Sort() {
    const sort = useSelector(state => state.sort.sort)
    const dispatch = useDispatch()
    const sortList = [
        {name : 'Цена', image : './img/up.png', sortProperty : '-price'},
        {name : 'Цена', image : './img/down.png', sortProperty : 'price'}
    ]
    
    const onClickListItem = (obj) => {
        dispatch(setSort(obj));
    }
    
    return(
        <div className="sort">
            <ul>
                {sortList.map((obj)=>(
                    <li
                        onClick={() => onClickListItem(obj)}
                        className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                        <div className="sort__icon">
                            <img src={obj.image} alt="icon"/>
                        </div>
                        <div className="sort__word">{obj.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sort;