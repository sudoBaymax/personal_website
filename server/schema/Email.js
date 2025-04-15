const { ServerMonitoringMode } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmailSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const Email = mongoose.model('email', EmailSchema)

module.exports = Email;