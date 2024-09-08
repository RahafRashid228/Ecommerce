import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },
    status: {
        type: String,
        enum: ['Active', 'notActive'],
        default: 'notActive',
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
    },
}, {
    timestamps: true,
});

// Check if the model already exists to avoid overwriting
const userModel = mongoose.models.User || model('User', userSchema);

export default userModel;

