import React from "react";

function Sort() {
    const sort = [
        {name : 'Цена', image : '../../img/up.png', sortProperty : '-price'},
        {name : 'Цена', image : '../../img/down.png', sortProperty : 'price'}
    ]
    const onClickListItem = (obj) => {
        dispatch(setSort(obj));
    }
    return(
        <div className="sort">
            {sort.map((obj, i)=>(
            <div 
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                <div className="sort__icon">
                    <img src={image}/>
                </div>
                <div className="sort__word">{obj.name}</div>
            </div>
            ))}
        </div>
    )
}

export default Sort;