const { model } = require("mongoose");

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'created'
    },
    description: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
    },
    deletedDate: {
        type: Date,
    }
});

model.exports = Category = mongoose.model('Category', schema);