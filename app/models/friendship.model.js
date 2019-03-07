import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const FriendshipSchema = new mongoose.Schema(
    {
        request_from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        request_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        status: {
            type: int,
            required: true
        }
    }, {
        timestamps: true
    });

export default mongoose.model('Friendship', commentSchema);