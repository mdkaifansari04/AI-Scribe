# AI-Scribe Project Setup Guide

Welcome to the setup guide for the AI-Scribe project! This guide will walk you through setting up both the frontend and backend environments.

## Frontend Setup (Vite)

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

- **Development Mode:**
  ```bash
  npm run dev
  ```
  Starts Vite in development mode.

- **Build:**
  ```bash
  npm run build
  ```
  Builds the production-ready app for deployment.

- **Linting:**
  ```bash
  npm run lint
  ```
  Lints the project using ESLint.

- **Preview Build:**
  ```bash
  npm run preview
  ```
  Preview the production build locally.

## Backend Setup (Node.js / nodemon)

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

- **Start Server:**
  ```bash
  node index.js
  ```
  Starts the backend server using Node.js.

- **Development Mode with nodemon:**
  ```bash
  nodemon index.js
  ```
  Automatically restarts the server on file changes.

## Connecting Frontend to Backend

Ensure your frontend API calls are directed to the appropriate backend endpoints. Update API URLs in your frontend code as needed to match your backend server configuration.

## Additional Notes

- Customize ESLint rules in `.eslintrc` file located in the `frontend` directory according to your preferences.

- Update and manage environment variables in `.env` files located in both `frontend` and `backend` directories for different configurations.

Congratulations! You've successfully set up the AI-Scribe project environment. Happy coding!
