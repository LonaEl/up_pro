import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config();
import errorHandler from "./middleware/error.js";
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import claimRouter from "./routes/claim.js";
import authRoute from "./routes/auth.js";
import privateRoute from "./routes/private.js"

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


//first parameter is the starting path in the backend e.g localhost:5000/posts
//Connecting routes
app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use("/claim", claimRouter);
app.use("/api/auth", authRoute);
app.use("/api/private", privateRoute);

const CONNECTION_URL = encodeURI(process.env.DATABASE_CONNECTION);


app.get("/", (req, res, next) => {
  res.send("Api running");
});


process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});

/* 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is active on port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
 */
//mongoose.set('useFindAndModify', false);

//import dotenv from "dotenv";
//dotenv.config();

//config({ path: "./config.env" });
//import express from "express";
//const app = express();
import connectDB from "./config/db.js";

connectDB();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api running");
});


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
