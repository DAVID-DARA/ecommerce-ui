import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/Homepage/HomePage';
import LoginPage from './pages/Loginpage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import VerifyPage from './pages/VerificationPage/VerifyPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignupPage />
  },
  {
    path: '/verify',
    element: <VerifyPage />
  },
  {
    path: '/account',
    element: <h1>Dashboard Page</h1>
  }, 
  {
    path: 'forgot-password',
    element: <h1>Account</h1>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
