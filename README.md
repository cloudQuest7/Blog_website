# Blog Website

A simpple-featured blog platform built with Node.js, Express, and PostgreSQL..

## 🚀 Features

- 📝 Create, read, update, and delete blog posts
- 👤 User authentication and authorization
- 💾 PostgreSQL database integration
- 🎨 Responsive design
- 🔒 Secure password hashing
- ✨ Rich text editor for blog posts

## 🛠️ Technologies Used

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Template Engine**: EJS

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/cloudQuest7/Blog_website.git
cd Blog_website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=blog_db
DB_PORT=5432
SESSION_SECRET=your_session_secret
```

4. Set up the database:
```bash
psql -U postgres
CREATE DATABASE blog_db;
```

## 🚀 Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
blog-website/
├── controllers/     # Route controllers
├── models/         # Database models
├── routes/         # Application routes
├── views/          # EJS templates
├── public/         # Static files
├── middleware/     # Custom middleware
├── config/         # Configuration files
└── app.js         # Application entry point
```

## 🔐 API Endpoints

- **Authentication**
  - `POST /auth/register` - Register new user
  - `POST /auth/login` - Login user
  - `GET /auth/logout` - Logout user

- **Blog Posts**
  - `GET /posts` - Get all posts
  - `GET /posts/:id` - Get single post
  - `POST /posts` - Create new post
  - `PUT /posts/:id` - Update post
  - `DELETE /posts/:id` - Delete post

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contact

Project Link: [https://github.com/cloudQuest7/Blog_website](https://github.com/cloudQuest7/Blog_website)