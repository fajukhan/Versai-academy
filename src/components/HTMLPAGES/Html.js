import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import Sidebar from '../Sidebar';

const Html = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
            
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <h1>HTML Tutorial</h1>

              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="/html"> 
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="/htmlhome"> 
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div> 

              <h2 className="pt-5">Learn HTML</h2>
              <p>HTML is the standard markup language for Web pages.</p>
              <p>With HTML you can create your own Website.</p>
              <p>HTML is easy to learn - You will enjoy it!</p>

              {/* Example Section */}
              <div className="row justify-content-start pt-3">
                <div className="col-lg-12 col-md-12">
                  <h4 className="fw-bold mb-3">Example</h4>
                  <div className="code-box mb-3">
                    &lt;!DOCTYPE html&gt;<br/>
                    &lt;html&gt;<br/>
                    &lt;head&gt;<br/>
                    &nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;<br/>
                    &lt;/head&gt;<br/>
                    &lt;body&gt;<br/>
                    &nbsp;&nbsp;&lt;h1&gt;This is a Heading&lt;/h1&gt;<br/>
                    &nbsp;&nbsp;&lt;p&gt;This is a paragraph.&lt;/p&gt;<br/>
                    &lt;/body&gt;<br/>
                    &lt;/html&gt;
                  </div>
                  <button className="custom-btn">Try it Yourself »</button>
                </div>
              </div>

              {/* References Section */}
              <div className="py-5">
                <h2 className="fw-bold mb-3">HTML References</h2>
                <p className="text-muted mb-4">
                  At W3Schools you will find complete references about HTML elements, attributes, events,
                  color names, entities, character-sets, URL encoding, language codes, HTTP messages,
                  browser support, and more:
                </p>
                <div className="row g-3">
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">HTML Elements</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Browser Support</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Attributes</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Global Attributes</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Event Attributes</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Color Names</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Canvas</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Audio/Video DOM</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Character Sets</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">URL Encoding</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Language Codes</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Country Codes</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">HTTP Messages</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Px to Em Converter</div></div>
                  <div className="col-lg-4 col-md-6 col-12"><div className="ref-card">Keyboard Shortcuts</div></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Html;
