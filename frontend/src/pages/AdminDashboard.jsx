import React from 'react';
import { FaClipboardList, FaUsers, FaStar } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex items-center">
          <AiOutlineDashboard className="text-3xl mr-3" />
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex-grow">
          <nav className="mt-8">
            <ul>
              <li className="mb-2">
                <a href="#orders" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                  <FaClipboardList className="mr-3 text-lg" />
                  <span>Orders</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#customers" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                  <FaUsers className="mr-3 text-lg" />
                  <span>Customers</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#reviews" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                  <FaStar className="mr-3 text-lg" />
                  <span>Reviews</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-3" src="https://via.placeholder.com/150" alt="Admin Profile" />
            <div>
              <p className="text-sm font-semibold">Admin Name</p>
              <p className="text-xs text-gray-300">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-700">Dashboard</div>
          <div className="text-gray-600">Welcome, Admin</div>
        </header>
        <main className="flex-grow p-6">
          {/* Orders Section */}
          <section id="orders" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-400 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <p className="font-semibold">Order #12345</p>
                <p className="text-gray-200">Status: Pending</p>
              </div>
              <div className="bg-blue-400 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <p className="font-semibold">Order #12346</p>
                <p className="text-gray-200">Status: Completed</p>
              </div>
              {/* Add more orders here */}
            </div>
          </section>
          {/* Customers Section */}
          <section id="customers" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-400 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-200">john@example.com</p>
              </div>
              <div className="bg-green-400 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-200">jane@example.com</p>
              </div>
              {/* Add more customers here */}
            </div>
          </section>
          {/* Reviews Section */}
          <section id="reviews">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-purple-400 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <p className="font-semibold">Excellent service!</p>
                <p className="text-gray-200">- John Doe</p>
              </div>
              <div className="bg-purple-400 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <p className="font-semibold">Food was great!</p>
                <p className="text-gray-200">- Jane Smith</p>
              </div>
              {/* Add more reviews here */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
