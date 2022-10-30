const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      required: true,
      unique: true,
    },
    about: {
      type: String,
      trim: true,
      unique: true,
      default: "",
    },
    dob_day: {
      type: String,
      trim: true, // loại bỏ khoảng trắng
      unique: true,
      default: "",
    },
    dob_month: {
      type: String,
      trim: true,
      unique: true,
      default: "",
    },
    dob_year: {
      type: String,
      trim: true,
      unique: true,
      default: "",
    },
    first_name: {
      type: String,
      trim: true,
      unique: true,
      default: "",
    },
    gender_identity: {
      type: String,
      default: "",
    },
    gender_interest: {
      type: String,
      default: "",
    },
    matches: {
      type: Array,
      default: [],
    },
    show_gender: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: "",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
