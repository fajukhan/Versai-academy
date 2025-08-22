
import './App.css';
import { createBrowserRouter, Links, RouterProvider } from "react-router-dom";
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
import Paragraph from './components/Paragraph';
import Style from './components/Style';
import Formatting from './components/Formatting';
import Quotation from './components/Quotation';
import Comments from './components/Comments';
import Colors from './components/Colors';
import CSS2 from './components/CSS2';
import Links1 from './components/Links1';

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
   

      
       {
      path: "paragraph",
      element: <Paragraph />
    },


       
       {
      path: "style",
      element: <Style />
    },
   


         {
      path: "formatting",
      element: <Formatting />
    },


        {
      path: "quotation",
      element: <Quotation />
    },


       {
      path: "comments",
      element: <Comments />
    },


        {
      path: "colors",
      element: <Colors />
    },


       {
      path: "css2",
      element: <CSS2 />
    },


      {
      path: "links",
      element: <Links1 />
    },




  ]);

  return <RouterProvider router={router} />;
};

export default App;
