const mongoose = require("mongoose");

const hospitalSchema =  mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    registerNum: {
      type: String,
      required: true,
    },
    wardNum: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
      required: true,
    },
    inactive: {
      type: Boolean,
      default: false, // Default value is false
    },
  },
  { timestamps: true }
);

const hospitalDB = mongoose.model("Hospital", hospitalSchema);
module.exports = hospitalDB;
