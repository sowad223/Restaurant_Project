// Menucreator.js

import React, { useState,useEffect } from 'react';
import axios from 'axios'; // Ensure Axios is installed and imported

// Example HTTP endpoint for saving menu item to backend (optional)
const saveMenuItem = async (menuItem) => {
  try {
    // Example: POST request to save menuItem to backend
    const response = await axios.post('/api/menu/items', menuItem);
    console.log('Saved MenuItem:', response.data); // Log the saved item response
    alert('Menu Item saved successfully!');
  } catch (error) {
    console.error('Error saving MenuItem:', error);
    alert('Error saving Menu Item. Please try again.');
  }
};

// Example HTTP endpoint for saving subcategory to backend (optional)
const saveSubcategory = async (subcategory) => {
  try {
    // Example: POST request to save subcategory to backend
    const response = await axios.post('/api/menu/subcategories', subcategory);
    console.log('Saved Subcategory:', response.data); // Log the saved subcategory response
    alert('Subcategory saved successfully!');
  } catch (error) {
    console.error('Error saving Subcategory:', error);
    alert('Error saving Subcategory. Please try again.');
  }
};

// Example HTTP endpoint for saving category to backend (optional)
const saveCategory = async (category) => {
  try {
    // Example: POST request to save category to backend
    const response = await axios.post('/api/menu/categories', category);
    console.log('Saved Category:', response.data); // Log the saved category response
    alert('Category saved successfully!');
  } catch (error) {
    console.error('Error saving Category:', error);
    alert('Error saving Category. Please try again.');
  }
};

const Menucreator = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    // Menu Item Form
    title: '',
    price: '',
    description: '',
    image: '',
    hasDiscount: false,
    discountAmount: '',
    discountDuration: '',
    existingCategory: '',
    existingSubcategory: '',
    newCategory: '',
    newSubcategory: '',

    // Subcategory Form
    subcategoryTitle: '',
    subcategoryCategory: '',

    // Category Form
    categoryTitle: '',
  });

  // State to manage active section (1: Menu Item, 2: Create Subcategory, 3: Create Category)
  const [activeSection, setActiveSection] = useState(1);
  const [categories, setCategories] = useState([]); // State to hold categories
  const [subcategories, setSubcategories] = useState([]);

useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/menu/categories');
        setCategories(response.data); // Store fetched categories in state
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get(`/api/menu/${formData.existingCategory}/subcategories`);
        setSubcategories(response.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    if (formData.existingCategory) {
      fetchSubcategories();
    }
  }, [formData.existingCategory]);

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Event handler for submitting Menu Item form
  const handleMenuItemSubmit = (e) => {
    e.preventDefault();
    // Validate form fields (you can add more validations as per your requirement)
    if (!formData.title || !formData.price || !formData.description || !formData.image ||
        (!formData.existingCategory && !formData.newCategory) ||
        (!formData.existingSubcategory && !formData.newSubcategory)) {
      alert('Please fill out all required fields.');
      return;
    }
    // Construct the menu item object to be saved
    const menuItem = {
      title: formData.title,
      price: formData.price,
      description: formData.description,
      image: formData.image,
      hasDiscount: formData.hasDiscount,
      discountAmount: formData.discountAmount,
      discountDuration: formData.discountDuration,
      category: formData.existingCategory || formData.newCategory,
      subcategory: formData.existingSubcategory || formData.newSubcategory,
    };
    // Save menu item (using mock function for demonstration)
    saveMenuItem(menuItem);
    // Clear form fields after submission
    setFormData({
      title: '',
      price: '',
      description: '',
      image: '',
      hasDiscount: false,
      discountAmount: '',
      discountDuration: '',
      existingCategory: '',
      existingSubcategory: '',
      newCategory: '',
      newSubcategory: '',
    });
  };

  // Event handler for submitting Subcategory form
  const handleSubcategorySubmit = (e) => {
    e.preventDefault();
    //Validation
    if (!formData.subcategoryTitle || !formData.subcategoryCategory) {
      alert('Please fill out all required fields.');
      return;
    }
    // Construct the subcategory object to be saved
    const subcategory = {
      title: formData.subcategoryTitle,
      category: formData.subcategoryCategory,
    };
    // Save subcategory (using mock function for demonstration)
    saveSubcategory(subcategory);
    // Clear form fields after submission
    setFormData({
      ...formData,
      subcategoryTitle: '',
      subcategoryCategory: '',
    });
  };

  // Event handler for submitting Category form
  const handleCategorySubmit = (e) => {
    e.preventDefault();
    // Validate form fields (you can add more validations as per your requirement)
    if (!formData.categoryTitle) {
      alert('Please fill out all required fields.');
      return;
    }
    // Construct the category object to be saved
    const category = {
      title: formData.categoryTitle,
    };
    // Save category (using mock function for demonstration)
    saveCategory(category);
    // Clear form fields after submission
    setFormData({
      ...formData,
      categoryTitle: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Section Navigation Headers */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setActiveSection(1)}
          className={`py-2 px-4 rounded-md focus:outline-none ${
            activeSection === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          Create Menu Item
        </button>
        <button
          onClick={() => setActiveSection(2)}
          className={`py-2 px-4 rounded-md focus:outline-none ${
            activeSection === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          Create Subcategory
        </button>
        <button
          onClick={() => setActiveSection(3)}
          className={`py-2 px-4 rounded-md focus:outline-none ${
            activeSection === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          Create Category
        </button>
      </div>

      {/* Menu Item Form Section */}
      {activeSection === 1 && (
        <form onSubmit={handleMenuItemSubmit} className="space-y-4">
          {/* Item Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Discount Option */}
          <div className="flex items-center">
            <input
              id="hasDiscount"
              name="hasDiscount"
              type="checkbox"
              checked={formData.hasDiscount}
              onChange={handleChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="hasDiscount" className="ml-2 block text-sm text-gray-900">
              Has Discount
            </label>
          </div>
          {formData.hasDiscount && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Discount Amount (%)</label>
              <input
                type="number"
                name="discountAmount"
                value={formData.discountAmount}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <label className="block text-sm font-medium text-gray-700 mt-2">Discount Duration (e.g., 7 days)</label>
              <input
                type="text"
                name="discountDuration"
                value={formData.discountDuration}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}

          {/* Existing Categories and Subcategories */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Select Category</label>
            <select
              name="existingCategory"
              value={formData.existingCategory}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.title} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Select Subcategory</label>
            <select
              name="existingSubcategory"
              value={formData.existingSubcategory}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory.title} value={subcategory.title}>
                  {subcategory.title}
                </option>
              ))}
            </select>
          </div>

    

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              Create Menu Item
            </button>
          </div>
        </form>
      )}

      {/* Create Subcategory Section */}
      {activeSection === 2 && (
        <form onSubmit={handleSubcategorySubmit} className="space-y-4">
          {/* Subcategory Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Subcategory Title</label>
            <input
              type="text"
              name="subcategoryTitle"
              value={formData.subcategoryTitle}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Select or Create Category */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Select Category</label>
            <select
              name="subcategoryCategory"
              value={formData.subcategoryCategory}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.title} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>


          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              Create Subcategory
            </button>
          </div>
        </form>
      )}

      {/* Create Category Section */}
      {activeSection === 3 && (
        <form onSubmit={handleCategorySubmit} className="space-y-4">
          {/* Category Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Category Title</label>
            <input
              type="text"
              name="categoryTitle"
              value={formData.categoryTitle}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              Create Category
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Menucreator;