import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import routerBook from './routers/book.router';
import routerUser from './routers/user.router';
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
app.use('/api',routerBook)
app.use('/api',routerUser)
// connnect database
mongoose.connect('mongodb://0.0.0.0/baithi')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})