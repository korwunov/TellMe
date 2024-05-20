import express from 'express';
import connect from './config/db.ts';
import dotenv from 'dotenv';
import { usersRouter } from './routes/users.route.ts'
import { categoriesRouter } from './routes/categories.route.ts';
import { reviewsRouter } from './routes/reviews.route.ts'

const app = express();
connect();
dotenv.config()

const port = process.env.PORT || '8000'

app.use(express.json());

app.get('/api/', (req, res) => {
    res.json({'message': 'ok'})
});

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    res.header('Access-Control-Allow-Credentials', 'true');
    return next();
});

app.use('/api/users', usersRouter);

app.use('/api/categories', categoriesRouter);

app.use('/api/reviews', reviewsRouter);

/* Error handler middleware */
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     console.error(err.message, err.stack);
//     res.status(statusCode).json({'message': err.message});
    
//     return;
// });
  
app.listen(8000, () => {
    console.log(`tellme server listening at ${port}`);
});