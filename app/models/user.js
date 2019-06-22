import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        fname: String,
        lname: String,
        city: String,
        age: {
            type: Number,
            default: 0
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        userImage: {
            type: String,
            default: 'default.png'
        }
    },
    {
        timestamps: true
    });

export default mongoose.model('users', userSchema);