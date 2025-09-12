import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHelp = () => {
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
              <h1>GIT Help</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githistory">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitbranch">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git provides built-in help and documentation for its commands. You can use the help command to get information about any Git command or configuration.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Getting Help for a Command
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Display help for a specific command
git help <command>

# Example: Help for git commit
git help commit`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Using --help Option
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Another way to get help for a command
git <command> --help

# Example: git status help
git status --help`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Git Manual
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Open the Git manual in your terminal
man git`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Git Help Summary
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Display a summary of commonly used Git commands
git help -g`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git help &lt;command&gt;</code> to get help for any Git command.</li>
                <li>You can also use <code>git &lt;command&gt; --help</code> as an alternative.</li>
                <li>Open the Git manual using <code>man git</code>.</li>
                <li>Use <code>git help -g</code> to see a summary of common commands.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHelp;
