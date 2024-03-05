import React, { useState } from "react";
import api from "../../api"
import ReviewComponent from "./GridReview";
import classes from "../../styles/reviews.module.css"

const Reviews = () => {
    const [reviews] = useState(api.reviews.fetchAll());
    return (
        <div className={classes.grid_block}>
            <h1>Все отзывы</h1>
            <div className={classes.grid}>
                {reviews.map((review) => (
                    <ReviewComponent
                        key={review._id}
                        {...review}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default Reviews;