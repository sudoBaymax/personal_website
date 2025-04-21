# Personal Website

This is my personal website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite and TypeScript.

![image](https://github.com/user-attachments/assets/61569237-09e4-461c-91c5-cf35bf43b6ad)
![image](https://github.com/user-attachments/assets/429b28ac-c6b3-4ed6-9334-1f6fa36da586)
![image](https://github.com/user-attachments/assets/19a420ce-8fd3-4312-a245-05a658713ac5)
![image](https://github.com/user-attachments/assets/ea486b04-ffc7-40ce-8718-a373e1e12326)


## Features

- Full-stack MERN application
- Frontend powered by React.js with Vite for fast development
- Backend built with Express.js and Node.js
- MongoDB for database management
- TypeScript for type safety
- RESTful API architecture

## Tech Stack

- **Frontend:** React.js, Vite, TypeScript, Tailwind CSS (if applicable)
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB (via Mongoose ORM)
- **Deployment:** Vercel / Netlify (Frontend), AWS / DigitalOcean / Render (Backend & Database)

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version recommended)
- MongoDB (local or cloud-based like MongoDB Atlas)
- Git

### Clone Repository
```sh
git clone https://github.com/your-username/personal_website.git
cd personal_website
```

### Install Dependencies
#### Frontend
```sh
cd client
npm install
```

#### Backend
```sh
cd server
npm install
```

### Environment Variables
Create a `.env` file in the `server` directory and add the necessary environment variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Application
#### Start Backend
```sh
cd server
npm run dev
```

#### Start Frontend
```sh
cd client
npm run dev
```

## Deployment
### Frontend Deployment (Vercel / Netlify)
```sh
npm run build
```

### Backend Deployment (Render / AWS / DigitalOcean)
```sh
npm start
```

## License
This project is licensed under the MIT License.
