import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Demos from './Components/Demos/Demos';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Team from './Components/Team/Team';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[{
      path:'/',
      element:<Demos></Demos>
    },
    {
      path:'/services',
      element:<Services></Services>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path:'/portfolio',
      element:<Portfolio></Portfolio>
    }
    ,
    {
      path:'/team',
      element:<Team></Team>
    }
    ,
    {
      path:'/about',
      element:<About></About>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
