# MERN Stack Application - Backend README

## Overview
This is the backend part of a MERN stack application. It is built using Node.js, Express, and MongoDB. The backend provides a RESTful API for managing items.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)

## Getting Started

### 1. Clone the Repository
Clone the repository to your local machine:
```
git clone <repository-url>
cd mern-app/backend
```

### 2. Install Dependencies
Install the required dependencies using pnpm:
```
pnpm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the `backend` directory based on the `.env.example` template:
```
cp .env.example .env
```
Update the `.env` file with your MongoDB connection string and any other necessary environment variables.

### 4. Start the Server
To start the backend server, run:
```
pnpm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints

### Items
- **GET** `/api/items` - Retrieve all items
- **GET** `/api/items/:id` - Retrieve a single item by ID
- **POST** `/api/items` - Create a new item
- **PUT** `/api/items/:id` - Update an existing item by ID
- **DELETE** `/api/items/:id` - Delete an item by ID

## Testing
You can test the API using tools like Postman or curl.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)