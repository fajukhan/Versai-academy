import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubAddSSH = () => {
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
              <h1>GitHub Add SSH</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitssh">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubsetremote">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Adding an SSH key to GitHub allows secure communication between your local machine and GitHub repositories without repeatedly entering your username and password.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Generate a New SSH Key
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Generate a new SSH key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Press Enter to accept the default file location
# Enter a passphrase if desired`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Start the SSH Agent
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Start the SSH agent in the background
eval "$(ssh-agent -s)"`
}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Add SSH Key to Agent
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Add your private SSH key to the ssh-agent
ssh-add ~/.ssh/id_rsa`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Copy SSH Key to Clipboard
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Copy the SSH public key
cat ~/.ssh/id_rsa.pub

# Copy the output to your clipboard`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Add SSH Key to GitHub
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Go to GitHub -> Settings -> SSH and GPG keys -> New SSH key
# Paste the copied key and give it a descriptive title
# Click "Add SSH key" to save`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Test SSH Connection
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Test the connection to GitHub
ssh -T git@github.com`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Generate a new SSH key using <code>ssh-keygen</code>.</li>
                <li>Start the SSH agent with <code>eval "$(ssh-agent -s)"</code>.</li>
                <li>Add the private key to the agent using <code>ssh-add</code>.</li>
                <li>Copy the public key and add it to GitHub settings.</li>
                <li>Test the connection using <code>ssh -T git@github.com</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubAddSSH;
