import mongoose from 'mongoose';
import dotenv from 'dotenv';
import user from '../models/user.ts';
import category from '../models/category.ts';

dotenv.config();

const { MONGO_URI } = process.env;
const { MONGO_PORT } = process.env;
const { MONGO_DB_NAME } = process.env;

const initAdmin = async () => {
    const adminUser = await user.find(
        { first_name: 'Admin', last_name: 'Admin', email: 'admin@mail.ru', isAdmin: true }
    );
    
    if (adminUser.length === 0) {
        await user.create({
            first_name: 'Admin',
            last_name: 'Admin',
            email: 'admin@mail.ru',
            password: '$2a$10$9YLRQDWAdXiWsdQrWYvQiekFBjljzgoyeVHnDBWCuTlYixCtYWwoW',
            isAdmin: true
        });
    }
}

const initCategories = async () => {
    const categoriesName = ['Продуктовые магазины', 'Рестораны и кафе', 'Торговые центры', 'Автосервисы', 'Парки', 'Салоны красоты', 'Образовательные учреждения'];
    const categories = await category.find({ category_name: { $in: categoriesName } });
    console.log(categories, categories.length);
    if (categories.length === 0) {
        for (let name of categoriesName) {
            await category.create({
                category_name: name
            }); 
        }
    }
}

const connect = () => {
    mongoose.connect(
        `mongodb://${MONGO_URI}:${MONGO_PORT}/${MONGO_DB_NAME}`,
        {
            directConnection: true,
        }
    ).then(() => {
        console.log('database successfully connected')
    }).catch((error) => {
        console.log('database connection error');
        console.error(error);
    });
    initAdmin();
    initCategories();
};

export default connect;