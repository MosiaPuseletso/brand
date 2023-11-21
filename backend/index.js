// Importing necessary libraries and modules
import express from "express"; // Express framework for building web applications
import bodyParser from "body-parser"; // Middleware to parse incoming request bodies
import mongoose from "mongoose"; // MongoDB ODM (Object Data Modeling) library
import cors from "cors"; // Middleware for handling Cross-Origin Resource Sharing

// Importing routes from the 'brands.js' file
import brandRoutes from './routes/brands.js';

// Creating an instance of the Express application
const app = express();

// Middleware to parse JSON and url-encoded data with specified limits
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Using the 'brandRoutes' for handling routes starting with '/brands'
app.use('/brands', brandRoutes);

// MongoDB connection details
const CONNECTION_URL = "mongodb+srv://hikingSpotAdmin:hikingSpot1307@hikingspotdb.z35ffxp.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000; // Using the provided port or defaulting to 5000

// Setting a strict query mode for MongoDB
mongoose.set('strictQuery', true);

// Connecting to MongoDB and starting the server
mongoose.connect(CONNECTION_URL)
    .then(async () => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((error) => console.log(error.message));
