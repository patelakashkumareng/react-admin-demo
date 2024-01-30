import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import AdminList from './pages/admin/AdminList'
import CreateAdmin from './pages/admin/CreateAdmin'
import Dashboard from './pages/dashboard/Dashboard'
import PageNotFound from './pages/base/pageNotFound'
import BannerList from './pages/banner/BannerList'

const routes = createBrowserRouter([
    {path: '/', element: <Dashboard PageTitle="Dashboard" />},
    {path: '/login', element: <Login />},
    {path: '/admin/list', element: <AdminList />},
    {path: '/admin/create', element: <CreateAdmin />},
    {path: '/banner/list', element: <BannerList /> },
    {path: '*', element: <PageNotFound />}
])

export default routes
