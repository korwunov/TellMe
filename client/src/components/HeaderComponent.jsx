import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ReviewModalComponent from "./modals/ReviewModal";
import classes from "../styles/header.module.css"

const Logo = () => {
    return (
       <img src='logo48.png' alt="Logo"></img>
    )
}
//TODO routing 
//TODO добавить анимацию (увеличения например) при наведении на название раздела
const Navigation = ({isAuthorized}) => {
    const [showReviewModal, setShowReviewModal] = useState(false);
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/my_reviews">Мои отзывы</Link></li>
                    <button onClick={() => setShowReviewModal(true)}>Написать отзыв</button>
                    <ReviewModalComponent show={showReviewModal} close={() => setShowReviewModal(false)} />
                    <li>
                        {
                            isAuthorized ? 
                            <Link to="/profile">Мой профиль</Link> : 
                            <Link to="/login">Войти или зарегистрироваться</Link>
                        }
                    </li>
                </ul>
            </nav>
            
        </>
    )
}

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <Logo src="logo96.png"/>
                <Navigation className={classes.navList} isAuthorized={false}/>
            </header>
            <Outlet/>
        </>
    )
}

export default Header;