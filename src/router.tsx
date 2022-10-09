import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Siginup } from './pages/Siginup'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Siginup/>
  }
])

export const Router = () => (
  <RouterProvider router={router} />
);