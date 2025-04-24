import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

import { validateTest } from "./middleware/validationMiddleware.js";

//routes
import jobRouter from "./routes/jobRouter.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

// fetch("https://www.course-api.com/react-useReducer-cart-project")
//   .then((res) => res.json())
//   .then((data) => console.log(data)); this code used for fetching data or u can use next line of code

// try {
//   const response = await fetch(
//     "https://www.course-api.com/react-useReducer-cart-project"
//   );
//   const cartData = await response.json();
//   console.log(cartData);
// } catch (error) {
//   console.log(error);
//  }
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); //morgan and .env
}

app.use(express.json()); //middleware to accept data coming from front end

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.post("/", (req, res) => {
//   console.log(req);
//   res.json({ message: "data received", messages: req.body }); //passing message
// });

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

// Catches any request that didn’t match a previous route.
// The * matches all routes and all HTTP methods (GET, POST, etc).
// It’s a catch-all for 404 Not Found.

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: `something went wrong` });
});

// Catches any errors thrown inside your routes or middleware.
// The special part is the function signature: it has four arguments — err, req, res, next. That tells Express it's an error handler.
// It's for handling 500 Internal Server Errors, or any thrown error.

const port = process.env.PORT || 5100; //setting port using env

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("✅ MongoDB connected");
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
} catch (error) {
  console.log("❌ MongoDB connection error:", error);
  process.exit(1);
}

//whenever we using type:module don't forget to add .js when importing a file
