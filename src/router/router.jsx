import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <p>Error page</p>,
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: 'blogs',
        element: <Blogs />
      }
    ]
  }
])