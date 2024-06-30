# AI Scribe

AI Scribe is a web platform where users can provide a story prompt, and AI generates a short story based on that prompt. Users can also upvote their favorite stories, which are showcased on a leaderboard.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Issue Template](#issue-template)
- [License](#license)

## Features

- Generate short stories based on user-provided prompts
- Upvote stories and showcase the most popular ones on a leaderboard
- User authentication and authorization
- Dark and light theme modes

## Tech Stack

- **Frontend:** React, Tailwind CSS, Vite, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** OpenAI API

## Project Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/ai-scribe.git
   cd ai-scribe
   ```

2. Install dependencies for both the client and server:

   ```sh
   cd frontend
   npm install
   cd backend
   npm install
   ```

3. Start the development servers:

   - In the `frontend` directory:

     ```sh
     npm run dev
     ```

   - In the `backend` directory:

     ```sh
     npm start
     ```

   The client will run on `http://localhost:3000` and the server on `http://localhost:5000`.

## Usage

1. Open the client in your web browser (`http://localhost:3000`).
2. Sign up or log in to your account.
3. Provide a story prompt and select the desired options (e.g., story type, user type, etc.).
4. Click "Generate" to create a story.
5. Browse generated stories and upvote your favorites.
6. View top voted stories on the leaderboard.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Issue Template

To report an issue or request a feature, please use our [issue template](https://github.com/mdkaifansari04/AI-Scribe/tree/master/.github/ISSUE_TEMPLATE).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
