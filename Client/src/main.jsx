import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './components/Home.jsx'
import Photography from './components/Photography/Photography.jsx'
import Gallery from './components/ArtPage/ArtPage.jsx'

import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home/>,
    },
    {
      path: 'gallery',
      element: <Gallery />,
    },
    {
      path: 'photography',
      element: <Photography />,
    },
  ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);

//Reminder that index is /Home.
