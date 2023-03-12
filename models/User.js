const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    merchantName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    registeredBusinessName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
    storeName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
    },
    long: {
      type: String,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    beneficiaryName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    ifsc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);