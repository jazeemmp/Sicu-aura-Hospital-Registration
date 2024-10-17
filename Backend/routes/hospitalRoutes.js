const express = require("express");
const router = express.Router();
const { postSignup, postLogin, getHospitals, changeStatus } = require("../controller/hospitalController");
const upload = require('../config/multer');
const { authorizeToken } = require("../utils/jwt");


router.post("/signup",upload.single("certificate"),postSignup);
router.post("/login",postLogin);
router.get("/hospitals", authorizeToken, getHospitals);
router.post('/change-status',authorizeToken,changeStatus)

module.exports = router;
