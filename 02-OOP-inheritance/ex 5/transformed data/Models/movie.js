'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('./eventEmitter');
var Logger = require('./logger');

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

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
        key: 'addCast',
        value: function addCast(actor) {
            if (actor instanceof Array) {
                this.actors = this.actors.concat(actor);
            } else if (actor) {
                this.actors.push(actor);
            }
        }
    }, {
        key: 'toString',
        value: function toString() {
            return "Film Name: " + this.title + " Year: " + this.year + " Duration: " + this.duration;
        }
    }, {
        key: 'play',
        value: function play() {
            this.emit("playFilm");
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.emit("pauseFilm");
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.emit("resumeFilm");
        }
    }]);

    return Movie;
}(EventEmitter);

module.exports = Movie;