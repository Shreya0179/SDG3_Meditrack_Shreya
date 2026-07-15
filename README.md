# 💊 MediTrack

MediTrack is a full-stack MERN web application developed to support **Sustainable Development Goal 3 (Good Health and Well-being)**. It helps users securely manage their daily medicines while also providing an AI-powered assistant that answers general medicine and health-related questions.

The application is built using React, Node.js, Express, and MongoDB Atlas, with secure user authentication and cloud deployment on Render.

---

## ✨ Features

- Secure user registration and login using JWT authentication
- Personal medicine dashboard
- Add, update and delete medicine records
- Store medicine details including dosage, time and notes
- AI-powered Medicine Assistant for medicine and health queries
- Responsive user interface
- Cloud database using MongoDB Atlas
- Fully deployed on Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JSON Web Token (JWT)

### AI Integration
- OpenRouter API
- Tencent Hy3 Model

### Deployment
- Render

### Development Tools
- Git & GitHub
- Visual Studio Code

---

## 📂 Project Structure

```text
MediTrack/
│
├── frontend/
│   ├── public/
│   └── src/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

## 🏗️ System Architecture

```text
React Frontend
       │
       ▼
Express.js REST API
       │
 ┌──────────────┐
 ▼              ▼
MongoDB Atlas   OpenRouter API
                     │
                     ▼
              Tencent Hy3 AI Model
```

---

## 🚀 Live Demo

**Frontend**

https://sdg3-meditrack-shreya-1.onrender.com

**Backend API**

https://sdg3-meditrack-shreya.onrender.com

---

## 💻 Installation

### Clone the repository

```bash
git clone https://github.com/Shreya0179/SDG3_Meditrack_Shreya.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
JWT_SECRET=your_secret_key
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

For deployment, set:

```env
VITE_API_URL=https://sdg3-meditrack-shreya.onrender.com/api
```

---

## 🤖 AI Medicine Assistant

The AI assistant is integrated using the OpenRouter API and can provide general information about:

- Medicine usage
- Dosage guidance
- Common side effects
- General health-related questions

> **Note:** The AI assistant is intended for informational purposes only and should not be considered a substitute for professional medical advice.

---

## 📈 Future Enhancements

- Medicine reminder notifications
- Voice-enabled AI assistant
- OCR-based prescription scanning
- Medicine interaction checker
- Multi-language support
- Doctor consultation integration
- Mobile application

---


## 👩‍💻 Developed by

**Shreya**

B.Tech CSE (AI & ML)

KIET Deemed to be University, Ghaziabad

---

## 📄 License

This project was developed for educational purposes as part of the SDG 3 (Good Health and Well-being) project.
