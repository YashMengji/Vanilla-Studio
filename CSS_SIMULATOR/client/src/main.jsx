import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import StudioPage from './pages/StudioPage.jsx'
import LoginSignupPage from './pages/LoginSignupPage.jsx'
import UserDashboardPage from './pages/UserDashboardPage.jsx'
import CodeEditingPage from './pages/CodeEditingPage.jsx'

const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/signup',
        element: <LoginSignupPage/>
      },
      {
        path: '/dashboard',
        element: <UserDashboardPage/>
      },
      {
        path: '/studio',
        element: <StudioPage/>,
      },
      {
        path: '/studio/codeeditor',
        element: <CodeEditingPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={createRouter} />
  //</React.StrictMode>
)
