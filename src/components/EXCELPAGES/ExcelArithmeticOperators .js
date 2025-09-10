import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelArithmeticOperators = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
                                                       {/* Sidebar (Left - col-2) */}
                       <SidebarExcel />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">

              <h1>Excel Arithmetic Operators</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelabsolutereference">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelparentheses">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Arithmetic operators in Excel allow you to perform basic mathematical calculations in formulas. These operators include addition, subtraction, multiplication, division, and exponentiation.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Excel Arithmetic Operators
              </h3>
              <ul>
                <li><strong>+</strong> : Addition (e.g., =A1 + B1)</li>
                <li><strong>-</strong> : Subtraction (e.g., =A1 - B1)</li>
                <li><strong>*</strong> : Multiplication (e.g., =A1 * B1)</li>
                <li><strong>/</strong> : Division (e.g., =A1 / B1)</li>
                <li><strong>^</strong> : Exponentiation (e.g., =A1 ^ B1)</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Addition
              </h3>
              <p>Add two numbers using the + operator.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 10
B1: 20
Formula in C1: =A1 + B1
Result in C1: 30`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Multiplication
              </h3>
              <p>Multiply two numbers using the * operator.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 5
B1: 6
Formula in C1: =A1 * B1
Result in C1: 30`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Exponentiation
              </h3>
              <p>Calculate the power of a number using ^ operator.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 2
B1: 3
Formula in C1: =A1 ^ B1
Result in C1: 8`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use parentheses <strong>()</strong> to control the order of operations.</li>
                <li>Excel follows standard arithmetic order (PEMDAS): Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.</li>
                <li>Combine arithmetic operators with cell references and functions for dynamic calculations.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelArithmeticOperators;
