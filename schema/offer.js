const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  info: {
    id: { type: String },
    city: { type: String },
    street: { type: String },
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    title: { type: String },
    price: {type: Number},
    description: { type: String },
    imageUrl: { type: String },
  },
  coords: {
    lat: {type: Number},
    lon: {type: Number},
  },
});

const offerModel = mongoose.model("Offer", OfferSchema);

module.exports = {
  offerModel
};
