import React from "react";
import Ymap from "../components/Ymap";


function Contact() {
    return(
        <div className="contact">
            <div className="container">
                <div className="contact__title">Как нас найти</div>
                <div className="contact__map">
                    <Ymap/>
                </div>
                <div className="contact__bottom">
                    <div className="contact__subtitle">Мы находимся по адресу:</div>
                    <div className="contact__address">Санкт-Петербург, 9-линия Васильевского острова, д 36</div>
                    <div className="contact__subtitle">Звоните</div>
                    <a className="contact__telephone" href="tel:+7952381312">8-952-381-13-12</a>
                    <div className="contact__subtitle">Или пишите</div>
                    <a className="contact__telegramm" href="@marystufff">@marystufff</a>
                </div>
            </div>
        </div>
        
    )
}

export default Contact;