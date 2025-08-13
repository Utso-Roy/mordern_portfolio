import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: '/',
        element : <Home></Home>
        
      }
    ]
  },
]);

export default router;
