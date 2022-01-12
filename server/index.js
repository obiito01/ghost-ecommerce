const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./connection");
const productRoute = require("./routes/products");
const paymentRoute = require("./routes/payments");
const cors = require("cors");
//middleware
app.use(express.json());
app.use(cors());

//route
app.use("/api/products", productRoute);
app.use("/api/payments", paymentRoute);

const startServer = async () => {
  await connectDb();
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on PORT ${process.env.PORT}...`);
  });
};

startServer();
