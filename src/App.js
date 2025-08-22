
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
import Javascript from './components/Javascript';
import Sql from './components/Sql';
import Python from './components/Python';
import Java from './components/Java';
import Php from './components/Php';
import React from './components/React';
import JQuery from './components/JQuery';
import Excel from './components/Excel';
import Git from './components/Git';
import Wordpress from './components/Wordpress';
import DigitalMarketing from './components/DigitalMarketing';
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
      path: "javascript",
      element: <Javascript />
    },
    {
      path: "sql",
      element: <Sql />
    },
    {
      path: "python",
      element: <Python />
    },
    {
      path: "java",
      element: <Java />
    },
    {
      path: "php",
      element: <Php />
    },
    {
      path: "react",
      element: <React />
    },
    {
      path: "jquery",
      element: <JQuery />
    },
    {
      path: "excel",
      element: <Excel />
    },
    {
      path: "git",
      element: <Git />
    },

    {
      path: "wordpress",
      element: <Wordpress />
    },
    {
      path: "digitalmarketing",
      element: <DigitalMarketing />
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
