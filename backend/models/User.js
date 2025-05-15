import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: Array,
  address: Object,
  cards: Array,
});

const User = mongoose.model("User", UserSchema);
export default User;
