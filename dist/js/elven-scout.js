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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0;
    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    }
  }, {
    key: "run",
    value: function run() {
      this.setFrame(0);
      this.running = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        if (this.repeat) {
          this.setFrame(0);
          return;
        }

        this.stop();
        return;
      }

      this.setFrame(this.currentFrame + 1);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        this.lastTime == time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        this.nextFrame();
        this.lastTime += this.speed;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false;
    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed;
        console.log(this);
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-level */ "./src/scenes/game-level.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 650 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      //отвечает за загрузку изображений 
      orc: 'img/orc.png',
      player: 'img/player.png',
      title: 'img/title.jpg',
      tiles: 'img/tiles.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      //механизм переделывания сцен 
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var elvenScout = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  elvenScout.run();
};

console.log('ass');

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":20,"infinite":false,"layers":[{"data":[1,22,22,22,1,1,1,1,45,45,45,45,45,45,1,1,1,1,1,1,1,22,22,22,1,1,1,1,45,45,45,45,45,45,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,1,1,1,26,26,26,26,26,17,26,26,26,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"id":12,"name":"Слой тайлов 1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[0,21,0,23,0,0,0,0,11,12,12,12,12,13,0,0,0,0,0,0,0,21,0,23,0,0,0,0,31,32,32,32,32,33,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,21,0,23,0,0,0,0,0,0,0,21,0,24,12,12,12,12,12,12,12,25,0,23,0,0,0,0,0,0,0,31,32,32,32,32,32,32,32,32,32,32,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,12,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,14,15,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,24,25,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,32,32,33,0,0,0,0,0,0,0,0,0,0,0,0,11,12,12,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,32,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,32,32,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":20,"id":13,"name":"Слой тайлов 2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[7,0,0,0,7,0,7,3,0,0,0,0,0,0,0,2,7,7,7,7,7,0,0,0,0,0,7,3,0,0,0,0,0,0,4,3,2,2,2,7,7,0,0,0,7,0,7,5,4,2,3,0,0,3,3,5,2,7,2,7,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,2,2,2,7,7,0,0,0,7,7,2,2,2,2,2,0,0,0,2,4,2,2,2,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,4,7,7,0,5,0,6,6,6,6,6,6,5,0,0,0,0,6,5,6,4,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,4,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,7,6,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,7,7,0,0,2,0,7,0,2,7,0,0,7,0,0,0,0,0,0,0,7,6,0,0,7,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,7,7,7,0,0,0,2,0,0,7,0,0,0,0,0,6,0,0,0,6,6,6,6,0,6,6,6,0,6,6,3,0,0,0,0,0,0,0,6,7,6,3,0,0,6,0,0,0,6,6,0,7,0,0,3,0,6,0,0,7,6,6,2,0,6,0,6,0,0,0,0,0,0,7,4,0,0,0,0,12,6,6,6,3,3,3,6,0,6,6,0,0,0,0,0,0,0,0,0,32,5,2,6,6,3,3,3,0,0,7,7,7,7,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],"height":20,"id":14,"name":"Слой тайлов 3","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","id":15,"name":"Слой объектов 1","objects":[{"height":833.333333333333,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":66.6666666666667,"x":-2.66666666666667,"y":-2.66666666666667},{"height":62.6666666666667,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":65.3333333333333,"x":254.666666666667,"y":0},{"height":62.6666666666667,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":60,"x":257.333333333333,"y":128},{"height":64,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":126.666666666667,"x":254.666666666667,"y":258.666666666667},{"height":62.6666666666667,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":385.333333333333,"x":254.666666666667,"y":385.333333333333},{"height":193.333333333333,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":65.3333333333334,"x":382.666666666667,"y":-1.33333333333333},{"height":65.3333333333333,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":384,"x":381.333333333333,"y":190.666666666667},{"height":68,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":193.333333333333,"x":832,"y":189.333333333333},{"height":64,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":254.666666666667,"x":1024,"y":-1.33333333333333},{"height":189.333333333333,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":190.666666666667,"x":960,"y":321.333333333333},{"height":961.333333333333,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":1216,"y":61.3333333333333},{"height":128,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":65.3333333333335,"x":1214.66666666667,"y":1150.66666666667},{"height":65.3333333333334,"id":24,"name":"","rotation":0,"type":"","visible":true,"width":445.333333333333,"x":257.333333333333,"y":574.666666666667},{"height":62.6666666666666,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":128,"x":64,"y":576},{"height":62.6666666666667,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":62.6666666666666,"x":320,"y":705.333333333333},{"height":70.6666666666666,"id":27,"name":"","rotation":0,"type":"","visible":true,"width":65.3333333333333,"x":512,"y":698.666666666667},{"height":69.3333333333333,"id":28,"name":"","rotation":0,"type":"","visible":true,"width":62.6666666666667,"x":705.333333333333,"y":700},{"height":65.3333333333333,"id":29,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":832,"y":768},{"height":65.3333333333333,"id":30,"name":"","rotation":0,"type":"","visible":true,"width":66.6666666666667,"x":573.333333333333,"y":832},{"height":65.3333333333334,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":66.6666666666666,"x":702.666666666667,"y":958.666666666667},{"height":65.3333333333333,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":62.6666666666667,"x":833.333333333333,"y":1025.33333333333},{"height":65.3333333333334,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":65.3333333333335,"x":1150.66666666667,"y":894.666666666667},{"height":64,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":62.6666666666667,"x":961.333333333333,"y":829.333333333333},{"height":66.6666666666667,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":1024,"y":957.333333333333},{"height":64,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":1150.66666666667,"x":62.6666666666667,"y":1214.66666666667},{"height":60,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":256,"x":576,"y":1153.33333333333},{"height":66.6666666666665,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":130.666666666667,"x":510.666666666667,"y":1088},{"height":126.666666666667,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":129.333333333333,"x":513.333333333333,"y":897.333333333333},{"height":64,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":122.666666666667,"x":322.666666666667,"y":894.666666666667},{"height":133.333333333333,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":68,"x":381.333333333333,"y":1022.66666666667},{"height":193.333333333333,"id":42,"name":"","rotation":0,"type":"","visible":true,"width":65.3333333333333,"x":254.666666666667,"y":893.333333333333},{"height":62.6666666666667,"id":43,"name":"","rotation":0,"type":"","visible":true,"width":129.333333333333,"x":126.666666666667,"y":1150.66666666667},{"height":446.666666666667,"id":45,"name":"","rotation":0,"type":"","visible":true,"width":65.3333333333333,"x":-2.66666666666667,"y":832},{"height":129.333333333333,"id":46,"name":"","rotation":0,"type":"","visible":true,"width":129.333333333333,"x":64,"y":832},{"height":66.6666666666666,"id":47,"name":"","rotation":0,"type":"","visible":true,"width":61.3333333333333,"x":193.333333333333,"y":766.666666666667},{"height":61.3333333333333,"id":48,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":62.6666666666667,"y":1025.33333333333},{"height":64,"id":49,"name":"","rotation":0,"type":"","visible":true,"width":129.333333333333,"x":62.6666666666667,"y":1085.33333333333},{"height":0,"id":50,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":198.666666666667,"y":1013.33333333333}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextlayerid":16,"nextobjectid":51,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.2.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/tileset.tsx"}],"tilewidth":64,"type":"map","version":1.2,"width":20};

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/game-level.js":
/*!**********************************!*\
  !*** ./src/scenes/game-level.js ***!
  \**********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      //лист стпрайта нашей картинки 
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setXY(10, 10);

    _this.orcTiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      //орг спиной с 1 по 7
      imageName: 'orc',
      imageWidth: 832,
      imageHeight: 1344
    });
    _this.orc = _this.orcTiles.getAnimation([1, 2, 3, 4, 5, 6, 7], 300);
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap("level1", mapData, this.tiles);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.orc.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); //this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
    _this.nextScene = "menu";
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      //зажержка между сцен для загрузки графики   
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = true;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill("#000000");
      this.game.screen.print(50, 70, "Загрузка...");

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.fire) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title');
      this.game.screen.print(250, 500, "Нажмите пробел");

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
/* harmony import */ var _tile_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-map */ "./src/tile-map.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  _createClass(Screen, [{
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imageFiles);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
        console.log(names);
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
  }, {
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas');
      mapImage.width = mapData.width * mapData.tilewidth;
      mapImage.height = mapData.height * mapData.tileheight;
      var mapContext = mapImage.getContext('2d');
      var hitboxes = [];
      var row, col;
      mapData.layers.forEach(function (layer) {
        if (layer.type == "tilelayer") {
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            if (index > 0) {
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == "objectgroup") {
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      });
      this.images[name] = mapImage;
      return new _tile_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"]({
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = "#ffffff";
      this.context.font = "22px Georgia";
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    } //метод для отображеня спрайта

  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      this.context.drawImage(this.images[sprite.imageName], sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      //задаем кадры на спрайт листе 
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/tile-map.js":
/*!*************************!*\
  !*** ./src/tile-map.js ***!
  \*************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLWxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbGUtbWFwLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImxhc3RUaW1lIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsInRpbWUiLCJuZXh0RnJhbWUiLCJTcHJpdGUiLCJDb250cm9sU3RhdGUiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJmaXJlIiwia2V5TWFwIiwiTWFwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ1cGRhdGUiLCJwcmVzc2VkIiwiaGFzIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJuYW1lIiwicHVzaCIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJhbGwiLCJzcmMiLCJyZXNvbHZlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsImVsdmVuU2NvdXQiLCJydW4iLCJnYW1lIiwiY29uc3RydWN0b3IiLCJTcHJpdGVTaGVldCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInRyZWUiLCJnZXRTcHJpdGUiLCJzZXRYWSIsIm9yY1RpbGVzIiwiZ2V0QW5pbWF0aW9uIiwibWFwRGF0YSIsInJlcXVpcmUiLCJtYXAiLCJjcmVhdGVNYXAiLCJmaWxsIiwiZHJhd1Nwcml0ZSIsIm5leHRTY2VuZSIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJmaW5pc2giLCJwcmludCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGlsZXNldCIsIm1hcEltYWdlIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsIm1hcENvbnRleHQiLCJoaXRib3hlcyIsInJvdyIsImNvbCIsImxheWVycyIsImZvckVhY2giLCJsYXllciIsInR5cGUiLCJkYXRhIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJvYmplY3RzIiwib2JqIiwieDEiLCJ4IiwieDIiLCJ5MSIsInkiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZSIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0IiwiaW5kZXhlcyIsIk1hdGgiLCJ0cnVuYyIsInByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRU8sSUFBTUEsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDRSwyQkFBZ0c7QUFBQTs7QUFBQSxRQUFuRkMsU0FBbUYsUUFBbkZBLFNBQW1GO0FBQUEsUUFBeEVDLE1BQXdFLFFB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QUFTLENBQVQ7QUFDQSxTQUFLRyxDQUFMLEdBQVMsQ0FBVDtBQUNEOztBQVRIO0FBQUE7QUFBQSwwQkFXUUgsQ0FYUixFQVdVRyxDQVhWLEVBV2E7QUFDVCxXQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLRyxDQUFMLEdBQVNBLENBQVQ7QUFDRDtBQWRIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1FLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsbUJBQVlhLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsaUZBQU1BLEtBQU47QUFDQSxVQUFLL0IsUUFBTCxHQUFnQitCLEtBQUssQ0FBQy9CLFFBQU4sSUFBa0IsRUFBbEM7QUFGaUI7QUFHbEI7O0FBSkg7QUFBQSxFQUE2QjNHLDhDQUE3QixFIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcclxuICAgICAgc291cmNlWDogZnJhbWVzWzBdLnN4LFxyXG4gICAgICBzb3VyY2VZOiBmcmFtZXNbMF0uc3ksXHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBhdXRvcnVuO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICB0aGlzLnRvdGFsRnJhbWVzID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJhbWUoaW5kZXgpIHtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5kZXg7XHJcbiAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tpbmRleF0uc3g7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XHJcbiAgfVxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmV4dEZyYW1lKCkge1xyXG4gICAgaWYoKHRoaXMuY3VycmVudEZyYW1lICsgMSkgPT0gdGhpcy50b3RhbEZyYW1lcykge1xyXG4gICAgICBpZih0aGlzLnJlcGVhdCkge1xyXG4gICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZyYW1lKHRoaXMuY3VycmVudEZyYW1lICsgMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYoIXRoaXMucnVubmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmxhc3RUaW1lID09IDAgKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPT0gdGltZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuc3BlZWQpIHtcclxuICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcclxuICAgICAgdGhpcy5sYXN0VGltZSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgIHRoaXMucmlnaHQgPSBmYWxzZTsgXHJcbiAgICB0aGlzLmZpcmUgPSBmYWxzZTtcclxuICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcChbXHJcbiAgICAgIFszNywgJ2xlZnQnXSwgWzM5LCAncmlnaHQnXSwgWzM4LCAndXAnXSwgWzQwLCAnZG93biddLCBbMzIsICdmaXJlJ11cclxuICAgIF0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgZmFsc2UpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShldmVudCwgcHJlc3NlZCkge1xyXG4gICAgaWYodGhpcy5rZXlNYXAuaGFzKGV2ZW50LmtleUNvZGUpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzW3RoaXMua2V5TWFwLmdldChldmVudC5rZXlDb2RlKV0gPSBwcmVzc2VkO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vc2NlbmVzL21lbnUnO1xyXG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lcy9nYW1lLWxldmVsJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9jb250cm9sLXN0YXRlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NTAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoeyAgICAgLy/QvtGC0LLQtdGH0LDQtdGCINC30LAg0LfQsNCz0YDRg9C30LrRgyDQuNC30L7QsdGA0LDQttC10L3QuNC5IFxyXG4gICAgICBvcmM6ICdpbWcvb3JjLnBuZycsXHJcbiAgICAgIHBsYXllcjogJ2ltZy9wbGF5ZXIucG5nJyxcclxuICAgICAgdGl0bGU6ICdpbWcvdGl0bGUuanBnJyxcclxuICAgICAgdGlsZXM6ICdpbWcvdGlsZXMucG5nJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcclxuICAgIHRoaXMuc2NlbmVzID0ge1xyXG4gICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZyh0aGlzKSxcclxuICAgICAgbWVudTogbmV3IE1lbnUodGhpcyksXHJcbiAgICAgIGdhbWVMZXZlbDogbmV3IEdhbWVMZXZlbCh0aGlzKVxyXG4gICAgfTtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNjZW5lKHN0YXR1cykgey8v0LzQtdGF0LDQvdC40LfQvCDQv9C10YDQtdC00LXQu9GL0LLQsNC90LjRjyDRgdGG0LXQvSBcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICBjYXNlIFNjZW5lLlNUQVJUX0dBTUU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZyYW1lKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpIHtcclxuICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuaW1hZ2VGaWxlcykge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsdGhpcy5pbWFnZUZpbGVzW25hbWVdKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlKG5hbWUsIHNyYykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XHJcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xyXG4gIGVsdmVuU2NvdXQucnVuKCk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZygnYXNzJyk7XHJcbiIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG5cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxyXG4gIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cclxuICBzdGF0aWMgZ2V0IFNUQVJUX0dBTUUoKSB7IHJldHVybiAnU1RBUlRfR0FNRSc7IH1cclxuICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XHJcbiAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTicgOyB9XHJcbiAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gIH1cclxuXHJcbiAgZmluaXNoKHN0YXR1cykge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKHRpbWUpIHtcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHsgLy/Qu9C40YHRgiDRgdGC0L/RgNCw0LnRgtCwINC90LDRiNC10Lkg0LrQsNGA0YLQuNC90LrQuCBcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDBcclxuICAgIH0pO1xyXG4gICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XHJcbiAgICB0aGlzLnRyZWUuc2V0WFkoMTAsIDEwKTtcclxuICAgIHRoaXMub3JjVGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoeyAvL9C+0YDQsyDRgdC/0LjQvdC+0Lkg0YEgMSDQv9C+IDdcclxuICAgICAgaW1hZ2VOYW1lOiAnb3JjJyxcclxuICAgICAgaW1hZ2VXaWR0aDogODMyLFxyXG4gICAgICBpbWFnZUhlaWdodDogMTM0NFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9yYyA9IHRoaXMub3JjVGlsZXMuZ2V0QW5pbWF0aW9uKFsxLCAyLCAzLCA0LCA1LCA2LCA3XSwgMzAwKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEuanNvbicpO1xyXG4gICAgdGhpcy5tYXAgPSB0aGlzLmdhbWUuc2NyZWVuLmNyZWF0ZU1hcChcImxldmVsMVwiLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRyZWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMub3JjKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLm5leHRTY2VuZSA9IFwibWVudVwiO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgdGhpcy5sb2FkZWRBdCA9IDA7IFxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHsgLy/Qt9Cw0LbQtdGA0LbQutCwINC80LXQttC00YMg0YHRhtC10L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0LPRgNCw0YTQuNC60LggICBcclxuICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcclxuICAgICAgdGhpcy5sb2FkZWRBdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYodGhpcy5nYW1lLmNvbnRyb2wuZmlyZSkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGUnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoMjUwLCA1MDAsIFwi0J3QsNC20LzQuNGC0LUg0L/RgNC+0LHQtdC7XCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInXHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGUtbWFwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XHJcbiAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XHJcbiAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XHJcbiAgICBsZXQgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcclxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcclxuICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xyXG4gICAgY29uc3QgbWFwQ29udGV4dCA9IG1hcEltYWdlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xyXG4gICAgbGV0IHJvdywgY29sO1xyXG4gICAgbWFwRGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIGlmIChsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgbGF5ZXIuZGF0YS5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcbiAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcChvYmogPT4gKHsgeDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodCB9KSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XHJcbiAgICByZXR1cm4gbmV3IFRpbGVNYXAoe1xyXG4gICAgICBpbWFnZU5hbWU6IG5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IDAsXHJcbiAgICAgIHNvdXJjZVk6IDAsXHJcbiAgICAgIHdpZHRoOiBtYXBJbWFnZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBtYXBJbWFnZS5oZWlnaHQsXHJcbiAgICAgIGhpdGJveGVzOiBoaXRib3hlc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZmlsbChjb2xvcikge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcbiAgcHJpbnQoeCwgeSwgdGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIycHggR2VvcmdpYVwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xyXG4gIH1cclxuICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0sIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgLy/QvNC10YLQvtC0INC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3RjyDRgdC/0YDQsNC50YLQsFxyXG4gIGRyYXdTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCxcclxuICAgICAgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbn0gZnJvbSAnLi9hbmltYXRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0fSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xyXG4gICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7IC8v0LfQsNC00LDQtdC8INC60LDQtNGA0Ysg0L3QsCDRgdC/0YDQsNC50YIg0LvQuNGB0YLQtSBcclxuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKHtcclxuICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcclxuICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcChpbmRleCA9PiAoe3N4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KX0pKSwgXHJcbiAgICAgIHNwZWVkOiBzcGVlZCxcclxuICAgICAgcmVwZWF0OiByZXBlYXQsXHJcbiAgICAgIGF1dG9ydW46IGF1dG9ydW4sXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNwcml0ZShpbmRleCkge1xyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTb3VyY2VYKGluZGV4KSB7XHJcbiAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcclxuICB9XHJcbiAgZ2V0U291cmNlWShpbmRleCkgeyBcclxuICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpICogdGhpcy5zcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KXtcclxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lOyBcclxuICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQ9aGVpZ2h0O1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgfVxyXG5cclxuICBzZXRYWSh4LHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oaXRib3hlcyA9IHByb3BzLmhpdGJveGVzIHx8IFtdO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=