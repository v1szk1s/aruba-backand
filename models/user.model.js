const mongodb = require('mongoose');

const UserSchema = mongodb.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },  
    deployedApps: {
        type: Array,
        required: false
    },
    role: {
        //What is the user's role (admin: 1, user: 2)
        type: Number,
        required: true
    }
});

module.exports = mongodb.model("User", UserSchema);