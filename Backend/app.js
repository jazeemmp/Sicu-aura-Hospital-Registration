const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

//dot env configation
dotenv.config()

// Create an Express application
const app = express()

// Import database connection function
const connectDB = require('./config/db')

//mongo db connection
connectDB()

// Import hospital routes
const hospitalRoutes = require('./routes/hospitalRoutes')

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(cors({
    origin: 'https://sicu-aura-hospital-registration-3vdm.vercel.app',
}));
app.use(express.urlencoded({ extended: false }));

// Use hospital routes under /api
app.use('/api',hospitalRoutes)

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 });