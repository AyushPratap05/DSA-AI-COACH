#DSA Coach AI
An interactive and AI-powered study guide for Data Structures and Algorithms. This web application is designed to help developers track their learning progress, access curated resources, and receive real-time assistance from a generative AI assistant.

Live Demo: [(https://dsa-coach-ai-main.web.app/)]

✨ Features
Interactive Roadmap: A structured, phase-based roadmap of essential DSA topics.

Progress Tracking: Users can mark topics as complete, with progress saved persistently across sessions.

AI Learning Assistant: An integrated AI assistant powered by the Gemini API for on-demand help.

Concept Clarifier: Get clear explanations for complex DSA concepts.

Problem Hint Generator: Receive conceptual hints for specific problems without spoiling the solution.

Curated Resources: Each topic includes a list of key focus areas, relevant companies that ask about the topic, and links to LeetCode practice problems.

Responsive Design: The application is built to be usable on both desktop and mobile devices.

🚀 Tech Stack
Frontend: React & Vite

Styling: Tailwind CSS & shadcn/ui

Backend & Data: Firebase Firestore

Authentication: Firebase Anonymous Authentication

Generative AI: Google's Gemini API

Deployment: Firebase Hosting

🔧 Getting Started (For Other Developers)
To get a copy of this project running on your local machine, follow these steps:

Prerequisites
You will need the following installed on your machine:

Node.js & npm

A Firebase Project

A Gemini API Key

Installation
Clone this repository to your local machine:

git clone https://github.com/AyushPratap05/DSA-AI-COACH.git

Navigate into the project directory:

cd dsa-coach-ai-main

Install the project dependencies:

npm install

Firebase & API Setup
Firebase Project:

Create a Firebase project and enable Firestore Database and Anonymous Authentication.

Populate your Firestore database with the topic data, following the structure in dsa_topics_data.json (found in the firestore_import_data directory).

Update your firebase.json with your project details.

API Key:

Create a .env file in your project root.

Add your Gemini API key: VITE_GEMINI_API_KEY="YOUR_API_KEY_HERE"

Running the App
Start the development server:

npm run dev

Open your browser to http://localhost:5173 to view the application.

✍️ Author
Ayush Pratap Singh

GitHub: [AyushPratap05]

LinkedIn: [(https://www.linkedin.com/in/ayush-pratap-singh-rajawat/)]

Email : [ayushrajawat2005@gmail.com]

🤝 Contributing
Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.