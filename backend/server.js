import  express  from 'express';
import  dotenv from 'dotenv';
import connectDb from './config/db.js'
dotenv.config();
import {notFound,errorHandler} from "./middleware/errorMiddleware.js";
import cookieParser from 'cookie-parser';

connectDb();

const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())
app.use("/api/users",userRoutes);
app.get("/",(req,res)=>res.send("Server is ready"))

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server stared on port ${port}`))

