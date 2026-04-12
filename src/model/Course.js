import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  views: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  lesson: {
    type: Array,
  },
  rating: {
    type: Number,
  }
})

export default mongoose.models.Course || mongoose.model('Course', courseSchema);