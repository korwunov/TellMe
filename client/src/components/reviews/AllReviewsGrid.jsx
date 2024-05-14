import React, { useState } from "react";
import api from "../../hooks/api"
import ReviewComponent from "./Review";
import classes from "../../styles/reviews.module.css"

const AllReviews = () => {
    const [reviews] = useState(api.Organizations.fetchAllOrganizations());
    return (
        <>
            <main>
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
            </main>
        </>
    )
}

export default AllReviews;