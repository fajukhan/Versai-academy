
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Elements = () => {
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
                 <h1>HTML Elements</h1>
   
                   {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="basic"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="attribute"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
   
                 <p className="pt-5">
                An HTML element is defined by a start tag, some content, and an end tag.
                 </p>
   
                 <h2 className="pt-5">Learn HTML Using Notepad or TextEdit</h2>
                 <p>Web pages can be created and modified by using professional HTML editors.</p>
                 <p>
                  However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).
                 </p>
                 <p>We believe that using a simple text editor is a good way to learn HTML.</p>
                 <p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
                
   
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
                  
   <h2>HTML Elements</h2>
    <p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>

    <p><span class="tag">&lt;tagname&gt;</span>Content goes here...<span class="tag">&lt;/tagname&gt;</span></p>

    <p>Examples of some HTML elements:</p>

    <div class="code-box">
      &lt;h1&gt;My First Heading&lt;/h1&gt;<br/>
      &lt;p&gt;My first paragraph.&lt;/p&gt;
    </div>




                 </div>

   <div className="py-5">
    {/* <!-- Table --> */}
    <div class="table-responsive mt-3">
      <table class="table custom-table">
        <thead class="table-light">
          <tr>
            <th>Start tag</th>
            <th>Element content</th>
            <th>End tag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt;h1&gt;</td>
            <td>My First Heading</td>
            <td>&lt;/h1&gt;</td>
          </tr>
          <tr>
            <td>&lt;p&gt;</td>
            <td>My first paragraph.</td>
            <td>&lt;/p&gt;</td>
          </tr>
          <tr>
            <td>&lt;br&gt;</td>
            <td><em>none</em></td>
            <td><em>none</em></td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* <!-- Note --> */}
    <div class="note-box">
      <strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!
    </div>

  <hr></hr>

  <div className="py-5">
<h2>Nested HTML Elements</h2>
    <p>HTML elements can be nested (this means that elements can contain other elements).</p>
    <p>All HTML documents consist of nested HTML elements.</p>
    <p>The following example contains four HTML elements (<span class="tag">&lt;html&gt;</span>, <span class="tag">&lt;body&gt;</span>, <span class="tag">&lt;h1&gt;</span> and <span class="tag">&lt;p&gt;</span>):</p>

  </div>

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

export default Elements
