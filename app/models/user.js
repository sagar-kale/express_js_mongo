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
        },
        sentRequest: [{
            username: { type: String, default: '' }
        }],
        request: [{
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            username: { type: String, default: '' }
        }],
        friendsList: [{
            friendId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            friendName: { type: String, default: '' }
        }],
        totalRequest: { type: Number, default: 0 }
    },
    {
        timestamps: true
    });

export default mongoose.model('users', userSchema);