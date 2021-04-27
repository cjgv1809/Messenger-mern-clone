import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  username: String,
  message: String,
  timestamp: String,
});

// with s at the end(collection)
export default mongoose.model("messages", messageSchema);
