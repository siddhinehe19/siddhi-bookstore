# Online Book Store

A small full-stack bookstore project with a React/Vite frontend and an Express/MySQL backend. The frontend includes a home page, a catalogue with book covers, and registration and login forms.

## Project structure

```text
OnlineBookStore/
├── backend/   # Express API
└── frontend/  # React application
```

## Requirements

- Node.js and npm
- MySQL

## Setup

Install dependencies in each project directory:

```sh
cd backend
npm install

cd ../frontend
npm install
```

### Configure the database

Create the database and users table in MySQL:

```sql
CREATE DATABASE online_book_store;
USE online_book_store;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

The backend connects to a local MySQL database named `online_book_store`. Before starting it, update the connection settings in `backend/server.js` to match your local MySQL credentials.

The optional `GET /books` API endpoint also expects a `books` table. The catalogue currently displays its sample books directly from the frontend and does not require that table.

## Run locally

Start the backend in one terminal:

```sh
cd backend
npm start
```

The API listens on `http://localhost:5000`.

Start the frontend in another terminal:

```sh
cd frontend
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`. Login and registration require the backend and MySQL database to be running.

## Pages

- `/` — home page
- `/catalogue` — sample book catalogue
- `/login` — login form
- `/register` — registration form

## Screenshots

These screenshots show the main UI flow of the bookstore app:

![Login screen](../screenshorts/Login.png)

![Register screen](../screenshorts/Register.png)

![Catalogue page](../screenshorts/Catalogue.png)

![Dashboard view](../screenshorts/Dashboard.png)

## API

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Backend health message |
| `POST` | `/register` | Register with `name`, `email`, and `password` |
| `POST` | `/login` | Authenticate with `email` and `password` |
| `GET` | `/books` | Return all rows from the MySQL `books` table |

## Useful commands

Run these from the `frontend` directory:

```sh
npm run build  # Create a production build in dist/
npm run preview # Preview the production build locally
npm run lint   # Run ESLint
```
