[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19936034&assignment_repo_type=AssignmentRepo)
# Deployment and DevOps for MERN Applications

## 🚀 Deployed Application URLs
- **Frontend:** [YOUR FRONTEND URL HERE]
- **Backend API:** [YOUR BACKEND URL HERE]

## 📊 Monitoring Setup
Describe your monitoring setup here. For example:
- Health check endpoint: `/health` (backend)
- Uptime monitoring: [e.g., UptimeRobot, GitHub Actions health check]
- Error tracking: [e.g., Sentry, if used]
- Performance monitoring: [e.g., Vercel/Netlify analytics, if used]

## 🛠️ CI/CD Pipeline
- GitHub Actions workflows are set up for build, test, lint, and deploy for both frontend and backend.
- Health checks are performed after deployment.

### CI/CD Pipeline Screenshots
Add screenshots of your GitHub Actions pipeline in action here. To get screenshots:
1. Go to your repository on GitHub.
2. Click the "Actions" tab.
3. Click on a workflow run and take a screenshot of the summary and steps.
4. Add the images to a `/screenshots` folder and reference them here:
   - ![CI/CD Screenshot 1](./screenshots/ci-cd-1.png)
   - ![CI/CD Screenshot 2](./screenshots/ci-cd-2.png)

## 📝 Deployment & Maintenance Notes
- See `Week7-Assignment.md` for full requirements and instructions.
- See `/booklog/backend/README.md` and `/booklog/frontend/README.md` for setup and usage details.

---

This assignment focuses on deploying a full MERN stack application to production, implementing CI/CD pipelines, and setting up monitoring for your application.

## Assignment Overview

You will:
1. Prepare your MERN application for production deployment
2. Deploy the backend to a cloud platform
3. Deploy the frontend to a static hosting service
4. Set up CI/CD pipelines with GitHub Actions
5. Implement monitoring and maintenance strategies

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week7-Assignment.md` file
4. Use the provided templates and configuration files as a starting point

## Files Included

- `Week7-Assignment.md`: Detailed assignment instructions
- `.github/workflows/`: GitHub Actions workflow templates
- `deployment/`: Deployment configuration files and scripts
- `.env.example`: Example environment variable templates
- `monitoring/`: Monitoring configuration examples

## Requirements

- A completed MERN stack application from previous weeks
- Accounts on the following services:
  - GitHub
  - MongoDB Atlas
  - Render, Railway, or Heroku (for backend)
  - Vercel, Netlify, or GitHub Pages (for frontend)
- Basic understanding of CI/CD concepts

## Deployment Platforms

### Backend Deployment Options
- **Render**: Easy to use, free tier available
- **Railway**: Developer-friendly, generous free tier
- **Heroku**: Well-established, extensive documentation

### Frontend Deployment Options
- **Vercel**: Optimized for React apps, easy integration
- **Netlify**: Great for static sites, good CI/CD
- **GitHub Pages**: Free, integrated with GitHub

## CI/CD Pipeline

The assignment includes templates for setting up GitHub Actions workflows:
- `frontend-ci.yml`: Tests and builds the React application
- `backend-ci.yml`: Tests the Express.js backend
- `frontend-cd.yml`: Deploys the frontend to your chosen platform
- `backend-cd.yml`: Deploys the backend to your chosen platform

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all deployment tasks
2. Set up CI/CD pipelines with GitHub Actions
3. Deploy both frontend and backend to production
4. Document your deployment process in the README.md
5. Include screenshots of your CI/CD pipeline in action
6. Add URLs to your deployed applications

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/) 