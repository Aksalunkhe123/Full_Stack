const express = require('express');
const app = express();
const port = 5000;

// Route
app.get('/', (req, res) => {
    res.send('Hello MERN Stack');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});