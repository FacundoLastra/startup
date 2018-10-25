class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

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
                fn.call(null);                
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

class Movie extends EventEmitter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.on("playFilm", () =>{
            console.log("You are watching the movie " + this.toString());
        });
        this.on("pauseFilm", () => {
            console.log("You are paused the movie " + this.toString());
        });
        this.on("resumeFilm", () => {
            console.log("You are resume the movie " + this.toString());
        });
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


const movie = new Movie("Star Wars 4", 1970, 120);
const actor = new Actor("Arnold Schwarzenegger", 71);
movie.play();
movie.pause();
movie.resume();
console.log(movie);
console.log(actor);

