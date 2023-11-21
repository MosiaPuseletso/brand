// Importing the 'express' library
import express from 'express';

// Importing controller functions from the 'brands.js' file
import { getBrands, getFilteredBrands, getSortedBrands } from '../controllers/brands.js';

// Creating an instance of the Express Router
const router = express.Router();

// Route to handle GET requests for all brands
router.get('/', getBrands);

// Route to handle GET requests for filtered brands based on industry
router.get('/filter/:industry', getFilteredBrands);

// Route to handle GET requests for sorted brands based on action (asc or desc)
router.get('/sort/:action', getSortedBrands);

// Exporting the router for use in other parts of the application
export default router;
