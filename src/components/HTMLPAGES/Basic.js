import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Basic = () => {
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
          <li><a href="html">HTML HOME</a></li>
          <li><a href="htmlhome">HTML Introduction</a></li>
          <li><a href="editor">HTML Editors</a></li>
          <li><a href="basic">HTML Basic</a></li>
          <li><a href="elements">HTML Elements</a></li>
          <li><a href="attribute">HTML Attributes</a></li>
          <li><a href="heading">HTML Headings</a></li>
          <li><a href="paragraph">HTML Paragraphs</a></li>
          <li><a href="style">HTML Styles</a></li>
          <li><a href="formatting">HTML Formatting</a></li>
          <li><a href="quotation">HTML Quotations</a></li>
          <li><a href="comments">HTML Comments</a></li>
          <li><a href="colors">HTML Colors</a></li>
          <li><a href="css2">HTML CSS</a></li>
          <li><a href="links">HTML Links</a></li>
          <li><a href="images">HTML Images</a></li>
          <li><a href="favicon">HTML Favicon</a></li>
          <li><a href="pagetitle">HTML Page Title</a></li>
          <li><a href="tables">HTML Tables</a></li>
          <li><a href="lists">HTML Lists</a></li>
          <li><a href="divs">HTML Div</a></li>
          <li><a href="blockinline">HTML Block & Inline</a></li>
          <li><a href="htmlclass">HTML Class</a></li>
          <li><a href="htmlid">HTML Id</a></li>
          <li><a href="htmliframes">HTML Iframes</a></li>
          <li><a href="htmljavascript">HTML Javascript</a></li>
          <li><a href="htmlfilepath">HTML File Paths</a></li>
          <li><a href="htmlhead">HTML Head</a></li>
          <li><a href="htmllayout">HTML Layout</a></li>
          <li><a href="htmlresponsive">HTML Responsive</a></li>
          <li><a href="htmlsemantic">HTML Semantics</a></li>
        </ul>

         <h5 className="fw-bold">HTML Forms</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="htmlform">HTML Forms</a></li>
          <li><a href="htmlformelement">HTML Form Elements</a></li>
          <li><a href="htmlinput">HTML Input Types</a></li>
         <li><a href="htmlattribute">HTML Input Attributes</a></li>
            <li><a href="htmlformattribute">HTML Form Attributes</a></li>
        
        </ul>
        <h5 className="fw-bold">HTML Media</h5>
        <ul className="list-unstyled">
        
         
           <li><a href="htmlmultimedia">HTML Media</a></li>
        <li><a href="htmlaudio">HTML Audio</a></li>
          <li><a href="htmlvideo">HTML Video</a></li>
        <li><a href="htmlyoutube">HTML Youtube</a></li>
          
        
        </ul>
               </div>
   
               {/* Main Content (Middle - col-8) */}
               <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
                 <h1>HTML Basic Examples</h1>
   
                   {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="editor"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="elements"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
   
                 <p className="pt-5">
                  In this chapter we will show some basic HTML examples.
                 </p>
                 <p>Don't worry if we use tags you have not learned about yet.</p>
   
                   <h2>HTML Documents</h2>
      <p>All HTML documents must start with a document type declaration: 
        <span class="tag">&lt;!DOCTYPE html&gt;</span>.
      </p>
      <p>The HTML document itself begins with <span class="tag">&lt;html&gt;</span> and ends with 
        <span class="tag">&lt;/html&gt;</span>.
      </p>
      <p>The visible part of the HTML document is between <span class="tag">&lt;body&gt;</span> and 
        <span class="tag">&lt;/body&gt;</span>.
      </p>
                
   
                 {/* Example Section */}
                 <div className="row justify-content-start">
                   <div className="col-lg-10 col-md-12">
                     {/* Heading */}
                     <h4 className="fw-bold mb-3">Example</h4>
   
                     {/* Code Box */}
                     <div className="code-box mb-3">
                       &lt;!DOCTYPE html&gt;
                       <br />
                       &lt;html&gt;
                       <br />
                       &lt;head&gt;
                       <br />
                       &nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;
                       <br />
                       &lt;/head&gt;
                       <br />
                       &lt;body&gt;
                       <br />
                       <br />
                       &nbsp;&nbsp;&lt;h1&gt;My First Heading&lt;/h1&gt;
                       <br />
                       &nbsp;&nbsp;&lt;p&gt;My first paragraph.&lt;/p&gt;
                       <br />
                       <br />
                       &lt;/body&gt;
                       <br />
                       &lt;/html&gt;
                     </div>
   
                     {/* Button */}
                     <button className="custom-btn">Try it Yourself »</button>
                   </div>
                 </div>
   
                 <div></div>
                 <div></div>
   
   <div className="py-5">
                  
   <h2>The &lt;!DOCTYPE&gt; Declaration</h2>
      <p>The <span class="tag">&lt;!DOCTYPE&gt;</span> declaration represents the document type, and helps browsers to display web pages correctly.</p>
      <p>It must only appear once, at the top of the page (before any HTML tags).</p>
      <p>The <span class="tag">&lt;!DOCTYPE&gt;</span> declaration is not case sensitive.</p>
      <p>The <span class="tag">&lt;!DOCTYPE&gt;</span> declaration for HTML5 is:</p>

      <div class="code-box">
        &lt;!DOCTYPE html&gt;
      </div>



                 </div>


      <div className="py-5">
         <h2>HTML Paragraphs</h2>
      <p>HTML paragraphs are defined with the <span class="tag">&lt;p&gt;</span> tag:</p>
      
      <h5>Example</h5>
      <div class="code-box">
        &lt;p&gt;This is a paragraph.&lt;/p&gt;<br/>
        &lt;p&gt;This is another paragraph.&lt;/p&gt;
      </div>
      <button class="custom-btn mt-2">Try it Yourself »</button>
        
        </div>       



        <div className="py-5">
             <h2>HTML Links</h2>
      <p>HTML links are defined with the <span class="tag">&lt;a&gt;</span> tag:</p>

      <h5>Example</h5>
      <div class="code-box">
        &lt;a href="https://www.w3schools.com"&gt;This is a link&lt;/a&gt;
      </div>
      <button class="custom-btn mt-2">Try it Yourself »</button>

      <p class="mt-3">The link's destination is specified in the 
        <span class="tag">href</span> attribute.
      </p>
      <p>Attributes are used to provide additional information about HTML elements.</p>


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

export default Basic
