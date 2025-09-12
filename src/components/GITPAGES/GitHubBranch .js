import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubBranch = () => {
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
              <h1>Branch in GitHub</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pushtogithub">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pullbranchfromgithub">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Branches in GitHub allow you to work on different versions of your project simultaneously. 
                They are used to develop features, fix bugs, or experiment without affecting the main codebase.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                List All Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# List all branches in your repository
git branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Create a New Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a new branch named "feature-branch"
git branch feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Switch to a Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Switch to "feature-branch"
git checkout feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Create and Switch in One Command
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create and switch to a new branch in one step
git checkout -b feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Delete a Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Delete a branch locally
git branch -d feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Branches allow parallel development without affecting the main branch.</li>
                <li>Use <code>git branch</code> to list, create, and delete branches.</li>
                <li>Switch branches using <code>git checkout</code> or <code>git checkout -b</code>.</li>
                <li>Work on features or fixes separately and later merge them into the main branch.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubBranch;
