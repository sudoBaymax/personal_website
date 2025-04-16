const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const cors = require('cors');
const path = require('path');

const Email = require('./schema/Email');


const app = express();

app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_CLUSTER_URI;
mongoose.connect(uri, {
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("MERN Backend is running");
});

app.get("/resume", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.pdf'));
});

app.get("/email_list", async (req, res) => {
    try {
        const emails = await Email.find();
        res.json(emails);
    } catch (err) {
        res.status(500).json({message: "Server error fetching emails"})
    }
})

app.post("/email_list", async (req, res) => {
    const { firstName, lastName, email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    try {
        const existing = await Email.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: "Email already subscribed." });
        }

        const newEmail = new Email({ firstName, lastName, email });
        await newEmail.save();
        res.status(201).json({ message: "Successfully subscribed!" });
    } catch (err) {
        res.status(500).json({ message: "Error subscribing email." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
