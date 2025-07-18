# MERN Stack Application - Frontend README

## Overview
This is the frontend part of a MERN stack application. It is built using React and communicates with the backend to perform CRUD operations on items.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js (version 14 or higher)
- pnpm (package manager)

## Getting Started

### 1. Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone <repository-url>
cd mern-app/frontend
```

### 2. Install Dependencies
Use pnpm to install the required dependencies:
```bash
pnpm install
```

### 3. Running the Application
To start the development server, run:
```bash
pnpm start
```
This will start the React application and it will be accessible at `http://localhost:3000`.

### 4. API Integration
The frontend communicates with the backend API. Ensure that the backend server is running. You can start the backend by navigating to the `backend` directory and running:
```bash
pnpm start
```
The backend should be accessible at `http://localhost:5000`.

### 5. Building for Production
To create a production build of the application, run:
```bash
pnpm build
```
This will generate static files in the `build` directory that can be served by any static file server.

## Folder Structure
- `src/`: Contains the source code for the React application.
  - `App.jsx`: Main application component.
  - `index.js`: Entry point for the React application.
  - `components/`: Contains React components.
    - `ItemList.jsx`: Component for displaying a list of items.
  - `api/`: Contains API call functions.
    - `items.js`: Functions for interacting with the backend API.
- `public/`: Contains static files.
  - `index.html`: Main HTML file for the React application.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Thanks to the contributors and the open-source community for their support and resources.