import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
  }
}, {timestamps: true, collection: 'products'});

export default mongoose.models.Product || mongoose.model('Product', productSchema);

