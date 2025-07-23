# Basic REST API – CRUD Operations

This project is a simple RESTful API built using **Node.js** and **Express.js** that performs basic **CRUD operations** (Create, Read, Update, Delete) on a **User** resource. It was created as part of my backend development internship at **Prodigy InfoTech**.

---

## 🧑‍💻 Features

- Create a new user
- Get all users
- Get a user by ID
- Update a user
- Delete a user
- In-memory storage using `Map`
- Proper error handling and HTTP status codes
- Basic input validation (e.g., email format)

---

## 📦 Tech Stack

- Node.js
- Express.js
- UUID for unique user IDs

---

## 📁 User Fields

Each user contains:

- `id`: Unique identifier (UUID)
- `name`: User's full name
- `email`: User's email address
- `age`: User's age

---

## 🚀 How to Run

### 1. Clone the repo

```bash
git clone <repository-url>
cd <project-folder>

---
Install dependencies
npm install

---

Start the server
npm run start
The server will run on http://localhost:3000.

