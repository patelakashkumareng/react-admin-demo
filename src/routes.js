import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import AdminList from './pages/admin/AdminList'
import CreateAdmin from './pages/admin/CreateAdmin'
import Dashboard from './pages/dashboard/Dashboard'
import PageNotFound from './pages/base/pageNotFound'
import Banner from './pages/banner/Banner'
import CreateBanner from './pages/banner/CreateBanner'
const routes = createBrowserRouter([
    {path: '/', element: <Dashboard PageTitle="Dashboard" />},
    {path: '/login', element: <Login />},
    {path: '/admin/list', element: <AdminList title={"Admin"} description={"Filters"}/>},
    {path: '/admin/create', element: <CreateAdmin title={"Create Admin"} description={"Form For Create Admin"} />},
    {path: '/banner/list', element: <Banner /> },
    {path: '/banner/create', element: <CreateBanner title={"Create Banner"} description={"Forn For Create Banner"} /> },
    {path: '*', element: <PageNotFound />}
])

export default routes
