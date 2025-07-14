import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: { type: Number, default: 0 },
  comments: [{ text: String, user: String }]
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
