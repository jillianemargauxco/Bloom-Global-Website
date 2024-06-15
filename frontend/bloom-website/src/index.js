import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import ContactSent from './pages/Contact_Sent';
import BloomOneStudio from './components/BloomOne_Studio';
import BloomOneOneBed from './components/BloomOne_OneBed';
import BloomOneTwoBed from './components/BloomOne_TwoBed';
import BloomOneThreeBed from './components/BloomOne_ThreeBed';

import "./App.css";

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route element={<AppLayout />}>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/bloom-one-studio" element={<BloomOneStudio />} />
      <Route path="/bloom-one-one-bedroom" element={<BloomOneOneBed />} />
      <Route path="/bloom-one-two-bedroom" element={<BloomOneTwoBed />} />
      <Route path="/bloom-one-three-bedroom" element={<BloomOneThreeBed />} />
      <Route path="/contact-sent" element={<ContactSent />} />
      <Route path="/contact" element={<Contact />} />
     </Route>
   )
 );

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);