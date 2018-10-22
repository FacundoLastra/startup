class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class EventEmitter {
    constructor(){}

    on(eventName, callback){
        document.addEventListener(eventName, callback);
    }
    emit(eventName){
        const event = new Event(eventName);
        document.dispatchEvent(event);
    }
    off(eventName, callback){
        document.removeEventListener(eventName,callback);
    }
    
}
class Movie extends EventEmitter {
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    toString(){
        return "Film Name: "+ this.title + " Year: " + this.year + " Duration: " + this.duration;
    }
    play(){
        this.on("playFilm", () => {
            console.log("You are playing the film");
        })
        this.emit("playFilm");        
    }
    pause(){
        this.on("pauseFilm", () => {
            console.log("You are paused the film");
        })
        this.emit("pauseFilm");
    }
    resume(){
        this.on("resumeFilm", ()=> {
            console.log("you are resumed the film");
        })
        this.emit("resumeFilm");
    }

}


const movie = new Movie("Star Wars 4", 1970, 120);