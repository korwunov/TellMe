import React from "react"
import classes from "../../styles/reviews.module.css"
import BookmarkComponent from "./Bookmark"
import InfoComponent from "./OrganizationInfo"

const ReviewComponent = (props) => {
    return (
        <div className={classes.review_item}>

            <InfoComponent info={props}/>
            <div className={classes.review_last_review_block}>
                <h3>{props.reviews[0].owner_name}</h3>
                <h4>{props.reviews[0].rate} </h4>
            </div>
            <div>
                <BookmarkComponent
                    status={props.bookmark}
                />
            </div>
        </div>
    )
}

export default ReviewComponent;