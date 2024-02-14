const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

const bodyParser = require('body-parser');
router.use(bodyParser.json());

// movies qui liste tous les titres des films avec un get
router.get("/movies", (req, res) => {
    // const allMovies = movies.map(movie => movie.title);
    const allMovies = movies;
    res.send(allMovies);
}); 

// movie/:id qui montrera un seul film avec un get
router.get("/movie/:id", (req, res) => {
    const movieId = req.params.id;
    const movie = movies.find(movie => movie._id === `movie:${movieId}`);
    res.send(movie);
});

// router.get("/movie/:movieId", (req, res) => {
//     const movieId = req.params.movieId;
//     const movie = movies[movieId];
//     res.send(movie);
// });

//movie/new qui ajoutera un film
router.post("/movie/new", (req, res) => {
    const { title } = req.body;

    const newId = `movie:${movies.length + 1}`;

    const newMovie = {
        _id: newId,
        title, 
    };

    movies.push(newMovie);
    res.json(movies);
});


// movie/:id qui supprimera un film avec un delete
router.delete("/movie/:id", (req, res) => {
    const deletedMovie = req.params._id;

    console.log("DELETE Request Called for /api endpoint");
    res.send("DELETE Request Called");

    delete movies[deletedMovie];
});

module.exports = router;