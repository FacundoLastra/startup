import Actor from "../Models/Actor";
import social from "../Models/social";
import Movie from "../Models/Movie";

const movie = new Movie("Star Wars 4", 1970, 120);

Object.assign(movie,social); /// adding the social methods to movie instanc