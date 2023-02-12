import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <Link to="/">
                        <div className="header__title">Русское<span>Вино</span></div>
                    </Link>
                    <Link to="/catalog">
                        <div className="header__item">Каталог</div>
                    </Link>
                    <Link to="/fullevents">
                        <div className="header__item">Мероприятия</div>
                    </Link>
                    <Link to="/contact">
                        <div className="header__item">Контакты</div>
                    </Link>
                    <div className="header__cart">
                        <img src="./img/cart.svg" alt="cart__icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;