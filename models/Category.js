const mongoose = require('mongoose')

const comment = new mongoose.Schema({
    name: String,
    rate:{
        type: Number,
        enum: [ 1, 2, 3, 4, 5],
        default:5
    },
    time: Date
})

const Product = new mongoose.Schema({
    name: {
        type: String,
        require
    },
    rate: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],// 0: chua co danh gia,
        default:0
    },
    status: {
        type: Number,
        enum: [0, 1],
        default: 1
    },
    detail: {
        type: String,
        require
    },
    amount: {
        type: Number,
        min: 0,
        default: 0
    },
    image: [String],
    brand: String,
    model: String,
    configuration: {
        CPU: String,
        RAM: String,
        VGA: String,
        disk: String,
        monitor: String,
        OS: String,
        battery: String,
        weight: String,
        size: String,
        insurance: String
    },
    comments: [comment]

})

module.exports = mongoose.model('Category', new mongoose.Schema({
    name: {
        type: String,
        require
    },
    products: [Product],
}))