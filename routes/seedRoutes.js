import express from "express";
import Listing from "../models/listing.js";
import User from "../models/user.js";
import Booking from "../models/booking.js";

const router = express.Router();

// seed Listings
router.post("/listings", async (req, res) => {
  try {
    const listings = await Listing.insertMany(req.body);
    res.status(201).json(listings);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// seed users
router.post("/users", async (req, res) => {
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// seed bookings
router.post("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.insertMany(req.body);
    res.status(201).json(bookings);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
