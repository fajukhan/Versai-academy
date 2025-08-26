import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Tables = () => {
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
              <h1>HTML Tables</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="pagetitle">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="lists">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
             HTML tables allow you to organize data into rows and columns. Let’s explore different table properties.

              
              </p>
 {/* Table Border Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Table Border Example</div>
                <div className="card-body">
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alice</td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>28</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<table border="1">...</table>`}</code>
                  </div>
                </div>
              </div>


   {/* Table Size Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Table Size Example</div>
                <div className="card-body">
                  <table className="table w-75 table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pen</td>
                        <td>$2</td>
                      </tr>
                      <tr>
                        <td>Book</td>
                        <td>$5</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<table style="width:75%">...</table>`}</code>
                  </div>
                </div>
              </div>

 
              {/* Table Padding & Spacing */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Cell Padding & Spacing</div>
                <div className="card-body">
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th className="p-3">Item</th>
                        <th className="p-3">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">Apple</td>
                        <td className="p-3">10</td>
                      </tr>
                      <tr>
                        <td className="p-3">Orange</td>
                        <td className="p-3">5</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="small">Here padding is applied using Bootstrap <code>.p-3</code>.</p>
                </div>
              </div>
 
        {/* Colspan & Rowspan */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Colspan & Rowspan Example</div>
                <div className="card-body">
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th colSpan="2">Marks</th>
                      </tr>
                      <tr>
                        <th></th>
                        <th>Math</th>
                        <th>Science</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="2">Alice</td>
                        <td>90</td>
                        <td>85</td>
                      </tr>
                      <tr>
                        <td>92</td>
                        <td>88</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>



              {/* Colgroup Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Table with Colgroup</div>
                <div className="card-body">
                  <table className="table table-bordered text-center">
                    <colgroup>
                      <col style={{ backgroundColor: "#f8d7da" }} />
                      <col style={{ backgroundColor: "#d1ecf1" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Capital</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>India</td>
                        <td>New Delhi</td>
                      </tr>
                      <tr>
                        <td>USA</td>
                        <td>Washington D.C.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>




  

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Tables




