import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubAddEdit = () => {
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
              <h1>GitHub Add / Edit Files</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubsetremote">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pullfromgithub">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                GitHub allows you to add new files or edit existing files directly in your repository via the web interface or locally using Git.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Adding a New File via GitHub Web
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Go to your repository on GitHub
# Click "Add file" -> "Create new file"
# Enter file name and content
# Scroll down and click "Commit new file"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Editing an Existing File via Web
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Open the file in your repository
# Click the pencil icon to edit
# Make changes
# Add commit message and click "Commit changes"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Adding a File Locally and Pushing
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a new file locally
echo "Hello World" > hello.txt

# Stage the file
git add hello.txt

# Commit changes
git commit -m "Add hello.txt"

# Push to GitHub
git push origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Editing a File Locally
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Open the file in a text editor
# Make changes
# Stage and commit
git add <file>
git commit -m "Edit file content"
git push origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Add new files directly in GitHub web interface or locally.</li>
                <li>Edit existing files via web or locally and commit changes.</li>
                <li>Always write descriptive commit messages when adding or editing files.</li>
                <li>Push local changes to synchronize with the remote repository.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubAddEdit;
