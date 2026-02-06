

Full Stack Details: InspiroStudios Agency Landing Page
This application follows a typical client-server architecture, utilizing React for the interactive frontend and a lightweight Node.js/Express backend for handling server-side tasks, specifically contact form submissions.
I. Frontend (Client-Side)
The frontend is built with React and focuses on delivering a visually stunning, responsive, and interactive user experience.
Core Technologies:
React (with TypeScript support): For building dynamic user interfaces.
React Router DOM (HashRouter): For client-side routing, enabling navigation between different pages without full page reloads.
Tailwind CSS: A utility-first CSS framework used for rapid UI development and responsive design.
Custom CSS: Inline in index.html for advanced animations, gradients, glassmorphism effects, and a custom cursor, complementing Tailwind's utility classes.
Lucide React: A library providing a collection of beautiful, pixel-perfect icons.
Google Fonts: Specifically "Plus Jakarta Sans" for a modern, sleek typography.
File Structure & Components:
index.html: The main entry point for the web application. It sets up the basic HTML structure, imports the Tailwind CSS CDN, custom fonts, and contains global custom CSS styles. It also defines the importmap for ES module loading and the root div where the React app is mounted.
index.tsx: The primary TypeScript entry file for the React application. It uses ReactDOM.createRoot to render the App component into the root element defined in index.html.
App.tsx: The root component of the React application.
Manages the overall application layout, including Header and Footer.
Sets up client-side routing using HashRouter to define routes for Home, About, Blogs, Contact, Faqs.
Implements a custom interactive cursor (CustomCursor component) for an enhanced user experience.
Applies global styling like a background gradient and selection color.
components/ directory:
Header.tsx: The navigation bar, fixed at the top, providing links to all main pages. It includes responsive design for desktop and mobile (with a toggleable menu).
Footer.tsx: The application's footer, including copyright information, navigation links, service offerings, social media links, and a newsletter signup form.
pages/ directory: Contains the individual page components, each responsible for rendering its specific content and layout.
Home.tsx: The landing page, featuring a hero section with a call to action, a scrolling logo carousel, a portfolio showcase, a brief "About Inspiro" section, a "Blogs" preview, customer testimonials, an FAQ snippet, and a final call-to-action.
About.tsx: The "About Us" page, providing a deeper dive into the studio's story, core values, and team members, along with a call-to-action.
Blogs.tsx: A dedicated page for blog posts, featuring a prominent hero section with a search bar, categories for filtering, a large "featured" blog post, a grid of regular blog posts, and a newsletter subscription call-to-action.
Contact.tsx: The contact form page.
Collects user name, email, category, and brief.
Integrates with the Google GenAI API (@google/genai) to generate a dynamic AI insight based on the user's brief, which is then sent along with the form data.
Handles form submission to the custom backend (/api/contact).
Displays submission status (submitting, success, error) and AI-generated insights to the user.
Faqs.tsx: A dedicated FAQs page, featuring a list of common questions with accordion functionality and a "Still curious?" call-to-action to book a call.
Admin.tsx: A mock administrative panel primarily for demonstration or local testing purposes.
Allows viewing captured leads (contact form submissions) stored in the browser's localStorage.
Provides mock settings to configure the admin email (also stored in localStorage).
Does not interact with a live backend database for managing submissions; its persistence is client-side only.
II. Backend (Server-Side)
The backend is a lightweight Node.js server designed to handle API requests that require server-side processing, specifically email sending.
Core Technologies:
Node.js: JavaScript runtime environment.
Express.js: A minimal and flexible Node.js web application framework for building APIs.
Nodemailer: A module for Node.js applications to allow easy email sending.
CORS: Middleware to enable Cross-Origin Resource Sharing, allowing the frontend to make requests to the backend (especially important during local development).
Body-parser: Middleware to parse incoming request bodies in a convenient format (JSON in this case).
Dotenv: A module to load environment variables from a .env file into process.env.
File Structure & Functionality:
server.js: The main backend server script.
Configuration: Sets up an Express application, applies CORS and body-parser middleware.
Nodemailer Transporter: Configures an email transporter using SMTP details (host, port, user, pass) loaded from environment variables (.env).
/api/contact Endpoint (POST):
Receives contact form data (name, email, category, brief, aiInsight) from the frontend.
Performs basic validation on the received data.
Constructs an email with client details and the AI insight.
Uses the configured nodemailer transporter to send this email to the SMTP_USER defined in .env.
Responds to the frontend with success or error messages.
Includes logic to warn if SMTP credentials are not configured, preventing silent failures.
III. Configuration & Environment
Critical for securing credentials and managing different deployment environments.
.env: This file holds sensitive configuration variables that should not be committed to version control.

User fills Contact Form (Contact.tsx):
When the user types in their brief, upon submission, the frontend (specifically Contact.tsx) calls the Google GenAI API to get a strategic insight.
Frontend Submits to Backend (Contact.tsx -> server.js):
The Contact.tsx component sends the collected form data, along with the AI-generated insight, to the backend's /api/contact endpoint.
Backend Sends Email (server.js -> SMTP Server):
The server.js receives the data, formats it into an email, and sends it using nodemailer via the configured SMTP server (using credentials from .env).
Admin View (Local Only) (Admin.tsx):
For demonstration purposes, the Admin.tsx page locally stores the contact form submissions in localStorage, simulating an inbox within the browser. The data viewed here is independent of the emails sent by the backend.