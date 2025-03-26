import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

fetch("https://www.course-api.com/react-useReducer-cart-project")
  .then((res) => res.json())
  .then((data) => console.log(data));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); //morgan and .env
}

app.use(express.json()); //middleware to accept data coming from front end

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", messages: req.body }); //passing message
});

const port = process.env.PORT || 5100; //setting port using env

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

//whenever we using type:module don't forget to add .js when importing a file
//hi this is a new command
