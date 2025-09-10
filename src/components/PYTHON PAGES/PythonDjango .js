import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarPython from "../SidebarPython";

const PythonDjango = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

             {/* Sidebar (Left - col-2) */}
            <SidebarPython />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>Python Django Tutorial</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pythonscipy">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="pythonfastapi">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Django</b> is a high-level Python web framework that enables rapid development of secure, maintainable web applications.  
                It comes with built-in features like an ORM, authentication system, admin panel, and URL routing.
              </p>

              {/* Installation */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Installing Django</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">pip install django</pre>
                  <p>Check version using:</p>
                  <pre className="bg-light p-3 rounded">django-admin --version</pre>
                </div>
              </div>

              {/* Example 1: Create Django Project */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Creating a Django Project</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`django-admin startproject myproject
cd myproject
python manage.py runserver`}
                  </pre>
                  <p>
                    This will start a development server at <code>http://127.0.0.1:8000/</code>.
                  </p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: Create Django App */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Creating an App inside the Project</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`python manage.py startapp blog`}
                  </pre>
                  <p>
                    Add <code>'blog'</code> to <code>INSTALLED_APPS</code> in <code>settings.py</code>.
                  </p>
                </div>
              </div>

              {/* Example 3: Views & URLs */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Creating a View and Mapping URL</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# blog/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")`}
                  </pre>
                  <pre className="bg-light p-3 rounded">
{`# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]`}
                  </pre>
                  <pre className="bg-light p-3 rounded">
{`# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]`}
                  </pre>
                  <p>
                    Now visiting <code>http://127.0.0.1:8000/</code> will show <b>"Hello, Django!"</b>.
                  </p>
                  <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Django ORM */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 4: Django Models (ORM)</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)`}
                  </pre>
                  <p>Run migrations:</p>
                  <pre className="bg-light p-3 rounded">
{`python manage.py makemigrations
python manage.py migrate`}
                  </pre>
                  <p>
                    This creates a <code>Post</code> table in the database.
                  </p>
                </div>
              </div>

              {/* Example 5: Django Admin */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 5: Django Admin Panel</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`# blog/admin.py
from django.contrib import admin
from .models import Post

admin.site.register(Post)`}
                  </pre>
                  <p>
                    Create superuser:
                  </p>
                  <pre className="bg-light p-3 rounded">
{`python manage.py createsuperuser`}
                  </pre>
                  <p>
                    Now log in at <code>/admin/</code> to manage posts.
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Django is a powerful web framework for rapid development.</li>
                    <li>Includes built-in ORM, admin panel, authentication, and more.</li>
                    <li>Projects contain multiple apps (modular structure).</li>
                    <li>URLs map to views, and views return responses.</li>
                    <li>Models represent database tables.</li>
                  </ul>
                </div>
              </div>

   
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PythonDjango;
