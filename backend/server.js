const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/devopsdb')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Simple schema
const StatusSchema = new mongoose.Schema({
    message: String,
    timestamp: Date
});

const Status = mongoose.model('Status', StatusSchema);

// API route
app.get('/api/status', async (req, res) => {
    const data = new Status({
        message: "Backend is running 🚀",
        timestamp: new Date()
    });

    await data.save();

    const allData = await Status.find().sort({ timestamp: -1 }).limit(5);

    res.json({
        status: "running",
        history: allData
    });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
