import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx'
import Contract from './components/Contract/Contract.jsx'
import Users from './components/Users/Users.jsx'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home ></Home>,
    children: [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path:'contract',
        element:<Contract></Contract>
      },
      {
        path : '/users',
        element:<Users></Users>
      }
    ]
  },

 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)