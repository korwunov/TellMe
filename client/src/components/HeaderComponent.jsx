import React from "react";
import classes from "../styles/header.module.css"

const Logo = () => {
    return (
       <img src='logo48.png' alt="Logo"></img>
    )
}
//TODO routing 
//TODO добавить анимацию (увеличения например) при наведении на название раздела
const Navigation = ({isAuthorized}) => {

    return (
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Мои отзывы</a></li>
            <li><a href="#">Добавить отзыв</a></li>
            <li>
                {
                    isAuthorized ? 
                    <a href="#">Мой профиль</a> : 
                    <a href="#">Войти или зарегистрироваться</a>
                }
            </li>
        </ul>
    )
}

const Header = () => {
    return (
        <header className={classes.header}>
            <Logo src="logo96.png"/>
            <Navigation className={classes.navList} isAuthorized={true}/>
      </header>
    )
}

export default Header;