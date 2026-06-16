import mongoose from 'mongoose';

const ProgressSchema = new mongoose.Schema({
  task: String,
  status: Boolean,
});

export default mongoose.models.Progress || mongoose.model('Progress', ProgressSchema);
