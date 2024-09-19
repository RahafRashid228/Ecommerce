import { Schema, model, Types } from 'mongoose';



const subcategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'not_active'],
        default: 'not_active'
    },
    categoryId: {
        type: Types.ObjectId,
        ref: 'Category', 
        required: true
    },
    createdBy: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    updatedBy: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true  
});

const subcategoryModel = model('Subcategory', subcategorySchema);
export default subcategoryModel;