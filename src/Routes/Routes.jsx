import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Page/Home";
import About from "../Page/About";

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
    ]
  },
]);

export default router;
