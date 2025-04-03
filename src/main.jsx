import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import WhyUsPlans from './Components/Diet.jsx';
import Ex from './Components/EX.jsx';
import Started from './Components/Started.jsx';
import Profile from './Components/Profile.jsx';
import Learn from './Components/Learn.jsx'; // Import Learn component
import './App.css'; 
import './About.css'; 
import './Diet.css'; 
import './index.css';
import Diet from './Components/Diet.jsx';
import Sports from './Components/Sports.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='whyus' element={<Diet />} />
      <Route path='plans' element={<WhyUsPlans />} />
      <Route path='started' element={<Ex />} />
      <Route path = 'profile' element={<Profile />} />
      <Route path = 'sports' element={<Sports/>}/>
      <Route path='learn' element={<Learn />} />
        {/* Added Learn route */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
