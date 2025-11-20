const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Tutorial = require('./models/Tutorial');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/origami_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Mongo connected"))
.catch(err => console.log("Mongo error:", err));

app.get('/api/tutorials', async (req, res) => {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
