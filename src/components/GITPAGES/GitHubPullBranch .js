import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubPullBranch = () => {
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
              <h1>Pull Branch From GitHub</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubbranch">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pushbranchtogithub">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Pulling a branch from GitHub allows you to fetch changes from a specific branch of the remote repository and merge them into your local branch.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                List Remote Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# List all branches in the remote repository
git fetch
git branch -r`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pull Specific Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Pull changes from a remote branch into the current branch
git pull origin feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Create Local Branch and Track Remote
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a new local branch and track the remote branch
git checkout -b feature-branch origin/feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Handle Merge Conflicts
              </h3>
              <pre className="bg-light p-3 rounded">
{`# After pulling, if conflicts arise
# Open the conflicted files and resolve them
git add <resolved-files>
git commit -m "Resolve merge conflicts"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git fetch</code> and <code>git branch -r</code> to view remote branches.</li>
                <li>Pull a specific branch with <code>git pull origin branch-name</code>.</li>
                <li>Create a local branch and track a remote branch with <code>git checkout -b</code>.</li>
                <li>Resolve merge conflicts by editing files and committing the changes.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubPullBranch;
