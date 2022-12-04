const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
    puas: {
        type:Number,
        required: [true, "Customer name is required"],
        default: 0,
    },
    biasa: {
        type: Number,
        required: [true, "Review Description is required"],
        default : 0
    },
    tidakPuas: {       
        type: Number,
        required: [true, "Rating is required"],
        default : 0
    },
    reportDate : {
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model("Reviews", ReviewsSchema);