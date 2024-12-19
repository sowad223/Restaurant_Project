import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  items: [{
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'menuItemModel', required: true },
    quantity: { type: Number, required: true },
    special_instructions: { type: String }
  }]
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;