import React from "react";
import classes from "../../styles/reviews.module.css"
import BookmarkComponent from "./Bookmark"

const UserReviewComponent = React.memo(function ReviewComponent(props) {
    return (
        <div className={classes.review_item}>

            <div className={classes.review_last_review_block}>
                <h3>{props.organization_name}</h3>
                <h4>{props.address} </h4>
                <h4>{props.rate}</h4>
                <h5>{props.text}</h5>
            </div>
            <div>
                <BookmarkComponent
                    status={props.bookmark}
                />
            </div>
        </div>
    )
});

export default UserReviewComponent;