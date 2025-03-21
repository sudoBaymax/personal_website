const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is at the very top
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_CLUSTER_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
    res.send("MERN Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
