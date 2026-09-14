// Import express
const express = require('express');

// Create a server using Express
const app = express();

// Port
const PORT = 5000;

// Home route
app.get('/', (req, res) => {
    res.send('Singhar Jewelry is a leading online jewelry store that offers a wide range of high-quality jewelry pieces for every occasion. Explore our collection and find the perfect piece to express your style and elegance.');
});

// Home route
app.get('/home', (req, res) => {
    res.send('Singhar Jewelry is a leading online jewelry store that offers a wide range of high-quality jewelry pieces for every occasion. Explore our collection and find the perfect piece to express your style and elegance.');
});

// About route
app.get('/about', (req, res) => {
    res.send('Learn more about Singhar Jewelry and our mission to provide high-quality jewelry.');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('Get in touch with us for any inquiries or support.');
});

// 404 Error route
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});