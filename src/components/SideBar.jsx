import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

function SideBar(props) {
    return(
        <div className="sidebar">
            <Menu {...props}>
                <Link to="/catalog">
                    <div className="menu-item">
                        Каталог
                    </div>
                </Link>
                <Link to="/fullevents">
                    <div className="menu-item">
                        Мероприятия
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="menu-item" >
                    Контакты
                    </div>
                </Link>
                <Link to="/reviews">
                    <div className="menu-item">
                    Отзывы
                    </div>
                </Link>
            </Menu>
        </div>
    )
}

export default SideBar;