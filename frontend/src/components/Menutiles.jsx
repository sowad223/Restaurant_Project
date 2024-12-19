import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const MenuTiles = () => {
  const [menuData, setMenuData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const categoryRes = await axios.get('/api/menu/categories');
        const categories = categoryRes.data;

        const menuDataPromises = categories.map(async (category) => {
          const subcategoryRes = await axios.get(`/api/menu/${category.title}/subcategories`);
          const subcategories = subcategoryRes.data;

          const subcategoryMenuItemsPromises = subcategories.map(async (subcategory) => {
            const menuItemsRes = await axios.get(`/api/menu/items/subcategory/${subcategory.title}`);
            return {
              subcategory: subcategory.title,
              items: menuItemsRes.data,
            };
          });

          const subcategoryMenuItems = await Promise.all(subcategoryMenuItemsPromises);
          return {
            category: category.title,
            subcategories: subcategoryMenuItems,
          };
        });

        const menuData = await Promise.all(menuDataPromises);
        setMenuData(menuData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch menu data:', error);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
      >
        <div className="bg-gray-200 h-40 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-black">{item.title}</h2>
          <h3 className="text-lg font-semibold mb-2">BDT {item.price}</h3>
          <p className="text-sm text-gray-700">{item.description}</p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SearchBar setSearchResults={setSearchResults} />
      {searchResults.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {renderMenuItems(searchResults)}
          </div>
        </div>
      ) : (
        menuData.map((categoryData, catIndex) => (
          <div key={catIndex}>
            <h2 className="text-2xl font-bold mb-4 text-black">{categoryData.category}</h2>
            {categoryData.subcategories.map((subcategoryData, subcatIndex) => (
              <div key={subcatIndex}>
                <h3 className="text-xl font-semibold mb-3 text-black">{subcategoryData.subcategory}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
                  {renderMenuItems(subcategoryData.items)}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MenuTiles;
