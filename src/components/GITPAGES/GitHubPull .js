import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubPull = () => {
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
              <h1>Pull From GitHub</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubeditcode">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pushtogithub">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Pulling from GitHub fetches and integrates changes from a remote repository into your local repository. 
                It ensures your local copy stays up-to-date with the remote repository.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pull Latest Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Pull the latest changes from the remote repository
git pull origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pull from a Specific Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Pull changes from a specific branch
git pull origin feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Handling Merge Conflicts
              </h3>
              <pre className="bg-light p-3 rounded">
{`# If there are conflicts, Git will mark them in the files
# Open the conflicted files and resolve the issues
# Stage the resolved files
git add <resolved-files>

# Commit the merge
git commit -m "Resolve merge conflicts"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git pull origin main</code> to fetch and merge changes from the remote repository.</li>
                <li>Specify a branch name to pull changes from a different branch.</li>
                <li>Resolve merge conflicts manually, then stage and commit the changes.</li>
                <li>Pulling keeps your local repository up-to-date with remote changes.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubPull;
