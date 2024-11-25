import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProviders from './Providers/AuthProviders';

import BrandDetails from './Components/BrandDetails/BrandDetails';
import PrivateRoute from './Routes/PrivateRoute';
import MyProfile from './Components/MyProfile/MyProfile';
import Brands from './Components/Brand/Brand';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/brand',
        element: <Brands></Brands>

      },
      {
        path: '/brand/:id',
        element: <BrandDetails></BrandDetails>
      },
      {
        path:'/myprofile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
