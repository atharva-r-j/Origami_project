const mongoose = require('mongoose');

const TutorialSchema = new mongoose.Schema({
    title: String,
    slug: String,
    difficulty: String,
    steps: [String]
});

module.exports = mongoose.model("Tutorial", TutorialSchema);
