const mongoose = require('mongoose');

let whatsAppUserSchema = mongoose.Schema({
    // Unique ID is obtained when the function of insertion is utilized
    name: {
        type: String,
        required: true, // Needed trailing comma
    },
    email: {
        type: String,
        required: true,
    },
    funcional: {
        type: Number,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: false,
    },
    dateOfAdding: {
        type: Date,
        default: Date.now,
    },
});

const WhatsAppUser = module.exports = mongoose.model('WhatsAppUser', whatsAppUserSchema);