// Importing the 'brand' model
import brand from '../models/brands.js';

// Controller function to get all brands
export const getBrands = async (req, res) => {
    try {
        // Fetch all brands from the database
        const brands = await brand.find();
        // Respond with the retrieved brands in JSON format
        res.status(200).json(brands);
    } catch (error) {
        // Handle errors by responding with a 500 status and an error message in JSON format
        res.status(500).json({ message: error.message });
    }
}

// Controller function to get brands filtered by industry
export const getFilteredBrands = async (req, res) => {
    try {
        // Extract industry parameter from the request
        const industry = req.params.industry;
        // Fetch brands filtered by the specified industry from the database
        const filteredBrands = await brand.find({ industry });
        // Respond with the retrieved filtered brands in JSON format
        res.status(200).json(filteredBrands);
    } catch (error) {
        // Handle errors by responding with a 500 status and an error message in JSON format
        res.status(500).json({ message: error.message });
    }
}

// Controller function to get brands sorted in ascending or descending order by name
export const getSortedBrands = async (req, res) => {
    try {
        // Extract action parameter from the request to determine sorting order
        const action = req.params.action;
        let sortedBrands;

        // Fetch brands sorted either in ascending or descending order by name from the database
        if (action === 'asc') {
            sortedBrands = await brand.find().sort({ name: 1 });
        } else if (action === 'desc') {
            sortedBrands = await brand.find().sort({ name: -1 });
        }

        // Respond with the retrieved sorted brands in JSON format
        res.status(200).json(sortedBrands);
    } catch (error) {
        // Handle errors by responding with a 500 status and an error message in JSON format
        res.status(500).json({ message: error.message });
    }
}
