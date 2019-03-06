import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const commentSchema = new mongoose.Schema(
    {
        body: String,
        author: String,
        upvotes: { type: Number, default: 0 },
        post: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }, {
        timestamps: true
    });

export default mongoose.model('Comment', commentSchema);