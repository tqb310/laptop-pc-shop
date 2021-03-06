const { default: mongoose } = require('mongoose');

const comment = new mongoose.Schema({
    name: String,
    rate: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 5,
    },
    time: Date,
});

module.exports = mongoose.model(
    'Product',
    new mongoose.Schema(
        {
            category_id: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Category',
            },
            name: {
                type: String,
                required: true,
            },
            slug: {
                type: String,
                default: '#',
            },
            rate: {
                type: Number,
                enum: [0, 1, 2, 3, 4, 5], // 0: chua co danh gia,
                default: 0,
            },
            status: {
                type: Number,
                enum: [0, 1],
                default: 1,
            },
            detail: {
                type: String,
                default: '',
            },
            amount: {
                type: Number,
                min: 0,
                default: 0,
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
                insurance: String,
            },
            comments: [comment],
            discountedPrice: {
                type: Number,
                default: 0,
            },
            originalPrice: {
                type: Number,
                default: 0,
            },
        },
        { timestamps: true },
    ),
);
