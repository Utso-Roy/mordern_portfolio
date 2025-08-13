import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Projects from "../Page/Projects";
import Learning from "../Page/Learning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: '/',
        element : <Home></Home>
        
      },

      {
        path: '/about',
        element : <About></About>
      }
      ,
      {
        path: '/contact',
        element : <Contact></Contact>
      }
      ,
      {
        path: '/project',
        element : <Projects></Projects>
      }
      ,
      {
        path: '/learn',
        element : <Learning></Learning>
      }
    ]
  },
]);

export default router;
