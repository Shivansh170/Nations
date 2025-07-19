🌍 ContLas
A React-powered web application that allows users to explore countries across the world by searching for their name or browsing by region. It fetches real-time data from the REST Countries API and presents detailed country information using clean visuals and interactive UI.

🚀 Live Demo: https://shivansh170.github.io/Nations/#/

📌 Features
🔎 Search by Country Name — Instantly retrieve detailed information for any country.

🌐 Region-Based Filtering — Browse all countries by regions like Africa, Asia, Europe, etc.

🗃️ Dynamic Data Fetching — Real-time fetch from REST Countries API.

🧠 Global State Management — Managed using React’s Context API.

💾 Persistent Data — Keeps search and region preferences using localStorage.

🖼️ Flag, Map & Metadata — Flag, capital, population, languages, currency, timezone & more.

🎥 Background Video — Hero section with an immersive background video.

📱 Responsive UI — Fully responsive and optimized for mobile devices.

🚀 Deployed on GitHub Pages — Supports client-side routing via HashRouter.

🧰 Tech Stack
Frontend: React

Routing: React Router v6 (HashRouter)

Global State: Context API

Data Source: REST Countries API

Styling: Tailwind CSS

Deployment: GitHub Pages

📁 Folder Structure (Simplified)
pgsql
Copy
Edit
Nations/
├── public/
├── src/
│   ├── mycomponents/
│   │   ├── About.jsx
│   │   ├── Appcontext.js
│   │   ├── Contact.jsx
│   │   ├── Countryplaycard.jsx
│   │   ├── Finalpage.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Region.jsx
│   │   ├── Terms.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
🛠️ Local Development
Follow these steps to run the project locally:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/shivansh170/Nations.git
cd Nations
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm start
Visit http://localhost:3000/Nations/#/ in your browser.

🚀 Deployment (GitHub Pages)
Ensure your package.json includes the following:

json
Copy
Edit
"homepage": "https://shivansh170.github.io/Nations"
Then deploy using:

bash
Copy
Edit
npm run build
npm install --save gh-pages
npm run deploy
✅ The project uses HashRouter for compatibility with GitHub Pages routing.

🧪 Usage Guide
🔍 Search a country:

Go to Home

Type a country name (e.g., “India”) and click the search button

You will be redirected to a detailed info page

🌍 Browse by region:

Use the nav links for regions like Africa, Asia, etc.

Click on any country card to explore its Google Maps location

🔁 Start Over:

Use the "Start Over" button on the final country page to clear session data and return home

🖼️ Sample Screenshots (optional)
Add screenshot images here if you'd like, such as:

Hero section with background video

Region view grid

Final country data page

📌 Credits
🌐 API: REST Countries API

📍 Map Embeds: Google Maps

🎨 UI Styling: Tailwind CSS

📦 Hosting: GitHub Pages

📝 License
This project is licensed under the MIT License.
Feel free to use, fork, and modify it for personal or educational use.

✨ Author
Shivansh Lavaniya — GitHub
