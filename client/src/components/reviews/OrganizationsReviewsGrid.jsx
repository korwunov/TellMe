import React, { useState } from "react";
import api from "../../api"
import OrgReviewComponent from "./OrganizationsReviews";
import classes from "../../styles/reviews.module.css"

const OrganizationsReviews = () => {
    const [reviews] = useState(api.Organizations.fetchAllOrganizations());
    return (
        <main>
            <div className={classes.grid_block}>
                <h1>Все отзывы</h1>
                <div className={classes.grid}>
                    {reviews.map((review) => (
                        <OrgReviewComponent
                            key={review._id}
                            {...review}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default OrganizationsReviews;