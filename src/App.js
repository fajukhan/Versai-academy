
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Html from './components/HTMLPAGES/Html';
import Htmlhome from './components/HTMLPAGES/Htmlhome';
import Editor from './components/HTMLPAGES/Editor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Basic from './components/HTMLPAGES/Basic';
import Elements from './components/HTMLPAGES/Elements';
import Attribute from './components/HTMLPAGES/Attribute';
import Heading from './components/HTMLPAGES/Heading';
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
import Paragraph from './components/HTMLPAGES/Paragraph';
import Style from './components/HTMLPAGES/Style';
import Formatting from './components/HTMLPAGES/Formatting';
import Quotation from './components/HTMLPAGES/Quotation';
import Comments from './components/HTMLPAGES/Comments';
import Colors from './components/HTMLPAGES/Colors';
import CSS2 from './components/HTMLPAGES/CSS2';
import Links1 from './components/HTMLPAGES/Links1';
import Images1 from './components/HTMLPAGES/Images1';
import Favicon from './components/HTMLPAGES/Favicon';
import Pagetitle from './components/HTMLPAGES/Pagetitle';
import Tables from './components/HTMLPAGES/Tables';
import Lists from './components/HTMLPAGES/Lists';
import Div from './components/HTMLPAGES/Div';
import BlockInline from './components/HTMLPAGES/BlockInline';
import HTMLClass from './components/HTMLPAGES/HTMLClass';
import HTMLId from './components/HTMLPAGES/HTMLId';
import HTMLIframes from './components/HTMLPAGES/HTMLIframes';
import HTMLJavascript from './components/HTMLPAGES/HTMLJavascript';
import HTMLFilePaths from './components/HTMLPAGES/HTMLFilePaths';
import HTMLHead from './components/HTMLPAGES/HTMLHead';
import HtmlLayout from './components/HTMLPAGES/HtmlLayout';
import HtmlResponsive from './components/HTMLPAGES/HtmlResponsive';
import HtmlSemantics from './components/HTMLPAGES/HtmlSemantics';
import HtmlForms from './components/HTMLPAGES/HtmlForms';
import HtmlFormElements from './components/HTMLPAGES/HtmlFormElements';
import HtmlInputTypes from './components/HTMLPAGES/HtmlInputTypes';
import HtmlInputAttributes from './components/HTMLPAGES/HtmlInputAttributes';
import HtmlFormAttributes from './components/HTMLPAGES/HtmlFormAttributes';
import HtmlMultimedia from './components/HTMLPAGES/HtmlMultimedia';
import HtmlAudio from './components/HTMLPAGES/HtmlAudio';
import HtmlVideo from './components/HTMLPAGES/HtmlVideo';
import HtmlYouTube from './components/HTMLPAGES/HtmlYouTube';

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


      {
      path: "images",
      element: <Images1 />
    },



       {
      path: "favicon",
      element: <Favicon />
    },


         {
      path: "pagetitle",
      element: <Pagetitle />
    },


          {
      path: "tables",
      element: <Tables />
    },

    
          {
      path: "lists",
      element: <Lists />
    },


     
          {
      path: "divs",
      element: <Div />
    },


           {
      path: "blockinline",
      element: <BlockInline />
    },


    

           {
      path: "htmlclass",
      element: <HTMLClass />
    },



              {
      path: "htmlid",
      element: <HTMLId />
    },


             {
      path: "htmliframes",
      element: <HTMLIframes />
    },


           {
      path: "htmljavascript",
      element: <HTMLJavascript />
    },


    

           {
      path: "htmlfilepath",
      element: <HTMLFilePaths />
    },


          {
      path: "htmlhead",
      element: <HTMLHead />
    },

         {
      path: "htmllayout",
      element: <HtmlLayout />
    },

    
         {
      path: "htmlresponsive",
      element: <HtmlResponsive />
    },

          {
      path: "htmlsemantic",
      element: <HtmlSemantics />
    },

           {
      path: "htmlform",
      element: <HtmlForms />
    },


    
           {
      path: "htmlformelement",
      element: <HtmlFormElements />
    },


           {
      path: "htmlinput",
      element: <HtmlInputTypes />
    },


            {
      path: "htmlattribute",
      element: <HtmlInputAttributes />
    },


                {
      path: "htmlformattribute",
      element: <HtmlFormAttributes />
    },


                {
      path: "htmlmultimedia",
      element: <HtmlMultimedia />
    },


              {
      path: "htmlaudio",
      element: <HtmlAudio />
    },


    
              {
      path: "htmlvideo",
      element: <HtmlVideo />
    },


      
              {
      path: "htmlyoutube",
      element: <HtmlYouTube />
    },













  ]);

  return <RouterProvider router={router} />;
};

export default App;
