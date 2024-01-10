import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import App from './App'
import AdminList from './pages/admin/AdminList'
import CreateAdmin from './pages/admin/CreateAdmin'

const routes = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/login', element: <Login />},
    {path: '/admin/list', element: <AdminList />},
    {path: '/admin/create', element: <CreateAdmin />}
])

export default routes
