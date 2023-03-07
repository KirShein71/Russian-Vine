import React from "react";

function AgeConfirm({onClosedAgePopup}) {
    
    return(
        <div className="ageconfirm">
            <div className="ageconfirm__content">
                <div className="ageconfirm-header">
                    <div className="ageconfirm-header__icon">
                        <img src="./img/probka.png" alt="probka"/>
                    </div>
                    <div className="ageconfirm-header__text">Сайт содержит информацию только для лиц, достигших совершеннолетнего возраста!</div>
                </div>
                <div className="ageconfirm__description">Продолжая пользоваться сайтом,
                вы подтверждаете, что вам больше 18 лет, и соглашаетесь
                с политикой обработки персональных данных</div>
                <button onClick={onClosedAgePopup} className="ageconfirm__button">мне исполнилось 18 лет</button>
            </div>
        </div>
    )
}

export default AgeConfirm;