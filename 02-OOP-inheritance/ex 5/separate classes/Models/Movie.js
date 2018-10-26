const EventEmitter = require('./eventEmitter');

class Movie extends EventEmitter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors = [];
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
}


 module.exports = Movie;

