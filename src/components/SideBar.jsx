import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

function SideBar(props, {onClosedMenu, onOpenMenu}) {
    const [menuOpenState, setMenuOpenState] = React.useState(true)
    onClosedMenu = () => {
        setMenuOpenState(!menuOpenState)
    }
    onOpenMenu = () => {
        setMenuOpenState(true)
    }
   
    return(
        <div className="sidebar">
            <div onClick={onOpenMenu} className="bm-burger-button"></div>
            <Menu {...props}>
                <Link to="/catalog">
                    <div onClick={onClosedMenu} className="menu-item">
                        Каталог
                    </div>
                </Link>
                <Link to="/fullevents">
                    <div onClick={onClosedMenu} className="menu-item">
                        Мероприятия
                    </div>
                </Link>
                <Link to="/contact">
                    <div onClick={onClosedMenu} className="menu-item" >
                    Контакты
                    </div>
                </Link>
                <Link to="/reviews">
                    <div onClick={onClosedMenu} className="menu-item">
                    Отзывы
                    </div>
                </Link>
            </Menu>
        </div>
    )
}

export default SideBar;