
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Html from './components/Html';
import Htmlhome from './components/Html-home';

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
      path: "html-home",
      element: <Html-home/>
    },
   
  ]);

  return <RouterProvider router={router} />;
};

export default App;
