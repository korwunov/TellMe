const Reviews = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        title: "Пятерочка",
        owner_name: "Никитий",
        owner_id: "67rdca3eeb7f6fgx4w4668gg",
        address: "Москва, улица Пушкина, дом колотушкина",
        text: "Вкусно",
        rate: 4,
        category_name: "Магазины",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgee376h6543",
        title: "МИРЭА",
        owner_name: "Димитро",
        owner_id: "67rdca3eeb7f6fgx4w4668gg",
        address: "Москва, Проспект Вернандского 78",
        text: "Душно",
        rate: 4,
        category_name: "Учебные заведения",
        bookmark: false
    }
]

const UserReviews = [
    {
        _id: "67rdca3eeb7f6fgee376h6543",
        title: "МИРЭА",
        owner_name: "Димитро",
        owner_id: "67rdca3eeb7f6fgx4w4668gg",
        address: "Москва, Проспект Вернандского 78",
        rate: 5,
        category_name: "Учебные заведения",
        text: "TestText"
    },
    {
        _id: "67rdca3eeb7f6fgee3gv7tyv7",
        title: "Звездочка",
        owner_name: "Димитро",
        owner_id: "67rdca3eeb7f6fgx4w4668gg",
        address: "Москва, Проспект Вернандского 67",
        rate: 2,
        category_name: "Торговые центры",
        text: "Плохой интернет вокруг"
    },
    {
        _id: "67rdca3eeb7f6fgx4w4668gg",
        title: "Сыто пьяно",
        owner_name: "Димитро",
        owner_id: "67rdca3eeb7f6fgx4w4668gg",
        address: "Москва, Тверская 4",
        rate: 4,
        category_name: "Рестораны, кафе",
        text: "пьяно и сыто"
    }
]

export function fetchAllReviews() {
    return Reviews;
}

export function fetchAllUserReviews() {
    return UserReviews;
}