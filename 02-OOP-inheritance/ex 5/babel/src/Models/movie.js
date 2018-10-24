class EventEmitter {
    constructor() {
        this.events = {}; /// for events diccionary
    }

    on(eventName, callback) {
        if (typeof callback === "function" && typeof eventName === "string" && eventName != "") {
            if (!this.events[eventName]) { /// if not exist the key
                this.events[eventName] = []; /// i created
            }
            this.events[eventName].push(callback); /// and push the function
        } else {
            console.log("sorry invalid data");
        }
    }
    emit(eventName) {
        const event = this.events[eventName]; ///searching the event in the diccionary
        if (event) {/// if found
            event.forEach(fn => {
                fn.call(null, eventName);
            });

        } else {
            console.log("event not found");
        }

    }
    off(eventName, callback) {
        const fn = this.events[eventName];
        if (fn) {
            let pos = fn.indexOf(callback);
            if (pos > -1) {
                fn.splice(pos, 1);
            } else {
                console.log("function not found");
            }
            this.events[eventName] = fn;
        } else {
            console.log("eventName not found");
        }
    }

}
class Logger{
    constructor(){}

    log(info){
        console.log("The " + info + " event has been emmitted. ")
    }
}
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
}


 module.exports = Movie;

