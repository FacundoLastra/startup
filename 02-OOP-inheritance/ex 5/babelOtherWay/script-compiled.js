"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

module.exports = Actor;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {}; /// for events diccionary
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (typeof callback === "function" && typeof eventName === "string" && eventName != "") {
        if (!this.events[eventName]) {
          /// if not exist the key
          this.events[eventName] = []; /// i created
        }

        this.events[eventName].push(callback); /// and push the function
      } else {
        console.log("sorry invalid data");
      }
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var event = this.events[eventName]; ///searching the event in the diccionary

      if (event) {
        /// if found
        event.forEach(function (fn) {
          fn.call(null, eventName);
        });
      } else {
        console.log("event not found");
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      var fn = this.events[eventName];

      if (fn) {
        var pos = fn.indexOf(callback);

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
  }]);

  return EventEmitter;
}();

module.exports = EventEmitter;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log("The " + info + " event has been emmitted. ");
    }
  }]);

  return Logger;
}();

module.exports = Logger;
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = require('./eventEmitter');

var Logger = require('./logger');

var Movie =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));
    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.actors = [];
    var logger = new Logger();

    _this.on("playFilm", logger.log);

    _this.on("pauseFilm", logger.log);

    _this.on("resumeFilm", logger.log);

    return _this;
  }

  _createClass(Movie, [{
    key: "addCast",
    value: function addCast(actor) {
      if (actor instanceof Array) {
        this.actors = this.actors.concat(actor);
      } else if (actor) {
        this.actors.push(actor);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Film Name: " + this.title + " Year: " + this.year + " Duration: " + this.duration;
    }
  }, {
    key: "play",
    value: function play() {
      this.emit("playFilm");
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit("pauseFilm");
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit("resumeFilm");
    }
  }]);

  return Movie;
}(EventEmitter);

module.exports = Movie;
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
