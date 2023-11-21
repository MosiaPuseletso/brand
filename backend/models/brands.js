// Importing the Mongoose library
import mongoose from 'mongoose';

// Defining the schema for the 'brand' collection
const brandSchema = new mongoose.Schema({
  // Name of the brand (String), required and unique
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Industry to which the brand belongs (String), required
  industry: {
    type: String,
    required: true,
  },
  // Image data field, storing binary image data
  image: {
    data: Buffer, // Binary image data
    contentType: {
      type: String,
      default: 'image/svg+xml' // Default MIME type for the image (e.g., 'image/svg+xml')
    },
  },
});

// Creating a Mongoose model named 'brand_brands' based on the defined schema
const brand = mongoose.model('brand_brands', brandSchema);

// Exporting the 'brand' model for use in other parts of the application
export default brand;
