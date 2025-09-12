import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubSendPullRequest = () => {
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
              <h1>GitHub Send Pull Request</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitclonefromgithub">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitrevert">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A pull request is a way to propose changes you've made in your forked repository to be merged into the original repository.
                It allows repository maintainers to review, discuss, and integrate contributions.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 1 – Push Changes to Your Fork
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Add and commit your changes
git add .
git commit -m "Describe the changes"

# Push to your forked repository
git push origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 2 – Create a Pull Request
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Go to your forked repository on GitHub
# Click on 'Pull requests'
# Click 'New pull request'`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 3 – Compare Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Select your branch with changes
# Compare it with the base repository and branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 4 – Add a Title and Description
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Enter a descriptive title
# Write details about the changes made
# Click 'Create pull request'`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Push your changes to your forked repository.</li>
                <li>Create a pull request on GitHub to propose your changes.</li>
                <li>Compare the branches and explain the changes in detail.</li>
                <li>Submit the pull request for review and merging.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubSendPullRequest;
