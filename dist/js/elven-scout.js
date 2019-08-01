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

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
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


var Player =
/*#__PURE__*/
function (_Body) {
  _inherits(Player, _Body);

  //в конструктоор передаем управление клавиатурой 
  function Player(control) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: "player",
      speed: 50
    }));
    _this.control = control;
    return _this;
  } //управление персонажем


  _createClass(Player, [{
    key: "update",
    value: function update(time) {
      if (this.control.up) {
        this.walk("up");
      } else if (this.control.down) {
        this.walk("down");
      } else if (this.control.left) {
        this.walk("left");
      } else if (this.control.right) {
        this.walk("right");
      } else {
        this.stand(this.velocity.direction);
      }

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    }
  }]);

  return Player;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

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

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sheet */ "./src/character-sheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Body =
/*#__PURE__*/
function () {
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = 0; //положение нашего объекта

    this.y = 0; //положение нашего объекта

    this.speed = speed; //скорость премежения 

    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]("down", 0); //вектор перемещения

    this.lastTime = 0; //время посленего кадра 

    this.animations = {}; //контейнер для хранения анимаций 
    //анимация ходьбы для всех героев

    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name);
    });
    this.stand("down"); //положение по умолчанию 
  } //ходьба, текущую анимацию хранить во view 


  _createClass(Body, [{
    key: "walk",
    value: function walk(direction) {
      this.velocity.setDirection(direction, this.speed); //задали скорость 

      this.view = this.animations["walk_" + direction]; // выбрали анимацию 

      this.view.run; // запустили её
    } //что бы персонаж стоял на месте обнулили скорость и остновили анимацию

  }, {
    key: "stand",
    value: function stand(direction) {
      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_" + direction];
      this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      } //считаем перемещение, скорость делим на 1000, координаты для анимаций 


      this.x += (time - this.lastTime) * (this.velocity.x / 1000);
      this.y += (time - this.lastTime) * (this.velocity.y / 1000);
      this.lastTime = true;
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));
      this.view.update(time);
    }
  }]);

  return Body;
}();

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
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player */ "./src/Player.js");
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
    _this.orc = _this.orcTiles.getAnimation("stab_down");

    _this.orc.setXY(100, 10);

    _this.player = new _Player__WEBPACK_IMPORTED_MODULE_3__["Player"](_this.game.control);
    _this.player.x = 100;
    _this.player.y = 100;
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
      this.player.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); //this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc);
      this.game.screen.drawSprite(this.player.view);

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

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(direction, speed) {
    _classCallCheck(this, Vector);

    this.setDirection(direction, speed);
  }

  _createClass(Vector, [{
    key: "setDirection",
    value: function setDirection(direction, speed) {
      this.direction = direction;
      this.speed = speed;
      this.x = 0;
      this.y = 0;

      switch (direction) {
        case "up":
          this.y = -speed;
          break;

        case "down":
          this.y = speed;
          break;

        case "right":
          this.x = speed;
          break;

        case "left":
          this.x = -speed;
          break;
      }
    }
  }]);

  return Vector;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2wtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS1zaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVjdG9yLmpzIl0sIm5hbWVzIjpbIlBsYXllciIsImNvbnRyb2wiLCJpbWFnZU5hbWUiLCJzcGVlZCIsInRpbWUiLCJ1cCIsIndhbGsiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3RhbmQiLCJ2ZWxvY2l0eSIsImRpcmVjdGlvbiIsIkJvZHkiLCJBbmltYXRpb24iLCJmcmFtZXMiLCJyZXBlYXQiLCJhdXRvcnVuIiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwibGFzdFRpbWUiLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwibmV4dEZyYW1lIiwiU3ByaXRlIiwieCIsInkiLCJWZWN0b3IiLCJhbmltYXRpb25zIiwiYW5pbWF0aW9uU2hlZXQiLCJDaGFyYWN0ZXJTaGVldCIsInNwbGl0IiwiZm9yRWFjaCIsIm5hbWUiLCJnZXRBbmltYXRpb24iLCJzZXREaXJlY3Rpb24iLCJ2aWV3IiwicnVuIiwic2V0WFkiLCJNYXRoIiwidHJ1bmMiLCJ1cGRhdGUiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJzZXF1ZW5jZXMiLCJnZXRTZXF1ZW5jZXMiLCJkYXRhIiwicmVxdWlyZSIsImxheWVycyIsImxheWVyIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29udHJvbFN0YXRlIiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsInBsYXllciIsInRpdGxlIiwidGlsZXMiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsImdhbWUiLCJjb25zdHJ1Y3RvciIsInRyZWUiLCJnZXRTcHJpdGUiLCJvcmNUaWxlcyIsIm1hcERhdGEiLCJtYXAiLCJjcmVhdGVNYXAiLCJmaWxsIiwiZHJhd1Nwcml0ZSIsIm5leHRTY2VuZSIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJmaW5pc2giLCJwcmludCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGlsZXNldCIsIm1hcEltYWdlIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsIm1hcENvbnRleHQiLCJoaXRib3hlcyIsInJvdyIsImNvbCIsInR5cGUiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIm9iamVjdHMiLCJvYmoiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZSIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0IiwiaW5kZXhlcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVPLElBQU1BLE1BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0U7QUFDQSxrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUNuQixnRkFBTTtBQUFDQyxlQUFTLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQU47QUFDQSxVQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFGbUI7QUFHcEIsR0FMSCxDQU9FOzs7QUFQRjtBQUFBO0FBQUEsMkJBUVNHLElBUlQsRUFRZTtBQUNYLFVBQUcsS0FBS0gsT0FBTCxDQUFhSSxFQUFoQixFQUFvQjtBQUNsQixhQUFLQyxJQUFMLENBQVUsSUFBVjtBQUNELE9BRkQsTUFFTyxJQUFHLEtBQUtMLE9BQUwsQ0FBYU0sSUFBaEIsRUFBc0I7QUFDM0IsYUFBS0QsSUFBTCxDQUFVLE1BQVY7QUFDRCxPQUZNLE1BRUEsSUFBRyxLQUFLTCxPQUFMLENBQWFPLElBQWhCLEVBQXNCO0FBQzNCLGFBQUtGLElBQUwsQ0FBVSxNQUFWO0FBQ0QsT0FGTSxNQUVBLElBQUcsS0FBS0wsT0FBTCxDQUFhUSxLQUFoQixFQUF1QjtBQUM1QixhQUFLSCxJQUFMLENBQVUsT0FBVjtBQUNELE9BRk0sTUFFQTtBQUNMLGFBQUtJLEtBQUwsQ0FBVyxLQUFLQyxRQUFMLENBQWNDLFNBQXpCO0FBQ0Q7O0FBRUQseUVBQWFSLElBQWI7QUFDRDtBQXRCSDs7QUFBQTtBQUFBLEVBQTRCUywwQ0FBNUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNQyxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNFLDJCQUFnRztBQUFBOztBQUFBLFFBQW5GWixTQUFtRixRQUFuRkEsU0FBbUY7QUFBQSxRQUF4RWEsTUFBd0UsUUFBeEVBLE1BQXdFO0FBQUEsUUFBaEVaLEtBQWdFLFFBQWhFQSxLQUFnRTtBQUFBLDJCQUF6RGEsTUFBeUQ7QUFBQSxRQUF6REEsTUFBeUQsNEJBQWhELElBQWdEO0FBQUEsNEJBQTFDQyxPQUEwQztBQUFBLFFBQTFDQSxPQUEwQyw2QkFBaEMsSUFBZ0M7QUFBQSwwQkFBMUJDLEtBQTBCO0FBQUEsUUFBMUJBLEtBQTBCLDJCQUFsQixFQUFrQjtBQUFBLDJCQUFkQyxNQUFjO0FBQUEsUUFBZEEsTUFBYyw0QkFBTCxFQUFLOztBQUFBOztBQUM5RixtRkFBTTtBQUNKakIsZUFBUyxFQUFFQSxTQURQO0FBRUprQixhQUFPLEVBQUVMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU0sRUFGZjtBQUdKQyxhQUFPLEVBQUVQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsRUFIZjtBQUlKTCxXQUFLLEVBQUVBLEtBSkg7QUFLSkMsWUFBTSxFQUFFQTtBQUxKLEtBQU47QUFRQSxVQUFLSixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLWixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLYSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLUSxPQUFMLEdBQWVQLE9BQWY7QUFDQSxVQUFLUSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS1osTUFBTCxDQUFZYSxNQUEvQjtBQWY4RjtBQWdCL0Y7O0FBakJIO0FBQUE7QUFBQSw2QkFtQldDLEtBbkJYLEVBbUJrQjtBQUNkLFdBQUtILFlBQUwsR0FBb0JHLEtBQXBCO0FBQ0EsV0FBS1QsT0FBTCxHQUFlLEtBQUtMLE1BQUwsQ0FBWWMsS0FBWixFQUFtQlIsRUFBbEM7QUFDQSxXQUFLQyxPQUFMLEdBQWUsS0FBS1AsTUFBTCxDQUFZYyxLQUFaLEVBQW1CTixFQUFsQztBQUNEO0FBdkJIO0FBQUE7QUFBQSwwQkF3QlE7QUFDSixVQUFHLENBQUMsS0FBS0MsT0FBVCxFQUFrQjtBQUNoQixhQUFLTSxRQUFMLENBQWMsQ0FBZDtBQUNBLGFBQUtOLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7QUFDRjtBQTdCSDtBQUFBO0FBQUEsMkJBK0JTO0FBQ0wsV0FBS0EsT0FBTCxHQUFlLEtBQWY7QUFDRDtBQWpDSDtBQUFBO0FBQUEsZ0NBbUNjO0FBQ1YsVUFBSSxLQUFLRSxZQUFMLEdBQW9CLENBQXJCLElBQTJCLEtBQUtDLFdBQW5DLEVBQWdEO0FBQzlDLFlBQUcsS0FBS1gsTUFBUixFQUFnQjtBQUNkLGVBQUtjLFFBQUwsQ0FBYyxDQUFkO0FBQ0E7QUFDRDs7QUFDRCxhQUFLQyxJQUFMO0FBQ0E7QUFDRDs7QUFDRCxXQUFLRCxRQUFMLENBQWMsS0FBS0osWUFBTCxHQUFvQixDQUFsQztBQUNEO0FBN0NIO0FBQUE7QUFBQSwyQkErQ1N0QixJQS9DVCxFQStDZTtBQUNYLFVBQUcsQ0FBQyxLQUFLb0IsT0FBVCxFQUFrQjtBQUNoQjtBQUNEOztBQUNELFVBQUcsS0FBS0MsUUFBTCxJQUFpQixDQUFwQixFQUF3QjtBQUN0QixhQUFLQSxRQUFMLEdBQWdCckIsSUFBaEI7QUFDQTtBQUNEOztBQUNELFVBQUlBLElBQUksR0FBRyxLQUFLcUIsUUFBYixHQUF5QixLQUFLdEIsS0FBakMsRUFBd0M7QUFDdEMsYUFBSzZCLFNBQUw7QUFDQSxhQUFLUCxRQUFMLEdBQWdCckIsSUFBaEI7QUFDRDtBQUNGO0FBM0RIOztBQUFBO0FBQUEsRUFBK0I2Qiw4Q0FBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFTyxJQUFNcEIsSUFBYjtBQUFBO0FBQUE7QUFDRSxzQkFBZ0M7QUFBQTs7QUFBQSxRQUFuQlgsU0FBbUIsUUFBbkJBLFNBQW1CO0FBQUEsUUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUFBOztBQUM5QixTQUFLK0IsQ0FBTCxHQUFTLENBQVQsQ0FEOEIsQ0FDVzs7QUFDekMsU0FBS0MsQ0FBTCxHQUFTLENBQVQsQ0FGOEIsQ0FFVzs7QUFDekMsU0FBS2hDLEtBQUwsR0FBYUEsS0FBYixDQUg4QixDQUdVOztBQUN4QyxTQUFLUSxRQUFMLEdBQWdCLElBQUl5Qiw4Q0FBSixDQUFXLE1BQVgsRUFBbUIsQ0FBbkIsQ0FBaEIsQ0FKOEIsQ0FJVTs7QUFDeEMsU0FBS1gsUUFBTCxHQUFnQixDQUFoQixDQUw4QixDQUtVOztBQUN4QyxTQUFLWSxVQUFMLEdBQWtCLEVBQWxCLENBTjhCLENBTVc7QUFFekM7O0FBQ0EsUUFBTUMsY0FBYyxHQUFHLElBQUlDLCtEQUFKLENBQW1CO0FBQUNyQyxlQUFTLEVBQUVBO0FBQVosS0FBbkIsQ0FBdkI7QUFDQSw2Q0FBeUNzQyxLQUF6QyxDQUErQyxHQUEvQyxFQUFvREMsT0FBcEQsQ0FBNEQsVUFBQUMsSUFBSSxFQUFJO0FBQ2xFLFdBQUksQ0FBQ0wsVUFBTCxDQUFnQkssSUFBaEIsSUFBd0JKLGNBQWMsQ0FBQ0ssWUFBZixDQUE0QkQsSUFBNUIsQ0FBeEI7QUFDRCxLQUZEO0FBR0EsU0FBS2hDLEtBQUwsQ0FBVyxNQUFYLEVBYjhCLENBYWE7QUFDNUMsR0FmSCxDQWlCRTs7O0FBakJGO0FBQUE7QUFBQSx5QkFrQk9FLFNBbEJQLEVBa0JrQjtBQUNkLFdBQUtELFFBQUwsQ0FBY2lDLFlBQWQsQ0FBMkJoQyxTQUEzQixFQUFzQyxLQUFLVCxLQUEzQyxFQURjLENBQ3FDOztBQUNuRCxXQUFLMEMsSUFBTCxHQUFZLEtBQUtSLFVBQUwsQ0FBZ0IsVUFBVXpCLFNBQTFCLENBQVosQ0FGYyxDQUVvQzs7QUFDbEQsV0FBS2lDLElBQUwsQ0FBVUMsR0FBVixDQUhjLENBR21DO0FBQ2xELEtBdEJILENBd0JFOztBQXhCRjtBQUFBO0FBQUEsMEJBeUJRbEMsU0F6QlIsRUF5Qm1CO0FBQ2YsV0FBS0QsUUFBTCxDQUFjaUMsWUFBZCxDQUEyQmhDLFNBQTNCLEVBQXNDLENBQXRDO0FBQ0EsV0FBS2lDLElBQUwsR0FBWSxLQUFLUixVQUFMLENBQWdCLFVBQVV6QixTQUExQixDQUFaO0FBQ0EsV0FBS2lDLElBQUwsQ0FBVWQsSUFBVjtBQUNEO0FBN0JIO0FBQUE7QUFBQSwyQkErQlMzQixJQS9CVCxFQStCZTtBQUNYLFVBQUcsS0FBS3FCLFFBQUwsSUFBaUIsQ0FBcEIsRUFBdUI7QUFDckIsYUFBS0EsUUFBTCxHQUFnQnJCLElBQWhCO0FBQ0E7QUFDRCxPQUpVLENBTVg7OztBQUNBLFdBQUs4QixDQUFMLElBQVUsQ0FBRTlCLElBQUksR0FBRyxLQUFLcUIsUUFBZCxLQUEyQixLQUFLZCxRQUFMLENBQWN1QixDQUFkLEdBQWtCLElBQTdDLENBQVY7QUFDQSxXQUFLQyxDQUFMLElBQVUsQ0FBRS9CLElBQUksR0FBRyxLQUFLcUIsUUFBZCxLQUEyQixLQUFLZCxRQUFMLENBQWN3QixDQUFkLEdBQWtCLElBQTdDLENBQVY7QUFDQSxXQUFLVixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBS29CLElBQUwsQ0FBVUUsS0FBVixDQUFnQkMsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS2YsQ0FBaEIsQ0FBaEIsRUFBbUNjLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtkLENBQWhCLENBQW5DO0FBQ0EsV0FBS1UsSUFBTCxDQUFVSyxNQUFWLENBQWlCOUMsSUFBakI7QUFDRDtBQTNDSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVPLElBQU1tQyxjQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNFLGdDQUF5QjtBQUFBOztBQUFBLFFBQVpyQyxTQUFZLFFBQVpBLFNBQVk7O0FBQUE7O0FBQ3ZCLHdGQUFNO0FBQ0pBLGVBQVMsRUFBRUEsU0FEUDtBQUVKaUQsZ0JBQVUsRUFBRSxHQUZSO0FBR0pDLGlCQUFXLEVBQUU7QUFIVCxLQUFOO0FBS0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQyxZQUFMLEVBQWpCO0FBTnVCO0FBT3hCOztBQVJIO0FBQUE7QUFBQSxtQ0FVaUI7QUFDYixVQUFNQyxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMERBQUQsQ0FBcEI7O0FBQ0EsVUFBTUgsU0FBUyxHQUFHLEVBQWxCO0FBQ0FFLFVBQUksQ0FBQ0UsTUFBTCxDQUFZaEIsT0FBWixDQUFvQixVQUFBaUIsS0FBSyxFQUFJO0FBQzNCTCxpQkFBUyxDQUFDSyxLQUFLLENBQUNoQixJQUFQLENBQVQsR0FBd0JnQixLQUFLLENBQUNILElBQU4sQ0FBV0ksTUFBWCxDQUFrQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsR0FBSSxDQUFUO0FBQUEsU0FBbkIsQ0FBeEI7QUFDRCxPQUZEO0FBR0EsYUFBT1AsU0FBUDtBQUNEO0FBakJIO0FBQUE7QUFBQSxpQ0FtQmVYLElBbkJmLEVBbUJpRTtBQUFBLFVBQTVDdkMsS0FBNEMsdUVBQXBDLEdBQW9DO0FBQUEsVUFBL0JhLE1BQStCLHVFQUF0QixJQUFzQjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNO0FBQzdELDhGQUEwQixLQUFLb0MsU0FBTCxDQUFlWCxJQUFmLENBQTFCLEVBQWdEdkMsS0FBaEQsRUFBdURhLE1BQXZELEVBQStEQyxPQUEvRDtBQUNEO0FBckJIOztBQUFBO0FBQUEsRUFBb0M0Qyx5REFBcEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxJQUFNQyxZQUFiO0FBQUE7QUFBQTtBQUNFLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1osU0FBS3pELEVBQUwsR0FBVSxLQUFWO0FBQ0EsU0FBS0UsSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS3NELElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLEdBQUosQ0FBUSxDQUNwQixDQUFDLEVBQUQsRUFBSyxNQUFMLENBRG9CLEVBQ04sQ0FBQyxFQUFELEVBQUssT0FBTCxDQURNLEVBQ1MsQ0FBQyxFQUFELEVBQUssSUFBTCxDQURULEVBQ3FCLENBQUMsRUFBRCxFQUFLLE1BQUwsQ0FEckIsRUFDbUMsQ0FBQyxFQUFELEVBQUssTUFBTCxDQURuQyxDQUFSLENBQWQ7QUFHQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxLQUFEO0FBQUEsYUFBVyxLQUFJLENBQUNsQixNQUFMLENBQVlrQixLQUFaLEVBQW1CLElBQW5CLENBQVg7QUFBQSxLQUFyQztBQUNBRixZQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLEtBQUQ7QUFBQSxhQUFXLEtBQUksQ0FBQ2xCLE1BQUwsQ0FBWWtCLEtBQVosRUFBbUIsS0FBbkIsQ0FBWDtBQUFBLEtBQW5DO0FBQ0Q7O0FBWkg7QUFBQTtBQUFBLDJCQWNTQSxLQWRULEVBY2dCQyxPQWRoQixFQWN5QjtBQUNyQixVQUFHLEtBQUtMLE1BQUwsQ0FBWU0sR0FBWixDQUFnQkYsS0FBSyxDQUFDRyxPQUF0QixDQUFILEVBQW1DO0FBQ2pDSCxhQUFLLENBQUNJLGNBQU47QUFDQUosYUFBSyxDQUFDSyxlQUFOO0FBQ0EsYUFBSyxLQUFLVCxNQUFMLENBQVlVLEdBQVosQ0FBZ0JOLEtBQUssQ0FBQ0csT0FBdEIsQ0FBTCxJQUF1Q0YsT0FBdkM7QUFDQU0sZUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNEO0FBQ0Y7QUFyQkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1DLElBQWI7QUFBQTtBQUFBO0FBQ0Usa0JBQWdEO0FBQUEsbUZBQUosRUFBSTtBQUFBLDBCQUFsQzNELEtBQWtDO0FBQUEsUUFBbENBLEtBQWtDLDJCQUExQixHQUEwQjtBQUFBLDJCQUFyQkMsTUFBcUI7QUFBQSxRQUFyQkEsTUFBcUIsNEJBQVosR0FBWTs7QUFBQTs7QUFDOUMsU0FBSzJELE1BQUwsR0FBYyxJQUFJQyw4Q0FBSixDQUFXN0QsS0FBWCxFQUFrQkMsTUFBbEIsQ0FBZDtBQUNBLFNBQUsyRCxNQUFMLENBQVlFLFVBQVosQ0FBdUI7QUFBTTtBQUMzQkMsU0FBRyxFQUFFLGFBRGdCO0FBRXJCQyxZQUFNLEVBQUUsZ0JBRmE7QUFHckJDLFdBQUssRUFBRSxlQUhjO0FBSXJCQyxXQUFLLEVBQUU7QUFKYyxLQUF2QjtBQU1BLFNBQUtuRixPQUFMLEdBQWUsSUFBSTZELDJEQUFKLEVBQWY7QUFDQSxTQUFLdUIsTUFBTCxHQUFjO0FBQ1pDLGFBQU8sRUFBRSxJQUFJQyx1REFBSixDQUFZLElBQVosQ0FERztBQUVaQyxVQUFJLEVBQUUsSUFBSUMsaURBQUosQ0FBUyxJQUFULENBRk07QUFHWkMsZUFBUyxFQUFFLElBQUlDLDREQUFKLENBQWMsSUFBZDtBQUhDLEtBQWQ7QUFLQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtQLE1BQUwsQ0FBWUMsT0FBaEM7QUFDQSxTQUFLTSxZQUFMLENBQWtCQyxJQUFsQjtBQUNEOztBQWpCSDtBQUFBO0FBQUEsZ0NBbUJjQyxNQW5CZCxFQW1Cc0I7QUFBQztBQUNuQixjQUFRQSxNQUFSO0FBQ0UsYUFBS0MsNENBQUssQ0FBQ0MsTUFBWDtBQUNFLGlCQUFPLEtBQUtYLE1BQUwsQ0FBWUcsSUFBbkI7O0FBQ0YsYUFBS08sNENBQUssQ0FBQ0UsVUFBWDtBQUNFLGlCQUFPLEtBQUtaLE1BQUwsQ0FBWUssU0FBbkI7O0FBQ0Y7QUFDRSxpQkFBTyxLQUFLTCxNQUFMLENBQVlHLElBQW5CO0FBTko7QUFRRDtBQTVCSDtBQUFBO0FBQUEsMEJBOEJRcEYsSUE5QlIsRUE4QmM7QUFBQTs7QUFDVixVQUFJLEtBQUt3RixZQUFMLENBQWtCRSxNQUFsQixJQUE0QkMsNENBQUssQ0FBQ0csT0FBdEMsRUFBK0M7QUFDN0MsYUFBS04sWUFBTCxHQUFvQixLQUFLTyxXQUFMLENBQWlCLEtBQUtQLFlBQUwsQ0FBa0JFLE1BQW5DLENBQXBCO0FBQ0EsYUFBS0YsWUFBTCxDQUFrQkMsSUFBbEI7QUFDRDs7QUFDRCxXQUFLRCxZQUFMLENBQWtCUSxNQUFsQixDQUF5QmhHLElBQXpCO0FBQ0FpRywyQkFBcUIsQ0FBQyxVQUFBakcsSUFBSTtBQUFBLGVBQUksS0FBSSxDQUFDa0csS0FBTCxDQUFXbEcsSUFBWCxDQUFKO0FBQUEsT0FBTCxDQUFyQjtBQUNEO0FBckNIO0FBQUE7QUFBQSwwQkF1Q1E7QUFBQTs7QUFDSmlHLDJCQUFxQixDQUFDLFVBQUFqRyxJQUFJO0FBQUEsZUFBSSxNQUFJLENBQUNrRyxLQUFMLENBQVdsRyxJQUFYLENBQUo7QUFBQSxPQUFMLENBQXJCO0FBQ0Q7QUF6Q0g7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BPLElBQU1tRyxXQUFiO0FBQUE7QUFBQTtBQUNFLHVCQUFZQyxVQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDRDs7QUFKSDtBQUFBO0FBQUEsMkJBTVM7QUFDTCxVQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsV0FBSyxJQUFJaEUsSUFBVCxJQUFpQixLQUFLOEQsVUFBdEIsRUFBa0M7QUFDaENFLGdCQUFRLENBQUNDLElBQVQsQ0FBYyxLQUFLQyxTQUFMLENBQWVsRSxJQUFmLEVBQW9CLEtBQUs4RCxVQUFMLENBQWdCOUQsSUFBaEIsQ0FBcEIsQ0FBZDtBQUNEOztBQUNELGFBQU9tRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWixDQUFQO0FBQ0Q7QUFaSDtBQUFBO0FBQUEsOEJBY1loRSxJQWRaLEVBY2tCcUUsR0FkbEIsRUFjdUI7QUFBQTs7QUFDbkIsYUFBTyxJQUFJRixPQUFKLENBQVksVUFBQ0csT0FBRCxFQUFhO0FBQzlCLFlBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7QUFDQSxhQUFJLENBQUNULE1BQUwsQ0FBWS9ELElBQVosSUFBb0J1RSxLQUFwQjs7QUFDQUEsYUFBSyxDQUFDRSxNQUFOLEdBQWU7QUFBQSxpQkFBTUgsT0FBTyxDQUFDdEUsSUFBRCxDQUFiO0FBQUEsU0FBZjs7QUFDQXVFLGFBQUssQ0FBQ0YsR0FBTixHQUFZQSxHQUFaO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7QUFyQkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7O0FBRUFLLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQixZQUFNO0FBQ3BCLE1BQU1FLFVBQVUsR0FBRyxJQUFJeEMsMENBQUosRUFBbkI7QUFDQXdDLFlBQVUsQ0FBQ3ZFLEdBQVg7QUFDRCxDQUhEOztBQUtBNkIsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTyxJQUFNbUIsS0FBYjtBQUFBO0FBQUE7QUFDRSxpQkFBWXVCLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3hCLE1BQUwsR0FBYyxLQUFLeUIsV0FBTCxDQUFpQnJCLE9BQS9CO0FBRUQ7O0FBTEg7QUFBQTtBQUFBLDJCQWNTO0FBQ0wsV0FBS0osTUFBTCxHQUFjLEtBQUt5QixXQUFMLENBQWlCckIsT0FBL0I7QUFDRDtBQWhCSDtBQUFBO0FBQUEsMkJBa0JTSixNQWxCVCxFQWtCaUI7QUFDYixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDtBQXBCSDtBQUFBO0FBQUEsMkJBc0JVMUYsSUF0QlYsRUFzQmdCLENBRWI7QUF4Qkg7QUFBQTtBQUFBLHdCQU91QjtBQUFFLGFBQU8sU0FBUDtBQUFtQjtBQVA1QztBQUFBO0FBQUEsd0JBUXNCO0FBQUUsYUFBTyxRQUFQO0FBQWtCO0FBUjFDO0FBQUE7QUFBQSx3QkFTMEI7QUFBRSxhQUFPLFlBQVA7QUFBc0I7QUFUbEQ7QUFBQTtBQUFBLHdCQVV5QjtBQUFFLGFBQU8sV0FBUDtBQUFxQjtBQVZoRDtBQUFBO0FBQUEsd0JBV3dCO0FBQUUsYUFBTyxVQUFQO0FBQXFCO0FBWC9DO0FBQUE7QUFBQSx3QkFZd0I7QUFBRSxhQUFPLFVBQVA7QUFBb0I7QUFaOUM7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNdUYsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDRSxxQkFBWTJCLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsbUZBQU1BLElBQU47QUFDQSxVQUFLbEMsS0FBTCxHQUFhLElBQUl2Qix5REFBSixDQUFnQjtBQUFFO0FBQzdCM0QsZUFBUyxFQUFFLE9BRGdCO0FBRTNCaUQsZ0JBQVUsRUFBRSxHQUZlO0FBRzNCQyxpQkFBVyxFQUFFO0FBSGMsS0FBaEIsQ0FBYjtBQUtBLFVBQUtvRSxJQUFMLEdBQVksTUFBS3BDLEtBQUwsQ0FBV3FDLFNBQVgsQ0FBcUIsQ0FBckIsQ0FBWjs7QUFDQSxVQUFLRCxJQUFMLENBQVV6RSxLQUFWLENBQWdCLEVBQWhCLEVBQW9CLEVBQXBCOztBQUNBLFVBQUsyRSxRQUFMLEdBQWdCLElBQUluRiwrREFBSixDQUFtQjtBQUFDckMsZUFBUyxFQUFFO0FBQVosS0FBbkIsQ0FBaEI7QUFDQSxVQUFLK0UsR0FBTCxHQUFXLE1BQUt5QyxRQUFMLENBQWMvRSxZQUFkLENBQTJCLFdBQTNCLENBQVg7O0FBQ0EsVUFBS3NDLEdBQUwsQ0FBU2xDLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLEVBQXBCOztBQUVBLFVBQUttQyxNQUFMLEdBQWMsSUFBSWxGLDhDQUFKLENBQVcsTUFBS3NILElBQUwsQ0FBVXJILE9BQXJCLENBQWQ7QUFDQSxVQUFLaUYsTUFBTCxDQUFZaEQsQ0FBWixHQUFnQixHQUFoQjtBQUNBLFVBQUtnRCxNQUFMLENBQVkvQyxDQUFaLEdBQWdCLEdBQWhCO0FBZmdCO0FBZ0JqQjs7QUFqQkg7QUFBQTtBQUFBLDJCQW1CUztBQUNMOztBQUNBLFVBQU13RixPQUFPLEdBQUduRSxtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLFdBQUtvRSxHQUFMLEdBQVcsS0FBS04sSUFBTCxDQUFVeEMsTUFBVixDQUFpQitDLFNBQWpCLENBQTJCLFFBQTNCLEVBQXFDRixPQUFyQyxFQUE4QyxLQUFLdkMsS0FBbkQsQ0FBWDtBQUNEO0FBdkJIO0FBQUE7QUFBQSwyQkF5QlNoRixJQXpCVCxFQXlCZTtBQUNYLFdBQUs2RSxHQUFMLENBQVMvQixNQUFULENBQWdCOUMsSUFBaEI7QUFDQSxXQUFLOEUsTUFBTCxDQUFZaEMsTUFBWixDQUFtQjlDLElBQW5CO0FBQ0Q7QUE1Qkg7QUFBQTtBQUFBLDJCQThCU0EsSUE5QlQsRUE4QmU7QUFDWCxXQUFLOEMsTUFBTCxDQUFZOUMsSUFBWjtBQUNBLFdBQUtrSCxJQUFMLENBQVV4QyxNQUFWLENBQWlCZ0QsSUFBakIsQ0FBc0IsU0FBdEI7QUFDQSxXQUFLUixJQUFMLENBQVV4QyxNQUFWLENBQWlCaUQsVUFBakIsQ0FBNEIsS0FBS0gsR0FBakMsRUFIVyxDQUlYOztBQUNBLFdBQUtOLElBQUwsQ0FBVXhDLE1BQVYsQ0FBaUJpRCxVQUFqQixDQUE0QixLQUFLOUMsR0FBakM7QUFDQSxXQUFLcUMsSUFBTCxDQUFVeEMsTUFBVixDQUFpQmlELFVBQWpCLENBQTRCLEtBQUs3QyxNQUFMLENBQVlyQyxJQUF4Qzs7QUFDQSw0RUFBYXpDLElBQWI7QUFDRDtBQXRDSDs7QUFBQTtBQUFBLEVBQStCMkYsNENBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVPLElBQU1SLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsbUJBQVkrQixJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLGlGQUFNQSxJQUFOO0FBQ0EsVUFBS1UsU0FBTCxHQUFpQixNQUFqQjtBQUZnQjtBQUdqQjs7QUFKSDtBQUFBO0FBQUEsMkJBTVM7QUFDSjs7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0Y7QUFUSDtBQUFBO0FBQUEsMkJBV1M3SCxJQVhULEVBV2U7QUFBRTtBQUNiLFVBQUcsS0FBSzZILFFBQUwsSUFBaUIsQ0FBakIsSUFBc0IsS0FBS1gsSUFBTCxDQUFVeEMsTUFBVixDQUFpQm9ELGNBQWpCLElBQW1DLElBQTVELEVBQWtFO0FBQ2hFLGFBQUtELFFBQUwsR0FBZ0IsSUFBaEI7QUFDRDs7QUFDRCxVQUFHLEtBQUtBLFFBQUwsSUFBaUIsQ0FBakIsSUFBdUI3SCxJQUFJLEdBQUcsS0FBSzZILFFBQWIsR0FBeUIsR0FBbEQsRUFBdUQ7QUFDckQsYUFBS0UsTUFBTCxDQUFZcEMsNENBQUssQ0FBQ0MsTUFBbEI7QUFDRDtBQUNGO0FBbEJIO0FBQUE7QUFBQSwyQkFvQlM1RixJQXBCVCxFQW9CZTtBQUNYLFdBQUs4QyxNQUFMLENBQVk5QyxJQUFaO0FBQ0EsV0FBS2tILElBQUwsQ0FBVXhDLE1BQVYsQ0FBaUJnRCxJQUFqQixDQUFzQixTQUF0QjtBQUNBLFdBQUtSLElBQUwsQ0FBVXhDLE1BQVYsQ0FBaUJzRCxLQUFqQixDQUF1QixFQUF2QixFQUEwQixFQUExQixFQUE2QixhQUE3Qjs7QUFDQSwwRUFBYWhJLElBQWI7QUFDRDtBQXpCSDs7QUFBQTtBQUFBLEVBQTZCMkYsNENBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1OLElBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsZ0JBQVk2QixJQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkVBQ1ZBLElBRFU7QUFFakI7O0FBSEg7QUFBQTtBQUFBLDJCQUlTO0FBQ0w7QUFDRDtBQU5IO0FBQUE7QUFBQSwyQkFRU2xILElBUlQsRUFRZTtBQUNYLFVBQUcsS0FBS2tILElBQUwsQ0FBVXJILE9BQVYsQ0FBa0I4RCxJQUFyQixFQUEyQjtBQUN6QixhQUFLb0UsTUFBTCxDQUFZcEMsNENBQUssQ0FBQ0UsVUFBbEI7QUFDRDtBQUNGO0FBWkg7QUFBQTtBQUFBLDJCQWVTN0YsSUFmVCxFQWVlO0FBQ1gsV0FBSzhDLE1BQUwsQ0FBWTlDLElBQVo7QUFDQSxXQUFLa0gsSUFBTCxDQUFVeEMsTUFBVixDQUFpQnVELFNBQWpCLENBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLE9BQWpDO0FBQ0EsV0FBS2YsSUFBTCxDQUFVeEMsTUFBVixDQUFpQnNELEtBQWpCLENBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLEVBQWlDLGdCQUFqQzs7QUFDQSx1RUFBYWhJLElBQWI7QUFDRDtBQXBCSDs7QUFBQTtBQUFBLEVBQTBCMkYsNENBQTFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFTyxJQUFNaEIsTUFBYjtBQUFBO0FBQUE7QUFDRSxrQkFBWTdELEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUttSCxNQUFMLEdBQWMsS0FBS0MsWUFBTCxDQUFrQnJILEtBQWxCLEVBQXlCQyxNQUF6QixDQUFkO0FBQ0EsU0FBS3FILE9BQUwsR0FBZSxLQUFLRixNQUFMLENBQVlHLFVBQVosQ0FBdUIsSUFBdkIsQ0FBZjtBQUNBLFNBQUtoQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUt5QixjQUFMLEdBQXNCLEtBQXRCO0FBQ0Q7O0FBUkg7QUFBQTtBQUFBLCtCQVVhMUIsVUFWYixFQVV5QjtBQUFBOztBQUNyQixVQUFNa0MsTUFBTSxHQUFHLElBQUluQyx5REFBSixDQUFnQkMsVUFBaEIsQ0FBZjtBQUNBa0MsWUFBTSxDQUFDQyxJQUFQLEdBQWNDLElBQWQsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzVCLGFBQUksQ0FBQ3BDLE1BQUwsR0FBY3FDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUksQ0FBQ3RDLE1BQW5CLEVBQTJCaUMsTUFBTSxDQUFDakMsTUFBbEMsQ0FBZDtBQUNBLGFBQUksQ0FBQ3lCLGNBQUwsR0FBc0IsSUFBdEI7QUFDQXZELGVBQU8sQ0FBQ0MsR0FBUixDQUFZaUUsS0FBWjtBQUNELE9BSkQ7QUFLRDtBQWpCSDtBQUFBO0FBQUEsaUNBbUJlM0gsS0FuQmYsRUFtQnNCQyxNQW5CdEIsRUFtQjhCO0FBQzFCLFVBQUk2SCxRQUFRLEdBQUc5RSxRQUFRLENBQUMrRSxvQkFBVCxDQUE4QixRQUE5QixDQUFmO0FBQ0EsVUFBSVgsTUFBTSxHQUFHVSxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWU5RSxRQUFRLENBQUNnRixhQUFULENBQXVCLFFBQXZCLENBQTVCO0FBQ0FoRixjQUFRLENBQUNpRixJQUFULENBQWNDLFdBQWQsQ0FBMEJkLE1BQTFCO0FBQ0FBLFlBQU0sQ0FBQ3BILEtBQVAsR0FBZUEsS0FBZjtBQUNBb0gsWUFBTSxDQUFDbkgsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQSxhQUFPbUgsTUFBUDtBQUNEO0FBMUJIO0FBQUE7QUFBQSw4QkE0Qlk1RixJQTVCWixFQTRCa0JpRixPQTVCbEIsRUE0QjJCMEIsT0E1QjNCLEVBNEJvQztBQUFBOztBQUNoQyxVQUFNQyxRQUFRLEdBQUdwRixRQUFRLENBQUNnRixhQUFULENBQXVCLFFBQXZCLENBQWpCO0FBQ0FJLGNBQVEsQ0FBQ3BJLEtBQVQsR0FBaUJ5RyxPQUFPLENBQUN6RyxLQUFSLEdBQWdCeUcsT0FBTyxDQUFDNEIsU0FBekM7QUFDQUQsY0FBUSxDQUFDbkksTUFBVCxHQUFrQndHLE9BQU8sQ0FBQ3hHLE1BQVIsR0FBaUJ3RyxPQUFPLENBQUM2QixVQUEzQztBQUNBLFVBQU1DLFVBQVUsR0FBR0gsUUFBUSxDQUFDYixVQUFULENBQW9CLElBQXBCLENBQW5CO0FBQ0EsVUFBTWlCLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFVBQUlDLEdBQUosRUFBU0MsR0FBVDtBQUNBakMsYUFBTyxDQUFDbEUsTUFBUixDQUFlaEIsT0FBZixDQUF1QixVQUFBaUIsS0FBSyxFQUFJO0FBQzlCLFlBQUlBLEtBQUssQ0FBQ21HLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUM3QkYsYUFBRyxHQUFHLENBQU47QUFDQUMsYUFBRyxHQUFHLENBQU47QUFDQWxHLGVBQUssQ0FBQ0gsSUFBTixDQUFXZCxPQUFYLENBQW1CLFVBQUFaLEtBQUssRUFBSTtBQUMxQixnQkFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiNEgsd0JBQVUsQ0FBQ3BCLFNBQVgsQ0FBcUIsTUFBSSxDQUFDNUIsTUFBTCxDQUFZNEMsT0FBTyxDQUFDbkosU0FBcEIsQ0FBckIsRUFDRW1KLE9BQU8sQ0FBQ1MsVUFBUixDQUFtQmpJLEtBQW5CLENBREYsRUFDNkJ3SCxPQUFPLENBQUNVLFVBQVIsQ0FBbUJsSSxLQUFuQixDQUQ3QixFQUVFOEYsT0FBTyxDQUFDNEIsU0FGVixFQUVxQjVCLE9BQU8sQ0FBQzZCLFVBRjdCLEVBR0VJLEdBQUcsR0FBR2pDLE9BQU8sQ0FBQzRCLFNBSGhCLEVBRzJCSSxHQUFHLEdBQUdoQyxPQUFPLENBQUM2QixVQUh6QyxFQUlFN0IsT0FBTyxDQUFDNEIsU0FKVixFQUlxQjVCLE9BQU8sQ0FBQzZCLFVBSjdCO0FBTUQ7O0FBQ0RJLGVBQUc7O0FBQ0gsZ0JBQUlBLEdBQUcsR0FBSWpDLE9BQU8sQ0FBQ3pHLEtBQVIsR0FBZ0IsQ0FBM0IsRUFBK0I7QUFDN0IwSSxpQkFBRyxHQUFHLENBQU47QUFDQUQsaUJBQUc7QUFDSjtBQUNGLFdBZEQ7QUFlRDs7QUFDRCxZQUFJakcsS0FBSyxDQUFDbUcsSUFBTixJQUFjLGFBQWxCLEVBQWlDO0FBQy9CSCxrQkFBUSxDQUFDL0MsSUFBVCxPQUFBK0MsUUFBUSxxQkFBU2hHLEtBQUssQ0FBQ3NHLE9BQU4sQ0FBY3BDLEdBQWQsQ0FBa0IsVUFBQXFDLEdBQUc7QUFBQSxtQkFBSztBQUFFQyxnQkFBRSxFQUFFRCxHQUFHLENBQUMvSCxDQUFWO0FBQWFpSSxnQkFBRSxFQUFFRixHQUFHLENBQUMvSCxDQUFKLEdBQVErSCxHQUFHLENBQUMvSSxLQUE3QjtBQUFvQ2tKLGdCQUFFLEVBQUVILEdBQUcsQ0FBQzlILENBQTVDO0FBQStDa0ksZ0JBQUUsRUFBRUosR0FBRyxDQUFDOUgsQ0FBSixHQUFROEgsR0FBRyxDQUFDOUk7QUFBL0QsYUFBTDtBQUFBLFdBQXJCLENBQVQsRUFBUjtBQUNEO0FBQ0YsT0F2QkQ7QUF3QkEsV0FBS3NGLE1BQUwsQ0FBWS9ELElBQVosSUFBb0I0RyxRQUFwQjtBQUNBLGFBQU8sSUFBSWdCLGlEQUFKLENBQVk7QUFDakJwSyxpQkFBUyxFQUFFd0MsSUFETTtBQUVqQnRCLGVBQU8sRUFBRSxDQUZRO0FBR2pCRSxlQUFPLEVBQUUsQ0FIUTtBQUlqQkosYUFBSyxFQUFFb0ksUUFBUSxDQUFDcEksS0FKQztBQUtqQkMsY0FBTSxFQUFFbUksUUFBUSxDQUFDbkksTUFMQTtBQU1qQnVJLGdCQUFRLEVBQUVBO0FBTk8sT0FBWixDQUFQO0FBUUQ7QUFwRUg7QUFBQTtBQUFBLHlCQXVFT2EsS0F2RVAsRUF1RWM7QUFDVixXQUFLL0IsT0FBTCxDQUFhZ0MsU0FBYixHQUF5QkQsS0FBekI7QUFDQSxXQUFLL0IsT0FBTCxDQUFhaUMsUUFBYixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixLQUFLdkosS0FBakMsRUFBd0MsS0FBS0MsTUFBN0M7QUFDRDtBQTFFSDtBQUFBO0FBQUEsMEJBMkVRZSxDQTNFUixFQTJFV0MsQ0EzRVgsRUEyRWN1SSxJQTNFZCxFQTJFb0I7QUFDaEIsV0FBS2xDLE9BQUwsQ0FBYWdDLFNBQWIsR0FBeUIsU0FBekI7QUFDQSxXQUFLaEMsT0FBTCxDQUFhbUMsSUFBYixHQUFvQixjQUFwQjtBQUNBLFdBQUtuQyxPQUFMLENBQWFvQyxRQUFiLENBQXNCRixJQUF0QixFQUE0QnhJLENBQTVCLEVBQStCQyxDQUEvQjtBQUNEO0FBL0VIO0FBQUE7QUFBQSw4QkFnRllELENBaEZaLEVBZ0ZlQyxDQWhGZixFQWdGa0JqQyxTQWhGbEIsRUFnRjZCO0FBQ3pCLFdBQUtzSSxPQUFMLENBQWFILFNBQWIsQ0FBdUIsS0FBSzVCLE1BQUwsQ0FBWXZHLFNBQVosQ0FBdkIsRUFBK0NnQyxDQUEvQyxFQUFrREMsQ0FBbEQ7QUFDRCxLQWxGSCxDQW9GRTs7QUFwRkY7QUFBQTtBQUFBLCtCQXFGYTBJLE1BckZiLEVBcUZxQjtBQUNqQixXQUFLckMsT0FBTCxDQUFhSCxTQUFiLENBQXVCLEtBQUs1QixNQUFMLENBQVlvRSxNQUFNLENBQUMzSyxTQUFuQixDQUF2QixFQUNFMkssTUFBTSxDQUFDekosT0FEVCxFQUNrQnlKLE1BQU0sQ0FBQ3ZKLE9BRHpCLEVBQ2tDdUosTUFBTSxDQUFDM0osS0FEekMsRUFDZ0QySixNQUFNLENBQUMxSixNQUR2RCxFQUVFMEosTUFBTSxDQUFDM0ksQ0FGVCxFQUVZMkksTUFBTSxDQUFDMUksQ0FGbkIsRUFFc0IwSSxNQUFNLENBQUMzSixLQUY3QixFQUVvQzJKLE1BQU0sQ0FBQzFKLE1BRjNDO0FBR0Q7QUF6Rkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUdPLElBQU0wQyxXQUFiO0FBQUE7QUFBQTtBQUNFLDZCQUF1RjtBQUFBLFFBQTFFM0QsU0FBMEUsUUFBMUVBLFNBQTBFO0FBQUEsUUFBL0RpRCxVQUErRCxRQUEvREEsVUFBK0Q7QUFBQSxRQUFuREMsV0FBbUQsUUFBbkRBLFdBQW1EO0FBQUEsZ0NBQXRDMEgsV0FBc0M7QUFBQSxRQUF0Q0EsV0FBc0MsaUNBQXhCLEVBQXdCO0FBQUEsaUNBQXBCQyxZQUFvQjtBQUFBLFFBQXBCQSxZQUFvQixrQ0FBTCxFQUFLOztBQUFBOztBQUNyRixTQUFLN0ssU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLaUQsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUswSCxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7O0FBUEg7QUFBQTtBQUFBLGlDQVNlQyxPQVRmLEVBU3dCN0ssS0FUeEIsRUFTOEQ7QUFBQTs7QUFBQSxVQUEvQmEsTUFBK0IsdUVBQXRCLElBQXNCO0FBQUEsVUFBaEJDLE9BQWdCLHVFQUFOLElBQU07QUFBRTtBQUM1RCxhQUFPLElBQUlILG9EQUFKLENBQWM7QUFDbkJaLGlCQUFTLEVBQUUsS0FBS0EsU0FERztBQUVuQmEsY0FBTSxFQUFFaUssT0FBTyxDQUFDcEQsR0FBUixDQUFZLFVBQUEvRixLQUFLO0FBQUEsaUJBQUs7QUFBQ1IsY0FBRSxFQUFFLEtBQUksQ0FBQ3lJLFVBQUwsQ0FBZ0JqSSxLQUFoQixDQUFMO0FBQTZCTixjQUFFLEVBQUUsS0FBSSxDQUFDd0ksVUFBTCxDQUFnQmxJLEtBQWhCO0FBQWpDLFdBQUw7QUFBQSxTQUFqQixDQUZXO0FBR25CMUIsYUFBSyxFQUFFQSxLQUhZO0FBSW5CYSxjQUFNLEVBQUVBLE1BSlc7QUFLbkJDLGVBQU8sRUFBRUEsT0FMVTtBQU1uQkMsYUFBSyxFQUFFLEtBQUs0SixXQU5PO0FBT25CM0osY0FBTSxFQUFFLEtBQUs0SjtBQVBNLE9BQWQsQ0FBUDtBQVNEO0FBbkJIO0FBQUE7QUFBQSw4QkFxQllsSixLQXJCWixFQXFCbUI7QUFDZixhQUFPLElBQUlJLDhDQUFKLENBQVc7QUFDaEIvQixpQkFBUyxFQUFFLEtBQUtBLFNBREE7QUFFaEJrQixlQUFPLEVBQUUsS0FBSzBJLFVBQUwsQ0FBZ0JqSSxLQUFoQixDQUZPO0FBR2hCUCxlQUFPLEVBQUUsS0FBS3lJLFVBQUwsQ0FBZ0JsSSxLQUFoQixDQUhPO0FBSWhCWCxhQUFLLEVBQUUsS0FBSzRKLFdBSkk7QUFLaEIzSixjQUFNLEVBQUUsS0FBSzRKO0FBTEcsT0FBWCxDQUFQO0FBT0Q7QUE3Qkg7QUFBQTtBQUFBLCtCQStCYWxKLEtBL0JiLEVBK0JvQjtBQUNoQixhQUFRLEVBQUVBLEtBQUYsR0FBVSxLQUFLaUosV0FBaEIsR0FBK0IsS0FBSzNILFVBQTNDO0FBQ0Q7QUFqQ0g7QUFBQTtBQUFBLCtCQWtDYXRCLEtBbENiLEVBa0NvQjtBQUNoQixhQUFPbUIsSUFBSSxDQUFDQyxLQUFMLENBQVksRUFBRXBCLEtBQUYsR0FBVSxLQUFLaUosV0FBaEIsR0FBK0IsS0FBSzNILFVBQS9DLElBQTZELEtBQUs0SCxZQUF6RTtBQUNEO0FBcENIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTyxJQUFNOUksTUFBYjtBQUFBO0FBQUE7QUFDRSx3QkFBbUU7QUFBQSxRQUF0RC9CLFNBQXNELFFBQXREQSxTQUFzRDtBQUFBLFFBQTNDa0IsT0FBMkMsUUFBM0NBLE9BQTJDO0FBQUEsUUFBbENFLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLDBCQUF6QkosS0FBeUI7QUFBQSxRQUF6QkEsS0FBeUIsMkJBQWpCLEVBQWlCO0FBQUEsMkJBQWJDLE1BQWE7QUFBQSxRQUFiQSxNQUFhLDRCQUFKLEVBQUk7O0FBQUE7O0FBQ2pFLFNBQUtqQixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtrQixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQVlBLE1BQVo7QUFDQSxTQUFLZSxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0Q7O0FBVEg7QUFBQTtBQUFBLDBCQVdRRCxDQVhSLEVBV1VDLENBWFYsRUFXYTtBQUNULFdBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEO0FBZEg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRU8sSUFBTW1JLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsbUJBQVlXLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsaUZBQU1BLEtBQU47QUFDQSxVQUFLdkIsUUFBTCxHQUFnQnVCLEtBQUssQ0FBQ3ZCLFFBQU4sSUFBa0IsRUFBbEM7QUFGaUI7QUFHbEI7O0FBSkg7QUFBQSxFQUE2QnpILDhDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLElBQU1HLE1BQWI7QUFBQTtBQUFBO0FBQ0Usa0JBQVl4QixTQUFaLEVBQXVCVCxLQUF2QixFQUE4QjtBQUFBOztBQUM1QixTQUFLeUMsWUFBTCxDQUFrQmhDLFNBQWxCLEVBQTZCVCxLQUE3QjtBQUNEOztBQUhIO0FBQUE7QUFBQSxpQ0FLZVMsU0FMZixFQUswQlQsS0FMMUIsRUFLaUM7QUFDN0IsV0FBS1MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxXQUFLVCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLK0IsQ0FBTCxHQUFTLENBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVMsQ0FBVDs7QUFDQSxjQUFPdkIsU0FBUDtBQUNFLGFBQUssSUFBTDtBQUNFLGVBQUt1QixDQUFMLEdBQVMsQ0FBQ2hDLEtBQVY7QUFDRjs7QUFFQSxhQUFLLE1BQUw7QUFDRSxlQUFLZ0MsQ0FBTCxHQUFTaEMsS0FBVDtBQUNGOztBQUVBLGFBQUssT0FBTDtBQUNFLGVBQUsrQixDQUFMLEdBQVMvQixLQUFUO0FBQ0Y7O0FBRUEsYUFBSyxNQUFMO0FBQ0UsZUFBSytCLENBQUwsR0FBUyxDQUFDL0IsS0FBVjtBQUNGO0FBZkY7QUFpQkQ7QUEzQkg7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEJvZHkge1xyXG4gIC8v0LIg0LrQvtC90YHRgtGA0YPQutGC0L7QvtGAINC/0LXRgNC10LTQsNC10Lwg0YPQv9GA0LDQstC70LXQvdC40LUg0LrQu9Cw0LLQuNCw0YLRg9GA0L7QuSBcclxuICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7IFxyXG4gICAgc3VwZXIoe2ltYWdlTmFtZTogXCJwbGF5ZXJcIiwgc3BlZWQ6IDUwfSk7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgLy/Rg9C/0YDQsNCy0LvQtdC90LjQtSDQv9C10YDRgdC+0L3QsNC20LXQvFxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZih0aGlzLmNvbnRyb2wudXApIHtcclxuICAgICAgdGhpcy53YWxrKFwidXBcIik7XHJcbiAgICB9IGVsc2UgaWYodGhpcy5jb250cm9sLmRvd24pIHtcclxuICAgICAgdGhpcy53YWxrKFwiZG93blwiKTtcclxuICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wubGVmdCkge1xyXG4gICAgICB0aGlzLndhbGsoXCJsZWZ0XCIpO1xyXG4gICAgfSBlbHNlIGlmKHRoaXMuY29udHJvbC5yaWdodCkge1xyXG4gICAgICB0aGlzLndhbGsoXCJyaWdodFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhbmQodGhpcy52ZWxvY2l0eS5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtTcHJpdGV9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIGZyYW1lcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlLCB3aWR0aCA9IDY0LCBoZWlnaHQgPSA2NH0pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcclxuICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgdGhpcy5ydW5uaW5nID0gYXV0b3J1bjtcclxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgdGhpcy50b3RhbEZyYW1lcyA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHNldEZyYW1lKGluZGV4KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xyXG4gICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xyXG4gICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN5O1xyXG4gIH1cclxuICBydW4oKSB7XHJcbiAgICBpZighdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZXh0RnJhbWUoKSB7XHJcbiAgICBpZigodGhpcy5jdXJyZW50RnJhbWUgKyAxKSA9PSB0aGlzLnRvdGFsRnJhbWVzKSB7XHJcbiAgICAgIGlmKHRoaXMucmVwZWF0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RnJhbWUodGhpcy5jdXJyZW50RnJhbWUgKyAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZighdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKHRoaXMubGFzdFRpbWUgPT0gMCApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLnNwZWVkKSB7XHJcbiAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL3ZlY3RvclwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkge1xyXG4gIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIHNwZWVkfSkge1xyXG4gICAgdGhpcy54ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9C/0L7Qu9C+0LbQtdC90LjQtSDQvdCw0YjQtdCz0L4g0L7QsdGK0LXQutGC0LBcclxuICAgIHRoaXMueSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/Qv9C+0LvQvtC20LXQvdC40LUg0L3QsNGI0LXQs9C+INC+0LHRitC10LrRgtCwXHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7ICAgICAgICAgICAgICAgICAgICAgLy/RgdC60L7RgNC+0YHRgtGMINC/0YDQtdC80LXQttC10L3QuNGPIFxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoXCJkb3duXCIsIDApOyAgLy/QstC10LrRgtC+0YAg0L/QtdGA0LXQvNC10YnQtdC90LjRj1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7ICAgICAgICAgICAgICAgICAgICAgIC8v0LLRgNC10LzRjyDQv9C+0YHQu9C10L3QtdCz0L4g0LrQsNC00YDQsCBcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9OyAgICAgICAgICAgICAgICAgICAgLy/QutC+0L3RgtC10LnQvdC10YAg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuSBcclxuXHJcbiAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0YXQvtC00YzQsdGLINC00LvRjyDQstGB0LXRhSDQs9C10YDQvtC10LJcclxuICAgIGNvbnN0IGFuaW1hdGlvblNoZWV0ID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IGltYWdlTmFtZX0pO1xyXG4gICAgXCJ3YWxrX2Rvd24sd2Fsa191cCx3YWxrX2xlZnQsd2Fsa19yaWdodFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhbmQoXCJkb3duXCIpOyAgICAgICAgICAgICAgICAgICAgICAgIC8v0L/QvtC70L7QttC10L3QuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIFxyXG4gIH1cclxuXHJcbiAgLy/RhdC+0LTRjNCx0LAsINGC0LXQutGD0YnRg9GOINCw0L3QuNC80LDRhtC40Y4g0YXRgNCw0L3QuNGC0Ywg0LLQviB2aWV3IFxyXG4gIHdhbGsoZGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpOyAvL9C30LDQtNCw0LvQuCDRgdC60L7RgNC+0YHRgtGMIFxyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW1wid2Fsa19cIiArIGRpcmVjdGlvbl07IC8vINCy0YvQsdGA0LDQu9C4INCw0L3QuNC80LDRhtC40Y4gXHJcbiAgICB0aGlzLnZpZXcucnVuOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LfQsNC/0YPRgdGC0LjQu9C4INC10ZFcclxuICB9XHJcblxyXG4gIC8v0YfRgtC+INCx0Ysg0L/QtdGA0YHQvtC90LDQtiDRgdGC0L7Rj9C7INC90LAg0LzQtdGB0YLQtSDQvtCx0L3Rg9C70LjQu9C4INGB0LrQvtGA0L7RgdGC0Ywg0Lgg0L7RgdGC0L3QvtCy0LjQu9C4INCw0L3QuNC80LDRhtC40Y5cclxuICBzdGFuZChkaXJlY3Rpb24pIHtcclxuICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgMCk7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJ3YWxrX1wiICsgZGlyZWN0aW9uXTtcclxuICAgIHRoaXMudmlldy5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy/RgdGH0LjRgtCw0LXQvCDQv9C10YDQtdC80LXRidC10L3QuNC1LCDRgdC60L7RgNC+0YHRgtGMINC00LXQu9C40Lwg0L3QsCAxMDAwLCDQutC+0L7RgNC00LjQvdCw0YLRiyDQtNC70Y8g0LDQvdC40LzQsNGG0LjQuSBcclxuICAgIHRoaXMueCArPSAoIHRpbWUgLSB0aGlzLmxhc3RUaW1lKSAqICh0aGlzLnZlbG9jaXR5LnggLyAxMDAwKTtcclxuICAgIHRoaXMueSArPSAoIHRpbWUgLSB0aGlzLmxhc3RUaW1lKSAqICh0aGlzLnZlbG9jaXR5LnkgLyAxMDAwKTtcclxuICAgIHRoaXMubGFzdFRpbWUgPSB0cnVlO1xyXG4gICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSxNYXRoLnRydW5jKHRoaXMueSkpO1xyXG4gICAgdGhpcy52aWV3LnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuL3Nwcml0ZS1zaGVldFwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZX0pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXHJcbiAgICAgIGltYWdlV2lkdGg6IDgzMixcclxuICAgICAgaW1hZ2VIZWlnaHQ6IDEzNDRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VxdWVuY2VzKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vbWFwcy9hbmltYXRpb25zLmpzb24nKTtcclxuICAgIGNvbnN0IHNlcXVlbmNlcyA9IHt9O1xyXG4gICAgZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKGkgPT4gaSA+ICAwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlcXVlbmNlczsgXHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24obmFtZSwgc3BlZWQgPSAxMDAsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7IFxyXG4gICAgdGhpcy5maXJlID0gZmFsc2U7XHJcbiAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICBbMzcsICdsZWZ0J10sIFszOSwgJ3JpZ2h0J10sIFszOCwgJ3VwJ10sIFs0MCwgJ2Rvd24nXSwgWzMyLCAnZmlyZSddXHJcbiAgICBdKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZXZlbnQsIHByZXNzZWQpIHtcclxuICAgIGlmKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcclxuICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcclxuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1sZXZlbCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gJy4vY29udHJvbC1zdGF0ZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjUwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHsgICAgIC8v0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC30LDQs9GA0YPQt9C60YMg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSBcclxuICAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXHJcbiAgICAgIHRpdGxlOiAnaW1nL3RpdGxlLmpwZycsXHJcbiAgICAgIHRpbGVzOiAnaW1nL3RpbGVzLnBuZydcclxuICAgIH0pXHJcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XHJcbiAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxyXG4gICAgICBnYW1lTGV2ZWw6IG5ldyBHYW1lTGV2ZWwodGhpcylcclxuICAgIH07XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTY2VuZShzdGF0dXMpIHsvL9C80LXRhdCw0L3QuNC30Lwg0L/QtdGA0LXQtNC10LvRi9Cy0LDQvdC40Y8g0YHRhtC10L0gXHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIFNjZW5lLkxPQURFRDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lTGV2ZWw7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmcmFtZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzICE9IFNjZW5lLldPUktJTkcpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyk7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XHJcbiAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcclxuICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xyXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcclxuICBlbHZlblNjb3V0LnJ1bigpO1xyXG59O1xyXG5cclxuY29uc29sZS5sb2coJ2FzcycpO1xyXG4iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cclxuICBzdGF0aWMgZ2V0IExPQURFRCgpIHsgcmV0dXJuICdMT0FERUQnOyB9XHJcbiAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XHJcbiAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxyXG4gIHN0YXRpYyBnZXQgR0FNRV9XSU4oKSB7IHJldHVybiAnR0FNRV9XSU4nIDsgfVxyXG4gIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7IHJldHVybiAnRklOSVNIRUQnOyB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICB9XHJcblxyXG4gIGZpbmlzaChzdGF0dXMpIHtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICh0aW1lKSB7XHJcblxyXG4gIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XHJcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi4vY2hhcmFjdGVyLXNoZWV0JztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vUGxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHsgLy/Qu9C40YHRgiDRgdGC0L/RgNCw0LnRgtCwINC90LDRiNC10Lkg0LrQsNGA0YLQuNC90LrQuCBcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDBcclxuICAgIH0pO1xyXG4gICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XHJcbiAgICB0aGlzLnRyZWUuc2V0WFkoMTAsIDEwKTtcclxuICAgIHRoaXMub3JjVGlsZXMgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoe2ltYWdlTmFtZTogXCJvcmNcIn0pO1xyXG4gICAgdGhpcy5vcmMgPSB0aGlzLm9yY1RpbGVzLmdldEFuaW1hdGlvbihcInN0YWJfZG93blwiKTtcclxuICAgIHRoaXMub3JjLnNldFhZKDEwMCwgMTApO1xyXG5cclxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmdhbWUuY29udHJvbCk7XHJcbiAgICB0aGlzLnBsYXllci54ID0gMTAwO1xyXG4gICAgdGhpcy5wbGF5ZXIueSA9IDEwMDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEuanNvbicpO1xyXG4gICAgdGhpcy5tYXAgPSB0aGlzLmdhbWUuc2NyZWVuLmNyZWF0ZU1hcChcImxldmVsMVwiLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLnBsYXllci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRyZWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMub3JjKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLm5leHRTY2VuZSA9IFwibWVudVwiO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgdGhpcy5sb2FkZWRBdCA9IDA7IFxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHsgLy/Qt9Cw0LbQtdGA0LbQutCwINC80LXQttC00YMg0YHRhtC10L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0LPRgNCw0YTQuNC60LggICBcclxuICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcclxuICAgICAgdGhpcy5sb2FkZWRBdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYodGhpcy5nYW1lLmNvbnRyb2wuZmlyZSkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGUnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoMjUwLCA1MDAsIFwi0J3QsNC20LzQuNGC0LUg0L/RgNC+0LHQtdC7XCIpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInXHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGUtbWFwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XHJcbiAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XHJcbiAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XHJcbiAgICBsZXQgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcclxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcclxuICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xyXG4gICAgY29uc3QgbWFwQ29udGV4dCA9IG1hcEltYWdlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xyXG4gICAgbGV0IHJvdywgY29sO1xyXG4gICAgbWFwRGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIGlmIChsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgbGF5ZXIuZGF0YS5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcbiAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcChvYmogPT4gKHsgeDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodCB9KSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XHJcbiAgICByZXR1cm4gbmV3IFRpbGVNYXAoe1xyXG4gICAgICBpbWFnZU5hbWU6IG5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IDAsXHJcbiAgICAgIHNvdXJjZVk6IDAsXHJcbiAgICAgIHdpZHRoOiBtYXBJbWFnZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBtYXBJbWFnZS5oZWlnaHQsXHJcbiAgICAgIGhpdGJveGVzOiBoaXRib3hlc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZmlsbChjb2xvcikge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcbiAgcHJpbnQoeCwgeSwgdGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIycHggR2VvcmdpYVwiO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xyXG4gIH1cclxuICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0sIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgLy/QvNC10YLQvtC0INC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3RjyDRgdC/0YDQsNC50YLQsFxyXG4gIGRyYXdTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCxcclxuICAgICAgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbn0gZnJvbSAnLi9hbmltYXRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0fSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xyXG4gICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7IC8v0LfQsNC00LDQtdC8INC60LDQtNGA0Ysg0L3QsCDRgdC/0YDQsNC50YIg0LvQuNGB0YLQtSBcclxuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKHtcclxuICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcclxuICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcChpbmRleCA9PiAoe3N4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KX0pKSwgXHJcbiAgICAgIHNwZWVkOiBzcGVlZCxcclxuICAgICAgcmVwZWF0OiByZXBlYXQsXHJcbiAgICAgIGF1dG9ydW46IGF1dG9ydW4sXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNwcml0ZShpbmRleCkge1xyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTb3VyY2VYKGluZGV4KSB7XHJcbiAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcclxuICB9XHJcbiAgZ2V0U291cmNlWShpbmRleCkgeyBcclxuICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpICogdGhpcy5zcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KXtcclxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lOyBcclxuICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQ9aGVpZ2h0O1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgfVxyXG5cclxuICBzZXRYWSh4LHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oaXRib3hlcyA9IHByb3BzLmhpdGJveGVzIHx8IFtdO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgIHRoaXMuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpOyBcclxuICB9XHJcblxyXG4gIHNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgc3dpdGNoKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIFwidXBcIjogXHJcbiAgICAgICAgdGhpcy55ID0gLXNwZWVkO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJkb3duXCI6IFxyXG4gICAgICAgIHRoaXMueSA9IHNwZWVkO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJyaWdodFwiOiBcclxuICAgICAgICB0aGlzLnggPSBzcGVlZDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwibGVmdFwiOiBcclxuICAgICAgICB0aGlzLnggPSAtc3BlZWQ7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=