// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Endpoint to handle appointment bookings (for now just a mock)
app.post('/api/book-appointment', (req, res) => {
    const { patientName, patientAge, query, appointmentDate, appointmentTime } = req.body;

    // Here you can implement your logic for booking appointments
    console.log(`Appointment booked by ${patientName} for ${appointmentDate} at ${appointmentTime} with query: ${query}`);
    res.status(200).json({ message: 'Appointment booked successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
