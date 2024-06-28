import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from "./routes/taskRoutes";

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapiDB";
//db connection
mongoose.connect(MONGODB_URI);

// bodyparser
app.use(bodyparser.urlencoded({ extended:true }))
app.use(bodyparser.json());

app.use(cors());

//routes
routes(app);

app.get('/', (req,res)=>
    res.send(`Our application is running on port ${PORT}`)
);

app.listen(PORT, () =>
 console.log(`ToDoApp server is running on port ${PORT} `)
);