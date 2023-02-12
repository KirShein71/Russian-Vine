import React from "react";
import Ymap from "../components/Ymap";


function Contact() {
    return(
        <div className="contact">
            <div className="container">
                <div className="contact__title">Как нас найти</div>
                <Ymap/>
                
                <a href="tel:+7952381312">8-952-381-13-12</a>
                <div className="contact__chat">Или пишите</div>
                <a href="@marystufff">@marystufff</a>
            </div>
        </div>
        
    )
}

export default Contact;