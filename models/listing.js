import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Listing must have a name"] },
  property_type: { type: String, required: [true, "Property type is required"] },
  price: { type: Number, min: [0, "Price cannot be negative"] },
  accommodates: { type: Number, min: [1, "Must accommodate at least 1 person"] },
  bedrooms: { type: Number, min: [0, "Bedrooms cannot be negative"] },
  bathrooms: { type: Number, min: [0, "Bathrooms cannot be negative"] },
  address: {
    market: { type: String, required: [true, "City is required"] },
    country: { type: String }
  },
  description: String,
  room_type: String,
  beds: Number
}, { timestamps: true, strict: false });

listingSchema.index({ "address.market": 1 });
listingSchema.index({ price: 1 });
listingSchema.index({ property_type: 1 });

const Listing = mongoose.model("Listing", listingSchema, "listingsAndReviews");
export default Listing;

