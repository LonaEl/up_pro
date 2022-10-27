import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    //likeCount: {type: Number, default:0}
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    rates: { type: [String],  min: 0, max: 5, },
    price: {type: Number, required: true},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;