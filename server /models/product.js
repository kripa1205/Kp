import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: String,
  isFeatured: { type: Boolean, default: false }, // ✅ Boolean not string
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
export default Product;
