# 🎬 Movie Ticket Booking Application

## 📌 Overview
The **Movie Ticket Booking Application** is a **React-based web app** that allows users to browse movies, view details, and book tickets seamlessly. The app features **Google OAuth authentication** for secure user access.

## 🚀 Features
- 🔐 **User Authentication** via Google OAuth.
- 🔒 **Protected Routes** for secure access to movie details and booking pages.
- 🎞️ **Movie Listings** with dynamically fetched details.
- 🎟️ **Booking System** for reserving movie tickets.
- 🪑 **Dynamic Seat Selection** allowing users to pick from available seats.
- 🧭 **Navigation Bar** with login/logout functionality.

## 🛠️ Tech Stack
- **Frontend:** React, React Router
- **Authentication:** Google OAuth
- **State Management:** useState, useEffect
- **Styling:** CSS
- **Tools:** Local Storage, JWT Decode

## 🏗️ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-ticket-booking.git
   cd movie-ticket-booking
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 📁 Project Structure
```
/movie-ticket-booking
│-- /src
│   ├── /Components
│   │   ├── /Movie (Movie Details)
│   │   ├── /Bookingform (Booking Form)
│   │   ├── /Movielisting (Movie Listing Page)
│   │   ├── /Navbar (Navigation Bar)
│   │   ├── /Login (Login Page)
│   │   ├── /SeatSelection (Dynamic Seat Selection)
│   ├── /ProtectedRoute (Authentication Guard)
│   ├── App.jsx (Main Component)
│   ├── index.js (Root File)
│-- package.json
│-- README.md
```

## 🎯 Usage
1. **Login:** Users authenticate via Google OAuth.
2. **Browse Movies:** View available movies.
3. **View Details:** Click on a movie for more information.
4. **Select Seats:** Choose available seats dynamically before booking.
5. **Book Tickets:** Reserve a seat for a selected movie.
6. **Logout:** Users can log out via the navigation bar.

## 🔑 Environment Variables
Create a `.env` file in the root directory and add your Google OAuth Client ID:
```
REACT_APP_GOOGLE_CLIENT_ID=your-client-id
```

## 🤝 Contributing
Contributions are welcome! Feel free to submit issues or pull requests to improve this project.

## 📜 License
This project is licensed under the **MIT License**.

---
💻 Developed by Chakradhar

