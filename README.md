Thrust Calculator
A high-performance MERN stack web application featuring a decoupled monorepo architecture. This project uses a centralized GitHub repository to manage and deploy a Node.js backend to Render and a vanilla JavaScript frontend to Vercel.

🚀 Tech Stack
Frontend: Vanilla JavaScript, HTML5, CSS3 (Deployed on Vercel)

Backend: Node.js, Express.js (Deployed on Render)

Database: MongoDB Atlas

Deployment: CI/CD via GitHub integration

📁 Project Structure
This project is organized as a monorepo to allow independent scaling and deployment of the client and server.

THRUST-CALCULATOR/
├── client/              # Frontend - Web Service
│   ├── css/             # Custom stylesheets
│   ├── js/              # Frontend logic & API calls
│   ├── index.html       # Application entry point
│   └── vercel.json      # Vercel routing configuration
├── server/              # Backend - REST API
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoint definitions
│   ├── utils/           # Helper functions (e.g., thrustCalc.js)
│   ├──.env             # Local environment variables (ignored by Git)
│   └── index.js         # Server entry point
└──.gitignore           # Root-level security rules


🛠️ Installation & Local Setup
Clone the repository:

Bash
git clone https://github.com/Code-by-Ajin/thrust-calculator.git
cd thrust-calculator
Setup Backend:

Bash
cd server
npm install
# Create a.env file and add your MONGO_URI
npm start
Setup Frontend:

Bash
cd../client
# Open index.html in a browser or use a live server
🌐 Deployment Configuration
Render (Backend)
Service Type: Web Service 

Root Directory: server (Critical for monorepo support)

Build Command: npm install

Start Command: node index.js 

Vercel (Frontend)
Framework Preset: Other

Root Directory: client

Output Directory: . (or public if applicable)

🔒 Security & CORS
To ensure the "real" application functions correctly in production, the following security measures are implemented:

CORS Whitelisting: The Express backend is configured to allow requests specifically from the production Vercel URL.

Environment Protection: A root-level .gitignore uses **/.env and **/node_modules/ patterns to prevent the leaking of database credentials and keep the repository lightweight.

Routing: A vercel.json rewrite rule is used in the client folder to ensure SPA (Single Page Application) routing functions correctly without 404 errors.

📝 Environment Variables
The following variables must be configured in your deployment dashboards:

MONGO_URI: Your MongoDB Atlas connection string (Render).

API_URL: The live Render URL (Vercel).

Summary of what was added:
Monorepo Details: Clarified that the client and server folders deploy to different services using the "Root Directory" feature.

Vercel Specifics: Included the "Other" framework preset and the vercel.json routing fix we discussed for blank pages.

Security: Emphasized the importance of the root .gitignore to protect your .env secrets.
