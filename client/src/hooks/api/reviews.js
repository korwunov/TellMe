const url = process.env.REACT_APP_HOST_URL;


export async function fetchAllReviews() {
    const response = await fetch(url + 'api/reviews', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const res = await response.json();
    if (response.status === 200) {
        return res;
    }
    else {
        alert('Не удалось получить все отзывы ' + res)
    }
    
}

export async function fetchAllUserReviews() {
    const token = localStorage.getItem("token")

    const response = await fetch(url + 'api/reviews/my', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        }
    });
    const res = await response.json();
    if (response.status === 200) {
        return res;
    }
    else {
        alert('Не удалось получить отзывы пользователя ' + res.body)
    }
}

export async function fetchReviewById(id) {
    if (id !== '0') {
        const response = await fetch(url + 'api/reviews/' + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const res = await response.json();
        if (response.status === 200) {
            return res;
        }
        else {
            alert('Не удалось получить отзывы пользователя ' + res.body)
        }
    }
    else {
        const schema = {
            _id: "",
            title: "",
            address: "",
            text: "",
            rate: "",
            owner: "",
            category: ""
        }
        return schema;
    }
    
}

export async function addReview(reviewObj) {
    const token = localStorage.getItem("token")
    if (
        reviewObj.title !== undefined &&
        reviewObj.address !== undefined && 
        reviewObj.text !== undefined &&
        reviewObj.rate !== undefined && 
        reviewObj.category !== undefined
    ) {
        const response = await fetch(url + 'api/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": token
            },
            body: JSON.stringify(reviewObj)
        });
        const res = await response.json();
        if (response.status === 200) {
            return true;
        } else {
            alert('Не удалось отправить отзыв ' + res.body)
            return false;
        }
    } else {
        alert('Отсутствуют обязательыне поля с информацией об отзыве');
        return false;
    }
}

export async function updateReview(reviewObj) {
    const token = localStorage.getItem("token")
    if (
        reviewObj._id !== undefined &&
        reviewObj.title !== undefined &&
        reviewObj.address !== undefined && 
        reviewObj.text !== undefined &&
        reviewObj.rate !== undefined && 
        reviewObj.category !== undefined &&
        reviewObj.owner !== undefined
    ) {
        const response = await fetch(url + 'api/reviews/update', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": token
            },
            body: JSON.stringify(reviewObj)
        });
        const res = await response.json();
        if (response.status === 200) {
            return true;
        } else {
            alert('Не удалось отправить отзыв ' + res.body)
            return false;
        }
    } else {
        alert('Отсутствуют обязательыне поля с информацией об отзыве')
        return false;
    }
}

export async function deleteReview(id) {
    const token = localStorage.getItem("token")
    if (id !== undefined) {
        const response = await fetch(url + 'api/reviews', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": token
            },
            body: JSON.stringify({ "id": id })
        });
        const res = await response.json();
        if (response.status === 200) {
            return true;
        } else {
            alert('Не удалось удалить отзыв ' + res.body)
            return false;
        }
    } else {
        alert('Отсутствуют поле с ID')
        return false;
    }
}