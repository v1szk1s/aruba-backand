const mongodb = require('mongoose');

const AppSchema = mongodb.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    version: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
});

module.exports = mongodb.model("App", AppSchema);