import Actor from "./Models/Actor";
import social from "./Models/social";
import Movie from "./Models/Movie";

const movie = new Movie("Star Wars 4", 1970, 120);
Object.assign(movie,social); /// adding the social methods to movie instanc
const oneActor = new Actor("Arnold Schwarzenegger", 71);
const arrayOfActors = [new Actor("Kit Harington", 31),new Actor("Adam Sandler", 52),new Actor("Maisie Williams", 21)];
movie.addCast(oneActor);
movie.addCast(arrayOfActors);
movie.play();
movie.pause();
movie.resume();
movie.share("Facundo Lastra");
movie.likes("Javier Mascherano");
console.log(movie);
