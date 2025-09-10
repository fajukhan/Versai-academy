import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFilter = () => {
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

              <h1>Excel Filter</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelsort">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceltables">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Filtering in Excel allows you to display only the rows that meet certain criteria, making it easier to analyze specific subsets of your data.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply a Filter
              </h3>
              <ul>
                <li>Select the header row of your data.</li>
                <li>Go to the <strong>Data</strong> tab and click <strong>Filter</strong>.</li>
                <li>Dropdown arrows will appear in the header cells.</li>
                <li>Click the dropdown arrow, choose the filter criteria, and click <strong>OK</strong>.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Filter by Category
              </h3>
              <p>This example shows how to filter rows based on a category.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product    B1: Category
A2: Apple      Fruit
A3: Carrot     Vegetable
A4: Banana     Fruit
A5: Broccoli   Vegetable

Action:
- Select A1:B5
- Click Data > Filter
- Click dropdown in 'Category'
- Select 'Fruit'
- Click OK

Result:
Only rows with 'Fruit' in Category are visible`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Filter by Value
              </h3>
              <p>You can also filter by numerical or text values for deeper data analysis.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Name    B1: Score
A2: Alice   85
A3: Bob     70
A4: Charlie 90
A5: Dave    75

Action:
- Select A1:B5
- Click Data > Filter
- Click dropdown in 'Score'
- Choose 'Number Filters' > 'Greater Than'
- Enter '80'
- Click OK

Result:
Only rows where 'Score' is greater than 80 are visible`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Filtering helps you quickly find relevant data without deleting or moving rows.</li>
                <li>You can apply multiple filters across different columns for advanced data analysis.</li>
                <li>Clear filters by selecting Data  Clear to return to the full dataset.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFilter;
