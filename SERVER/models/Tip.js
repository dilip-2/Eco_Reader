import mongoose from 'mongoose';

const tipSchema = new mongoose.Schema({
  text: String,
  addedBy: String
}, { timestamps: true });

export default mongoose.model('Tip', tipSchema);
