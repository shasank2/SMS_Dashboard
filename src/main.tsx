import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import LoginForm from './auth/LoginForm.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import ProtectedLayout from './components/layouts/ProtectedLayout.tsx'
import Dashboard from './dashboard/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute redirectPath="/" isAllowed={true}>
        <ProtectedLayout />
      </ProtectedRoute>
    )
    ,
    children: [
      // Protected Routes
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ],
  },
  {
    path: "/",
    element: <Navigate to={'login'} />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
