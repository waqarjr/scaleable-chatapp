import { Schema, model } from "mongoose";

const registerSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
        maxLength: 100,
        minLength: 3
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    password: { 
        type: String, 
        required: true,
        minLength: 6 
    }
});

const Register = model("register", registerSchema);

export default Register;