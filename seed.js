import mongoose from "mongoose";
import dotenv from "dotenv";
import Listing from "./models/listing.js";
import User from "./models/user.js";
import Booking from "./models/booking.js";
import connectDB from "./db/connect.js";

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
  },
  {
    name: "Luxury Villa",
    property_type: "Villa",
    price: 500,
    address: {
      market: "Los Angeles",
      country: "United States",
    },
    description: "Beautiful luxury villa with a private pool and garden.",
    room_type: "Entire home/apt",
    beds: 5,
  },
  {
    name: "Modern Studio",
    property_type: "Studio",
    price: 120,
    address: {
      market: "San Francisco",
      country: "United States",
    },
    description: "Stylish studio in downtown SF, close to everything.",
    room_type: "Entire home/apt",
    beds: 1,
  },
];

const users = [
  {
    name: "Taher Al-Fakih",
    email: "taher@example.com",
    password: "password123", 
  },
  {
    name: "Bob The Builder",
    email: "bob@example.com",
    password: "password123",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Listing.deleteMany({});
    await User.deleteMany({});
    await Booking.deleteMany({});
    console.log("Old data deleted");

    const createdListings = await Listing.insertMany(listings);
    const createdUsers = await User.insertMany(users);

    const bookings = [
  {
    user: createdUsers[0]._id,
    listing: createdListings[0]._id,
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-05"),
    guests: 2,
    totalPrice: 150 * 4,
  },
  {
    user: createdUsers[1]._id,
    listing: createdListings[1]._id,
    startDate: new Date("2025-12-10"),
    endDate: new Date("2025-12-15"),
    guests: 4,
    totalPrice: 500 * 5,
  },
];

    await Booking.insertMany(bookings);

    console.log("Seed completed successfully!");
    console.log(` ${createdListings.length} listings`);
    console.log(` ${createdUsers.length} users`);
    console.log(` ${bookings.length} bookings`);

    process.exit();
  } catch (error) {
    console.error(" Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
