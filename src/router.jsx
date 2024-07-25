import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react';

const Layout = lazy(() => import('@Templates/Layout'))
const Home = lazy(() => import('@Pages/Home'))
const Auth = lazy(() => import('@Pages/Auth'))

// import Home from './Pages/Home'
// import Auth from './Pages/Auth'
// import Layout from './templates/Layout'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "auth", element: <Auth /> },
            { path: "signin", element: <Auth /> },
        ],
    },
])

export default routes