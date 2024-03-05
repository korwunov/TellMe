import React from "react";
import classes from "../../styles/reviews.module.css"

const InfoComponent = ({ info }) => {
    return (
        <div className={classes.review_info}>
            <h2 className={classes.review_org_name}>{info.organization_name}</h2>
            <h5 className={classes.review_address}>{info.address}</h5>
            <div className={classes.review_rate}>{`${info.rate} /5`}</div>
        </div>
    )
}

export default InfoComponent;