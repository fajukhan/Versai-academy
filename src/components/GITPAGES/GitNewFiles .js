import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

import SidebarGit from "../SidebarGit";

const GitNewFiles = () => {
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
              <h1>GIT Working with New Files</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitgetstarted">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitstaging">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                When you create new files in your project directory, Git does not automatically track them. 
                You need to add them to the staging area before committing. This page explains how to handle new files in Git.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating a New File
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a new file named example.txt
echo "Hello Git" > example.txt`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Checking Untracked Files
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Check the status of files in the repository
git status

# You will see new files listed as 'untracked'`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Adding New Files to Staging
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Add a single file to staging
git add example.txt

# Add all new files to staging
git add .`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Committing New Files
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Commit the staged new file
git commit -m "Add example.txt file"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>New files are initially untracked by Git.</li>
                <li>Use <code>git add</code> to stage new files for committing.</li>
                <li>Commit staged files using <code>git commit -m "message"</code>.</li>
                <li>Always check <code>git status</code> to see untracked and staged files.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitNewFiles;
