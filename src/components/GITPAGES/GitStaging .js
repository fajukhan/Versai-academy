import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

import SidebarGit from "../SidebarGit";

const GitStaging = () => {
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
              <h1>GIT Staging</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitnewfiles">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitcommit">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In Git, the staging area (also called index) is where you place changes you want to include in your next commit. 
                This allows you to prepare snapshots of your project selectively before committing them to the repository.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Checking the Status of Files
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Check the status of files
git status

# Unstaged changes are shown under "Changes not staged for commit"
# New files are shown as "Untracked files"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Adding Files to Staging Area
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Add a single file to staging
git add filename.txt

# Add all changed and new files to staging
git add .`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Removing Files from Staging
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Unstage a file
git restore --staged filename.txt

# Check status again
git status`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Staged Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show staged changes
git diff --staged`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>The staging area allows selective preparation of changes before committing.</li>
                <li>Use <code>git add</code> to stage files and <code>git restore --staged</code> to unstage files.</li>
                <li>Check staged changes with <code>git diff --staged</code> and status with <code>git status</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitStaging;
