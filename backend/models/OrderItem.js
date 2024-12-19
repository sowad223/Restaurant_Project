import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'menuItemModel', required: true },
  quantity: { type: Number, required: true },
  special_instructions: { type: String }
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
export default OrderItem;