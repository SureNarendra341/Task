import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  const { userId, address, card } = req.body;
  const user = await User.findById(userId);
  user.address = address;
  user.cards.push(card);
  await user.save();
  res.send("Checkout data saved");
});

router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.send({ address: user.address, cards: user.cards });
});

export default router;
