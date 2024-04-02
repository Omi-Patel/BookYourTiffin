const express = require("express");
const connectToMongo = require("./database/db");

connectToMongo();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Server Side.");
});

app.use("/auth", require("./routes/authRoute"));

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
