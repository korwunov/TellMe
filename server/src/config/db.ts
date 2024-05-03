import mongoose from 'mongoose';
const { MONGO_URI } = process.env;

const connect = () => {
    mongoose.connect(
        MONGO_URI
    ).then(() => {
        console.log('database successfully connected')
    }).catch((error) => {
        console.log('database connection error');
        console.error(error);
    });
};

export default connect;