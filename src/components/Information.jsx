import React from "react";

function Information() {
    return(
        <div className="information">
            <div className="container">
                <div className="information__content">
                    <div className="information-event">
                        <div className="information-event__title">События</div>
                        <div className="information-event__image">
                            <img width={500} height={300} src="./img/qwiz1102.jpg" alt="img__event"/>
                        </div>
                    </div>
                    <div className="information-social">
                        <div className="information-social__title">Мы в социальных сетях</div>
                        <div className="information-social__content">
                            <div className="information-social__telegramm">
                                <img src="./img/telegramm.png" alt="telegramm"/>
                                <a href="https://t.me/russianvinespb" className="information-social__subtitle">Telegramm</a>
                            </div>
                            <div className="information-social__line"></div>
                            <div className="information-social__vk">
                                <img src="./img/vk.png" alt="vkontakte"/>
                                <a href="https://vk.com/club211146379" className="information-social__subtitle">VKontakte</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;