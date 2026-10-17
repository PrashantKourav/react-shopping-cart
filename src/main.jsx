import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './pages/CartContext';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';

import './index.css';

import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
     
    <RouterProvider router={router} />

     </CartProvider>
  </StrictMode>
);