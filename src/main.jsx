import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx'
import Contract from './components/Contract/Contract.jsx'
import Users from './components/Users/Users.jsx'
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home ></Home>,
    errorElement : <ErrorPage></ErrorPage>,
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
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
       
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
   
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Posts></Posts>
      },
      {
        path :'/post/:postId',
        loader : ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    
    ]
  },

 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
