const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this port if needed

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, and images)
app.use(express.static('public'));

// POST endpoint to handle form submission
app.post('/book-visit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    // Here you can implement the logic to book the visit
    // For demonstration, let's just log the received data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Respond with a success message
    res.send('Visit booked successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
