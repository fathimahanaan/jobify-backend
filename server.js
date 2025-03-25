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

//whenever we using type:module don't forget to add .js when importing a file
