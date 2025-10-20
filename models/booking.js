import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  listing: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Listing", 
    required: true 
  },
  startDate: { 
    type: Date, 
    required: true 
  },
  endDate: { 
    type: Date, 
    required: true 
  },
  guests: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "cancelled"], 
    default: "pending" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

