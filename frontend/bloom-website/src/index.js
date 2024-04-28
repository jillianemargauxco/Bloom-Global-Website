import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
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
      <Route path="/contact" element={<Contact />} />
     </Route>
   )
 );

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);