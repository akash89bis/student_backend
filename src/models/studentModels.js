import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({

    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required: 'Enter an email'
    },
    phoneNumber: {
        type: Number,
    },
    sex: {
        type: String,
    },
    created_date:{
        type: Date,
        default: Date.now
    }
})