import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitReset = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

            {/* Sidebar (Left - col-2) */}
            <SidebarGit />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Git Reset</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitrevert">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitamend">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>git reset</code> command is used to undo changes by moving the HEAD to a previous commit. 
                It can modify the staging area and working directory depending on the reset mode used.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Soft Reset
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Move HEAD to previous commit but keep changes staged
git reset --soft HEAD~1`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Mixed Reset (default)
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Move HEAD to previous commit and unstage changes
git reset HEAD~1`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Hard Reset
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Move HEAD and discard all changes in working directory
git reset --hard HEAD~1`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Important Notes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# --soft keeps all changes staged
# --mixed unstages changes but keeps them in working directory
# --hard discards all changes`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>git reset</code> is a powerful tool to undo commits.</li>
                <li>Use <code>--soft</code>, <code>--mixed</code>, or <code>--hard</code> depending on what you want to reset.</li>
                <li>Be careful with <code>--hard</code> as it discards changes permanently.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitReset;
