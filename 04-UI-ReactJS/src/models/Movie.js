export default class Movie {
    constructor(name, year, duration, id){
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.id = id;
    }
    toString(){
        return "Film Name: "+ this.title + " Year: " + this.year + " Duration: " + this.duration;
    }
    setName(name){
        this.name = name;
    }
    setYear(year){
        this.year = year;
    }
    setDuration(duration){
        this.duration = duration
    }
    setId(id){
        this.id = id;
    }
};
