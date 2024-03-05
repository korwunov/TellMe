import React from "react";


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

export default Navigation;