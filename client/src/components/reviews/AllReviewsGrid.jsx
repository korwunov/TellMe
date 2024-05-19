import React, { useState, useEffect } from "react";
import api from "../../hooks/api"
import ReviewComponent from "./Review";
import classes from "../../styles/reviews.module.css"

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        api.reviews.fetchAllReviews()
        .then((res) => {
            setReviews(res);
        })
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:8000/api/reviews')
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((data) => {
    //         console.log(data);
            
    //       });
    //   }, []);
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