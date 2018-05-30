/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'World';

console.log('Hello, ' + name + '!');

function varScopeTest() {
    console.log('var before loop ' + v);
    for (var v = 0; v < 3; v++) {
        console.log('var during loop ' + v);
    }

    console.log('var after loop: ' + v);
}

function letScopeTest() {
    // console.log(`let before loop ${v}`);
    for (var _v = 0; _v < 3; _v++) {
        console.log('let during loop ' + _v);
    }

    console.log('let after loop: ' + v);
}

// varScopeTest();
// letScopeTest();

var a = 'This is \na multiline\nstring.';
// console.log(a);

var getRandom = function getRandom() {
    return Math.random();
};

// console.log(getRandom());

var sayHi = function sayHi(name) {
    console.log('Hello ' + name);
};

// sayHi('dio');

var definePerson = function definePerson(name, age) {
    return {
        name: name,
        age: age
    };
};

var dio = definePerson('dio', 400);

// console.log(dio);
// console.log(dio.name);
// console.log(dio.age);

var people = [{ name: 'Dio', age: 400 }, { name: 'Ido', age: 40 }, { name: 'Scree', age: 35 }];

var ages = people.map(function (person) {
    return person.age;
});
// console.log(ages);

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name, this.age = age, this.type = 'human';
    }

    _createClass(Person, [{
        key: 'info',
        value: function info() {
            console.log('Name: ' + this.name + '\n        Age: ' + this.age + '\n        Type: ' + this.type);
        }
    }, {
        key: 'speak',
        value: function speak() {
            console.log('Hello there');
        }
    }]);

    return Person;
}();

var fred = new Person('Fred', 23);

fred.info();
fred.speak();

var Monster = function (_Person) {
    _inherits(Monster, _Person);

    function Monster(name, age, type) {
        _classCallCheck(this, Monster);

        var _this = _possibleConstructorReturn(this, (Monster.__proto__ || Object.getPrototypeOf(Monster)).call(this, name, age));

        _this.type = type;
        return _this;
    }

    _createClass(Monster, [{
        key: 'speak',
        value: function speak() {
            console.log('I\'m a ' + this.type);
        }
    }]);

    return Monster;
}(Person);

var harry = new Monster('Harry', 34, 'Vampire');

harry.info();
harry.speak();

/***/ })
/******/ ]);