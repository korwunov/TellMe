import React, { useState } from "react";
import api from "../../api"
import UserReviewComponent from "./UserReview";
import classes from "../../styles/reviews.module.css"

const UserReviews = () => {
    const [reviews] = useState(api.Organizations.fetchAllUserReviews());
    return (
        <main>
            <div className={classes.grid_block}>
                <h1>Ваши отзывы</h1>
                <div className={classes.grid}>
                    {reviews.map((review) => (
                        <UserReviewComponent
                            key={review._id}
                            {...review}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default UserReviews;