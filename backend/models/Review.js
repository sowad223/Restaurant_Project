import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'menuItemModel', required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  review_date: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;