'use strict';

var Movie = require('./Models/movie');
var social = require('./Models/social');
var Actor = require('./Models/actor');
var Logger = require('./Models/logger');

var movie = new Movie("Star Wars 4", 1970, 120);

Object.assign(movie, social); /// adding the social methods to movie instanc
/// event creation
var logger = new Logger();
movie.on("playFilm", logger.log);
movie.on("pauseFilm", logger.log);
movie.on("resumeFilm", logger.log);

var actors = [];

actors.push(new Actor("jose", 22));
actors.push(new Actor("Carlos", 64));

movie.addCast(actors);

Object.assign(movie, social); /// adding the social methods to movie instanc
console.log(movie);

movie.likes("facundo");
movie.shared("gerard");
movie.play();
movie.pause();
movie.resume();