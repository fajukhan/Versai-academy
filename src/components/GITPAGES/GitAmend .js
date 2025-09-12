import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitAmend = () => {
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
              <h1>Git Amend</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitreset">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitrebase">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>git commit --amend</code> command is used to modify the most recent commit. 
                It allows you to change the commit message or include additional changes without creating a new commit.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Amend Commit Message
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Edit the commit message of the last commit
git commit --amend`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Add Changes to Last Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Stage your changes
git add file.txt

# Amend the last commit to include these changes
git commit --amend --no-edit`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Important Notes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Amend changes should only be used before pushing commits
# Avoid amending commits that have been shared with others`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>git commit --amend</code> helps you update the last commit without creating a new one.</li>
                <li>You can modify the commit message or include additional changes.</li>
                <li>Use it cautiously, especially if the commit has been shared with others.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitAmend;
