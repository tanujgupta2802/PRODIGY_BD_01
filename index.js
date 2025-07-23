const express = require("express");
const { v4: uuidv4 } = require("uuid"); // for UUID
const app = express();
const port = 3000;

app.use(express.json());

// In-memory database
const users = new Map();

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Create User (POST)
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res
      .status(400)
      .json({ message: "Name, email, and age are required" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const id = uuidv4();
  const user = { id, name, email, age };
  users.set(id, user);

  res.status(201).json(user);
});

// Get All Users (GET)
app.get("/users", (req, res) => {
  const allUsers = Array.from(users.values());
  res.json(allUsers);
});

// Get Single User by ID (GET)
app.get("/users/:id", (req, res) => {
  const user = users.get(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// Update User by ID (PUT)
app.put("/users/:id", (req, res) => {
  const { name, email, age } = req.body;
  const user = users.get(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (email && !isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const updatedUser = {
    ...user,
    name: name ?? user.name,
    email: email ?? user.email,
    age: age ?? user.age,
  };

  users.set(req.params.id, updatedUser);
  res.json(updatedUser);
});

// Delete User by ID (DELETE)
app.delete("/users/:id", (req, res) => {
  const exists = users.has(req.params.id);

  if (!exists) {
    return res.status(404).json({ message: "User not found" });
  }

  users.delete(req.params.id);
  res.status(204).send(); // No content
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
