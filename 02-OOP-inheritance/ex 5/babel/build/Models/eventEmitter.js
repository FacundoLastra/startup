"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
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