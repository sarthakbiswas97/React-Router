import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import User from './components/User/User'
import Github, { githubLoader } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Route />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contactus',
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route path='user/:id' element={<User/>}/> 
      <Route 
      loader={githubLoader}
      path='github'
      element={<Github/>}
      /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
