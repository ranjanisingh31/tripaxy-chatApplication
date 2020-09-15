const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model(
    "register",
    registerSchema,
    "registrationDetails"
);
