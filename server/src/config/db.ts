import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_URI } = process.env;
const { MONGO_PORT } = process.env;
const { MONGO_DB_NAME } = process.env;



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
};

export default connect;