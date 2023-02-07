import React from "react";

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
                        <div className="footer__items">Вино</div>
                        <div className="footer__items">Мепрориятия</div>
                    </div>
                    <div className="footer__center">
                        <div className="footer__items">Контакты</div>
                        <div className="footer__items">Отзывы</div>
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