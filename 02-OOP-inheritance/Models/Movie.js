import EventEmitter from "./EventEmitter";
import Logger from "./Logger";

export default class Movie extends EventEmitter{
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
            this.actors = actors.concat(actor);
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