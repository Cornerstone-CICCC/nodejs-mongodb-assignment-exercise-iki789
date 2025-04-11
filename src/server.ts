import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/product.route";

dotenv.config();

// Create server
const app = express();

// Middleware
app.use(express.json());

app.use("/products", productRouter);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

(async function () {
  await mongoose
    .connect(MONGODB_URI, { dbName: "store" })
    .catch((err) => console.error("Failed to connect to MongoDB", err));

  console.log("MongoDB connected!");

  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
})();
