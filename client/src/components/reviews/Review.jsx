import React from "react"
import classes from "../../styles/reviews.module.css"
import BookmarkComponent from "./Bookmark"
import InfoComponent from "./OrganizationInfo"

const ReviewComponent = React.memo(function ReviewComponent(props) {
    const truncate = (text) => {
        return text.length > 20 ? 
            text.substring(0, 17) + "..." :
            text;

    }
    
    return (
        <div className={classes.review_item}>

            <InfoComponent info={props}/>
            <div>
                <h3>{props.owner_name}</h3>
                <h4 className={classes.review_text} >{truncate(props.text)}</h4>
                <h4>{props.rate} </h4>
            </div>
            <div>
                <BookmarkComponent
                    status={props.bookmark}
                />
            </div>
        </div>
    )
});

export default ReviewComponent;