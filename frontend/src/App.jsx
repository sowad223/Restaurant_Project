import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MenuCreatorPage from './pages/MenuCreatorPage';
import AdminDashboard from './pages/AdminDashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/admin/update-menu",
    element: <MenuCreatorPage />
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;