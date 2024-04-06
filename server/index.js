const express = require("express");
const connectToMongo = require("./database/db");
const cors = require("cors");

connectToMongo();

const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// available routes

app.get("/", (req, res) => {
  res.send("Hello From Server Side.");
});

app.use("/auth", require("./routes/authRoute"));
app.use("/api", require("./routes/menuRoute"));
app.use("/api", require("./routes/orderRoute"));

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
