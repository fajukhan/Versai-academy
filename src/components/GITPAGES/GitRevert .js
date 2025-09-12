import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitRevert = () => {
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
              <h1>Git Revert</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubsendpullrequest">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitreset">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>git revert</code> command is used to undo changes by creating a new commit that reverses the effects of a previous commit, without modifying the project’s history.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Find Commit to Revert
              </h3>
              <pre className="bg-light p-3 rounded">
{`# View commit history
git log

# Note the commit hash you want to revert`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Revert a Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Revert the commit using its hash
git revert abc1234

# Follow the instructions to edit the commit message if necessary`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Revert Multiple Commits
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Revert a range of commits
git revert HEAD~3..HEAD`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Important Notes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Revert does not delete commits; it creates new commits
# Safe for shared repositories as it preserves history`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>git revert</code> undoes changes by creating a new commit.</li>
                <li>It is a safe way to undo changes without altering the history.</li>
                <li>You can revert individual commits or a range of commits.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitRevert;
