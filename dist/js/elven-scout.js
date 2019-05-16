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
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
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
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        this.nextFrame();
        this.lastTime = time;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/character-sheet.js":
/*!********************************!*\
  !*** ./src/character-sheet.js ***!
  \********************************/
/*! exports provided: CharacterSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-sheet */ "./src/sprite-sheet.js");
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


var CharacterSheet =
/*#__PURE__*/
function (_SpriteSheet) {
  _inherits(CharacterSheet, _SpriteSheet);

  function CharacterSheet(_ref) {
    var _this;

    var imageName = _ref.imageName;

    _classCallCheck(this, CharacterSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSheet).call(this, {
      imageName: imageName,
      imageWidth: 832,
      imageHeight: 1344
    }));
    _this.sequences = _this.getSequences();
    return _this;
  }

  _createClass(CharacterSheet, [{
    key: "getSequences",
    value: function getSequences() {
      var data = __webpack_require__(/*! ./maps/animations.json */ "./src/maps/animations.json");

      var sequences = {};
      data.layers.forEach(function (layer) {
        sequences[layer.name] = layer.data.filter(function (i) {
          return i > 0;
        });
      });
      return sequences;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _get(_getPrototypeOf(CharacterSheet.prototype), "getAnimation", this).call(this, this.sequences[name], speed, repeat, autorun);
    }
  }]);

  return CharacterSheet;
}(_sprite_sheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"]);

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

/***/ "./src/maps/animations.json":
/*!**********************************!*\
  !*** ./src/maps/animations.json ***!
  \**********************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":1,"infinite":false,"layers":[{"data":[1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":1,"name":"spell_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[14,15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":2,"name":"spell_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[27,28,29,30,31,32,33,34,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":3,"name":"spell_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[40,41,42,43,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":4,"name":"spell_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[53,54,55,56,57,58,59,60,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":5,"name":"stab_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[66,67,68,69,70,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":6,"name":"stab_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[79,80,81,82,83,84,85,86,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":7,"name":"stab_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[92,93,94,95,96,97,98,99,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":8,"name":"stab_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[105,106,107,108,109,110,111,112,113,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":9,"name":"walk_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[118,119,120,121,122,123,124,125,126,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":10,"name":"walk_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[131,132,133,134,135,136,137,138,139,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":11,"name":"walk_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[144,145,146,147,148,149,150,151,152,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":12,"name":"walk_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[157,158,159,160,161,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":13,"name":"cut_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[170,171,172,173,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":14,"name":"cut_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[183,184,185,186,187,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":15,"name":"cut_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[196,197,198,199,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":16,"name":"cut_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[209,210,211,212,213,214,215,216,217,218,219,220,221,0,0,0,0,0,0,0],"height":1,"id":17,"name":"shoot_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[222,223,224,225,226,227,228,229,230,231,232,233,234,0,0,0,0,0,0,0],"height":1,"id":18,"name":"shoot_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0],"height":1,"id":19,"name":"shoot_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[248,249,250,251,252,253,254,255,256,257,258,259,260,0,0,0,0,0,0,0],"height":1,"id":20,"name":"shoot_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[261,262,263,264,265,266,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"id":21,"name":"death","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextlayerid":22,"nextobjectid":1,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.2.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/playertiles.tsx"}],"tilewidth":64,"type":"map","version":1.2,"width":20};

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
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../character-sheet */ "./src/character-sheet.js");
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

    _this.orcTiles = new _character_sheet__WEBPACK_IMPORTED_MODULE_2__["CharacterSheet"]({
      imageName: "orc"
    });
    _this.orc = _this.orcTiles.getAnimation("walk_down");

    _this.orc.setXY(100, 10);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGlsZS1tYXAuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiaW1hZ2VOYW1lIiwiZnJhbWVzIiwic3BlZWQiLCJyZXBlYXQiLCJhdXRvcnVuIiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwibGFzdFRpbWUiLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwidGltZSIsIm5leHRGcmFtZSIsIlNwcml0ZSIsIkNoYXJhY3RlclNoZWV0IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0Iiwic2VxdWVuY2VzIiwiZ2V0U2VxdWVuY2VzIiwiZGF0YSIsInJlcXVpcmUiLCJsYXllcnMiLCJmb3JFYWNoIiwibGF5ZXIiLCJuYW1lIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXBkYXRlIiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsInBsYXllciIsInRpdGxlIiwidGlsZXMiLCJjb250cm9sIiwic2NlbmVzIiwibG9hZGluZyIsIkxvYWRpbmciLCJtZW51IiwiTWVudSIsImdhbWVMZXZlbCIsIkdhbWVMZXZlbCIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJzdGF0dXMiLCJTY2VuZSIsIkxPQURFRCIsIlNUQVJUX0dBTUUiLCJXT1JLSU5HIiwiY2hhbmdlU2NlbmUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwicHVzaCIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJhbGwiLCJzcmMiLCJyZXNvbHZlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsImVsdmVuU2NvdXQiLCJydW4iLCJnYW1lIiwiY29uc3RydWN0b3IiLCJ0cmVlIiwiZ2V0U3ByaXRlIiwic2V0WFkiLCJvcmNUaWxlcyIsImdldEFuaW1hdGlvbiIsIm1hcERhdGEiLCJtYXAiLCJjcmVhdGVNYXAiLCJmaWxsIiwiZHJhd1Nwcml0ZSIsIm5leHRTY2VuZSIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJmaW5pc2giLCJwcmludCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGlsZXNldCIsIm1hcEltYWdlIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsIm1hcENvbnRleHQiLCJoaXRib3hlcyIsInJvdyIsImNvbCIsInR5cGUiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIm9iamVjdHMiLCJvYmoiLCJ4MSIsIngiLCJ4MiIsInkxIiwieSIsInkyIiwiVGlsZU1hcCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Iiwic3ByaXRlIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJpbmRleGVzIiwiTWF0aCIsInRydW5jIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFTyxJ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Q0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLRyxDQUFMLEdBQVMsQ0FBVDtBQUNEOztBQVRIO0FBQUE7QUFBQSwwQkFXUUgsQ0FYUixFQVdVRyxDQVhWLEVBV2E7QUFDVCxXQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLRyxDQUFMLEdBQVNBLENBQVQ7QUFDRDtBQWRIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1FLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsbUJBQVlhLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsaUZBQU1BLEtBQU47QUFDQSxVQUFLM0IsUUFBTCxHQUFnQjJCLEtBQUssQ0FBQzNCLFFBQU4sSUFBa0IsRUFBbEM7QUFGaUI7QUFHbEI7O0FBSkg7QUFBQSxFQUE2QnBILDhDQUE3QixFIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcclxuICAgICAgc291cmNlWDogZnJhbWVzWzBdLnN4LFxyXG4gICAgICBzb3VyY2VZOiBmcmFtZXNbMF0uc3ksXHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBhdXRvcnVuO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICB0aGlzLnRvdGFsRnJhbWVzID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJhbWUoaW5kZXgpIHtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5kZXg7XHJcbiAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tpbmRleF0uc3g7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XHJcbiAgfVxyXG4gIHJ1bigpIHtcclxuICAgIGlmKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5leHRGcmFtZSgpIHtcclxuICAgIGlmKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHtcclxuICAgICAgaWYodGhpcy5yZXBlYXQpIHtcclxuICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArIDEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5sYXN0VGltZSA9PSAwICkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuc3BlZWQpIHtcclxuICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi9zcHJpdGUtc2hlZXRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgU3ByaXRlU2hlZXQge1xyXG4gIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWV9KSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxyXG4gICAgICBpbWFnZVdpZHRoOiA4MzIsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiAxMzQ0XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VxdWVuY2VzID0gdGhpcy5nZXRTZXF1ZW5jZXMoKTtcclxuICB9XHJcblxyXG4gIGdldFNlcXVlbmNlcygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucy5qc29uJyk7XHJcbiAgICBjb25zdCBzZXF1ZW5jZXMgPSB7fTtcclxuICAgIGRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICBzZXF1ZW5jZXNbbGF5ZXIubmFtZV0gPSBsYXllci5kYXRhLmZpbHRlcihpID0+IGkgPiAgMCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXF1ZW5jZXM7IFxyXG4gIH1cclxuXHJcbiAgZ2V0QW5pbWF0aW9uKG5hbWUsIHNwZWVkID0gMTAwLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmdldEFuaW1hdGlvbih0aGlzLnNlcXVlbmNlc1tuYW1lXSwgc3BlZWQsIHJlcGVhdCwgYXV0b3J1bik7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENvbnRyb2xTdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yaWdodCA9IGZhbHNlOyBcclxuICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgWzM3LCAnbGVmdCddLCBbMzksICdyaWdodCddLCBbMzgsICd1cCddLCBbNDAsICdkb3duJ10sIFszMiwgJ2ZpcmUnXVxyXG4gICAgXSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XHJcbiAgICBpZih0aGlzLmtleU1hcC5oYXMoZXZlbnQua2V5Q29kZSkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXNbdGhpcy5rZXlNYXAuZ2V0KGV2ZW50LmtleUNvZGUpXSA9IHByZXNzZWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4vc2NyZWVuJztcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4vc2NlbmVzL2xvYWRpbmcnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZXMvbWVudSc7XHJcbmltcG9ydCB7IEdhbWVMZXZlbCB9IGZyb20gJy4vc2NlbmVzL2dhbWUtbGV2ZWwnO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgeyBDb250cm9sU3RhdGUgfSBmcm9tICcuL2NvbnRyb2wtc3RhdGUnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDY1MCwgaGVpZ2h0ID0gNjQwIH0gPSB7fSkge1xyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7ICAgICAvL9C+0YLQstC10YfQsNC10YIg0LfQsCDQt9Cw0LPRgNGD0LfQutGDINC40LfQvtCx0YDQsNC20LXQvdC40LkgXHJcbiAgICAgIG9yYzogJ2ltZy9vcmMucG5nJyxcclxuICAgICAgcGxheWVyOiAnaW1nL3BsYXllci5wbmcnLFxyXG4gICAgICB0aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxyXG4gICAgICB0aWxlczogJ2ltZy90aWxlcy5wbmcnXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2xTdGF0ZSgpO1xyXG4gICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7Ly/QvNC10YXQsNC90LjQt9C8INC/0LXRgNC10LTQtdC70YvQstCw0L3QuNGPINGB0YbQtdC9IFxyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnJhbWUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xyXG4gICAgdGhpcy5pbWFnZUZpbGVzID0gaW1hZ2VGaWxlcztcclxuICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XHJcbiAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSx0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZWx2ZW5TY291dCA9IG5ldyBHYW1lKCk7XHJcbiAgZWx2ZW5TY291dC5ydW4oKTtcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKCdhc3MnKTtcclxuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XHJcblxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBXT1JLSU5HKCkgeyByZXR1cm4gJ1dPUktJTkcnOyB9XHJcbiAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxyXG4gIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHsgcmV0dXJuICdTVEFSVF9HQU1FJzsgfVxyXG4gIHN0YXRpYyBnZXQgR0FNRV9PVkVSKCkgeyByZXR1cm4gJ0dBTUVfT1ZFUic7IH1cclxuICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJyA7IH1cclxuICBzdGF0aWMgZ2V0IEZJTklTSEVEKCkgeyByZXR1cm4gJ0ZJTklTSEVEJzsgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XHJcbiAgfVxyXG5cclxuICBmaW5pc2goc3RhdHVzKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICB9XHJcblxyXG4gIHJlbmRlciAodGltZSkge1xyXG5cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gJy4uL2NoYXJhY3Rlci1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy50aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7IC8v0LvQuNGB0YIg0YHRgtC/0YDQsNC50YLQsCDQvdCw0YjQtdC5INC60LDRgNGC0LjQvdC60LggXHJcbiAgICAgIGltYWdlTmFtZTogJ3RpbGVzJyxcclxuICAgICAgaW1hZ2VXaWR0aDogNjQwLFxyXG4gICAgICBpbWFnZUhlaWdodDogNjQwXHJcbiAgICB9KTtcclxuICAgIHRoaXMudHJlZSA9IHRoaXMudGlsZXMuZ2V0U3ByaXRlKDcpO1xyXG4gICAgdGhpcy50cmVlLnNldFhZKDEwLCAxMCk7XHJcbiAgICB0aGlzLm9yY1RpbGVzID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IFwib3JjXCJ9KTtcclxuICAgIHRoaXMub3JjID0gdGhpcy5vcmNUaWxlcy5nZXRBbmltYXRpb24oXCJ3YWxrX2Rvd25cIik7XHJcbiAgICB0aGlzLm9yYy5zZXRYWSgxMDAsIDEwKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEuanNvbicpO1xyXG4gICAgdGhpcy5tYXAgPSB0aGlzLmdhbWUuc2NyZWVuLmNyZWF0ZU1hcChcImxldmVsMVwiLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRyZWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMub3JjKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLm5leHRTY2VuZSA9IFwibWVudVwiO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgdGhpcy5sb2FkZWRBdCA9IDA7IFxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHsgLy/Qt9Cw0LbQtdGA0LbQutCwINC80LXQttC00YMg0YHRhtC10L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0LPRgNCw0YTQuNC60LggICBcclxuICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcclxuICAgICAgdGhpcy5sb2FkZWRBdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYodGhpcy5nYW1lLmNvbnRyb2wuZmlyZSkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGUnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoMjUwLCA1MDAsIFwi0J3QsNC20LzQuNGC0LUg0L/RgNC+0LHQtdC7XCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInXHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGUtbWFwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XHJcbiAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XHJcbiAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XHJcbiAgICBsZXQgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcclxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcclxuICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xyXG4gICAgY29uc3QgbWFwQ29udGV4dCA9IG1hcEltYWdlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xyXG4gICAgbGV0IHJvdywgY29sO1xyXG4gICAgbWFwRGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIGlmIChsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgbGF5ZXIuZGF0YS5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcbiAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcChvYmogPT4gKHsgeDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodCB9KSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XHJcbiAgICByZXR1cm4gbmV3IFRpbGVNYXAoe1xyXG4gICAgICBpbWFnZU5hbWU6IG5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IDAsXHJcbiAgICAgIHNvdXJjZVk6IDAsXHJcbiAgICAgIHdpZHRoOiBtYXBJbWFnZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBtYXBJbWFnZS5oZWlnaHQsXHJcbiAgICAgIGhpdGJveGVzOiBoaXRib3hlc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZmlsbChjb2xvcikge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcbiAgcHJpbnQoeCwgeSwgdGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIycHggR2VvcmdpYVwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xyXG4gIH1cclxuICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0sIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgLy/QvNC10YLQvtC0INC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3RjyDRgdC/0YDQsNC50YLQsFxyXG4gIGRyYXdTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCxcclxuICAgICAgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbn0gZnJvbSAnLi9hbmltYXRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0fSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xyXG4gICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7IC8v0LfQsNC00LDQtdC8INC60LDQtNGA0Ysg0L3QsCDRgdC/0YDQsNC50YIg0LvQuNGB0YLQtSBcclxuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKHtcclxuICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcclxuICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcChpbmRleCA9PiAoe3N4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KX0pKSwgXHJcbiAgICAgIHNwZWVkOiBzcGVlZCxcclxuICAgICAgcmVwZWF0OiByZXBlYXQsXHJcbiAgICAgIGF1dG9ydW46IGF1dG9ydW4sXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNwcml0ZShpbmRleCkge1xyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTb3VyY2VYKGluZGV4KSB7XHJcbiAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcclxuICB9XHJcbiAgZ2V0U291cmNlWShpbmRleCkgeyBcclxuICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpICogdGhpcy5zcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KXtcclxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lOyBcclxuICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQ9aGVpZ2h0O1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgfVxyXG5cclxuICBzZXRYWSh4LHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oaXRib3hlcyA9IHByb3BzLmhpdGJveGVzIHx8IFtdO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=