import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { userId, product } = req.body;
  const user = await User.findById(userId);
  user.cart.push(product);
  await user.save();
  res.send(user.cart);
});

router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.send(user.cart);
});

export default router;
