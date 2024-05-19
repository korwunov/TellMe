const url = process.env.REACT_APP_HOST_URL;
//const token = localStorage.getItem("token")

export async function fetchAllCategories() {
    const response = await fetch(url + 'api/categories', {
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
        alert('Не удалось получить все категории ' + res)
    }
}