import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
)
