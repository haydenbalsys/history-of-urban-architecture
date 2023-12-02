import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Navigation from "./components/layouts/Navigation";
import HomePage from "./components/pages/HomePage";
import HistoryPage from "./components/pages/HistoryPage";
import SocialPage from "./components/pages/SocialPage";
import FuturePage from "./components/pages/FuturePage";

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/social-implications",
        element: <SocialPage />,
      },
      {
        path: "/future-implications",
        element: <FuturePage />,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;