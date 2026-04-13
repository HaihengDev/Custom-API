import mongoose from 'mongoose';

export const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  lesson: {
    type: Array,
  },
  view: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  image: {
    type: String,
  }
}, {collection: 'courses'});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);