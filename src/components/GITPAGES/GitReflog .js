import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitReflog = () => {
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
              <h1>Git Reflog</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitrebase">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitrecovery">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>git reflog</code> command shows a log of all the changes made to the tip of branches and other references.
                It is useful for finding commits that are not visible through the regular commit history.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: View Reflog Entries
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show the reflog entries
git reflog`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Checkout Using Reflog
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Checkout to a previous state using the reflog reference
git checkout HEAD@{2}`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Reset Using Reflog
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Reset the branch to a previous state
git reset --hard HEAD@{3}`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Important Notes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Reflog helps recover lost commits
# Entries are kept for a limited time (default 90 days)
# Useful for debugging and tracking branch changes`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>git reflog</code> displays changes in branch references over time.</li>
                <li>You can use it to recover lost commits or checkout earlier states.</li>
                <li>It’s a powerful tool for debugging and tracing repository history.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitReflog;
