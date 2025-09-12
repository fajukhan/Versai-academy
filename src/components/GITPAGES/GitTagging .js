import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitTagging = () => {
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
              <h1>GIT Tagging</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitcommit">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitstash">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git allows you to mark specific points in your repository’s history using tags. 
                Tags are useful for releases, milestones, or versions of your project.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Listing Existing Tags
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show all tags in the repository
git tag`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating a Lightweight Tag
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a lightweight tag named v1.0
git tag v1.0`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating an Annotated Tag
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create an annotated tag with a message
git tag -a v1.0 -m "Release version 1.0"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pushing Tags to Remote
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push a specific tag
git push origin v1.0

# Push all tags
git push origin --tags`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Deleting a Tag
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Delete a local tag
git tag -d v1.0

# Delete a remote tag
git push origin --delete tag v1.0`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Tags mark important points in Git history such as releases or versions.</li>
                <li>Use <code>git tag</code> to list tags, <code>git tag v1.0</code> for lightweight tags, or <code>git tag -a v1.0 -m "msg"</code> for annotated tags.</li>
                <li>Push tags to remote using <code>git push origin v1.0</code> or <code>git push origin --tags</code>.</li>
                <li>Delete tags with <code>git tag -d</code> locally and <code>git push origin --delete tag</code> remotely.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitTagging;
