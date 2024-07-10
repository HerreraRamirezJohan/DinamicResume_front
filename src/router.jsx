import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { lazy } from 'react';

const Layout = lazy(() => import('./templates/Layout'))
const Home = lazy(() => import('./Pages/Home'))
const Auth = lazy(() => import('./Pages/Auth'))

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "auth", element: <Auth /> },
        ],
    },
])

export default routes