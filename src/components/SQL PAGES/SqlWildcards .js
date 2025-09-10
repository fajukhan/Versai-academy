import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import SidebarSql from "../SidebarSql";
const SqlWildcards = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

                                                            {/* Sidebar (Left - col-2) */}
              <SidebarSql />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>SQL Wildcards</h1>
          

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="sqllike">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="sqlinoperator">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

                  <p className="lead py-5">
                Wildcards are used with the <code>LIKE</code> operator to search 
                for data that matches a specific pattern. They make it easier 
                to match flexible string conditions.
              </p>

              <h4>Wildcard Symbols in SQL:</h4>
              <ul>
                <li><code>%</code> → Represents zero, one, or multiple characters</li>
                <li><code>_</code> → Represents a single character</li>
                <li><code>[abc]</code> → Matches any single character inside the brackets</li>
                <li><code>[a-z]</code> → Matches any single character within the given range</li>
                <li><code>[^abc]</code> or <code>[!abc]</code> → Matches any character NOT in the set</li>
              </ul>

              {/* Example Table */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example Table: Products</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Category</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Apple Juice</td><td>Beverages</td><td>10</td></tr>
                      <tr><td>2</td><td>Banana Shake</td><td>Beverages</td><td>12</td></tr>
                      <tr><td>3</td><td>Choco Bar</td><td>Snacks</td><td>8</td></tr>
                      <tr><td>4</td><td>Avocado Salad</td><td>Salads</td><td>15</td></tr>
                      <tr><td>5</td><td>Blueberry Muffin</td><td>Bakery</td><td>7</td></tr>
                      <tr><td>6</td><td>Carrot Cake</td><td>Bakery</td><td>9</td></tr>
                    </tbody>
                  </table>
                  <p>
                    The <b>Products</b> table stores product details including their name, category, and price.
                  </p>
                </div>
              </div>

              {/* Example 1: % Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Using % Wildcard</div>
                <div className="card-body">
                  <p>Find all products starting with 'A':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE 'A%';`}
                  </pre>
                  <p><b>Result:</b> Apple Juice, Avocado Salad</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: _ Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using _ Wildcard</div>
                <div className="card-body">
                  <p>Find all products where the second letter is 'a':</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '_a%';`}
                  </pre>
                  <p><b>Result:</b> Banana Shake, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: [ ] Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Using [ ] Wildcard</div>
                <div className="card-body">
                  <p>Find all products starting with A, B, or C:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '[ABC]%';`}
                  </pre>
                  <p><b>Result:</b> Apple Juice, Banana Shake, Choco Bar, Avocado Salad, Blueberry Muffin, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: [a-z] Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Using [a-z] Range</div>
                <div className="card-body">
                  <p>Find all products starting with a letter between A and C:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '[A-C]%';`}
                  </pre>
                  <p><b>Result:</b> Apple Juice, Banana Shake, Choco Bar, Avocado Salad, Blueberry Muffin, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5: [^ ] or [! ] Wildcard */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Excluding Characters</div>
                <div className="card-body">
                  <p>Find all products NOT starting with A:</p>
                  <pre className="bg-light p-3 rounded">
{`SELECT * 
FROM Products
WHERE ProductName LIKE '[^A]%';`}
                  </pre>
                  <p><b>Result:</b> Banana Shake, Choco Bar, Blueberry Muffin, Carrot Cake</p>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><code>%</code> → Zero or more characters</li>
                    <li><code>_</code> → Exactly one character</li>
                    <li><code>[abc]</code> → Any one character from a set</li>
                    <li><code>[a-z]</code> → Any one character from a range</li>
                    <li><code>[^abc]</code> → Any character not in the set</li>
                  </ul>
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

export default SqlWildcards;
