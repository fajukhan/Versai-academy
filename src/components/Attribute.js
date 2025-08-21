
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Attribute = () => {
  return (
  <>
  
     {/* NavBar */}
       <Navbar />
   
         {/* Section-1 */}
         <section className="p-0">
           <div className="bg-white">
             <div className="row g-0">
               {/* Sidebar (Left - col-2) */}
               <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
                 <h5 className="fw-bold">HTML Tutorial</h5>
                 <ul className="list-unstyled">
                   <li>
                     <a href="html">HTML HOME</a>
                   </li>
                   <li>
                     <a href="htmlhome">HTML Introduction</a>
                   </li>
                   <li>
                     <a href="editor">HTML Editors</a>
                   </li>
                   <li>
                     <a href="basic">HTML Basic</a>
                   </li>
                   <li>
                     <a href="elements">HTML Elements</a>
                   </li>
                   <li>
                     <a href="attribute">HTML Attributes</a>
                   </li>
                   <li>
                     <a href="heading">HTML Headings</a>
                   </li>
                   <li>
                     <a href="paragraph">HTML Paragraphs</a>
                   </li>
                   <li>
                     <a href="/">HTML Styles</a>
                   </li>
                   <li>
                     <a href="/">HTML Formatting</a>
                   </li>
                   <li>
                     <a href="/">HTML Quotations</a>
                   </li>
                   <li>
                     <a href="/">HTML Comments</a>
                   </li>
                   <li>
                     <a href="/">HTML Colors</a>
                   </li>
                   <li>
                     <a href="/">HTML CSS</a>
                   </li>
                   <li>
                     <a href="/">HTML Links</a>
                   </li>
                   <li>
                     <a href="/">HTML Images</a>
                   </li>
                   <li>
                     <a href="/">HTML Favicon</a>
                   </li>
                   <li>
                     <a href="/">HTML Page Title</a>
                   </li>
                   <li>
                     <a href="/">HTML Tables</a>
                   </li>
                   <li>
                     <a href="/">HTML Lists</a>
                   </li>
                   <li>
                     <a href="/">HTML Block & Inline</a>
                   </li>
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
                 <h1>HTML Attributes</h1>
   
                   {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="elements"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="heading"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
   
                 <p className="pt-5">
                 HTML attributes provide additional information about HTML elements.
                 </p>
   
                 <h2 className="pt-5">HTML Attributes</h2>
    <ul>
      <li>All HTML elements can have <span class="highlight">attributes</span></li>
      <li>Attributes provide <span class="highlight">additional information</span> about elements</li>
      <li>Attributes are always specified in the <span class="highlight">start tag</span></li>
      <li>Attributes usually come in name/value pairs like: <code>name="value"</code></li>
    </ul>
   
               
   
                 <div></div>
                 <div></div>
   
   <div className="py-5">
                  
  <h4 class="fw-bold">The href Attribute</h4>
    <p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <span class="highlight">href</span> attribute specifies the URL:</p>
    <div class="code-box mb-2">
      &lt;a href="https://www.w3schools.com"&gt;Visit W3Schools&lt;/a&gt;
    </div>
    <button class="btn btn-custom">Try it Yourself »</button>


<div className="py-5">
    <h4 class="fw-bold">The src Attribute</h4>
    <p>The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page.</p>
    <div class="code-box mb-2">
      &lt;img src="img_girl.jpg"&gt;
    </div>
    <button class="btn btn-custom">Try it Yourself »</button>
</div>



<h4 class="fw-bold">The alt Attribute</h4>
    <p>The required <span class="highlight">alt</span> attribute specifies alternate text for an image.</p>
    <div class="code-box mb-2">
      &lt;img src="img_girl.jpg" alt="Girl with a jacket"&gt;
    </div>
    <button class="btn btn-custom">Try it Yourself »</button>

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

export default Attribute
