
import Listing from "./models/listing.js";
import User from "./models/user.js";
import Booking from "./models/booking.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

dotenv.config();

const listings = [
  {
    name: "Cozy Apartment",
    property_type: "Apartment",
    price: 150,
    address: {
      market: "New York",
      country: "United States",
    },
    description: "A cozy 2-bedroom apartment near Central Park.",
    room_type: "Entire home/apt",
    beds: 2,
  }
];