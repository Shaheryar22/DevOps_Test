const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/status', (req, res) => {
    res.json({
        status: "running",
        message: "Backend is running 🚀",
        timestamp: new Date()
    });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
