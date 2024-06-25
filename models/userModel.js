import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    name: {
        type: String,
        required: true
    },
    root: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date, // Add timestamp field
        default: Date.now // Default to current date and time
    },
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset
