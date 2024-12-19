import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaSyncAlt } from 'react-icons/fa'; // Import the FaSyncAlt icon from react-icons

const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (query.trim() === '') {
        setSearchResults([]); // Clear search results
        return;
      }

      const res = await axios.get(`/api/menu/search?query=${encodeURIComponent(query)}`);
      setSearchResults(res.data);
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  };

  const handleReload = () => {
    setQuery('');
    setSearchResults([]); // Clear search results
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <div className="flex justify-center mb-4">
      <form onSubmit={handleSearch} className="flex">
        <input
          className="py-2 px-4 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for menu items..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Search
        </button>
      </form>
      <button
        onClick={handleReload}
        className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <FaSyncAlt /> {/* Replace the SVG with FaSyncAlt icon */}
      </button>
    </div>
  );
};

export default SearchBar;
