import express from "express";
import dotenv from "dotenv";
import usersRoutes from './routes/users.js';
import connectDB from './db/connect.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Nothing here, go to /users');
});

const start = async (req, res) => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`));
    }catch(err){
        console.log(err);
    }
}

start();

