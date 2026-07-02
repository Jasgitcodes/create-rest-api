import express from "express";
import dataRouter from "./routes/data.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/data", dataRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
