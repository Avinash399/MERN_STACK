import mongoose from 'mongoose';
import validator from 'validator';


// This is create schema 

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 charecters!"],
        maxLength: [25, "First name must contain at least 25 charecters!"],
    },
     lastName:{
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 charecters!"],
        maxLength: [25, "Last name must contain at least 25 charecters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number must contain only 10 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);