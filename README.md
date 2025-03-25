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
