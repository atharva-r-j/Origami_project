const mongoose = require('mongoose');
const Tutorial = require('./models/Tutorial');

mongoose.connect("mongodb://127.0.0.1:27017/origami_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log("Mongo connected — SEEDING now...");

    await Tutorial.deleteMany({});

    await Tutorial.insertMany([
        {
            title: "Avion (Paper Airplane)",
            slug: "avion",
            difficulty: "Easy",
            steps: [
                "/assets/tutorials/avion/avion.jpg"
            ]
        },
        {
            title: "Crab Origami",
            slug: "crab",
            difficulty: "Medium",
            steps: [
                "/assets/tutorials/crab/crab.jpg"
            ]
        },
        {
            title: "Sea Turtle Origami",
            slug: "sea-turtle",
            difficulty: "Medium",
            steps: [
                "/assets/tutorials/sea_turtle/sea_turtle.jpg"
            ]
        },
        {
            title: "Spider Origami",
            slug: "spider",
            difficulty: "Hard",
            steps: [
                "/assets/tutorials/spider/spider.jpg"
            ]
        },
        {
            title: "Fox Cub Origami",
            slug: "fox-cub",
            difficulty: "Medium",
            steps: [
                "/assets/tutorials/fox_cub/fox_cub.jpg"
            ]
        },
        {
            title: "Crane Origami",
            slug: "crane",
            difficulty: "Easy",
            steps: [
                "/assets/tutorials/crane/crane.jpg"
            ]
        },
        {
            title: "Duck Origami",
            slug: "duck",
            difficulty: "Easy",
            steps: [
                "/assets/tutorials/duck/duck.jpg"
            ]
        },
        {
            title: "Boat Origami",
            slug: "boat",
            difficulty: "Easy",
            steps: [
                "/assets/tutorials/boat/boat.jpg"
            ]
        },
        {
            title: "Butterfly Origami",
            slug: "butterfly",
            difficulty: "Easy",
            steps: [
                "/assets/tutorials/butterfly/butterfly.jpg"
            ]
        }
    ]);

    console.log("Seeded successfully!");
    mongoose.disconnect();
})
.catch(err => console.log(err));
