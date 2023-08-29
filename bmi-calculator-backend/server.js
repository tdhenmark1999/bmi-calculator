const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/calculate-bmi', (req, res) => {
    const height = req.body.height;
    const weight = req.body.weight;

    // Perform BMI calculation (you can replace this with your calculation logic)
    const bmi = (weight / (height * height)) * 10000;

    res.json({ bmi });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
