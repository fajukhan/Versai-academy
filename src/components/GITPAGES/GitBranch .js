import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitBranch = () => {
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
              <h1>GIT Branch</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githelp">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitmerge">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git branches allow you to create separate lines of development within a repository. 
                Branching is useful for experimenting with new features without affecting the main codebase.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Existing Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# List all local branches
git branch

# List all remote branches
git branch -r`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating a New Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a new branch named "feature"
git branch feature

# Switch to the new branch
git checkout feature

# Or create and switch in one command
git checkout -b feature`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Switching Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Switch to an existing branch
git checkout main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Deleting a Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Delete a local branch
git branch -d feature

# Force delete a local branch
git branch -D feature`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Merging Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Merge "feature" branch into current branch
git merge feature`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git branch</code> to view, create, and delete branches.</li>
                <li>Switch branches using <code>git checkout &lt;branch&gt;</code> or <code>git switch &lt;branch&gt;</code>.</li>
                <li>Create and switch in one step: <code>git checkout -b &lt;branch&gt;</code>.</li>
                <li>Merge branches using <code>git merge &lt;branch&gt;</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitBranch;
