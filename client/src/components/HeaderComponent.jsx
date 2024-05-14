import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ReviewModalComponent from "./modals/ReviewModal";
import classes from "../styles/header.module.css"
import { useAuth } from "../hooks/auth/AuthProvider";

const Logo = () => {
    return (
       <img src='logo48.png' alt="Logo"></img>
    )
}

const Navigation = ({isAuthorized}) => {
    const [showReviewModal, setShowReviewModal] = useState(false);
    const user = useAuth(); 
    console.log(user);
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/my_reviews">Мои отзывы</Link></li>
                    <li>
                        {
                            user?.user ? 
                            <Link to="/profile">{user.user.first_name}</Link> : 
                            <Link to="/login">Вход или регистрация</Link>
                        }
                    </li>
                    <button onClick={() => setShowReviewModal(true)}>Написать отзыв</button>
                    <ReviewModalComponent show={showReviewModal} close={() => setShowReviewModal(false)} />
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