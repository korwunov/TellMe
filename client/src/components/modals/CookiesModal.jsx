import React from "react";
import { hide } from '../../features/bannerSlice'
import { useSelector, useDispatch } from "react-redux";
import store from "../../store";
import { saveState } from "../../localStorage/stateLoader";
import classes from "../../styles/banner.module.css"

export function CookieBanner() {
    const isShow = useSelector((state) => state.cookieBannerVisible.value);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hide());
        saveState("cookiesBannerState", store.getState())
    }

    // store.subscribe(() => {
    //     stateLoader.saveState(store.getState())
    // });

    return (
        <div className={classes.banner_container}>
            {
                isShow ? <Banner onBannerClose={handleClose}/> : null
            }
        </div>
    )
}

export function Banner ({...props}) {
    
    return (
        <div className={classes.banner_block}>
            <h4>Данный сайт использует технологию Cookies, которая подразумевает сохранение некоторых данных на вашем устройстве</h4>
            <button onClick={() => props.onBannerClose()}>Понятно</button>
        </div>
    )
}