import mongoose from 'mongoose';

const costSchema = new mongoose.Schema({
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'menuItemModel', required: true },
  ingredient: { type: String, required: true },
  cost: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const Cost = mongoose.model('Cost', costSchema);
export default Cost;