import { Schema, models, model } from "mongoose";

const BuildSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    ]
})

const Build = models.Build || model('Build', BuildSchema);
export default Build;