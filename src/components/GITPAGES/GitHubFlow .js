import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubFlow = () => {
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
              <h1>GitHub Flow</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pushbranchtogithub">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubpages">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly.
                It provides a simple process for collaboration, development, and deployment.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 1 – Create a Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a new branch for your feature or fix
git checkout -b feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 2 – Make Commits
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Stage and commit your changes
git add .
git commit -m "Add new feature or fix bug"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 3 – Open a Pull Request
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push your branch and create a pull request on GitHub
git push origin feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 4 – Discuss and Review
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Collaborate with your team
# Review code, suggest improvements, and test changes on GitHub`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 5 – Merge and Deploy
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Merge the pull request into the main branch
# Deploy the changes to production`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Create a new branch for each feature or fix.</li>
                <li>Commit changes regularly with meaningful messages.</li>
                <li>Use pull requests for collaboration and review.</li>
                <li>Merge and deploy once the changes are approved and tested.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubFlow;
