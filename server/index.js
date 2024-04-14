const express = require("express");
const connectToMongo = require("./database/db");
const { config } = require("dotenv");
const cors = require("cors");

config({ path: "./env" });

connectToMongo();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    orgin: ["https://book-your-tiffin-orcin.vercel.app"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

// middlewares
app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({ extended: true }));

// available routes

app.get("/", (req, res) => {
  res.send("Hello From Server Side.");
});

app.use("/auth", require("./routes/authRoute"));
app.use("/api", require("./routes/menuRoute"));
app.use("/api", require("./routes/orderRoute"));
app.use("/api", require("./routes/paymentRoute"));

app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
