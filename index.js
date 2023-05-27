const express = require("express");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const app = express();

connectDB();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api/h1", require("./routes/Sign"));

app.listen(PORT, () => {
  console.log(`Listening to Port : ${PORT}`);
});
