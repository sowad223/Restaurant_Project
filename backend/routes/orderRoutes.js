// routes/orderRoutes.js
import express from 'express';
const router = express.Router();
import {
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
} from '../controllers/orderController.js';

// CRUD operations for orders

// Create a new order
router.post('/', createOrder);

// Get all orders
router.get('/', getOrders);

// Get a single order by ID
router.get('/:id', getOrderById);

// Update order status by ID
router.put('/:id', updateOrderStatus);

// Delete an order by ID
router.delete('/:id', deleteOrder);

// CRUD operations for order items

// Create a new order item within an order
router.post('/:orderId/items', createOrderItem);

// Get all order items for an order
router.get('/:orderId/items', getOrderItems);

// Get a single order item by ID within an order
router.get('/:orderId/items/:itemId', getOrderItemById);

// Update an order item by ID within an order
router.put('/:orderId/items/:itemId', updateOrderItem);

// Delete an order item by ID within an order
router.delete('/:orderId/items/:itemId', deleteOrderItem);

export default router;
