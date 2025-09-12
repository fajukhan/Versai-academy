import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitCommit = () => {
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
              <h1>GIT Commit</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitstaging">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gittagging">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Committing in Git is the process of saving a snapshot of your staged changes to the repository. 
                Each commit records a set of changes along with a commit message describing what was done.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Making a Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Commit all staged changes with a message
git commit -m "Initial commit"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Commit History
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show the list of commits in the current branch
git log

# Show commits in a one-line format
git log --oneline`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Amending the Last Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Amend the last commit (e.g., to change the commit message)
git commit --amend -m "Updated commit message"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Committing Specific Files
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Commit only a specific file
git commit filename.txt -m "Commit specific file"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git commit -m "message"</code> to save staged changes.</li>
                <li>View commit history using <code>git log</code> or <code>git log --oneline</code>.</li>
                <li>Amend the last commit if you need to change the message or include new changes.</li>
                <li>You can commit all staged files or only specific files.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitCommit;
