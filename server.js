
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";

import listingRoutes from "./routes/listingRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import seedRoutes from "./routes/seed.js";


dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/listings", listingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/seed", seedRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Airbnb App");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

