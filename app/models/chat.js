import mongoose from 'mongoose';
import users from './user'
mongoose.Promise = global.Promise;

const chatSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        content: String
    },
    {
        timestamps: true
    });

export default mongoose.model('chats', chatSchema);