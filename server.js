import * as dotenv from "dotenv";
import express from "express";
const app = express();
import morgan from "morgan";
dotenv.config();

// app.use(morgan("dev"));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//fetch is a promise->use then
fetch("https://www.course-api.com/react-useReducer-cart-project")
  .then((res) => res.json())
  .then((data) => console.log(data));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on PORT ${port}...`);
});
