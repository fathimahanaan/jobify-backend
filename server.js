import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";

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
// }

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "googl", position: "backend-end" },
  { id: nanoid(), company: "amazon", position: "front -end" },
];

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

// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

//CREATE JOB
app.get("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "please provide company and position" });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
});

//GET SINGLE JOB
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
});

const port = process.env.PORT || 5100; //setting port using env

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

//whenever we using type:module don't forget to add .js when importing a file
//hi this is a new command
//hi this another commanf
//my git hub code i snot working
