🚀 Task Manager Pro
A modern, drag-and-drop task management application built with React.js, Node.js, and MongoDB. Organize your tasks efficiently with an intuitive Kanban-style interface.

https://img.shields.io/badge/React-18.2.0-blue https://img.shields.io/badge/Node.js-18+-green https://img.shields.io/badge/MongoDB-5.0+-green https://img.shields.io/badge/TailwindCSS-3.0+-blue

✨ Features
🎯 Core Functionality
Drag & Drop Interface - Move tasks between status columns effortlessly

Scrum Board View - Visualize tasks in Todo, In Progress, Blocked, Review, and Done columns

User Authentication - Secure JWT-based login/registration system

Real-time Updates - Instant UI updates with optimistic rendering

Responsive Design - Works seamlessly on desktop, tablet, and mobile devices

📋 Task Management
Create, read, update, and delete tasks

Set task priorities (High, Medium, Low)

Add descriptions and due dates

Track task status and progress

Persistent data storage with MongoDB

🎨 User Experience
Modern UI - Clean, intuitive interface built with Tailwind CSS

Loading States - Smooth animations and feedback

Error Handling - User-friendly error messages and recovery

Keyboard Accessible - Full keyboard navigation support

🛠️ Tech Stack
Frontend
React 18 - Modern React with hooks and context API

React Router - Client-side routing and navigation

Axios - HTTP client for API requests

Tailwind CSS - Utility-first CSS framework

React Hook Form - Form management and validation

Backend
Node.js - Runtime environment

Express.js - Web application framework

MongoDB - NoSQL database

Mongoose - MongoDB object modeling

JWT - JSON Web Tokens for authentication

Joi - Data validation library

bcrypt - Password hashing

📦 Installation
Prerequisites
Node.js (v18 or higher)

MongoDB (v5 or higher)

npm or yarn

1. Clone the Repository
bash
git clone https://github.com/your-username/task-manager-pro.git
cd task-manager-pro
2. Backend Setup
bash
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your-super-secret-jwt-key-here
PORT=5000
NODE_ENV=development

# Start the development server
npm run dev
3. Frontend Setup
bash
# Navigate to frontend directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
4. Database Setup
Ensure MongoDB is running on your system:

bash
# Start MongoDB (method depends on your OS)
mongod
🚀 Usage
Getting Started
Register an Account - Create your personal account

Create Tasks - Add new tasks with titles, descriptions, and priorities

Organize - Drag tasks between columns to update their status

Track Progress - Monitor your productivity through the visual board

Task Status Workflow
Todo - New tasks that need to be started

In Progress - Tasks currently being worked on

Blocked - Tasks waiting on dependencies

Review - Tasks completed and awaiting review

Done - Successfully completed tasks

📁 Project Structure
text
task-manager-pro/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers
│   │   ├── services/       # API service functions
│   │   ├── config/         # Application configuration
│   │   └── hooks/          # Custom React hooks
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── package.json
└── README.md
🔧 API Endpoints
Authentication
POST /api/user/register - User registration

POST /api/user/login - User login

GET /api/user/auth - Verify authentication

Tasks
GET /api/tasks - Get all tasks for user

POST /api/tasks - Create new task

PUT /api/tasks/:id - Update task

DELETE /api/tasks/:id - Delete task

PUT /api/tasks/update-status - Update task status

🌟 Customization
Adding New Task Statuses
Update scrumBoardOptions in frontend config

Modify task schema validation in backend

Update status filtering logic in components

Styling
The app uses Tailwind CSS. Modify styles in:

Tailwind configuration: tailwind.config.js

Component classes: Individual component files

Database Modifications
Edit Mongoose schemas in server/models/ to add new task fields.

🐛 Troubleshooting
Common Issues
MongoDB Connection Error

Ensure MongoDB is running

Check connection string in .env file

JWT Errors

Verify JWT_SECRET is set in environment variables

Check token expiration settings

CORS Issues

Ensure backend CORS configuration allows frontend origin

Build Errors

Clear node_modules and reinstall dependencies

Check Node.js version compatibility

Debug Mode
Enable debug logging by setting NODE_ENV=development in your environment variables.

📈 Performance Tips
Database Indexing - Add indexes for frequently queried fields

Pagination - Implement pagination for large task lists

Image Optimization - Compress images before uploading

Code Splitting - Use React.lazy for route-based code splitting

🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Development Guidelines
Follow React and JavaScript best practices

Write meaningful commit messages

Add tests for new features

Update documentation accordingly

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

🏆 Acknowledgments
React team for the amazing framework

Tailwind CSS for the utility-first CSS framework

MongoDB for the robust database solution

Contributors and testers who helped improve this application

📞 Support
If you have any questions or need help, please:

Check the documentation

Search existing GitHub Issues

Create a new Issue with details about your problem

🔗 Links
Live Demo (Add your deployment link here)

API Documentation

Frontend Repository

Backend Repository

Happy Task Managing! 🎯

Built with ❤️ using React.js, Node.js, and MongoDB
