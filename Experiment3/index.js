const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// Middleware
app.use((req, res, next) => {
 console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
 next();
});
// Routes
app.get('/', (req, res) => {
 res.send('Welcome to Express API!');
});
// Route with parameters
app.get('/users/:id', (req, res) => {
 res.send(`User ID: ${req.params.id}`);
});
// Route with query string
app.get('/search', (req, res) => {
 res.send(`Search term: ${req.query.q}`);
});
// POST
app.post('/users', (req, res) => {
 const { name } = req.body;
 res.status(201).json({ message: `User ${name} created.` });
});
// Error Handling Middleware
app.use((req, res) => {
 res.status(404).json({ error: 'Not Found' });
});
// Start server
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});