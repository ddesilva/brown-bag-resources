import express from "express";
import template from "./template";

const app = express();

app.get("/", async (req, res) => {
  const stringifiedMarkup = template("some page title");
  res.send(stringifiedMarkup);
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
