import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).end("ok");
});

module.exports = app;
