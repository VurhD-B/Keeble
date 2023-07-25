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
    categories: {
        type: Array,
    },
    productLink: {
        type: String,
        required: [true, 'Please provide the link to the purchase page'],
    },
    imageLink: {
        type: String,
        required: [true, 'Please provide the link to the image of the product'],
    },
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;