import React from "react";
import classes from "../../styles/reviews.module.css"

const InfoComponent = ({ info }) => {
     //TODO добавить иконку звезды
    return (
        <div className={classes.review_info}>
            <h2 className={classes.review_org_name}>{info.title}</h2>
            <h5 className={classes.review_address}>{info.address}</h5>
            <h3 className={classes.review_rate}>{info.category_name}</h3>
        </div>
    )
}

export default InfoComponent;