# Valentine's Note

A web application that generates unique and personalized Valentine's Note using AI. The project combines a React frontend with a Node.js/Express backend, integrating with the Nvidia AI API for proposal generation.

![Screenshot 2025-02-09 205024](https://github.com/user-attachments/assets/d97a54b7-4636-4d51-8bce-bde9bddda499)

## Features

- Personalized proposal generation
- Real-time AI-powered text generation
- Clean, romantic user interface
- Avoids cliché phrases and common romantic expressions

## Project Structure

```
Valentine's Note/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProposalLetter.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── styles/
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── server/
│   │   ├── index.js
│   │   └── api.js
│   ├── public/
│   │   └── index.html
│   ├── package.json 
│   └── .env
├── .gitignore
├── package.json
├── LICENSE
└── README.md
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the server directory:
   ```
   OPENAI_API_KEY=your_nvidia_api_key_here
   ```

4. Run the application:
   ```bash
    cd ..
    npm run start
   ```
   This uses concurrently to run both the client and server together.

5. Access the application:
   - Open your browser and visit: `http://localhost:5173`
   - To generate a personalized proposal, add sender and receiver names as URL parameters:
     ```
     http://localhost:5173/?sender=John&receiver=Jane
     ```
   
   Note: For names with spaces or special characters, use URL encoding:
   - For spaces, use `%20` (e.g., `John%20Doe`)
   - For special characters, use their URL-encoded equivalents
   - Example:
     ```
     http://localhost:5173/?sender=John%20Doe&receiver=Jane%20Smith
     ```
   

## API Endpoints

- `POST /api/proposal` - Generates a proposal using sender and receiver names
- `POST /api/generate-proposal` - Alternative endpoint for proposal generation

## Technical Stack

### Frontend
- React 18.2.0 (with Vite)
- TailwindCSS 3.4.17 for styling
- Axios for API requests
- React DOM for rendering

### Backend
- Node.js
- Express.js 4.18.2
- CORS for cross-origin requests
- Body-parser for request parsing
- Dotenv for environment variables

### AI Integration
- Nvidia AI API (Palmyra Creative 122B model)
- OpenAI-compatible interface
- Temperature: 0.5
- Max tokens: 1024

### Development Tools
- Vite 4.0.0 for development server
- PostCSS 8.4.0 for CSS processing
- Autoprefixer for browser compatibility
- Concurrently for running multiple scripts

### Additional Features
- Environment variable management
- Cross-Origin Resource Sharing (CORS)
- Request/Response handling middleware
- Error handling and logging

## Note

This project uses the Nvidia AI API endpoint with OpenAI-compatible interface. Ensure you have valid API credentials before running the application.
