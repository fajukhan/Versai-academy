
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Paragraph = () => {
  return (
  <>
  
     {/* NavBar */}
       <Navbar />
   
         {/* Section-1 */}
         <section  className="p-0">
           <div className="bg-white">
             <div className="row g-0">
               {/* Sidebar (Left - col-2) */}
               <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
                 <h5 className="fw-bold">HTML Tutorial</h5>
                 <ul className="list-unstyled">
          <li><a href="html">HTML HOME</a></li>
          <li><a href="htmlhome">HTML Introduction</a></li>
          <li><a href="editor">HTML Editors</a></li>
          <li><a href="basic">HTML Basic</a></li>
          <li><a href="elements">HTML Elements</a></li>
          <li><a href="attribute">HTML Attributes</a></li>
          <li><a href="heading">HTML Headings</a></li>
          <li><a href="paragraph">HTML Paragraphs</a></li>
          <li><a href="/">HTML Styles</a></li>
          <li><a href="/">HTML Formatting</a></li>
          <li><a href="/">HTML Quotations</a></li>
          <li><a href="/">HTML Comments</a></li>
          <li><a href="/">HTML Colors</a></li>
          <li><a href="/">HTML CSS</a></li>
          <li><a href="/">HTML Links</a></li>
          <li><a href="/">HTML Images</a></li>
          <li><a href="/">HTML Favicon</a></li>
          <li><a href="/">HTML Page Title</a></li>
          <li><a href="/">HTML Tables</a></li>
          <li><a href="/">HTML Lists</a></li>
          <li><a href="/">HTML Div</a></li>
          <li><a href="/">HTML Block & Inline</a></li>
          <li><a href="/">HTML Class</a></li>
          <li><a href="/">HTML Id</a></li>
          <li><a href="/">HTML Iframes</a></li>
          <li><a href="/">HTML Javascript</a></li>
          <li><a href="/">HTML File Paths</a></li>
          <li><a href="/">HTML Head</a></li>
          <li><a href="/">HTML Layout</a></li>
          <li><a href="/">HTML Responsive</a></li>
          <li><a href="/">HTML Semantics</a></li>
        </ul>

         <h5 className="fw-bold">HTML Forms</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">HTML Forms</a></li>
          <li><a href="/">HTML Form Elements</a></li>
          <li><a href="/">HTML Input Types</a></li>
          <li><a href="/">HTML Input Attributes</a></li>
          <li><a href="/">HTML Form Attributes</a></li>
        
        </ul>
        <h5 className="fw-bold">HTML Media</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">HTML Media</a></li>
          <li><a href="/">HTML Audio</a></li>
          <li><a href="/">HTML Video</a></li>
          <li><a href="/">HTML Youtube</a></li>
          
        
        </ul>
               </div>
   
               {/* Main Content (Middle - col-8) */}
               <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
                 <h1>HTML Paragraphs</h1>
   
                   {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="attribute"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="basic"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
   
                 <p className="pt-5">
                A paragraph always starts on a new line, and is usually a block of text.
                 </p>
             
             
                 <h2 className="pt-5">HTML Paragraphs</h2>
                 <p>The HTML element defines a paragraph.</p>
                 <p>
                A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
                 </p>
                 

                 <div className="pt-5">
                      {/* <!-- The href Attribute --> */}
  <h2>The href Attribute</h2>
  <p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:</p>

  <div class="example-box">
    <p><code>&lt;a href="https://www.w3schools.com"&gt;Visit W3Schools&lt;/a&gt;</code></p>
    <a href="https://www.w3schools.com" target="_blank" class="d-block mt-2 text-decoration-none">
      👉 Visit W3Schools (Live Link)
    </a>
    <button class="try-btn">Try it Yourself »</button>
  </div>


                 </div>



  <hr />


  <div className="py-5">

    {/* <!-- The src Attribute --> */}
  <h2>The src Attribute</h2>
  <p>The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image:</p>

  <div class="example-box">
    <p><code>&lt;img src="https://via.placeholder.com/150"&gt;</code></p>
    <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow-sm mt-2" alt="Demo Image"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>

  {/* <!-- The width and height Attributes --> */}
  <h2>The width and height Attributes</h2>
  <p>The <code>&lt;img&gt;</code> tag should also contain the <code>width</code> and <code>height</code> attributes:</p>

  <div class="example-box">
    <p><code>&lt;img src="https://via.placeholder.com/500x300" width="500" height="300"&gt;</code></p>
    <img src="https://via.placeholder.com/500x300" class="img-fluid rounded shadow-sm mt-2" width="500" height="300" alt="Demo Image with Size"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>

  {/* <!-- The alt Attribute --> */}
  <h2>The alt Attribute</h2>
  <p>The required <code>alt</code> attribute specifies an alternate text for an image:</p>

  <div class="example-box">
    <p><code>&lt;img src="https://via.placeholder.com/200" alt="Girl with a jacket"&gt;</code></p>
    <img src="https://via.placeholder.com/200" class="img-fluid rounded shadow-sm mt-2" alt="Girl with a jacket"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>

  {/* <!-- Broken Image Example --> */}
  <div class="example-box">
    <p><code>&lt;img src="wrongpath.jpg" alt="Girl with a jacket"&gt;</code></p>
    <img src="wrongpath.jpg" class="img-fluid rounded shadow-sm mt-2" alt="Girl with a jacket"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>




  </div>

   
 

  <hr/>


               
   
                 <div></div>
                 <div></div>
   

               </div>
   
               {/* Ads (Right - col-2) */}
               <div className="col-lg-2 col-md-3 col-12">
                 <div className="ads-box text-center p-3">
                   <h6 className="fw-bold">ADVERTISEMENT</h6>
                   <img
                     src="https://via.placeholder.com/160x600?text=Ad+Banner"
                     alt="ads"
                     className="img-fluid mt-2"
                   />
                 </div>
               </div>
             </div>
           </div>
         </section>
    
    
    
    {/* Footer */}
    <Footer />
    
  
  
  
  
  </>
  )
}

export default Paragraph


