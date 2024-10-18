const multer = require("multer");

// Use /tmp directory for temporary storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp');  // Store files in the /tmp directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Create a unique filename
  }
});

const upload = multer({ storage });
module.exports = upload;
