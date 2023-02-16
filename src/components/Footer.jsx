import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__right">
                        <div className="footer__title">Русское<span>Вино</span></div>
                        <div className="footer__square">
                            <div className="footer__number">+18</div>
                        </div>
                    </div>
                    <div className="footer__center">
                        <Link to="/catalog">
                            <div className="footer__items">Вино</div>
                        </Link>
                        <Link to="/fullevents">
                        <div className="footer__items">Мепрориятия</div>
                        </Link>
                    </div>
                    <div className="footer__center">
                        <Link to="/contact">
                            <div className="footer__items">Контакты</div>
                        </Link>
                        <Link to="/reviews">
                        <div className="footer__items">Отзывы</div>
                        </Link>
                    </div>
                    <div className="footer__left">
                        <div className="footer__subtitle">Мы в социальных сетях</div>
                        <div className="footer__social">
                            <a href="https://t.me/russianvinespb"><img src="./img/telegramm.png" alt="telegramm" /></a>
                            <a href="https://vk.com/club211146379"><img src="./img/vk.png" alt="vk"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;