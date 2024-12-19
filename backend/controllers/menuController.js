import asyncHandler from 'express-async-handler';
import { Category } from '../models/categoryModel.js';
import { Subcategory } from '../models/subcategoryModel.js';
import { MenuItem } from '../models/menuItemModel.js';

// ------------------------------------------- MENU MODEL CRUD ----------------------------------------------------------------------------------------------------------------------

// View all menu items
export const viewMenu = asyncHandler(async (req, res) => {
    const menuItems = await MenuItem.find().populate('subcategory');
    res.status(200).json(menuItems);
});

// View menu items by subcategory name
export const viewMenuBySubcategory = asyncHandler(async (req, res) => {
    const subcategoryTitle = decodeURIComponent(req.params.subcategory);
    console.log(`Received subcategory: ${subcategoryTitle}`); // Log received parameter
    const subcategory = await Subcategory.findOne({ title: subcategoryTitle });
    if (!subcategory) {
        console.log('Subcategory not found');
        return res.status(404).json({ message: 'Subcategory not found' });
    }
    const menuItems = await MenuItem.find({ subcategory: subcategory._id }).populate('subcategory');
    res.status(200).json(menuItems);
});


// View a single menu item by ID
export const viewMenuItemById = asyncHandler(async (req, res) => {
    const menuItem = await MenuItem.findById(req.params.id).populate('subcategory');
    if (!menuItem) {
        return res.status(404).json({ message: 'MenuItem not found' });
    }
    res.status(200).json(menuItem);
});

// Create a new menu item
export const createMenuItem = asyncHandler(async (req, res) => {
    const { title, price, subcategory, description, image } = req.body;
    const subcategoryObj = await Subcategory.findOne({title:subcategory});
    if (!subcategoryObj) {
        console.log('Subcategory not found');
        return res.status(404).json({ message: 'Subcategory not found' });
    }
    const menuItem = new MenuItem({ title, price, subcategory: subcategoryObj._id, description, image });
    await menuItem.save();
    res.status(201).json(menuItem);
});


// Update a menu item by ID
export const updateMenuItem = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, price, subcategoryId, description, image } = req.body;
    const menuItem = await MenuItem.findByIdAndUpdate(id, { title, price, subcategory: subcategoryId, description, image }, { new: true });
    if (!menuItem) {
        return res.status(404).json({ message: 'MenuItem not found' });
    }
    res.status(200).json(menuItem);
});

// Delete a menu item by ID
export const deleteMenuItem = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const menuItem = await MenuItem.findByIdAndDelete(id);
    if (!menuItem) {
        return res.status(404).json({ message: 'MenuItem not found' });
    }
    res.status(200).json({ message: 'MenuItem deleted' });
});

// Search menu items by name
export const searchMenu = asyncHandler(async (req, res) => {
    const { query } = req.query;
    const regex = new RegExp(query, 'i');
    const menuItems = await MenuItem.find({ title: { $regex: regex } }).populate('subcategory');
    res.status(200).json(menuItems);
});

// ------------------------------------------- CATEGORY MODEL CRUD ----------------------------------------------------------------------------------------------------------------------

// View all categories
export const viewCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    res.status(200).json(categories);
});

// View a single category by ID
export const viewCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
});

// Create a new category
export const createCategory = asyncHandler(async (req, res) => {
    const { title } = req.body;
    const category = new Category({ title });
    await category.save();
    res.status(201).json(category);
});

// Update a category by ID
export const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const category = await Category.findByIdAndUpdate(id, { title }, { new: true });
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
});

// Delete a category by ID
export const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted' });
});

// ------------------------------------------- SUBCATEGORY MODEL CRUD ----------------------------------------------------------------------------------------------------------------------

// View subcategories by category name
export const viewSubcategoriesByCategory = asyncHandler(async (req, res) => {
    const categoryName = decodeURIComponent(req.params.category);
    const category = await Category.findOne({ title: categoryName });
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    const subcategories = await Subcategory.find({ category: category._id }).populate('category');
    res.status(200).json(subcategories);
});

// View a single subcategory by ID
export const viewSubcategoryById = asyncHandler(async (req, res) => {
    const subcategory = await Subcategory.findById(req.params.id).populate('category');
    if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
    }
    res.status(200).json(subcategory);
});

// Create a new subcategory
export const createSubcategory = asyncHandler(async (req, res) => {
    const { title, category } = req.body;
 
 try   {
    const categoryObj = await Category.findOne({title:category})
    if (!categoryObj) {
        return res.status(400).json({ message: 'Category not found' });
    }
    const subcategory = new Subcategory({ title, category: categoryObj._id });
    await subcategory.save();
    res.status(201).json(subcategory);
} catch (error) {
    // Handle errors
    console.error('Error creating subcategory:', error);
    res.status(500).json({ message: 'Server error' });
}


});

// Update a subcategory by ID
export const updateSubcategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, categoryId } = req.body;
    const subcategory = await Subcategory.findByIdAndUpdate(id, { title, category: categoryId }, { new: true });
    if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
    }
    res.status(200).json(subcategory);
});

// Delete a subcategory by ID
export const deleteSubcategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const subcategory = await Subcategory.findByIdAndDelete(id);
    if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
    }
    res.status(200).json({ message: 'Subcategory deleted' });
});
