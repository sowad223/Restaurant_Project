import express from 'express'; 

import {
    viewMenu,
    viewCategories,
    viewSubcategoriesByCategory,
    viewMenuBySubcategory,
    searchMenu,
    createCategory,
    updateCategory,
    deleteCategory,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    viewCategoryById,
    viewSubcategoryById
} from "../controllers/menuController.js";



const router = express.Router()


// CRUD FOR MENUITEM MODEL
router.get("/items", viewMenu) // get all menu items
router.get("/items/subcategory/:subcategory", viewMenuBySubcategory) // Get all menu items by subcategoryrouter.get("/items/:id", viewMenuItem) // Get a single menu item by ID
router.post("/items", createMenuItem) // Create a new menu item
router.put("/items/:id", updateMenuItem) // Update a menu item by ID
router.delete("/items/:id", deleteMenuItem) // Delete a menu item by ID
router.get("/search", searchMenu) // Search menu items by name


// CRUD FOR CATEGORY MODEL
router.get("/categories", viewCategories) // Get all categories
router.get("/categories/:id", viewCategoryById) // Get a single category by ID
router.get("/:category/subcategories", viewSubcategoriesByCategory) // Get subcategories by category name
router.post("/categories", createCategory) // Create a new category
router.put("/categories/:id", updateCategory) // Update a category by ID
router.delete("/categories/:id", deleteCategory) // Delete a category by ID

// CRUD FOR SUBCATEGORY MODEL
router.get("/subcategories/:id", viewSubcategoryById) // Get a single subcategory by ID
router.post("/subcategories", createSubcategory) // Create a new subcategory
router.put("/subcategories/:id", updateSubcategory) // Update a subcategory by ID
router.delete("/subcategories/:id", deleteSubcategory) // Delete a subcategory by ID


export default router; 
