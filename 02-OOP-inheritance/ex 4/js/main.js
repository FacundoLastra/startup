class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
class EventEmitter {
    constructor(){
        this.events = {}; /// for events diccionary
    }

    on(eventName, callback){
        if(typeof callback === "function" && typeof eventName === "string" && eventName != "") {
            if( !this.events[eventName] ) { /// if not exist the key
                this.events[eventName] = []; /// i created
            }
            this.events[eventName].push(callback); /// and push the function
        }else{
            console.log("sorry invalid data");
        }
    }
    emit(eventName){
        const event = this.events[eventName]; ///searching the event in the diccionary
        if(event) {/// if found
            event.forEach(fn => {
                fn.call(null,eventName);                
            });
        
        }else{
            console.log("event not found");
        }

    }
    off(eventName, callback){
        const fn = this.events[eventName];
        if(fn){
            let pos = fn.indexOf(callback);
            if(pos > -1){
                fn.splice(pos,1);
            }else{
                console.log("function not found");
            }
            this.events[eventName] = fn;
        }else{
            console.log("eventName not found");
        }
    }

}
class Logger{
    constructor(){}

    log(info){
        console.log("The " + info + " event has been emmitted. ")
    };
};

class Movie extends EventEmitter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors = [];
        const logger = new Logger();
        this.on("playFilm", logger.log);
        this.on("pauseFilm", logger.log);
        this.on("resumeFilm", logger.log);
    }
   addCast(actor){
        if(actor instanceof Array){
            this.actors = this.actors.concat(actor);
        }else if(actor){
            this.actors.push(actor);                
        }
    }    

    toString(){
        return "Film Name: "+ this.title + " Year: " + this.year + " Duration: " + this.duration;
    }
    play(){
        this.emit("playFilm");        
    }
    pause(){
        this.emit("pauseFilm");
    }
    resume(){
        this.emit("resumeFilm");
    }
};

const social =  {
    share: function(friendName){
        console.log( friendName + " share " + this.title);
    },
    likes: function(friendName){
        console.log( friendName + " likes " + this.title);
    } 
};

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
