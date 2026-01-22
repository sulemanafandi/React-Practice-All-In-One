import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import SingleProduct from './components/SingleProduct.jsx';



const router =  createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/products/:id',
        element:<SingleProduct/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router} />
  </>,
)
