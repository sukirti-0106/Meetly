import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema({
  user_id: {
    type: String,
    required: true
    // removed unique: true so users can attend multiple meetings
  },
  meetingCode: {
    type: String,
    required: true
    // removed unique: true so multiple users can record the same meeting
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Meeting = mongoose.model("Meeting", meetingSchema);
export { Meeting };