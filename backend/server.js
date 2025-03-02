const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import MongoDB connection

dotenv.config(); // Load environment variables

connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
