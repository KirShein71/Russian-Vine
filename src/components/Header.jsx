import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__title">Русское<span>Вино</span></div>
                    <div className="header__item">Каталог</div>
                    <div className="header__item">Мероприятия</div>
                    <div className="header__item">Контакты</div>
                    <div className="header__cart">
                        <img src="./img/cart.svg" alt="cart__icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;