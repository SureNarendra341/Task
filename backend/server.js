import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";
import addressRoutes from "./routes/address.js";
import stripeRoutes from "./routes/stripe.js";

dotenv.config();
connectDB()

const app = express();
app.use(cors());
app.use(express.json());




app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);

app.use("/api/stripe", stripeRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
