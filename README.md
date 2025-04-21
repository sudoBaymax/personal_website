# Personal Website

This is my personal website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite and TypeScript.

![image](https://github.com/user-attachments/assets/3c7c289a-4dc8-4a40-abfc-41f877f9f04e)
![image](https://github.com/user-attachments/assets/2094bf76-1dc6-454a-849f-76454d1817fb)
![image](https://github.com/user-attachments/assets/7cd36325-3093-4507-9d36-257e2c3cb143)


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
