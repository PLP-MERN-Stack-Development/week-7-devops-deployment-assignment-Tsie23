# 📚 MERN Book Log – Fullstack Deployment & DevOps

A full MERN stack application for logging books, demonstrating production deployment, CI/CD, environment configuration, and monitoring.

---

## 🚀 Live Demo

- **Frontend:** [YOUR FRONTEND URL HERE]
- **Backend API:** [YOUR BACKEND URL HERE]

---

## 🗂️ Project Structure

```
week-7-devops-deployment-assignment-Tsie23/
  ├── backend/         # Express.js API, MongoDB, production-ready
  ├── frontend/        # React (Vite) SPA, code-splitting, API integration
  ├── .github/         # GitHub Actions CI/CD workflows
  ├── Week7-Assignment.md
  └── README.md
```

---

## 🧩 Tech Stack

- **Frontend:** React 18, Vite, Axios, Code Splitting (React.lazy/Suspense)
- **Backend:** Node.js, Express, MongoDB (Atlas), Mongoose, Helmet, Morgan, CORS, dotenv
- **CI/CD:** GitHub Actions (build, lint, test, deploy, health checks)
- **Deployment:** Render (backend), Vercel (frontend)
- **Monitoring:** Health check endpoint, GitHub Actions health checks

---

## ⚙️ Setup & Installation

### 1. **Clone the Repository**
```bash
git clone <your-repo-url>
cd week-7-devops-deployment-assignment-Tsie23
```

### 2. **Install Dependencies**
```bash
pnpm install --filter ./backend...
pnpm install --filter ./frontend...
```

### 3. **Environment Variables**

#### Backend (`backend/.env`)
```
MONGO_URI=mongodb+srv://root:kasTsie231$@cluster-1.wmb8nql.mongodb.net/booklog?retryWrites=true&w=majority&appName=Cluster-1
PORT=5000
JWT_SECRET=your_generated_jwt_secret
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

#### Frontend (`frontend/.env`)
```
VITE_API_URL=https://your-backend-url.onrender.com/api/books
```

> **Note:** Do not commit your real `.env` files. Only commit `.env.example` with placeholder values.

---

## 🏗️ Running Locally

### **Backend**
```bash
cd backend
pnpm start
# or for development with hot reload
pnpm dev
```
- Runs on `http://localhost:5000` by default.

### **Frontend**
```bash
cd frontend
pnpm dev
```
- Runs on `http://localhost:3000` by default.

---

## 🌐 Deployment

### **Backend (Render)**
1. Push your code to GitHub.
2. Create a new Web Service on [Render](https://render.com/).
3. Connect your repo, set build command to `pnpm install`, start command to `pnpm start`.
4. Add environment variables from your `.env`.
5. Deploy and copy your Render backend URL.

### **Frontend (Vercel)**
1. Push your code to GitHub.
2. Import your frontend repo to [Vercel](https://vercel.com/).
3. Set environment variable `VITE_API_URL` to your Render backend URL.
4. Deploy and copy your Vercel frontend URL.

---

## 🔒 Authentication

- JWT tokens are generated and verified on the backend using `JWT_SECRET`.
- The frontend stores and sends the JWT token for authenticated requests (if implemented).

---

## 🩺 Monitoring & Health Checks

- **Health Check Endpoint:**  
  `GET /api/health` returns `{ status: 'ok', uptime: ... }`
- **CI/CD Health Checks:**  
  GitHub Actions workflow checks backend and frontend URLs after deployment.
- **Logging:**  
  All requests are logged using Morgan; errors are logged to the console.
- **Security:**  
  Helmet sets secure HTTP headers; CORS is restricted to your frontend domain.

---

## 🔄 CI/CD Pipeline

- **Location:** `.github/workflows/mern-ci-cd.yml`
- **Features:**
  - Installs, lints, tests, and builds both frontend and backend
  - Deploys backend to Render and frontend to Vercel
  - Runs health checks after deployment
- **How to Test:**  
  Push any commit to `main` and check the **Actions** tab on GitHub.

### **CI/CD Pipeline Screenshots**
_Add screenshots of your GitHub Actions pipeline here:_
- ![CI/CD Screenshot 1](./screenshots/ci-cd-1.png)
- ![CI/CD Screenshot 2](./screenshots/ci-cd-2.png)

---

## 📖 API Endpoints

- `GET /api/books` – List all books
- `POST /api/books` – Add a new book
- `GET /api/health` – Health check

---

## 🛠️ Maintenance

- Update dependencies regularly (`pnpm update`)
- Monitor logs on Render and Vercel dashboards
- Back up your MongoDB Atlas data as needed

---

## 📝 Resources

- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

## ✍️ Author

- [Your Name]
- [Your Contact Info or Portfolio]

---

**Replace all placeholder URLs and add screenshots as required for your submission!**
If you need a section for authentication, advanced monitoring, or want to document more endpoints, let me know! 