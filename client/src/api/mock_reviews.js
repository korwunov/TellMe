const Organizations = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        organization_name: "Пятерочка",
        address: "Москва, улица Пушкина, дом колотушкина",
        reviews: [
            {   
                owner_id: "67rdca3eeb7f6fgeed2547857",
                owner_name: "Никита",
                rate: 3.0,
                comment: "Вкусно"
            },
            {   
                owner_id: "67rdca3eeb7f6fhsdfh6534654",
                owner_name: "Анастасия",
                rate: 5.0,
                comment: "Ужасно"
            },
        ],
        rate: 4.0,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgee376h6543",
        organization_name: "МИРЭА",
        address: "Москва, Проспект Вернандского 78",
        reviews: [
            {   
                owner_id: "67rdca3eeb7f6fgeed2547857",
                owner_name: "Дмитрий",
                rate: 4.0,
                comment: "ДУШНО"
            },
            {   
                owner_id: "67rdca3eeb7f6fhsdfh6534654",
                owner_name: "Кепарис",
                rate: 5.0,
                comment: "Можно сходить поисследовать операции"
            },
        ],
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgee376h6543",
        organization_name: "МИРЭА",
        address: "Москва, Проспект Вернандского 78",
        reviews: [
            {   
                owner_id: "67rdca3eeb7f6fgeed2547857",
                owner_name: "Дмитрий",
                rate: 4.0,
                comment: "ДУШНО"
            },
            {   
                owner_id: "67rdca3eeb7f6fhsdfh6534654",
                owner_name: "Кепарис",
                rate: 5.0,
                comment: "Можно сходить поисследовать операции"
            },
        ],
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgee376h6543",
        organization_name: "МИРЭА",
        address: "Москва, Проспект Вернандского 78",
        reviews: [
            {   
                owner_id: "67rdca3eeb7f6fgeed2547857",
                owner_name: "Дмитрий",
                rate: 4.0,
                comment: "ДУШНО"
            },
            {   
                owner_id: "67rdca3eeb7f6fhsdfh6534654",
                owner_name: "Кепарис",
                rate: 5.0,
                comment: "Можно сходить поисследовать операции"
            },
        ],
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgee376h6543",
        organization_name: "МИРЭА",
        address: "Москва, Проспект Вернандского 78",
        reviews: [
            {   
                owner_id: "67rdca3eeb7f6fgeed2547857",
                owner_name: "Дмитрий",
                rate: 4.0,
                comment: "ДУШНО"
            },
            {   
                owner_id: "67rdca3eeb7f6fhsdfh6534654",
                owner_name: "Кепарис",
                rate: 5.0,
                comment: "Можно сходить поисследовать операции"
            },
        ],
        rate: 4.5,
        bookmark: false
    }
]

const userReviews = [
    {
        _id: "67rdca3eeb7f6fgee376h6543",
        organization_name: "МИРЭА",
        address: "Москва, Проспект Вернандского 78",
        rate: 5,
        comment: "TestText"
    },
    {
        _id: "67rdca3eeb7f6fgee3gv7tyv7",
        organization_name: "Звездочка",
        address: "Москва, Проспект Вернандского 67",
        rate: 2,
        comment: "Плохой интернет вокруг"
    },
    {
        _id: "67rdca3eeb7f6fgx4w4668gg",
        organization_name: "Сыто пьяно",
        address: "Москва, Тверская 4",
        rate: 4,
        comment: "пьяно и сыто"
    }
]

export function fetchAllOrganizations() {
    return Organizations;
}

export function fetchAllUserReviews() {
    return userReviews;
}