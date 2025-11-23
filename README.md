📦 Inventory Management System

A full-stack inventory management application built using React (Frontend) and Node.js + Express + SQLite (Backend).
This app supports product management, stock updates, and inventory history tracking.

🚀 Features
Frontend
Add, edit, delete products
Update stock (increase/decrease)
View inventory history
Fully responsive UI
API integration with backend
Error handling + loading states

Backend
REST API using Express.js
Endpoints for products, stock updates, and history
SQLite database
CRUD operations
CORS enabled

🔧 Installation Guide
1️⃣ Clone the project
git https://github.com/umaGannamani/frontend-skillwise.git
cd inventory-management

🖥️ Backend Setup
2️⃣ Install backend dependencies
cd backend
npm install
3️⃣ Run backend server
node server.js

You should see:
Server running on port 5000
Connected to SQLite database

Backend runs at:
👉 http://localhost:5000

🌐 Frontend Setup
4️⃣ Install frontend dependencies
cd frontend
npm install

5️⃣ Start React frontend
npm start

🔗 Connecting Frontend With Backend

In frontend/src/api.js:
export const API_URL = "https://backend-skillwise.onrender.com"; 

OR for local testing:

export const API_URL = "http://localhost:5000";
Frontend runs at:
👉 http://localhost:3000

🧪 API Testing (Postman)
Example Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
POST	/api/products	Add product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
POST	/api/history/update-stock	Update stock
GET	/api/history	Inventory history

📝 Deployment
Backend can be deployed on:
Render : https://backend-skillwise.onrender.com

Frontend can be deployed on:
Vercel : https://frontend-skillwise.vercel.app/

Remember to update production API URL in:
src/api.js
