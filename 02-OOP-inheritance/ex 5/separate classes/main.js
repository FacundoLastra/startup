
const Movie = require('./Models/movie');
const social = require('./Models/social');
const Actor = require('./Models/actor');
const Logger = require('./Models/logger');

const movie = new Movie("Star Wars 4", 1970, 120);

Object.assign(movie,social); /// adding the social methods to movie instanc
/// event creation
const logger = new Logger();
movie.on("playFilm", logger.log);
movie.on("pauseFilm", logger.log);
movie.on("resumeFilm", logger.log);

let actors = [];

actors.push(new Actor("jose",22));
actors.push(new Actor("Carlos",64));

movie.addCast(actors);

Object.assign(movie,social); /// adding the social methods to movie instanc
console.log(movie);

movie.likes("facundo");
movie.shared("gerard");
movie.play();
movie.pause();
movie.resume();