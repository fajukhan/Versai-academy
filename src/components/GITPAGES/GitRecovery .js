import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitRecovery = () => {
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
              <h1>Git Recovery</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitreflog">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="/">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git provides multiple ways to recover lost or accidentally deleted commits, branches, or files.
                Using commands like <code>reflog</code>, <code>reset</code>, and <code>checkout</code>, you can undo mistakes and retrieve important data.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Recover Deleted Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Find the commit where the branch was last present
git reflog

# Create a new branch at that commit
git checkout -b recovered-branch <commit-hash>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Undo Last Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Move HEAD to previous commit keeping changes staged
git reset --soft HEAD~1`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Restore Deleted File
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Restore a file from the last commit
git checkout HEAD -- file.txt`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Important Notes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Always check reflog before discarding commits
# Use reset carefully to avoid losing work
# Recovery options depend on how much time has passed`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Git allows recovery of deleted branches, commits, and files.</li>
                <li>Commands like <code>reflog</code>, <code>reset</code>, and <code>checkout</code> are essential tools for recovery.</li>
                <li>Always act carefully and verify changes to avoid permanent data loss.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitRecovery;
