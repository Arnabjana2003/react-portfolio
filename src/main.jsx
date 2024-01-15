import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Qualification from './components/Qualification.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skills",
        element: <Skills/>
      },
      {
        path: "/qualification",
        element: <Qualification/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
