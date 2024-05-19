import React from "react";
import api from "../../hooks/api"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import classes from "../../styles/reviews.module.css"
import { useAuth } from "../../hooks/auth/AuthProvider";
//import Dropdown from "../DropdownComponent";

const ReviewPage = ({ ...props }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const authContext = useAuth();

    //const [isRateDropdownOpen, setIsRateDropdownOpen] = useState(false);
    //const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

    const [review, setReview] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.reviews.fetchReviewById(id)
        .then((res) => {
            setReview(res)
        })
    }, [id]);

    useEffect(() => {
        api.categories.fetchAllCategories()
        .then((res) => {
            setCategories(res)
        })
    }, []);

    const handleSaveClick = async () => {
        if (review._id === "" && review.owner === "") {
            if (await api.reviews.addReview(review)) {
                return navigate('/my_reviews');
            }
        }
        else if (review._id !== "" && review.owner !== "") {
            if (await api.reviews.updateReview(review)) {
                return navigate('/my_reviews');
            }
        }
        
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'category') { 
            const cat = categories.find((obj) => {
                return obj._id === value 
            });
            review.category_name = cat.category_name;
        }

        setReview((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    return (
        <main>
            <div className={classes.grid_block}>
                <h1>Отзыв {review.title}</h1>
                <div className={classes.review_page_block}>
                    <div>
                        <label>Заголовок</label>
                        <input id='title' placeholder='Заголовок' name="title" onChange={handleInput} value={review.title} />
                    </div>
                    <div>
                        <label>Адрес</label>
                        <input id='address' placeholder='Адрес' name="address" onChange={handleInput} value={review.address}/>
                    </div>
                    <div>
                        <label>Текст отзыва</label>
                        <textarea id='text' placeholder='Текст отзыва' name="text" onChange={handleInput} value={review.text}/>
                    </div>
                    <div>
                        <label>Оценка</label>
                        <input id='rate' placeholder='Оценка' name="rate" onChange={handleInput} value={review.rate}/>
                    </div>
                    <div>
                        <label>Категория</label>
                        <div>
                            <input id='category' placeholder='Категория' name="category" onChange={handleInput} value={review.category_name}/>
                            <div>
                                {categories.map((category) => (
                                    <button name='category' key={category._id} value={category._id} onClick={handleInput}>{category.category_name}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {
                        review._id === "" ? 
                            <button onClick={handleSaveClick}>Сохранить отзыв</button> :
                            authContext.user._id === review.owner ? <button onClick={handleSaveClick}>Сохранить отзыв</button> : null
                    }
                    
                </div>
            </div>
        </main>
    )
}

export default ReviewPage;