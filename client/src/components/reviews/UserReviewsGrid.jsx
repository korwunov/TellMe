import React, { useState, useEffect } from "react";
import api from "../../hooks/api"
import ReviewComponent from "./Review";
import classes from "../../styles/reviews.module.css"

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        api.reviews.fetchAllUserReviews()
        .then((res) => {
            setReviews(res);
        })
    }, []);
    
    return (
        <main>
            <div className={classes.grid_block}>
                <h1>Ваши отзывы</h1>
                <div className={classes.grid}>
                    {reviews.map((review) => (
                        <ReviewComponent
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