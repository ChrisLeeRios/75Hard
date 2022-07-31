const mongoose = require('mongoose');

// Change all lines below to match the models for current project
const SfhardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title must be atleast 2 characters long!"],
    },
    cal: {
        type: Number,
        required: [true, "Calories is required!"],
        min: [0, "Can't be less than 0!"],
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Can't be less than free!"],
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [2, "Description must be atleast 2 characters long!"]
    },
    imgUrl: {
        type: String,
        required: [true, "Image is required!"],
    },
    isGlutenFree: {
        type: Boolean,
        required: [true, "Gluten Free check is required!"],
    },
    isSugarFree: {
        type: Boolean,
        required: [true, "Sugar Free Check is required!"],
    },
    isTasty: {
        type: Boolean,
        required: [true, "Tasty check is required!"],
    },
}, { timestamps: true });
module.exports.Sfhard = mongoose.model('Sfhard', SfhardSchema);