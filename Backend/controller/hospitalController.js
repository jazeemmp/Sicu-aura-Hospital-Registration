const hospitalDB = require("../model/hospitalModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

// @desc register new hospital
// @route POST /api/signup
// @access Public
const postSignup = async (req, res) => {
  const {
    name,
    address,
    city,
    state,
    pincode,
    date,
    availability,
    email,
    phone,
    registerNum,
    wardNum,
    password,
  } = req.body;
  try {
    const isExisting = await hospitalDB.findOne({ email: email });
    if (isExisting) {
      res.status(409).json({ message: "user alraedy exists" });
      return;
    } else {
      const HashedPassword = await bcrypt.hash(password, 10);
      const newHospital = new hospitalDB({
        name,
        address,
        city,
        state,
        pincode,
        date,
        availability,
        email,
        phone,
        registerNum,
        wardNum,
        password: HashedPassword,
        certificate: req.file.filename,
      });
      await newHospital.save();
      res.status(200).json({ message: "Login success" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc login hospital
// @route POST /api/login
// @access Public
const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await hospitalDB.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    if (user.inactive) {
      return res.status(403).json({
        message: "Your account is blocked. Please contact the admin.",
      });
    }
    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc get all hospitals
// @route POST /api/hospitals
// @access Private
const getHospitals = async (req, res) => {
  try {
    const data = await hospitalDB.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc change status
// @route POST /api/change-status
// @access Private
const changeStatus = async (req, res) => {
  try {
    const { status, id } = req.body;
    const hospital = await hospitalDB.findById(id);
    if (!hospital) {
      return res.status(404).json({ message: "User not found" });
    }
    hospital.inactive = status;
    await hospital.save();
    res.status(200).json({ hospital });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  postSignup,
  postLogin,
  getHospitals,
  changeStatus,
};
