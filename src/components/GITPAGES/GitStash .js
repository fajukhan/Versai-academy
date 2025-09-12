import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

import SidebarGit from "../SidebarGit";

const GitStash = () => {
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
              <h1>GIT Stash</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gittagging">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githistory">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git Stash allows you to temporarily save your uncommitted changes in a stack, so you can work on something else and later reapply them. 
                It is useful when you need to switch branches but do not want to commit incomplete work.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Stashing Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Save uncommitted changes to a stash
git stash

# Save with a message
git stash save "WIP: working on feature"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Stashed Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# List all stashed changes
git stash list

# Show changes in a specific stash
git stash show stash@{0}`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Applying Stashed Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Apply the latest stash without removing it from stash list
git stash apply

# Apply and remove from stash list
git stash pop`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Deleting Stashes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Delete a specific stash
git stash drop stash@{0}

# Delete all stashes
git stash clear`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git stash</code> to temporarily save uncommitted changes.</li>
                <li>View stashes with <code>git stash list</code> and <code>git stash show</code>.</li>
                <li>Apply stashed changes using <code>git stash apply</code> or <code>git stash pop</code>.</li>
                <li>Remove stashes with <code>git stash drop</code> or <code>git stash clear</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitStash;
