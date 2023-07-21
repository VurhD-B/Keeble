import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter the product name'],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price of the product'],
    },
    category: {
        type: String,
        required: [true, 'Please enter the category of the product'],
    },
    link: {
        type: String,
    },
    fileName: {
        type: String,
    },
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;