class Logger{
    constructor(){}

    log(info){
        console.log("The " + info + " event has been emmitted. ")
    }
}

module.exports = Logger;