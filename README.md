# 🚀 Devboard Frontend (Vite + Docker)

This is a frontend project built using **Vite + Node.js**.

⚠️ Note: The original application code is taken from an open-source project.  
I have not written the full application logic.  
My contribution in this project is focused on **Dockerization and environment setup**.

---

## 👨‍💻 My Contribution

In this project, I have:

- Created a Dockerfile
- Built Docker image from the application
- Created and managed Docker container
- Configured port mapping (5173:5173)
- Learned and implemented Docker networking basics
- Ran and tested the application inside container

---

## 📦 Tech Stack
- Vite
- Node.js
- Docker

---

## 📁 Project Structure

Devboard/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── Dockerfile
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
└── README.md

---

## 🐳 Docker Setup

### Build Image
docker build -t devboard-frontend .

### Run Container
docker run -p 5173:5173 devboard-frontend

---

## 🌐 Access Application

### 💻 Laptop Browser
http://localhost:5173

### 📱 Mobile (Same Wi-Fi Network)
http://YOUR_LAPTOP_IP:5173

Example:
http://10.227.128.1:5173

---

## ⚙️ Important Concept (Docker Networking)

npm run dev -- --host 0.0.0.0 --port 5173

### Why this is used?
- localhost ❌ → only container ke andar access
- 0.0.0.0 ✅ → allows external access (laptop + mobile)

---

## 🔗 Connectivity Flow

Docker Container  
→ Vite Dev Server (0.0.0.0:5173)  
→ Docker Port Mapping (5173:5173)  
→ Laptop → http://localhost:5173  
→ Mobile → http://IP:5173  

---

## 👨‍💻 Author

Anuj Pratap Singh  
GitHub: https://github.com/anujpratapsingh9757  

---

## 🚀 Learning Outcome

This project helped me understand:
- Docker basics
- Containerization of frontend apps
- Port mapping
- Networking in Docker
