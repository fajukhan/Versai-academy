import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHistory = () => {
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
              <h1>GIT History</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitstash">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githelp">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git keeps a history of all commits in your repository. You can view, search, and analyze this history to understand the changes made over time.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Commit History
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show full commit history
git log

# Show history in one-line format
git log --oneline`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing History with Graph
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show commit history with branch and merge graph
git log --graph --oneline --all --decorate`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Changes in a Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show changes introduced by a commit
git show <commit-hash>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Comparing Commits
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Compare two commits
git diff <commit-hash-1> <commit-hash-2>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git log</code> to view commit history.</li>
                <li>Graph option (<code>--graph --decorate --all</code>) shows branches and merges visually.</li>
                <li>Use <code>git show &lt;commit-hash&gt;</code> to inspect a specific commit.</li>
                <li>Compare commits with <code>git diff &lt;commit1&gt; &lt;commit2&gt;</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHistory;
