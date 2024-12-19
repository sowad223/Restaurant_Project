// controllers/orderController.js
import asyncHandler from 'express-async-handler';
import { Order } from '../models/orderModel.js';
import { OrderItem } from '../models/orderItemModel.js';

// ------------------------------------------- ORDER MODEL CRUD ------------------------------------------------------

// Create a new order
export const createOrder = asyncHandler(async (req, res) => {
  const { customer_id, order_status, total_price, payment_method, delivery_date } = req.body;
  const order = new Order({ customer_id, order_status, total_price, payment_method, delivery_date });
  await order.save();
  res.status(201).json(order);
});

// Get all orders
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
});

// Get a single order by ID
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.status(200).json(order);
});

// Update order status by ID
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { order_status } = req.body;
  const order = await Order.findByIdAndUpdate(id, { order_status }, { new: true });
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.status(200).json(order);
});

// Delete an order by ID
export const deleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByIdAndDelete(id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.status(200).json({ message: 'Order deleted' });
});

// ------------------------------------------- ORDER ITEM MODEL CRUD ------------------------------------------------------

// Create a new order item within an order
export const createOrderItem = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const { item_id, quantity, special_instructions } = req.body;
  const orderItem = new OrderItem({ order_id: orderId, item_id, quantity, special_instructions });
  await orderItem.save();
  res.status(201).json(orderItem);
});

// Get all order items for an order
export const getOrderItems = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const orderItems = await OrderItem.find({ order_id: orderId });
  res.status(200).json(orderItems);
});

// Get a single order item by ID within an order
export const getOrderItemById = asyncHandler(async (req, res) => {
  const { orderId, itemId } = req.params;
  const orderItem = await OrderItem.findById(itemId);
  if (!orderItem || orderItem.order_id.toString() !== orderId) {
    return res.status(404).json({ message: 'Order item not found' });
  }
  res.status(200).json(orderItem);
});

// Update an order item by ID within an order
export const updateOrderItem = asyncHandler(async (req, res) => {
  const { orderId, itemId } = req.params;
  const { item_id, quantity, special_instructions } = req.body;
  const orderItem = await OrderItem.findByIdAndUpdate(itemId, { item_id, quantity, special_instructions }, { new: true });
  if (!orderItem || orderItem.order_id.toString() !== orderId) {
    return res.status(404).json({ message: 'Order item not found' });
  }
  res.status(200).json(orderItem);
});

// Delete an order item by ID within an order
export const deleteOrderItem = asyncHandler(async (req, res) => {
  const { orderId, itemId } = req.params;
  const orderItem = await OrderItem.findByIdAndDelete(itemId);
  if (!orderItem || orderItem.order_id.toString() !== orderId) {
    return res.status(404).json({ message: 'Order item not found' });
  }
  res.status(200).json({ message: 'Order item deleted' });
});

export default {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  createOrderItem,
  getOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};
