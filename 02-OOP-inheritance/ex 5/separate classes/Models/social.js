const social = {
    shared: function(friendName){
        console.log( friendName + " share " + this.title);
    },
    likes: function(friendName){
        console.log( friendName + " likes " + this.title);
    } 
}

module.exports = social;