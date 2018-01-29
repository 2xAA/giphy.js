(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Giphy"] = factory();
	else
		root["Giphy"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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


module.exports = __webpack_require__(1).default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gifs = __webpack_require__(2);

var _gifs2 = _interopRequireDefault(_gifs);

var _stickers = __webpack_require__(9);

var _stickers2 = _interopRequireDefault(_stickers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Giphy = function () {
  function Giphy(key) {
    _classCallCheck(this, Giphy);

    this.key = key;
    this.stickers.request = this.request.bind(this);
  }

  _createClass(Giphy, [{
    key: 'request',
    value: function request(_ref) {
      var _this = this;

      var error = _ref.error,
          urlPiece = _ref.urlPiece,
          params = _ref.params,
          succCb = _ref.succCb,
          errCb = _ref.errCb;

      return new Promise(function (resolve, reject) {
        if (error) {
          reject(error);
          return;
        }

        var url = _this.url;

        var hasStartingValue = false;

        url += urlPiece;

        // Check for starting '?'
        if (url.indexOf('?') > -1) hasStartingValue = true;

        Object.keys(params || {}).forEach(function (key) {
          if (hasStartingValue) {
            url += '&' + key + '=' + params[key];
          } else {
            url += '?' + key + '=' + params[key];
            hasStartingValue = true;
          }
        });

        if (hasStartingValue) {
          url += '&api_key=' + _this.key;
        } else {
          url += '?api_key=' + _this.key;
        }

        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.responseType = 'json';
        req.onload = function () {
          var status = req.status;


          if (status === 200) {
            if (succCb) {
              succCb(req.response);
            }

            resolve(req.response);
          } else {
            if (errCb) {
              errCb(status);
            }

            reject(req.response);
          }
        };
        req.send();
      });
    }
  }, {
    key: 'apiVersion',
    get: function get() {
      //eslint-disable-line
      return 1;
    }
  }, {
    key: 'url',
    get: function get() {
      return 'https://api.giphy.com/v' + this.apiVersion + '/';
    }
  }]);

  return Giphy;
}();

Giphy.prototype.stickers = new _stickers2.default(); //eslint-disable-line

Object.keys(_gifs2.default).forEach(function (key) {
  Giphy.prototype[key] = _gifs2.default[key];
});

exports.default = Giphy;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _search = __webpack_require__(3);

var _search2 = _interopRequireDefault(_search);

var _gif = __webpack_require__(4);

var _gif2 = _interopRequireDefault(_gif);

var _gifs = __webpack_require__(5);

var _gifs2 = _interopRequireDefault(_gifs);

var _translate = __webpack_require__(6);

var _translate2 = _interopRequireDefault(_translate);

var _random = __webpack_require__(7);

var _random2 = _interopRequireDefault(_random);

var _trending = __webpack_require__(8);

var _trending2 = _interopRequireDefault(_trending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  search: _search2.default,
  gif: _gif2.default,
  gifs: _gifs2.default,
  translate: _translate2.default,
  trending: _trending2.default,
  random: _random2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
// Search
// --
// path: /v1/gifs/search
// docs: https://developers.giphy.com/docs/#operation--gifs-search-get

function search(params, succCb, errCb) {
  var error = void 0;
  var parameters = Object.assign({}, params);

  var urlPiece = 'gifs/search';

  // Check for required parameters
  if ('q' in parameters) {
    urlPiece += '?q=' + parameters.q;
    delete parameters.q;
  } else {
    error = 'giphy.js: No query.';
    if (errCb) {
      errCb(error);
    }
  }

  return this.request({
    error: error,
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gif;
// Get GIF by ID
// --
// path: /v1/gifs/{gif_id}
// docs: https://developers.giphy.com/docs/#operation--gifs--gif_id--get

function gif(params, succCb, errCb) {
  var error = void 0;
  var parameters = Object.assign({}, params);

  var urlPiece = 'gifs?ids=';

  // Check for required parameters
  if ('id' in parameters) {
    urlPiece += parameters.id;
    delete parameters.id;
  } else {
    error = 'giphy.js: No ID.';
    if (errCb) {
      errCb(error);
    }
  }

  return this.request({
    error: error,
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gifs;
// Get GIFs by ID
// --
// path: /v1/gifs
// docs: https://developers.giphy.com/docs/#operation--gifs-get

function gifs(params, succCb, errCb) {
  var error = void 0;
  var parameters = Object.assign({}, params);

  var urlPiece = 'gifs?ids=';

  // Check for required parameters
  if ('ids' in parameters) {
    parameters.ids.forEach(function (id, idx) {
      urlPiece += id;
      if (idx + 1 !== parameters.ids.length) {
        urlPiece += ',';
      }
    });
    delete parameters.ids;
  } else {
    error = 'giphy.js: No IDs.';
    if (errCb) {
      errCb(error);
    }
  }

  return this.request({
    error: error,
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = translate;
// Translate
// --
// path: /v1/gifs/translate
// docs: https://developers.giphy.com/docs/#operation--gifs-translate-get

function translate(params, succCb, errCb) {
  var error = void 0;
  var parameters = Object.assign({}, params);

  var urlPiece = 'gifs/translate';

  // Check for required parameters
  if ('s' in parameters) {
    urlPiece += '?s=' + parameters.s.replace(' ', '+');
    delete parameters.s;
  } else {
    error = 'giphy.js: No query.';
    if (errCb) {
      errCb(error);
    }
  }

  return this.request({
    error: error,
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
// Random
// --
// path: /v1/gifs/random
// docs: https://developers.giphy.com/docs/#operation--gifs-random-get

function random(params, succCb, errCb) {
  var parameters = Object.assign({}, params);

  var urlPiece = 'gifs/random';

  // Check for required parameters
  if ('tag' in parameters) {
    urlPiece += '?tag=' + parameters.tag;
    delete parameters.tag;
  }

  return this.request({
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = translate;
// Trending GIFs
// --
// path: /v1/gifs/trending
// docs: https://developers.giphy.com/docs/#operation--gifs-trending-get

function translate(succCb, errCb) {
  var urlPiece = 'gifs/trending';
  return this.request({
    urlPiece: urlPiece,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random = __webpack_require__(10);

var _random2 = _interopRequireDefault(_random);

var _search = __webpack_require__(11);

var _search2 = _interopRequireDefault(_search);

var _translate = __webpack_require__(12);

var _translate2 = _interopRequireDefault(_translate);

var _trending = __webpack_require__(13);

var _trending2 = _interopRequireDefault(_trending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // STICKER API
// --
// docs: https://developers.giphy.com/docs/#giphy-sticker-api

var stickers = function stickers() {
  _classCallCheck(this, stickers);
};

stickers.prototype.random = _random2.default;
stickers.prototype.search = _search2.default;
stickers.prototype.translate = _translate2.default;
stickers.prototype.trending = _trending2.default;

exports.default = stickers;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
// STICKER Roulette (Random)
// --
// path: /v1/stickers/random
// docs: https://developers.giphy.com/docs/#operation--stickers-random-get

function random(params, succCb, errCb) {
  var parameters = Object.assign({}, params);

  var urlPiece = 'stickers/random';

  // Check for required parameters
  if ('tag' in parameters) {
    urlPiece += '?tag=' + parameters.tag;
    delete parameters.tag;
  }

  return this.request({
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
// STICKER Search
// --
// path: /v1/stickers/search
// docs: https://developers.giphy.com/docs/#operation--stickers-search-get

function search(params, succCb, errCb) {
  var error = void 0;
  var parameters = Object.assign({}, params);

  var urlPiece = 'stickers/search';

  // Check for required parameters
  if ('q' in parameters) {
    urlPiece += '?q=' + parameters.q;
    delete parameters.q;
  } else {
    error = 'giphy.js: No query.';
    if (errCb) {
      errCb(error);
    }
  }

  return this.request({
    error: error,
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = translate;
// STICKER Translate
// --
// path: /v1/stickers/translate
// docs: https://developers.giphy.com/docs/#operation--stickers-translate-get

function translate(params, succCb, errCb) {
  var error = void 0;
  var parameters = Object.assign({}, params);

  var urlPiece = 'stickers/translate';

  // Check for required parameters
  if ('s' in parameters) {
    urlPiece += '?s=' + parameters.s.replace(' ', '+');
    delete parameters.s;
  } else {
    error = 'giphy.js: No query.';
    if (error) {
      errCb(error);
    }
  }

  return this.request({
    error: error,
    urlPiece: urlPiece,
    parameters: parameters,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trending;
// STICKER Trending
// --
// path: /v1/stickers/trending
// docs: https://developers.giphy.com/docs/#operation--stickers-trending-get

function trending(succCb, errCb) {
  var urlPiece = 'stickers/trending';
  return this.request({
    urlPiece: urlPiece,
    succCb: succCb,
    errCb: errCb
  });
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=giphy.js.map