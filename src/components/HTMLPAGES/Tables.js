import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";


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
          <Sidebar />

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




