import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        city: String,
        age: {
            type: Number,
            default: 0
        },
        email: {
            type: String,
            required: true
        }
        /*comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]*/
    },
    {
        timestamps: true
    });

export default mongoose.model('User', userSchema);