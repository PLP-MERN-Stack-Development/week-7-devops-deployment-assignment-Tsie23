# MERN Stack Application

This is a simple MERN stack application that demonstrates how to create a full-stack application using MongoDB, Express.js, React, and Node.js. This README provides instructions for setting up and running both the backend and frontend of the application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB (or a MongoDB Atlas account)
- pnpm (install via npm: `npm install -g pnpm`)

## Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install the dependencies using pnpm:

   ```
   pnpm install
   ```

3. Create a `.env` file based on the `.env.example` template:

   ```
   cp .env.example .env
   ```

   Update the `.env` file with your MongoDB connection string.

4. Start the backend server:

   ```
   pnpm start
   ```

   The backend will run on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install the dependencies using pnpm:

   ```
   pnpm install
   ```

3. Start the frontend application:

   ```
   pnpm start
   ```

   The frontend will run on `http://localhost:3000`.

## Running the Application

Once both the backend and frontend are running, you can access the application in your web browser at `http://localhost:3000`. The frontend will communicate with the backend API to fetch and display data.

## API Endpoints

The following API endpoints are available in the backend:

- `GET /api/items` - Retrieve a list of items
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an existing item
- `DELETE /api/items/:id` - Delete an item

## License

This project is licensed under the MIT License. See the LICENSE file for more details.