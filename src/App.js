
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Html from './components/Html';
import Htmlhome from './components/Htmlhome';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

     {
      path: "html",
      element: <Html/>
    },

      {
      path: "htmlhome",
      element: <Htmlhome/>
    },
   
  ]);

  return <RouterProvider router={router} />;
};

export default App;
