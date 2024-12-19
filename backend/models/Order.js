import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  order_status: { type: String, required: true },
  total_price: { type: Number, required: true },
  payment_method: { type: String, required: true },
  order_date: { type: Date, default: Date.now },
  delivery_date: { type: Date }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;