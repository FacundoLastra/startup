export default class EventEmitter {
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

};