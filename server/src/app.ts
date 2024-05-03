import express from 'express';
import connect from './config/db';
import dotenv from 'dotenv';
import { routes } from './routes/index.ts'

const app = express();
dotenv.config()

const port = process.env.PORT || '8080'

app.use(express.json());

app.get('/', (req, res) => {
    res.json({'message': 'ok'})
});

app.use('/users', routes);

/* Error handler middleware */
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     console.error(err.message, err.stack);
//     res.status(statusCode).json({'message': err.message});
    
//     return;
// });
  
app.listen(8080, () => {
    console.log(`Example app listening at ${port}`)
});