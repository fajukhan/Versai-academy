
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Html from './components/Html';
import Htmlhome from './components/Htmlhome';
import Editor from './components/Editor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Basic from './components/Basic';
import Elements from './components/Elements';
import Attribute from './components/Attribute';
import Heading from './components/Heading';
import Css from './components/Css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

      {
      path: "navbar",
      element: <Navbar/>
    },


     {
      path: "footer",
      element: <Footer/>
    },

      {
      path: "navbar",
      element: <Navbar/>
    },


     {
      path: "footer",
      element: <Footer/>
    },

     {
      path: "html",
      element: <Html/>
    },


     {
      path: "css",
      element: <Css />
    },

      {
      path: "htmlhome",
      element: <Htmlhome/>
    },


       {
      path: "editor",
      element: <Editor/>
    },

      {
      path: "basic",
      element: <Basic />
    },


       {
      path: "elements",
      element: <Elements />
    },

    
       {
      path: "attribute",
      element: <Attribute />
    },
   

    
       {
      path: "heading",
      element: <Heading />
    },
   
   
  ]);

  return <RouterProvider router={router} />;
};

export default App;
