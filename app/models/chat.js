import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const chatSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        fname: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        lname: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },    
        content: String
    },
    {
        timestamps: true
    });

export default mongoose.model('chats', chatSchema);