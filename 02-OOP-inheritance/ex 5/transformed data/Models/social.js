"use strict";

var social = {
    shared: function shared(friendName) {
        console.log(friendName + " share " + this.title);
    },
    likes: function likes(friendName) {
        console.log(friendName + " likes " + this.title);
    }
};

module.exports = social;