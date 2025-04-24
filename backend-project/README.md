//npm init -y
//npm install
//change type to module
//create .gitignore file
//copy things from existing file
//install express
//run file by node filename.js

or install nodemon , under script in package json
"dev":"nodemon server.js"

creaitng app:

import express from "express";
const app = express();

app.get("/", (req, res) => {
res.send("hello world");
});

app.listen(5100, () => {
console.log("server running..");
});

sending requesting in thunder client
get http://localhost:5100/
it will show hello world

creating a middleware
import express from "express";
const app = express();

app.use(express.json()); //middleware to accept data coming from front end

app.get("/", (req, res) => {
res.send("hello world");
});

app.post("/", (req, res) => {
console.log(req);
res.json({ message: "data received", messages: req.body }); //passing message
});

app.listen(5100, () => {
console.log("server running..");
});

passing request to thunder client:

take body send messsage as json
{
"message":"hello"
}

//create a file named .env
import \* as dotenv from "dotenv"; add code

add .env to the gitignore file

add this to .env file
NODE_ENV=development
PORT=5100

code server.js:
import express from "express";
import morgan from "morgan";
import \* as dotenv from "dotenv";

const app = express();

if (process.env.NODE_ENV === "development") {
app.use(morgan("dev")); //morgan and .env
}

app.use(morgan("dev"));
app.use(express.json()); //middleware to accept data coming from front end

app.get("/", (req, res) => {
res.send("hello world");
});

app.post("/", (req, res) => {
console.log(req);
res.json({ message: "data received", messages: req.body }); //passing message
});

const port = process.env.PORT || 5100

app.listen(port, () => {
console.log(`server running on PORT ${port}`);
});

fetch("https://www.course-api.com/react-useReducer-cart-project")
.then((res) => res.json())
.then((data) => console.log(data)); //fetach data

//whenever we using type:module don't forget to add .js when importing a file

app.use((err, req, res, next) => {
console.log(err);
res.status(500).json({ msg: `something went wrong` });
});
Catches any errors thrown inside your routes or middleware.

The special part is the function signature: it has four arguments — err, req, res, next. That tells Express it's an error handler.

It's for handling 500 Internal Server Errors, or any thrown error.

app.use("\*", (req, res) => {
res.status(404).json({ msg: "not found" });
});

Catches any request that didn’t match a previous route.

The \* matches all routes and all HTTP methods (GET, POST, etc).

It’s a catch-all for 404 Not Found.

//dont forget to install mongoose npm i mongoose

install mongoose
conenct in env
import in server
import mongoose from "mongoose";
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

create model

//async-errors - used to remove try catch
create custom error
create middleware for error
create validation middleware where you to have to import validateion, body
