(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/JanusVideoRoom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meetecho_janus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meetecho/janus */ "./src/meetecho/janus.js");
/* harmony import */ var _mixins_janus_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/janus/setup */ "./src/mixins/janus/setup.js");
/* harmony import */ var _mixins_janus_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/janus/local */ "./src/mixins/janus/local.js");
/* harmony import */ var _mixins_janus_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/janus/remote */ "./src/mixins/janus/remote.js");
/* harmony import */ var _mixins_streaming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/streaming */ "./src/mixins/streaming.js");
/* harmony import */ var _mixins_canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/canvas */ "./src/mixins/canvas.js");
/* harmony import */ var _mixins_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixins/video */ "./src/mixins/video.js");
/* harmony import */ var _mixins_audio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixins/audio */ "./src/mixins/audio.js");
/* harmony import */ var _mixins_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mixins/screen */ "./src/mixins/screen.js");
/* harmony import */ var _mixins_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/settings */ "./src/mixins/settings.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["roomData", "userData", "streamEnabled", "serverUrl"],
  data: function data() {
    return {};
  },
  created: function created() {
    this.Janus = _meetecho_janus__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  mounted: function mounted() {
    console.log(this.userData);
  },
  mixins: [_mixins_janus_setup__WEBPACK_IMPORTED_MODULE_1__["janusSetupMixin"], _mixins_janus_local__WEBPACK_IMPORTED_MODULE_2__["janusLocalMixin"], _mixins_janus_remote__WEBPACK_IMPORTED_MODULE_3__["janusRemoteMixin"], _mixins_streaming__WEBPACK_IMPORTED_MODULE_4__["streamingMixin"], _mixins_canvas__WEBPACK_IMPORTED_MODULE_5__["canvasMixin"], _mixins_video__WEBPACK_IMPORTED_MODULE_6__["videoMixin"], _mixins_audio__WEBPACK_IMPORTED_MODULE_7__["audioMixin"], _mixins_screen__WEBPACK_IMPORTED_MODULE_8__["screenMixin"], _mixins_settings__WEBPACK_IMPORTED_MODULE_9__["settingsMixin"]]
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.video-wrapper {\n  margin: 0 !important;\n  overflow: hidden;\n  width: 100%;\n}\n.inside-wrapper {\n  padding-top: 0rem !important;\n  margin-top: 0rem !important;\n  overflow: hidden;\n}\n.search-for-anything,\n.add-anything-menu {\n  display: none !important;\n}\n.video-wrapper {\n  height: 100vh;\n  width: 100vw;\n}\n.remote-video {\n  width: 100%;\n  height: 100%;\n}\n.screen-active {\n  position: absolute !important;\n  bottom: 0.5rem !important;\n  left: 1rem !important;\n  width: 200px;\n  height: 150px;\n  border-radius: 0.25rem;\n}\n.remote-video video {\n}\n.local-video video {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg); /* Safari and Chrome */\n  -moz-transform: rotateY(180deg); /* Firefox */\n}\n.screen-video {\n  width: 1280;\n  height: 720;\n}\n.local-video-container {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 1rem;\n  width: auto;\n}\n.control-area {\n  position: absolute;\n  bottom: 1rem;\n  width: 100%;\n  z-index: 99999 !important;\n}\n.streaming-control-area {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: auto;\n  z-index: 9999;\n}\n.btn-circle {\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  padding: 0;\n  border-radius: 50%;\n}\n.btn-circle i {\n  position: relative;\n  top: -1px;\n}\n.btn-circle-sm {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  font-size: 0.9rem;\n}\n.btn-circle-lg {\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  font-size: 1.1rem;\n}\n.btn-circle-xl {\n  width: 70px;\n  height: 70px;\n  line-height: 70px;\n  font-size: 1.3rem;\n}\n.screen-preview-window {\n  width: 250px !important;\n}\n.screen-preview-window:hover {\n  width: 500px !important;\n}\n.stream-preview-window {\n  width: 300px !important;\n}\n.stream-preview-window:hover {\n  width: 500px !important;\n}\n\n/* Live indicator */\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 60px;\n  height: 60px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -2s;\n}\n@keyframes lds-ripple {\n0% {\n    top: 26px;\n    left: 26px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n}\n100% {\n    top: 0px;\n    left: 0px;\n    width: 62px;\n    height: 62px;\n    opacity: 0;\n}\n}\n/* End live indicator */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js":
/*!******************************************************************!*\
  !*** ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var SDPUtils = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId ||
        transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
        trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
            url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates()
      .find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation &&
            candidate.ip === remoteCandidate.ip &&
            candidate.port === remoteCandidate.port &&
            candidate.priority === remoteCandidate.priority &&
            candidate.protocol === remoteCandidate.protocol &&
            candidate.type === remoteCandidate.type;
      });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}


function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function(window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
        {track: track}));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
        {track: track}));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {receiver: receiver};
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          pc[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw(makeError('NotSupportedError',
          'rtcpMuxPolicy \'negotiate\' is not supported'));
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError',
          'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 &&
        this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };


  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
      usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state',
        {value: 'new', writable: true}
    );

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents =
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate,
            SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] +=
            'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp =
          SDPUtils.getDescription(pc._localDescription.sdp) +
          sections.join('');
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set local ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set remote ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) &&
          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
          protocol === 'UDP/DTLS/SCTP'))) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] &&
          pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer =
            pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport =
            pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport =
            pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] ||
            pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver ||
              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex],
            false,
            isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) &&
              (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters,
                'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport &&
          !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
            pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' &&
            !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
            transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
          'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
          (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' ||
        pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    var mediaSectionsInOffer = SDPUtils.getMediaSections(
        pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol +
                ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
              'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
              'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' +
            'a=inactive\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
              !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
        candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function(resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError',
            'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' +
              (cand.type ? candidateString : 'end-of-candidates')
              + '\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
        } else {
          return reject(makeError('OperationError',
              'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender &&
            transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver &&
            transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
          'dtlsTransport'].forEach(function(method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
    'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this)
        .then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[0] === 'function' ||
          typeof args[1] === 'function') { // legacy
        return nativeMethod.apply(this, [arguments[2]])
        .then(function(description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function(error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function' ||
          typeof args[2] === 'function') { // legacy
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function(error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};


/***/ }),

/***/ "./node_modules/sdp/sdp.js":
/*!*********************************!*\
  !*** ./node_modules/sdp/sdp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env node */


// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
        ? '/' + headerExtension.direction
        : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};

// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3),
  };
};

SDPUtils.writeCryptoLine = function(parameters) {
  return 'a=crypto:' + parameters.tag + ' ' +
    parameters.cryptoSuite + ' ' +
    (typeof parameters.keyParams === 'object'
      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
      : parameters.keyParams) +
    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
    '\r\n';
};

// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }
  var parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
  };
};

SDPUtils.writeCryptoKeyParams = function(keyParams) {
  return keyParams.keyMethod + ':'
    + keyParams.keySalt +
    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
    (keyParams.mkiValue && keyParams.mkiLength
      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
      : '');
};

// Extracts all SDES paramters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
};

// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-ufrag:')[0];
  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-pwd:')[0];
  if (!(ufrag && pwd)) {
    return null;
  }
  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10),
  };
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
      mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
        mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
        mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(parts) {
      return parts.attribute === 'cname';
    });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
    .map(function(line) {
      var parts = line.substr(17).split(' ');
      return parts.map(function(part) {
        return parseInt(part, 10);
      });
    });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(obj) {
      return obj.attribute === 'cname';
    })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(msidParts) {
      return msidParts.attribute === 'msid';
    });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize;
  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }
  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }
  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }
  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
  if (sctpMapLines.length > 0) {
    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0]
      .substr(10)
      .split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
};

// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
  var output = [];
  if (media.protocol !== 'DTLS/SCTP') {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctp-port:' + sctp.port + '\r\n'
    ];
  } else {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
    ];
  }
  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }
  return output.join('');
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
    transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
    transceiver.dtlsTransport.getLocalParameters(),
    type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./JanusVideoRoom.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=template&id=6183d03a&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/JanusVideoRoom.vue?vue&type=template&id=6183d03a& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "video-wrapper" }, [
    _vm.room && _vm.streamEnabled
      ? _c("div", { staticClass: "streaming-control-area" }, [
          !_vm.room.streaming
            ? _c(
                "button",
                {
                  staticClass:
                    "bg-green-500 hover:bg-green-700 text-white font-bold text-center rounded mx-4 py-2 px-4",
                  on: { click: _vm.startBroadcasting }
                },
                [_vm._v("\n      Start Live Streaming\n    ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.room.streaming && _vm.streamingLocally
            ? _c(
                "button",
                {
                  staticClass:
                    "bg-red-500 hover:bg-red-700 text-white font-bold text-center rounded mx-4 py-2 px-4",
                  on: { click: _vm.stopBroadcasting }
                },
                [_vm._v("\n      Stop Live Streaming\n    ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("video", {
            ref: "previewStreamElement",
            staticClass:
              "bg-black absolute top-15 right-3 hidden stream-preview-window border-2 border-white p-1",
            attrs: { autoplay: "", playsinline: "" }
          })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "absolute top-3 left-32" }, [
      _vm.liveIndicator
        ? _c("div", { staticClass: "flex text-center shadow-outline-white" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "h6",
              { staticClass: "text-white text-xl inline-block ml-3 my-auto" },
              [_vm._v("\n        You are now live!\n      ")]
            ),
            _vm._v(" "),
            _c(
              "small",
              { staticClass: "inline-block text-red-50 ml-3 my-auto" },
              [_vm._v("Stream being recorded")]
            )
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.streamEnabled
      ? _c(
          "div",
          { staticClass: "absolute inset-0 flex items-center justify-center" },
          [
            _c("div", { staticClass: "countdown" }, [
              _vm.streamingCountdown > 0 && _vm.streamingCountdown <= 5
                ? _c("div", { staticClass: "text-center" }, [
                    _c("h4", { staticClass: "text-white text-6xl" }, [
                      _vm._v(_vm._s(_vm.streamingCountdown))
                    ])
                  ])
                : _vm._e()
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("canvas", { ref: "streamingCanvas", staticClass: "hidden" }),
    _vm._v(" "),
    _c("video", {
      ref: "remoteVideoElement",
      staticClass: "bg-black remote-video",
      attrs: { autoplay: "", playsinline: "" }
    }),
    _vm._v(" "),
    _c("video", {
      ref: "remoteScreenVideoElement",
      staticClass: "bg-primary screen-video hidden",
      attrs: { autoplay: "", playsinline: "" }
    }),
    _vm._v(" "),
    _c(
      "div",
      { ref: "localVideoContainer", staticClass: "local-video-container" },
      [
        _c("i", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.published,
              expression: "!published"
            }
          ],
          staticClass: "far fa-spinner fa-spin text-white"
        }),
        _vm._v(" "),
        _c("div", { staticClass: "local-video" }, [
          !_vm.videoEnabled
            ? _c(
                "div",
                {
                  staticClass: "flex bg-white rounded text-center",
                  staticStyle: { width: "200px", height: "150px" }
                },
                [
                  _c("div", { staticClass: "m-auto" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "h-10 mx-auto",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d:
                              "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("h5", { staticClass: "m-auto" }, [
                      _vm._v("Camera Disabled")
                    ])
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("video", {
            ref: "localVideoElementStream",
            staticClass: "hidden",
            attrs: { autoplay: "", playsinline: "", muted: "muted" },
            domProps: { muted: true }
          }),
          _vm._v(" "),
          _c("video", {
            ref: "localVideoElement",
            staticClass: "rounded bg-black local-video border-2 border-white",
            attrs: {
              width: "200",
              height: "150",
              autoplay: "",
              playsinline: "",
              muted: "muted"
            },
            domProps: { muted: true }
          })
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "control-area" }, [
      _c("div", { staticClass: "flex" }, [
        _c("video", {
          ref: "miniScreen",
          staticClass:
            "hidden bg-green absolute bottom-28 left-12 border-2 border-white screen-preview-window",
          attrs: { autoplay: "", playsinline: "" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap pl-6" }, [
        _vm.audioEnabled
          ? _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value: "Your mic is currently on, click to mute",
                    expression: "'Your mic is currently on, click to mute'",
                    modifiers: { top: true }
                  }
                ],
                staticClass:
                  "btn-circle btn-circle-xl mr-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center",
                on: { click: _vm.toggleMute }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "text-white h-8 mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.audioEnabled
          ? _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value: "Your mic is currently off, click to unmute",
                    expression: "'Your mic is currently off, click to unmute'",
                    modifiers: { top: true }
                  }
                ],
                staticClass:
                  "btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4",
                on: { click: _vm.toggleMute }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "text-white h-8 mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.videoEnabled
          ? _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value: "Your camera is currently on, click to turn it off",
                    expression:
                      "'Your camera is currently on, click to turn it off'",
                    modifiers: { top: true }
                  }
                ],
                staticClass:
                  "btn-circle btn-circle-xl mx-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center",
                on: { click: _vm.toggleVideo }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "text-white h-8 mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.videoEnabled
          ? _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value: "Your camera is currently off, click to turn it on",
                    expression:
                      "'Your camera is currently off, click to turn it on'",
                    modifiers: { top: true }
                  }
                ],
                staticClass:
                  "btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4",
                on: { click: _vm.toggleVideo }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "text-white h-8 mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.localScreenShare && !_vm.screenShare
          ? _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value:
                      "You are not sharing your screen, click to begin sharing",
                    expression:
                      "\n          'You are not sharing your screen, click to begin sharing'\n        ",
                    modifiers: { top: true }
                  }
                ],
                staticClass:
                  "btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4",
                attrs: { disabled: _vm.screenShare || _vm.screenButtonBusy },
                on: { click: _vm.enableScreenShare }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "text-white h-8 mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.localScreenShare
          ? _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value:
                      "You are currently sharing your screen, click to stop sharing",
                    expression:
                      "\n          'You are currently sharing your screen, click to stop sharing'\n        ",
                    modifiers: { top: true }
                  }
                ],
                staticClass:
                  "btn-circle btn-circle-xl mx-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center mx-4",
                attrs: { disabled: _vm.screenButtonBusy },
                on: { click: _vm.endScreenShare }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "text-white h-8 mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.published
          ? _c(
              "button",
              {
                staticClass:
                  "btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4",
                on: {
                  click: function($event) {
                    return _vm.publishOwnFeed(true)
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-8 text-white mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.published
          ? _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value: "Leave the video chat",
                    expression: "'Leave the video chat'",
                    modifiers: { top: true }
                  }
                ],
                staticClass:
                  "btn-circle btn-circle-xl mx-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center mx-4",
                on: { click: _vm.unpublishOwnFeed }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-8 text-white mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "absolute top-2 left-2" }, [
      _c(
        "button",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip.top",
              value: "Open / Close settings",
              expression: "'Open / Close settings'",
              modifiers: { top: true }
            }
          ],
          staticClass:
            "btn-circle btn-circle-xl mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center mx-4",
          on: {
            click: function($event) {
              _vm.showSettings = !_vm.showSettings
            }
          }
        },
        [
          _c(
            "svg",
            {
              staticClass: "h-8 text-white mx-auto",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }
            },
            [
              _c("path", {
                attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d:
                    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }
              })
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm.showSettings
      ? _c(
          "div",
          {
            staticClass:
              "absolute bg-white p-6 rounded shadow top-24 left-2 md:w-1/3"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "close-settings absolute top-1 right-1 cursor-pointer",
                on: {
                  click: function($event) {
                    _vm.showSettings = false
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-8 mx-auto",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("h4", { staticClass: "font-bold underline mb-3" }, [
              _vm._v("Screen Capture Settings")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full" }, [
              _c("label", { attrs: { for: "screenCursor" } }, [
                _vm._v("Capture mouse on screen share?")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.screenCaptureSettings.cursor,
                      expression: "screenCaptureSettings.cursor"
                    }
                  ],
                  staticClass: "form-select mt-1 block w-full",
                  attrs: { id: "screenCursor" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.screenCaptureSettings,
                        "cursor",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "", disabled: "" } }, [
                    _vm._v("Select option")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "never" } }, [
                    _vm._v("Never")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "motion" } }, [
                    _vm._v("When cursor moves")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "always" } }, [
                    _vm._v("Always")
                  ])
                ]
              )
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lds-ripple my-auto inline-block" }, [
      _c("div"),
      _vm._v(" "),
      _c("div")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_core.js":
/*!************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_core.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter_factory.js */ "./node_modules/webrtc-adapter/src/js/adapter_factory.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





const adapter =
  Object(_adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__["adapterFactory"])({window: typeof window === 'undefined' ? undefined : window});
/* harmony default export */ __webpack_exports__["default"] = (adapter);


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_factory.js":
/*!***************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_factory.js ***!
  \***************************************************************/
/*! exports provided: adapterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapterFactory", function() { return adapterFactory; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrome/chrome_shim */ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js");
/* harmony import */ var _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge/edge_shim */ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js");
/* harmony import */ var _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firefox/firefox_shim */ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js");
/* harmony import */ var _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safari/safari_shim */ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js");
/* harmony import */ var _common_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common_shim */ "./node_modules/webrtc-adapter/src/js/common_shim.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */


  // Browser shims.






// Shimming starts here.
function adapterFactory({window} = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimEdge: true,
  shimSafari: true,
}) {
  // Utils.
  const logging = _utils__WEBPACK_IMPORTED_MODULE_0__["log"];
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  const adapter = {
    browserDetails,
    commonShim: _common_shim__WEBPACK_IMPORTED_MODULE_5__,
    extractVersion: _utils__WEBPACK_IMPORTED_MODULE_0__["extractVersion"],
    disableLog: _utils__WEBPACK_IMPORTED_MODULE_0__["disableLog"],
    disableWarnings: _utils__WEBPACK_IMPORTED_MODULE_0__["disableWarnings"]
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ || !_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"] ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__;

      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimMediaStream"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimOnTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimAddTrackRemoveTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetSendersWithDtmf"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetStats"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimSenderReceiverGetStats"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["fixNegotiationNeeded"](window);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["removeAllowExtmapMixed"](window);
      break;
    case 'firefox':
      if (!_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ || !_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"] ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__;

      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimOnTrack"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRemoveStream"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimSenderGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimReceiverGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRTCDataChannel"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimAddTransceiver"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimGetParameters"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimCreateOffer"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimCreateAnswer"](window);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;
    case 'edge':
      if (!_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ || !_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"] || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__;

      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetUserMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimReplaceTrack"](window);

      // the edge shim implements the full RTCIceCandidate object.

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;
    case 'safari':
      if (!_safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__;

      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRTCIceServerUrls"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCreateOfferLegacy"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCallbacksAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimLocalStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRemoteStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimTrackEventTransceiver"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimGetUserMedia"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimAudioContext"](window);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["removeAllowExtmapMixed"](window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js ***!
  \******************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimMediaStream, shimOnTrack, shimGetSendersWithDtmf, shimGetStats, shimSenderReceiverGetStats, shimAddTrackRemoveTrackWithNative, shimAddTrackRemoveTrack, shimPeerConnection, fixNegotiationNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMediaStream", function() { return shimMediaStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetSendersWithDtmf", function() { return shimGetSendersWithDtmf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetStats", function() { return shimGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderReceiverGetStats", function() { return shimSenderReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrackWithNative", function() { return shimAddTrackRemoveTrackWithNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrack", function() { return shimAddTrackRemoveTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixNegotiationNeeded", function() { return fixNegotiationNeeded; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */






function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
      window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get() {
        return this._ontrack;
      },
      set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription =
        window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        if (!this._ontrackpoly) {
          this._ontrackpoly = (e) => {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', te => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === te.track.id);
              } else {
                receiver = {track: te.track};
              }

              const event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(track => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === track.id);
              } else {
                receiver = {track};
              }
              const event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
          };
          this.addEventListener('addstream', this._ontrackpoly);
        }
        return origSetRemoteDescription.apply(this, arguments);
      };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'track', e => {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver',
          {value: {receiver: e.receiver}});
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection &&
      !('getSenders' in window.RTCPeerConnection.prototype) &&
      'createDTMFSender' in window.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function(pc, track) {
      return {
        track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack =
        function addTrack(track, stream) {
          let sender = origAddTrack.apply(this, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(this, track);
            this._senders.push(sender);
          }
          return sender;
        };

      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack =
        function removeTrack(sender) {
          origRemoveTrack.apply(this, arguments);
          const idx = this._senders.indexOf(sender);
          if (idx !== -1) {
            this._senders.splice(idx, 1);
          }
        };
    }
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };

    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        this._senders = this._senders || [];
        origRemoveStream.apply(this, [stream]);

        stream.getTracks().forEach(track => {
          const sender = this._senders.find(s => s.track === track);
          if (sender) { // remove sender
            this._senders.splice(this._senders.indexOf(sender), 1);
          }
        });
      };
  } else if (typeof window === 'object' && window.RTCPeerConnection &&
             'getSenders' in window.RTCPeerConnection.prototype &&
             'createDTMFSender' in window.RTCPeerConnection.prototype &&
             window.RTCRtpSender &&
             !('dtmf' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.
    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 ||
        typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    const fixChromeStats_ = function(response) {
      const standardReport = {};
      const reports = response.result();
      reports.forEach(report => {
        const standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(name => {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    const makeMapStats = function(stats) {
      return new Map(Object.keys(stats).map(key => [key, stats[key]]));
    };

    if (arguments.length >= 2) {
      const successCallbackWrapper_ = function(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_,
        selector]);
    }

    // promise-support
    return new Promise((resolve, reject) => {
      origGetStats.apply(this, [
        function(response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        }, reject]);
    }).then(onSucc, onErr);
  };
}

function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach(sender => sender._pc = this);
        return senders;
      };
    }

    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
      const sender = this;
      return this._pc.getStats().then(result =>
        /* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["filterStats"](result, sender.track, true));
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers =
        function getReceivers() {
          const receivers = origGetReceivers.apply(this, []);
          receivers.forEach(receiver => receiver._pc = this);
          return receivers;
        };
    }
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'track', e => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      const receiver = this;
      return this._pc.getStats().then(result =>
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["filterStats"](result, receiver.track, false));
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype &&
      'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 &&
        arguments[0] instanceof window.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach(s => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(r => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || (sender && receiver)) {
        return Promise.reject(new DOMException(
          'There are more than one sender or receiver for the track.',
          'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException(
        'There is no sender or receiver for the track.',
        'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams)
        .map(streamId => this._shimmedLocalStreams[streamId][0]);
    };

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      const sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders()
      .filter(newSender => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };

  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach(streamId => {
          const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx !== -1) {
            this._shimmedLocalStreams[streamId].splice(idx, 1);
          }
          if (this._shimmedLocalStreams[streamId].length === 1) {
            delete this._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
}

function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack &&
      browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  const origGetLocalStreams = window.RTCPeerConnection.prototype
      .getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      const nativeStreams = origGetLocalStreams.apply(this);
      this._reverseStreams = this._reverseStreams || {};
      return nativeStreams.map(stream => this._reverseStreams[stream.id]);
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      const newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};

      origRemoveStream.apply(this, [(this._streams[stream.id] || stream)]);
      delete this._reverseStreams[(this._streams[stream.id] ?
          this._streams[stream.id].id : stream.id)];
      delete this._streams[stream.id];
    };

  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      const streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 ||
          !streams[0].getTracks().find(t => t === track)) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException(
          'The adapter.js addTrack polyfill only supports a single ' +
          ' stream which is associated with the specified track.',
          'NotSupportedError');
      }

      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }

      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      const oldStream = this._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(() => {
          this.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        const newStream = new window.MediaStream([track]);
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        this.addStream(newStream);
      }
      return this.getSenders().find(s => s.track === track);
    };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
          externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
          internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function(method) {
    const nativeMethod = window.RTCPeerConnection.prototype[method];
    const methodObj = {[method]() {
      const args = arguments;
      const isLegacyCall = arguments.length &&
          typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [
          (description) => {
            const desc = replaceInternalStreamId(this, description);
            args[0].apply(null, [desc]);
          },
          (err) => {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]
        ]);
      }
      return nativeMethod.apply(this, arguments)
      .then(description => replaceInternalStreamId(this, description));
    }};
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });

  const origSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription =
    function setLocalDescription() {
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(this, arguments);
      }
      arguments[0] = replaceExternalStreamId(this, arguments[0]);
      return origSetLocalDescription.apply(this, arguments);
    };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  const origLocalDescription = Object.getOwnPropertyDescriptor(
      window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype,
      'localDescription', {
        get() {
          const description = origLocalDescription.get.apply(this);
          if (description.type === '') {
            return description;
          }
          return replaceInternalStreamId(this, description);
        }
      });

  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      const isLocal = sender._pc === this;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
            'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      this._streams = this._streams || {};
      let stream;
      Object.keys(this._streams).forEach(streamid => {
        const hasTrack = this._streams[streamid].getTracks()
          .find(track => sender.track === track);
        if (hasTrack) {
          stream = this._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          this.removeStream(this._reverseStreams[stream.id]);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        this.dispatchEvent(new Event('negotiationneeded'));
      }
    };
}

function shimPeerConnection(window) {
  const browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  const addIceCandidateNullSupported =
    window.RTCPeerConnection.prototype.addIceCandidate.length === 0;

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          const nativeMethod = window.RTCPeerConnection.prototype[method];
          const methodObj = {[method]() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          }};
          window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
  }

  // support for addIceCandidate(null or undefined)
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate =
    function addIceCandidate() {
      if (!addIceCandidateNullSupported && !arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions. Native support planned for Chrome M77.
      if (browserDetails.version < 78 &&
        arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
}

// Attempt to fix ONN in plan-b mode.
function fixNegotiationNeeded(window) {
  const browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'negotiationneeded', e => {
    const pc = e.target;
    if (browserDetails.version < 72 || (pc.getConfiguration &&
        pc.getConfiguration().sdpSemantics === 'plan-b')) {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }
    return e;
  });
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js ***!
  \**********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' +
        'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    function getDisplayMedia(constraints) {
      return getSourceId(constraints)
        .then(sourceId => {
          const widthSpecified = constraints.video && constraints.video.width;
          const heightSpecified = constraints.video &&
            constraints.video.height;
          const frameRateSpecified = constraints.video &&
            constraints.video.frameRate;
          constraints.video = {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: sourceId,
              maxFrameRate: frameRateSpecified || 3
            }
          };
          if (widthSpecified) {
            constraints.video.mandatory.maxWidth = widthSpecified;
          }
          if (heightSpecified) {
            constraints.video.mandatory.maxHeight = heightSpecified;
          }
          return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js ***!
  \*******************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


const logging = _utils_js__WEBPACK_IMPORTED_MODULE_0__["log"];

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  const browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  const constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    const cc = {};
    Object.keys(c).forEach(key => {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      const r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      const oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        let oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(mix => {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  const shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      const remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      let face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      const getSupportedFacingModeLies = browserDetails.version < 66;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(devices => {
            devices = devices.filter(d => d.kind === 'videoinput');
            let dev = devices.find(d => matches.some(match =>
              d.label.toLowerCase().includes(match)));
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  const shimError_ = function(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  const getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, c => {
      navigator.webkitGetUserMedia(c, onSuccess, e => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  if (navigator.mediaDevices.getUserMedia) {
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(track => {
            track.stop();
          });
          throw new DOMException('', 'NotFoundError');
        }
        return stream;
      }, e => Promise.reject(shimError_(e))));
    };
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/common_shim.js":
/*!***********************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/common_shim.js ***!
  \***********************************************************/
/*! exports provided: shimRTCIceCandidate, shimMaxMessageSize, shimSendThrowTypeError, shimConnectionState, removeAllowExtmapMixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceCandidate", function() { return shimRTCIceCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMaxMessageSize", function() { return shimMaxMessageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSendThrowTypeError", function() { return shimSendThrowTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimConnectionState", function() { return shimConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllowExtmapMixed", function() { return removeAllowExtmapMixed; });
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sdp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
      window.RTCIceCandidate.prototype)) {
    return;
  }

  const NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate &&
        args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      const nativeCandidate = new NativeRTCIceCandidate(args);
      const parsedCandidate = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.parseCandidate(args.candidate);
      const augmentedCandidate = Object.assign(nativeCandidate,
          parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment,
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  _utils__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'icecandidate', e => {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  const sctpInDescription = function(description) {
    if (!description || !description.sdp) {
      return false;
    }
    const sections = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.splitSections(description.sdp);
    sections.shift();
    return sections.some(mediaSection => {
      const mLine = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application'
          && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  const getRemoteFirefoxVersion = function(description) {
    // TODO: Is there a better solution for detecting Firefox?
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    const version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  const getCanSendMaxMessageSize = function(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    let canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize =
          browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  const getMaxMessageSize = function(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    let maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox'
         && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    const match = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.matchPrefix(description.sdp,
      'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' &&
                remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
    function setRemoteDescription() {
      this._sctp = null;
      // Chrome decided to not expose .sctp in plan-b mode.
      // As usual, adapter.js has to do an 'ugly worakaround'
      // to cover up the mess.
      if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
        const {sdpSemantics} = this.getConfiguration();
        if (sdpSemantics === 'plan-b') {
          Object.defineProperty(this, 'sctp', {
            get() {
              return typeof this._sctp === 'undefined' ? null : this._sctp;
            },
            enumerable: true,
            configurable: true,
          });
        }
      }

      if (sctpInDescription(arguments[0])) {
        // Check if the remote is FF.
        const isFirefox = getRemoteFirefoxVersion(arguments[0]);

        // Get the maximum message size the local peer is capable of sending
        const canSendMMS = getCanSendMaxMessageSize(isFirefox);

        // Get the maximum message size of the remote peer.
        const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

        // Determine final maximum message size
        let maxMessageSize;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }

        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
        // attribute.
        const sctp = {};
        Object.defineProperty(sctp, 'maxMessageSize', {
          get() {
            return maxMessageSize;
          }
        });
        this._sctp = sctp;
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection &&
      'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;
    dc.send = function send() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' &&
          pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' +
          pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  const origCreateDataChannel =
    window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel =
    function createDataChannel() {
      const dataChannel = origCreateDataChannel.apply(this, arguments);
      wrapDcSend(dataChannel, this);
      return dataChannel;
    };
  _utils__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'datachannel', e => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}


/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection ||
      'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange',
            this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange',
            this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach((method) => {
    const origMethod = proto[method];
    proto[method] = function() {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = e => {
          const pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange',
          this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }
  const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
  function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter((line) => {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }
    return nativeSRD.apply(this, arguments);
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js ***!
  \**************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimPeerConnection, shimReplaceTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReplaceTrack", function() { return shimReplaceTrack; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _filtericeservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtericeservers */ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rtcpeerconnection-shim */ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */









function shimPeerConnection(window) {
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function RTCIceCandidate(args) {
        return args;
      };
    }
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function RTCSessionDescription(args) {
        return args;
      };
    }
    // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+
    if (browserDetails.version < 15025) {
      const origMSTEnabled = Object.getOwnPropertyDescriptor(
          window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set(value) {
          origMSTEnabled.set.call(this, value);
          const ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }

  // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714
  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  const RTCPeerConnectionShim = rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default()(window,
      browserDetails.version);
  window.RTCPeerConnection = function RTCPeerConnection(config) {
    if (config && config.iceServers) {
      config.iceServers = Object(_filtericeservers__WEBPACK_IMPORTED_MODULE_1__["filterIceServers"])(config.iceServers,
        browserDetails.version);
      _utils__WEBPACK_IMPORTED_MODULE_0__["log"]('ICE servers after filtering:', config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender &&
      !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack =
        window.RTCRtpSender.prototype.setTrack;
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js ***!
  \*********************************************************************/
/*! exports provided: filterIceServers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterIceServers", function() { return filterIceServers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */



// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  let hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(server => {
    if (server && (server.urls || server.url)) {
      let urls = server.urls || server.url;
      if (server.url && !server.urls) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
      }
      const isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(url => {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        const validTurn = url.startsWith('turn') &&
            !url.startsWith('turn:[') &&
            url.includes('transport=udp');
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    window.navigator.getDisplayMedia.bind(window.navigator);
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js ***!
  \*****************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  const shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  const origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(e => Promise.reject(shimError_(e)));
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimOnTrack, shimPeerConnection, shimSenderGetStats, shimReceiverGetStats, shimRemoveStream, shimRTCDataChannel, shimAddTransceiver, shimGetParameters, shimCreateOffer, shimCreateAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderGetStats", function() { return shimSenderGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReceiverGetStats", function() { return shimReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoveStream", function() { return shimRemoveStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCDataChannel", function() { return shimRTCDataChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTransceiver", function() { return shimAddTransceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetParameters", function() { return shimGetParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateOffer", function() { return shimCreateOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateAnswer", function() { return shimCreateAnswer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */






function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCTrackEvent &&
      ('receiver' in window.RTCTrackEvent.prototype) &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimPeerConnection(window) {
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  if (typeof window !== 'object' ||
      !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          const nativeMethod = window.RTCPeerConnection.prototype[method];
          const methodObj = {[method]() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          }};
          window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
  }

  // support for addIceCandidate(null or undefined)
  // as well as ignoring {sdpMid, candidate: ""}
  if (browserDetails.version < 68) {
    const nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate =
    function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.
      if (arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }

  const modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;
    return nativeGetStats.apply(this, [selector || null])
      .then(stats => {
        if (browserDetails.version < 53 && !onSucc) {
          // Shim only promise getStats with spec-hyphens in type names
          // Leave callback version alone; misc old uses of forEach before Map
          try {
            stats.forEach(stat => {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== 'TypeError') {
              throw e;
            }
            // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
            stats.forEach((stat, i) => {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      })
      .then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };
  }

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) :
        Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach(receiver => receiver._pc = this);
      return receivers;
    };
  }
  _utils__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'track', e => {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection ||
      'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('removeStream', 'removeTrack');
      this.getSenders().forEach(sender => {
        if (sender.track && stream.getTracks().includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver =
      function addTransceiver() {
        this.setParametersPromises = [];
        const initParameters = arguments[1];
        const shouldPerformCheck = initParameters &&
                                  'sendEncodings' in initParameters;
        if (shouldPerformCheck) {
          // If sendEncodings params are provided, validate grammar
          initParameters.sendEncodings.forEach((encodingParam) => {
            if ('rid' in encodingParam) {
              const ridRegex = /^[a-z0-9]{0,16}$/i;
              if (!ridRegex.test(encodingParam.rid)) {
                throw new TypeError('Invalid RID value provided.');
              }
            }
            if ('scaleResolutionDownBy' in encodingParam) {
              if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
                throw new RangeError('scale_resolution_down_by must be >= 1.0');
              }
            }
            if ('maxFramerate' in encodingParam) {
              if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
                throw new RangeError('max_framerate must be >= 0.0');
              }
            }
          });
        }
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
          // Check if the init options were applied. If not we do this in an
          // asynchronous way and save the promise reference in a global object.
          // This is an ugly hack, but at the same time is way more robust than
          // checking the sender parameters before and after the createOffer
          // Also note that after the createoffer we are not 100% sure that
          // the params were asynchronously applied so we might miss the
          // opportunity to recreate offer.
          const {sender} = transceiver;
          const params = sender.getParameters();
          if (!('encodings' in params) ||
              // Avoid being fooled by patched getParameters() below.
              (params.encodings.length === 1 &&
               Object.keys(params.encodings[0]).length === 0)) {
            params.encodings = initParameters.sendEncodings;
            sender.sendEncodings = initParameters.sendEncodings;
            this.setParametersPromises.push(sender.setParameters(params)
              .then(() => {
                delete sender.sendEncodings;
              }).catch(() => {
                delete sender.sendEncodings;
              })
            );
          }
        }
        return transceiver;
      };
  }
}

function shimGetParameters(window) {
  if (!(typeof window === 'object' && window.RTCRtpSender)) {
    return;
  }
  const origGetParameters = window.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters =
      function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!('encodings' in params)) {
          params.encodings = [].concat(this.sendEncodings || [{}]);
        }
        return params;
      };
  }
}

function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises)
      .then(() => {
        return origCreateOffer.apply(this, arguments);
      })
      .finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises)
      .then(() => {
        return origCreateAnswer.apply(this, arguments);
      })
      .finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js ***!
  \***********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    function getDisplayMedia(constraints) {
      if (!(constraints && constraints.video)) {
        const err = new DOMException('getDisplayMedia without video ' +
            'constraints is undefined');
        err.name = 'NotFoundError';
        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = {mediaSource: preferredMediaSource};
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */




function shimGetUserMedia(window) {
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  const navigator = window && window.navigator;
  const MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    const remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints =
        MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js ***!
  \******************************************************************/
/*! exports provided: shimLocalStreamsAPI, shimRemoteStreamsAPI, shimCallbacksAPI, shimGetUserMedia, shimConstraints, shimRTCIceServerUrls, shimTrackEventTransceiver, shimCreateOfferLegacy, shimAudioContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimLocalStreamsAPI", function() { return shimLocalStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoteStreamsAPI", function() { return shimRemoteStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCallbacksAPI", function() { return shimCallbacksAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimConstraints", function() { return shimConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceServerUrls", function() { return shimRTCIceServerUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimTrackEventTransceiver", function() { return shimTrackEventTransceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateOfferLegacy", function() { return shimCreateOfferLegacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAudioContext", function() { return shimAudioContext; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */



function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams =
      function getLocalStreams() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    const _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.
      stream.getAudioTracks().forEach(track => _addTrack.call(this, track,
        stream));
      stream.getVideoTracks().forEach(track => _addTrack.call(this, track,
        stream));
    };

    window.RTCPeerConnection.prototype.addTrack =
      function addTrack(track, ...streams) {
        if (streams) {
          streams.forEach((stream) => {
            if (!this._localStreams) {
              this._localStreams = [stream];
            } else if (!this._localStreams.includes(stream)) {
              this._localStreams.push(stream);
            }
          });
        }
        return _addTrack.apply(this, arguments);
      };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        const index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach(sender => {
          if (tracks.includes(sender.track)) {
            this.removeTrack(sender);
          }
        });
      };
  }
}

function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams =
      function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get() {
        return this._onaddstream;
      },
      set(f) {
        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = (e) => {
          e.streams.forEach(stream => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.includes(stream)) {
              return;
            }
            this._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }
    });
    const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        const pc = this;
        if (!this._onaddstreampoly) {
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            e.streams.forEach(stream => {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              const event = new Event('addstream');
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
  }
}

function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  const prototype = window.RTCPeerConnection.prototype;
  const origCreateOffer = prototype.createOffer;
  const origCreateAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer =
    function createOffer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  prototype.createAnswer =
    function createAnswer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  let withCallback = function(description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function(description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function(candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    const mediaDevices = navigator.mediaDevices;
    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = (constraints) => {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints)
      .then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({},
      constraints,
      {video: _utils__WEBPACK_IMPORTED_MODULE_0__["compactObject"](constraints.video)}
    );
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  const OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection =
    function RTCPeerConnection(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        const newIceServers = [];
        for (let i = 0; i < pcConfig.iceServers.length; i++) {
          let server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') &&
              server.hasOwnProperty('url')) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCTrackEvent &&
      'receiver' in window.RTCTrackEvent.prototype &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer =
    function createOffer(offerOptions) {
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveAudio =
            !!offerOptions.offerToReceiveAudio;
        }
        const audioTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'audio');
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === 'sendrecv') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('sendonly');
            } else {
              audioTransceiver.direction = 'sendonly';
            }
          } else if (audioTransceiver.direction === 'recvonly') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('inactive');
            } else {
              audioTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true &&
            !audioTransceiver) {
          this.addTransceiver('audio');
        }

        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveVideo =
            !!offerOptions.offerToReceiveVideo;
        }
        const videoTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'video');
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === 'sendrecv') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('sendonly');
            } else {
              videoTransceiver.direction = 'sendonly';
            }
          } else if (videoTransceiver.direction === 'recvonly') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('inactive');
            } else {
              videoTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveVideo === true &&
            !videoTransceiver) {
          this.addTransceiver('video');
        }
      }
      return origCreateOffer.apply(this, arguments);
    };
}

function shimAudioContext(window) {
  if (typeof window !== 'object' || window.AudioContext) {
    return;
  }
  window.AudioContext = window.webkitAudioContext;
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/utils.js ***!
  \*****************************************************/
/*! exports provided: extractVersion, wrapPeerConnectionEvent, disableLog, disableWarnings, log, deprecated, detectBrowser, compactObject, walkStats, filterStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractVersion", function() { return extractVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPeerConnectionEvent", function() { return wrapPeerConnectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLog", function() { return disableLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableWarnings", function() { return disableWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectBrowser", function() { return detectBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactObject", function() { return compactObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkStats", function() { return walkStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStats", function() { return filterStats; });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


let logDisabled_ = true;
let deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    const wrappedCallback = (e) => {
      const modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  const nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get() {
      return this['_on' + eventNameToWrap];
    },
    set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return (bool) ? 'adapter.js logging disabled' :
      'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
      ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  // Returned result object.
  const result = {browser: null, version: null};

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  const {navigator} = window;

  if (navigator.mozGetUserMedia) { // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent,
        /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia ||
      (window.isSecureContext === false && window.webkitRTCPeerConnection &&
       !window.RTCIceGatherer)) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent,
        /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices &&
      navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent,
        /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent,
        /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver &&
        'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else { // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */
function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function(accumulator, key) {
    const isObj = isObject(data[key]);
    const value = isObj ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObj && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, {[key]: value});
  }, {});
}

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(name => {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(id => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  const filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  const trackStats = [];
  result.forEach(value => {
    if (value.type === 'track' &&
        value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(trackStat => {
    result.forEach(stats => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}



/***/ }),

/***/ "./src/JanusVideoRoom.vue":
/*!********************************!*\
  !*** ./src/JanusVideoRoom.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JanusVideoRoom_vue_vue_type_template_id_6183d03a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JanusVideoRoom.vue?vue&type=template&id=6183d03a& */ "./src/JanusVideoRoom.vue?vue&type=template&id=6183d03a&");
/* harmony import */ var _JanusVideoRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JanusVideoRoom.vue?vue&type=script&lang=js& */ "./src/JanusVideoRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _JanusVideoRoom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JanusVideoRoom.vue?vue&type=style&index=0&lang=css& */ "./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _JanusVideoRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JanusVideoRoom_vue_vue_type_template_id_6183d03a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JanusVideoRoom_vue_vue_type_template_id_6183d03a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/JanusVideoRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/JanusVideoRoom.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/JanusVideoRoom.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!./JanusVideoRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************!*\
  !*** ./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./JanusVideoRoom.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/JanusVideoRoom.vue?vue&type=template&id=6183d03a&":
/*!***************************************************************!*\
  !*** ./src/JanusVideoRoom.vue?vue&type=template&id=6183d03a& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_template_id_6183d03a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./JanusVideoRoom.vue?vue&type=template&id=6183d03a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/JanusVideoRoom.vue?vue&type=template&id=6183d03a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_template_id_6183d03a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JanusVideoRoom_vue_vue_type_template_id_6183d03a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JanusVideoRoom_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JanusVideoRoom.vue */ "./src/JanusVideoRoom.vue");

/* harmony default export */ __webpack_exports__["default"] = (_JanusVideoRoom_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/meetecho/janus.js":
/*!*******************************!*\
  !*** ./src/meetecho/janus.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */

/*
	The MIT License (MIT)

	Copyright (c) 2016 Meetecho

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the "Software"),
	to deal in the Software without restriction, including without limitation
	the rights to use, copy, modify, merge, publish, distribute, sublicense,
	and/or sell copies of the Software, and to permit persons to whom the
	Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included
	in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
	THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
	OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
	ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	OTHER DEALINGS IN THE SOFTWARE.
 */
 // List of sessions

Janus.sessions = {};

Janus.isExtensionEnabled = function () {
  if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    // No need for the extension, getDisplayMedia is supported
    return true;
  }

  if (window.navigator.userAgent.match('Chrome')) {
    var chromever = parseInt(window.navigator.userAgent.match(/Chrome\/(.*) /)[1], 10);
    var maxver = 33;
    if (window.navigator.userAgent.match('Linux')) maxver = 35; // "known" crash in chrome 34 and 35 on linux

    if (chromever >= 26 && chromever <= maxver) {
      // Older versions of Chrome don't support this extension-based approach, so lie
      return true;
    }

    return Janus.extension.isInstalled();
  } else {
    // Firefox of others, no need for the extension (but this doesn't mean it will work)
    return true;
  }
};

var defaultExtension = {
  // Screensharing Chrome Extension ID
  extensionId: 'hapfgfdkleiggjjpfpenajgdnfckjpaj',
  isInstalled: function isInstalled() {
    return document.querySelector('#janus-extension-installed') !== null;
  },
  getScreen: function getScreen(callback) {
    var pending = window.setTimeout(function () {
      var error = new Error('NavigatorUserMediaError');
      error.name = 'The required Chrome extension is not installed: click <a href="#">here</a> to install it. (NOTE: this will need you to refresh the page)';
      return callback(error);
    }, 1000);
    this.cache[pending] = callback;
    window.postMessage({
      type: 'janusGetScreen',
      id: pending
    }, '*');
  },
  init: function init() {
    var cache = {};
    this.cache = cache; // Wait for events from the Chrome Extension

    window.addEventListener('message', function (event) {
      if (event.origin != window.location.origin) return;

      if (event.data.type == 'janusGotScreen' && cache[event.data.id]) {
        var callback = cache[event.data.id];
        delete cache[event.data.id];

        if (event.data.sourceId === '') {
          // user canceled
          var error = new Error('NavigatorUserMediaError');
          error.name = 'You cancelled the request for permission, giving up...';
          callback(error);
        } else {
          callback(null, event.data.sourceId);
        }
      } else if (event.data.type == 'janusGetScreenPending') {
        console.log('clearing ', event.data.id);
        window.clearTimeout(event.data.id);
      }
    });
  }
};

Janus.useDefaultDependencies = function (deps) {
  var f = deps && deps.fetch || fetch;
  var p = deps && deps.Promise || Promise;
  var socketCls = deps && deps.WebSocket || WebSocket;
  return {
    newWebSocket: function newWebSocket(server, proto) {
      return new socketCls(server, proto);
    },
    extension: deps && deps.extension || defaultExtension,
    isArray: function isArray(arr) {
      return Array.isArray(arr);
    },
    webRTCAdapter: deps && deps.adapter || webrtc_adapter__WEBPACK_IMPORTED_MODULE_0__["default"],
    httpAPICall: function httpAPICall(url, options) {
      var fetchOptions = {
        method: options.verb,
        headers: {
          'Accept': 'application/json, text/plain, */*'
        },
        cache: 'no-cache'
      };

      if (options.verb === "POST") {
        fetchOptions.headers['Content-Type'] = 'application/json';
      }

      if (options.withCredentials !== undefined) {
        fetchOptions.credentials = options.withCredentials === true ? 'include' : options.withCredentials ? options.withCredentials : 'omit';
      }

      if (options.body) {
        fetchOptions.body = JSON.stringify(options.body);
      }

      var fetching = f(url, fetchOptions)["catch"](function (error) {
        return p.reject({
          message: 'Probably a network error, is the server down?',
          error: error
        });
      });
      /*
       * fetch() does not natively support timeouts.
       * Work around this by starting a timeout manually, and racing it agains the fetch() to see which thing resolves first.
       */

      if (options.timeout) {
        var timeout = new p(function (resolve, reject) {
          var timerId = setTimeout(function () {
            clearTimeout(timerId);
            return reject({
              message: 'Request timed out',
              timeout: options.timeout
            });
          }, options.timeout);
        });
        fetching = p.race([fetching, timeout]);
      }

      fetching.then(function (response) {
        if (response.ok) {
          if (_typeof(options.success) === _typeof(Janus.noop)) {
            return response.json().then(function (parsed) {
              options.success(parsed);
            })["catch"](function (error) {
              return p.reject({
                message: 'Failed to parse response body',
                error: error,
                response: response
              });
            });
          }
        } else {
          return p.reject({
            message: 'API call failed',
            response: response
          });
        }
      })["catch"](function (error) {
        if (_typeof(options.error) === _typeof(Janus.noop)) {
          options.error(error.message || '<< internal error >>', error);
        }
      });
      return fetching;
    }
  };
};

Janus.useOldDependencies = function (deps) {
  var jq = deps && deps.jQuery || jQuery;
  var socketCls = deps && deps.WebSocket || WebSocket;
  return {
    newWebSocket: function newWebSocket(server, proto) {
      return new socketCls(server, proto);
    },
    isArray: function isArray(arr) {
      return jq.isArray(arr);
    },
    extension: deps && deps.extension || defaultExtension,
    webRTCAdapter: deps && deps.adapter || webrtc_adapter__WEBPACK_IMPORTED_MODULE_0__["default"],
    httpAPICall: function httpAPICall(url, options) {
      var payload = options.body !== undefined ? {
        contentType: 'application/json',
        data: JSON.stringify(options.body)
      } : {};
      var credentials = options.withCredentials !== undefined ? {
        xhrFields: {
          withCredentials: options.withCredentials
        }
      } : {};
      return jq.ajax(jq.extend(payload, credentials, {
        url: url,
        type: options.verb,
        cache: false,
        dataType: 'json',
        async: options.async,
        timeout: options.timeout,
        success: function success(result) {
          if (_typeof(options.success) === _typeof(Janus.noop)) {
            options.success(result);
          }
        },
        error: function error(xhr, status, err) {
          if (_typeof(options.error) === _typeof(Janus.noop)) {
            options.error(status, err);
          }
        }
      }));
    }
  };
};

Janus.noop = function () {};

Janus.dataChanDefaultLabel = "JanusDataChannel"; // Note: in the future we may want to change this, e.g., as was
// attempted in https://github.com/meetecho/janus-gateway/issues/1670

Janus.endOfCandidates = null; // Stop all tracks from a given stream

Janus.stopAllTracks = function (stream) {
  try {
    // Try a MediaStreamTrack.stop() for each track
    var tracks = stream.getTracks();

    var _iterator = _createForOfIteratorHelper(tracks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mst = _step.value;
        Janus.log(mst);

        if (mst) {
          mst.stop();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } catch (e) {// Do nothing if this fails
  }
}; // Initialization


Janus.init = function (options) {
  options = options || {};
  options.callback = typeof options.callback == "function" ? options.callback : Janus.noop;

  if (Janus.initDone) {
    // Already initialized
    options.callback();
  } else {
    if (typeof console == "undefined" || typeof console.log == "undefined") {
      console = {
        log: function log() {}
      };
    } // Console logging (all debugging disabled by default)


    Janus.trace = Janus.noop;
    Janus.debug = Janus.noop;
    Janus.vdebug = Janus.noop;
    Janus.log = Janus.noop;
    Janus.warn = Janus.noop;
    Janus.error = Janus.noop;

    if (options.debug === true || options.debug === "all") {
      // Enable all debugging levels
      Janus.trace = console.trace.bind(console);
      Janus.debug = console.debug.bind(console);
      Janus.vdebug = console.debug.bind(console);
      Janus.log = console.log.bind(console);
      Janus.warn = console.warn.bind(console);
      Janus.error = console.error.bind(console);
    } else if (Array.isArray(options.debug)) {
      var _iterator2 = _createForOfIteratorHelper(options.debug),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var d = _step2.value;

          switch (d) {
            case "trace":
              Janus.trace = console.trace.bind(console);
              break;

            case "debug":
              Janus.debug = console.debug.bind(console);
              break;

            case "vdebug":
              Janus.vdebug = console.debug.bind(console);
              break;

            case "log":
              Janus.log = console.log.bind(console);
              break;

            case "warn":
              Janus.warn = console.warn.bind(console);
              break;

            case "error":
              Janus.error = console.error.bind(console);
              break;

            default:
              console.error("Unknown debugging option '" + d + "' (supported: 'trace', 'debug', 'vdebug', 'log', warn', 'error')");
              break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    Janus.log("Initializing library");
    var usedDependencies = options.dependencies || Janus.useDefaultDependencies();
    Janus.isArray = usedDependencies.isArray;
    Janus.webRTCAdapter = usedDependencies.webRTCAdapter;
    Janus.httpAPICall = usedDependencies.httpAPICall;
    Janus.newWebSocket = usedDependencies.newWebSocket;
    Janus.extension = usedDependencies.extension;
    Janus.extension.init(); // Helper method to enumerate devices

    Janus.listDevices = function (callback, config) {
      callback = typeof callback == "function" ? callback : Janus.noop;
      if (config == null) config = {
        audio: true,
        video: true
      };

      if (Janus.isGetUserMediaAvailable()) {
        navigator.mediaDevices.getUserMedia(config).then(function (stream) {
          navigator.mediaDevices.enumerateDevices().then(function (devices) {
            Janus.debug(devices);
            callback(devices); // Get rid of the now useless stream

            Janus.stopAllTracks(stream);
          });
        })["catch"](function (err) {
          Janus.error(err);
          callback([]);
        });
      } else {
        Janus.warn("navigator.mediaDevices unavailable");
        callback([]);
      }
    }; // Helper methods to attach/reattach a stream to a video element (previously part of adapter.js)


    Janus.attachMediaStream = function (element, stream) {
      try {
        element.srcObject = stream;
      } catch (e) {
        try {
          element.src = URL.createObjectURL(stream);
        } catch (e) {
          Janus.error("Error attaching stream to element");
        }
      }
    };

    Janus.reattachMediaStream = function (to, from) {
      try {
        to.srcObject = from.srcObject;
      } catch (e) {
        try {
          to.src = from.src;
        } catch (e) {
          Janus.error("Error reattaching stream to element");
        }
      }
    }; // Detect tab close: make sure we don't loose existing onbeforeunload handlers
    // (note: for iOS we need to subscribe to a different event, 'pagehide', see
    // https://gist.github.com/thehunmonkgroup/6bee8941a49b86be31a787fe8f4b8cfe)


    var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
    var eventName = iOS ? 'pagehide' : 'beforeunload';
    var oldOBF = window["on" + eventName];
    window.addEventListener(eventName, function (event) {
      Janus.log("Closing window");

      for (var s in Janus.sessions) {
        if (Janus.sessions[s] && Janus.sessions[s].destroyOnUnload) {
          Janus.log("Destroying session " + s);
          Janus.sessions[s].destroy({
            unload: true,
            notifyDestroyed: false
          });
        }
      }

      if (oldOBF && typeof oldOBF == "function") {
        oldOBF();
      }
    }); // If this is a Safari Technology Preview, check if VP8 is supported

    Janus.safariVp8 = false;

    if (Janus.webRTCAdapter.browserDetails.browser === 'safari' && Janus.webRTCAdapter.browserDetails.version >= 605) {
      // Let's see if RTCRtpSender.getCapabilities() is there
      if (RTCRtpSender && RTCRtpSender.getCapabilities && RTCRtpSender.getCapabilities("video") && RTCRtpSender.getCapabilities("video").codecs && RTCRtpSender.getCapabilities("video").codecs.length) {
        var _iterator3 = _createForOfIteratorHelper(RTCRtpSender.getCapabilities("video").codecs),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var codec = _step3.value;

            if (codec && codec.mimeType && codec.mimeType.toLowerCase() === "video/vp8") {
              Janus.safariVp8 = true;
              break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (Janus.safariVp8) {
          Janus.log("This version of Safari supports VP8");
        } else {
          Janus.warn("This version of Safari does NOT support VP8: if you're using a Technology Preview, " + "try enabling the 'WebRTC VP8 codec' setting in the 'Experimental Features' Develop menu");
        }
      } else {
        // We do it in a very ugly way, as there's no alternative...
        // We create a PeerConnection to see if VP8 is in an offer
        var testpc = new RTCPeerConnection({});
        testpc.createOffer({
          offerToReceiveVideo: true
        }).then(function (offer) {
          Janus.safariVp8 = offer.sdp.indexOf("VP8") !== -1;

          if (Janus.safariVp8) {
            Janus.log("This version of Safari supports VP8");
          } else {
            Janus.warn("This version of Safari does NOT support VP8: if you're using a Technology Preview, " + "try enabling the 'WebRTC VP8 codec' setting in the 'Experimental Features' Develop menu");
          }

          testpc.close();
          testpc = null;
        });
      }
    } // Check if this browser supports Unified Plan and transceivers
    // Based on https://codepen.io/anon/pen/ZqLwWV?editors=0010


    Janus.unifiedPlan = false;

    if (Janus.webRTCAdapter.browserDetails.browser === 'firefox' && Janus.webRTCAdapter.browserDetails.version >= 59) {
      // Firefox definitely does, starting from version 59
      Janus.unifiedPlan = true;
    } else if (Janus.webRTCAdapter.browserDetails.browser === 'chrome' && Janus.webRTCAdapter.browserDetails.version < 72) {
      // Chrome does, but it's only usable from version 72 on
      Janus.unifiedPlan = false;
    } else if (!window.RTCRtpTransceiver || !('currentDirection' in RTCRtpTransceiver.prototype)) {
      // Safari supports addTransceiver() but not Unified Plan when
      // currentDirection is not defined (see codepen above).
      Janus.unifiedPlan = false;
    } else {
      // Check if addTransceiver() throws an exception
      var tempPc = new RTCPeerConnection();

      try {
        tempPc.addTransceiver('audio');
        Janus.unifiedPlan = true;
      } catch (e) {}

      tempPc.close();
    }

    Janus.initDone = true;
    options.callback();
  }
}; // Helper method to check whether WebRTC is supported by this browser


Janus.isWebrtcSupported = function () {
  return !!window.RTCPeerConnection;
}; // Helper method to check whether devices can be accessed by this browser (e.g., not possible via plain HTTP)


Janus.isGetUserMediaAvailable = function () {
  return navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}; // Helper method to create random identifiers (e.g., transaction)


Janus.randomString = function (len) {
  var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';

  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }

  return randomString;
};

function Janus(gatewayCallbacks) {
  gatewayCallbacks = gatewayCallbacks || {};
  gatewayCallbacks.success = typeof gatewayCallbacks.success == "function" ? gatewayCallbacks.success : Janus.noop;
  gatewayCallbacks.error = typeof gatewayCallbacks.error == "function" ? gatewayCallbacks.error : Janus.noop;
  gatewayCallbacks.destroyed = typeof gatewayCallbacks.destroyed == "function" ? gatewayCallbacks.destroyed : Janus.noop;

  if (!Janus.initDone) {
    gatewayCallbacks.error("Library not initialized");
    return {};
  }

  if (!Janus.isWebrtcSupported()) {
    gatewayCallbacks.error("WebRTC not supported by this browser");
    return {};
  }

  Janus.log("Library initialized: " + Janus.initDone);

  if (!gatewayCallbacks.server) {
    gatewayCallbacks.error("Invalid server url");
    return {};
  }

  var websockets = false;
  var ws = null;
  var wsHandlers = {};
  var wsKeepaliveTimeoutId = null;
  var servers = null;
  var serversIndex = 0;
  var server = gatewayCallbacks.server;

  if (Janus.isArray(server)) {
    Janus.log("Multiple servers provided (" + server.length + "), will use the first that works");
    server = null;
    servers = gatewayCallbacks.server;
    Janus.debug(servers);
  } else {
    if (server.indexOf("ws") === 0) {
      websockets = true;
      Janus.log("Using WebSockets to contact Janus: " + server);
    } else {
      websockets = false;
      Janus.log("Using REST API to contact Janus: " + server);
    }
  }

  var iceServers = gatewayCallbacks.iceServers || [{
    urls: "stun:stun.l.google.com:19302"
  }];
  var iceTransportPolicy = gatewayCallbacks.iceTransportPolicy;
  var bundlePolicy = gatewayCallbacks.bundlePolicy; // Whether IPv6 candidates should be gathered

  var ipv6Support = gatewayCallbacks.ipv6 === true; // Whether we should enable the withCredentials flag for XHR requests

  var withCredentials = false;
  if (gatewayCallbacks.withCredentials !== undefined && gatewayCallbacks.withCredentials !== null) withCredentials = gatewayCallbacks.withCredentials === true; // Optional max events

  var maxev = 10;
  if (gatewayCallbacks.max_poll_events !== undefined && gatewayCallbacks.max_poll_events !== null) maxev = gatewayCallbacks.max_poll_events;
  if (maxev < 1) maxev = 1; // Token to use (only if the token based authentication mechanism is enabled)

  var token = null;
  if (gatewayCallbacks.token !== undefined && gatewayCallbacks.token !== null) token = gatewayCallbacks.token; // API secret to use (only if the shared API secret is enabled)

  var apisecret = null;
  if (gatewayCallbacks.apisecret !== undefined && gatewayCallbacks.apisecret !== null) apisecret = gatewayCallbacks.apisecret; // Whether we should destroy this session when onbeforeunload is called

  this.destroyOnUnload = true;
  if (gatewayCallbacks.destroyOnUnload !== undefined && gatewayCallbacks.destroyOnUnload !== null) this.destroyOnUnload = gatewayCallbacks.destroyOnUnload === true; // Some timeout-related values

  var keepAlivePeriod = 25000;
  if (gatewayCallbacks.keepAlivePeriod !== undefined && gatewayCallbacks.keepAlivePeriod !== null) keepAlivePeriod = gatewayCallbacks.keepAlivePeriod;
  if (isNaN(keepAlivePeriod)) keepAlivePeriod = 25000;
  var longPollTimeout = 60000;
  if (gatewayCallbacks.longPollTimeout !== undefined && gatewayCallbacks.longPollTimeout !== null) longPollTimeout = gatewayCallbacks.longPollTimeout;
  if (isNaN(longPollTimeout)) longPollTimeout = 60000; // overrides for default maxBitrate values for simulcasting

  function getMaxBitrates(simulcastMaxBitrates) {
    var maxBitrates = {
      high: 900000,
      medium: 300000,
      low: 100000
    };

    if (simulcastMaxBitrates !== undefined && simulcastMaxBitrates !== null) {
      if (simulcastMaxBitrates.high) maxBitrates.high = simulcastMaxBitrates.high;
      if (simulcastMaxBitrates.medium) maxBitrates.medium = simulcastMaxBitrates.medium;
      if (simulcastMaxBitrates.low) maxBitrates.low = simulcastMaxBitrates.low;
    }

    return maxBitrates;
  }

  var connected = false;
  var sessionId = null;
  var pluginHandles = {};
  var that = this;
  var retries = 0;
  var transactions = {};
  createSession(gatewayCallbacks); // Public methods

  this.getServer = function () {
    return server;
  };

  this.isConnected = function () {
    return connected;
  };

  this.reconnect = function (callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    callbacks["reconnect"] = true;
    createSession(callbacks);
  };

  this.getSessionId = function () {
    return sessionId;
  };

  this.getInfo = function (callbacks) {
    getInfo(callbacks);
  };

  this.destroy = function (callbacks) {
    destroySession(callbacks);
  };

  this.attach = function (callbacks) {
    createHandle(callbacks);
  };

  function eventHandler() {
    if (sessionId == null) return;
    Janus.debug('Long poll...');

    if (!connected) {
      Janus.warn("Is the server down? (connected=false)");
      return;
    }

    var longpoll = server + "/" + sessionId + "?rid=" + new Date().getTime();
    if (maxev) longpoll = longpoll + "&maxev=" + maxev;
    if (token) longpoll = longpoll + "&token=" + encodeURIComponent(token);
    if (apisecret) longpoll = longpoll + "&apisecret=" + encodeURIComponent(apisecret);
    Janus.httpAPICall(longpoll, {
      verb: 'GET',
      withCredentials: withCredentials,
      success: handleEvent,
      timeout: longPollTimeout,
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown);
        retries++;

        if (retries > 3) {
          // Did we just lose the server? :-(
          connected = false;
          gatewayCallbacks.error("Lost connection to the server (is it down?)");
          return;
        }

        eventHandler();
      }
    });
  } // Private event handler: this will trigger plugin callbacks, if set


  function handleEvent(json, skipTimeout) {
    retries = 0;
    if (!websockets && sessionId !== undefined && sessionId !== null && skipTimeout !== true) eventHandler();

    if (!websockets && Janus.isArray(json)) {
      // We got an array: it means we passed a maxev > 1, iterate on all objects
      for (var i = 0; i < json.length; i++) {
        handleEvent(json[i], true);
      }

      return;
    }

    if (json["janus"] === "keepalive") {
      // Nothing happened
      Janus.vdebug("Got a keepalive on session " + sessionId);
      return;
    } else if (json["janus"] === "server_info") {
      // Just info on the Janus instance
      Janus.debug("Got info on the Janus instance");
      Janus.debug(json);
      var transaction = json["transaction"];

      if (transaction) {
        var reportSuccess = transactions[transaction];
        if (reportSuccess) reportSuccess(json);
        delete transactions[transaction];
      }

      return;
    } else if (json["janus"] === "ack") {
      // Just an ack, we can probably ignore
      Janus.debug("Got an ack on session " + sessionId);
      Janus.debug(json);
      var transaction = json["transaction"];

      if (transaction) {
        var reportSuccess = transactions[transaction];
        if (reportSuccess) reportSuccess(json);
        delete transactions[transaction];
      }

      return;
    } else if (json["janus"] === "success") {
      // Success!
      Janus.debug("Got a success on session " + sessionId);
      Janus.debug(json);
      var transaction = json["transaction"];

      if (transaction) {
        var reportSuccess = transactions[transaction];
        if (reportSuccess) reportSuccess(json);
        delete transactions[transaction];
      }

      return;
    } else if (json["janus"] === "trickle") {
      // We got a trickle candidate from Janus
      var sender = json["sender"];

      if (!sender) {
        Janus.warn("Missing sender...");
        return;
      }

      var pluginHandle = pluginHandles[sender];

      if (!pluginHandle) {
        Janus.debug("This handle is not attached to this session");
        return;
      }

      var candidate = json["candidate"];
      Janus.debug("Got a trickled candidate on session " + sessionId);
      Janus.debug(candidate);
      var config = pluginHandle.webrtcStuff;

      if (config.pc && config.remoteSdp) {
        // Add candidate right now
        Janus.debug("Adding remote candidate:", candidate);

        if (!candidate || candidate.completed === true) {
          // end-of-candidates
          config.pc.addIceCandidate(Janus.endOfCandidates);
        } else {
          // New candidate
          config.pc.addIceCandidate(candidate);
        }
      } else {
        // We didn't do setRemoteDescription (trickle got here before the offer?)
        Janus.debug("We didn't do setRemoteDescription (trickle got here before the offer?), caching candidate");
        if (!config.candidates) config.candidates = [];
        config.candidates.push(candidate);
        Janus.debug(config.candidates);
      }
    } else if (json["janus"] === "webrtcup") {
      // The PeerConnection with the server is up! Notify this
      Janus.debug("Got a webrtcup event on session " + sessionId);
      Janus.debug(json);
      var sender = json["sender"];

      if (!sender) {
        Janus.warn("Missing sender...");
        return;
      }

      var pluginHandle = pluginHandles[sender];

      if (!pluginHandle) {
        Janus.debug("This handle is not attached to this session");
        return;
      }

      pluginHandle.webrtcState(true);
      return;
    } else if (json["janus"] === "hangup") {
      // A plugin asked the core to hangup a PeerConnection on one of our handles
      Janus.debug("Got a hangup event on session " + sessionId);
      Janus.debug(json);
      var sender = json["sender"];

      if (!sender) {
        Janus.warn("Missing sender...");
        return;
      }

      var pluginHandle = pluginHandles[sender];

      if (!pluginHandle) {
        Janus.debug("This handle is not attached to this session");
        return;
      }

      pluginHandle.webrtcState(false, json["reason"]);
      pluginHandle.hangup();
    } else if (json["janus"] === "detached") {
      // A plugin asked the core to detach one of our handles
      Janus.debug("Got a detached event on session " + sessionId);
      Janus.debug(json);
      var sender = json["sender"];

      if (!sender) {
        Janus.warn("Missing sender...");
        return;
      }

      var pluginHandle = pluginHandles[sender];

      if (!pluginHandle) {
        // Don't warn here because destroyHandle causes this situation.
        return;
      }

      pluginHandle.detached = true;
      pluginHandle.ondetached();
      pluginHandle.detach();
    } else if (json["janus"] === "media") {
      // Media started/stopped flowing
      Janus.debug("Got a media event on session " + sessionId);
      Janus.debug(json);
      var sender = json["sender"];

      if (!sender) {
        Janus.warn("Missing sender...");
        return;
      }

      var pluginHandle = pluginHandles[sender];

      if (!pluginHandle) {
        Janus.debug("This handle is not attached to this session");
        return;
      }

      pluginHandle.mediaState(json["type"], json["receiving"]);
    } else if (json["janus"] === "slowlink") {
      Janus.debug("Got a slowlink event on session " + sessionId);
      Janus.debug(json); // Trouble uplink or downlink

      var sender = json["sender"];

      if (!sender) {
        Janus.warn("Missing sender...");
        return;
      }

      var pluginHandle = pluginHandles[sender];

      if (!pluginHandle) {
        Janus.debug("This handle is not attached to this session");
        return;
      }

      pluginHandle.slowLink(json["uplink"], json["lost"]);
    } else if (json["janus"] === "error") {
      // Oops, something wrong happened
      Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

      Janus.debug(json);
      var transaction = json["transaction"];

      if (transaction) {
        var reportSuccess = transactions[transaction];

        if (reportSuccess) {
          reportSuccess(json);
        }

        delete transactions[transaction];
      }

      return;
    } else if (json["janus"] === "event") {
      Janus.debug("Got a plugin event on session " + sessionId);
      Janus.debug(json);
      var sender = json["sender"];

      if (!sender) {
        Janus.warn("Missing sender...");
        return;
      }

      var plugindata = json["plugindata"];

      if (!plugindata) {
        Janus.warn("Missing plugindata...");
        return;
      }

      Janus.debug("  -- Event is coming from " + sender + " (" + plugindata["plugin"] + ")");
      var data = plugindata["data"];
      Janus.debug(data);
      var pluginHandle = pluginHandles[sender];

      if (!pluginHandle) {
        Janus.warn("This handle is not attached to this session");
        return;
      }

      var jsep = json["jsep"];

      if (jsep) {
        Janus.debug("Handling SDP as well...");
        Janus.debug(jsep);
      }

      var callback = pluginHandle.onmessage;

      if (callback) {
        Janus.debug("Notifying application..."); // Send to callback specified when attaching plugin handle

        callback(data, jsep);
      } else {
        // Send to generic callback (?)
        Janus.debug("No provided notification callback");
      }
    } else if (json["janus"] === "timeout") {
      Janus.error("Timeout on session " + sessionId);
      Janus.debug(json);

      if (websockets) {
        ws.close(3504, "Gateway timeout");
      }

      return;
    } else {
      Janus.warn("Unknown message/event  '" + json["janus"] + "' on session " + sessionId);
      Janus.debug(json);
    }
  } // Private helper to send keep-alive messages on WebSockets


  function keepAlive() {
    if (!server || !websockets || !connected) return;
    wsKeepaliveTimeoutId = setTimeout(keepAlive, keepAlivePeriod);
    var request = {
      "janus": "keepalive",
      "session_id": sessionId,
      "transaction": Janus.randomString(12)
    };
    if (token) request["token"] = token;
    if (apisecret) request["apisecret"] = apisecret;
    ws.send(JSON.stringify(request));
  } // Private method to create a session


  function createSession(callbacks) {
    var transaction = Janus.randomString(12);
    var request = {
      "janus": "create",
      "transaction": transaction
    };

    if (callbacks["reconnect"]) {
      // We're reconnecting, claim the session
      connected = false;
      request["janus"] = "claim";
      request["session_id"] = sessionId; // If we were using websockets, ignore the old connection

      if (ws) {
        ws.onopen = null;
        ws.onerror = null;
        ws.onclose = null;

        if (wsKeepaliveTimeoutId) {
          clearTimeout(wsKeepaliveTimeoutId);
          wsKeepaliveTimeoutId = null;
        }
      }
    }

    if (token) request["token"] = token;
    if (apisecret) request["apisecret"] = apisecret;

    if (!server && Janus.isArray(servers)) {
      // We still need to find a working server from the list we were given
      server = servers[serversIndex];

      if (server.indexOf("ws") === 0) {
        websockets = true;
        Janus.log("Server #" + (serversIndex + 1) + ": trying WebSockets to contact Janus (" + server + ")");
      } else {
        websockets = false;
        Janus.log("Server #" + (serversIndex + 1) + ": trying REST API to contact Janus (" + server + ")");
      }
    }

    if (websockets) {
      ws = Janus.newWebSocket(server, 'janus-protocol');
      wsHandlers = {
        'error': function error() {
          Janus.error("Error connecting to the Janus WebSockets server... " + server);

          if (Janus.isArray(servers) && !callbacks["reconnect"]) {
            serversIndex++;

            if (serversIndex === servers.length) {
              // We tried all the servers the user gave us and they all failed
              callbacks.error("Error connecting to any of the provided Janus servers: Is the server down?");
              return;
            } // Let's try the next server


            server = null;
            setTimeout(function () {
              createSession(callbacks);
            }, 200);
            return;
          }

          callbacks.error("Error connecting to the Janus WebSockets server: Is the server down?");
        },
        'open': function open() {
          // We need to be notified about the success
          transactions[transaction] = function (json) {
            Janus.debug(json);

            if (json["janus"] !== "success") {
              Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

              callbacks.error(json["error"].reason);
              return;
            }

            wsKeepaliveTimeoutId = setTimeout(keepAlive, keepAlivePeriod);
            connected = true;
            sessionId = json["session_id"] ? json["session_id"] : json.data["id"];

            if (callbacks["reconnect"]) {
              Janus.log("Claimed session: " + sessionId);
            } else {
              Janus.log("Created session: " + sessionId);
            }

            Janus.sessions[sessionId] = that;
            callbacks.success();
          };

          ws.send(JSON.stringify(request));
        },
        'message': function message(event) {
          handleEvent(JSON.parse(event.data));
        },
        'close': function close() {
          if (!server || !connected) {
            return;
          }

          connected = false; // FIXME What if this is called when the page is closed?

          gatewayCallbacks.error("Lost connection to the server (is it down?)");
        }
      };

      for (var eventName in wsHandlers) {
        ws.addEventListener(eventName, wsHandlers[eventName]);
      }

      return;
    }

    Janus.httpAPICall(server, {
      verb: 'POST',
      withCredentials: withCredentials,
      body: request,
      success: function success(json) {
        Janus.debug(json);

        if (json["janus"] !== "success") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

          callbacks.error(json["error"].reason);
          return;
        }

        connected = true;
        sessionId = json["session_id"] ? json["session_id"] : json.data["id"];

        if (callbacks["reconnect"]) {
          Janus.log("Claimed session: " + sessionId);
        } else {
          Janus.log("Created session: " + sessionId);
        }

        Janus.sessions[sessionId] = that;
        eventHandler();
        callbacks.success();
      },
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown); // FIXME

        if (Janus.isArray(servers) && !callbacks["reconnect"]) {
          serversIndex++;

          if (serversIndex === servers.length) {
            // We tried all the servers the user gave us and they all failed
            callbacks.error("Error connecting to any of the provided Janus servers: Is the server down?");
            return;
          } // Let's try the next server


          server = null;
          setTimeout(function () {
            createSession(callbacks);
          }, 200);
          return;
        }

        if (errorThrown === "") callbacks.error(textStatus + ": Is the server down?");else callbacks.error(textStatus + ": " + errorThrown);
      }
    });
  } // Private method to get info on the server


  function getInfo(callbacks) {
    callbacks = callbacks || {}; // FIXME This method triggers a success even when we fail

    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    Janus.log("Getting info on Janus instance");

    if (!connected) {
      Janus.warn("Is the server down? (connected=false)");
      callbacks.error("Is the server down? (connected=false)");
      return;
    } // We just need to send an "info" request


    var transaction = Janus.randomString(12);
    var request = {
      "janus": "info",
      "transaction": transaction
    };
    if (token) request["token"] = token;
    if (apisecret) request["apisecret"] = apisecret;

    if (websockets) {
      transactions[transaction] = function (json) {
        Janus.log("Server info:");
        Janus.debug(json);

        if (json["janus"] !== "server_info") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME
        }

        callbacks.success(json);
      };

      ws.send(JSON.stringify(request));
      return;
    }

    Janus.httpAPICall(server, {
      verb: 'POST',
      withCredentials: withCredentials,
      body: request,
      success: function success(json) {
        Janus.log("Server info:");
        Janus.debug(json);

        if (json["janus"] !== "server_info") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME
        }

        callbacks.success(json);
      },
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown); // FIXME

        if (errorThrown === "") callbacks.error(textStatus + ": Is the server down?");else callbacks.error(textStatus + ": " + errorThrown);
      }
    });
  } // Private method to destroy a session


  function destroySession(callbacks) {
    callbacks = callbacks || {}; // FIXME This method triggers a success even when we fail

    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    var unload = callbacks.unload === true;
    var notifyDestroyed = true;
    if (callbacks.notifyDestroyed !== undefined && callbacks.notifyDestroyed !== null) notifyDestroyed = callbacks.notifyDestroyed === true;
    var cleanupHandles = callbacks.cleanupHandles === true;
    Janus.log("Destroying session " + sessionId + " (unload=" + unload + ")");

    if (!sessionId) {
      Janus.warn("No session to destroy");
      callbacks.success();
      if (notifyDestroyed) gatewayCallbacks.destroyed();
      return;
    }

    if (cleanupHandles) {
      for (var handleId in pluginHandles) {
        destroyHandle(handleId, {
          noRequest: true
        });
      }
    }

    if (!connected) {
      Janus.warn("Is the server down? (connected=false)");
      sessionId = null;
      callbacks.success();
      return;
    } // No need to destroy all handles first, Janus will do that itself


    var request = {
      "janus": "destroy",
      "transaction": Janus.randomString(12)
    };
    if (token) request["token"] = token;
    if (apisecret) request["apisecret"] = apisecret;

    if (unload) {
      // We're unloading the page: use sendBeacon for HTTP instead,
      // or just close the WebSocket connection if we're using that
      if (websockets) {
        ws.onclose = null;
        ws.close();
        ws = null;
      } else {
        navigator.sendBeacon(server + "/" + sessionId, JSON.stringify(request));
      }

      Janus.log("Destroyed session:");
      sessionId = null;
      connected = false;
      callbacks.success();
      if (notifyDestroyed) gatewayCallbacks.destroyed();
      return;
    }

    if (websockets) {
      request["session_id"] = sessionId;

      var unbindWebSocket = function unbindWebSocket() {
        for (var eventName in wsHandlers) {
          ws.removeEventListener(eventName, wsHandlers[eventName]);
        }

        ws.removeEventListener('message', onUnbindMessage);
        ws.removeEventListener('error', onUnbindError);

        if (wsKeepaliveTimeoutId) {
          clearTimeout(wsKeepaliveTimeoutId);
        }

        ws.close();
      };

      var onUnbindMessage = function onUnbindMessage(event) {
        var data = JSON.parse(event.data);

        if (data.session_id == request.session_id && data.transaction == request.transaction) {
          unbindWebSocket();
          callbacks.success();
          if (notifyDestroyed) gatewayCallbacks.destroyed();
        }
      };

      var onUnbindError = function onUnbindError(event) {
        unbindWebSocket();
        callbacks.error("Failed to destroy the server: Is the server down?");
        if (notifyDestroyed) gatewayCallbacks.destroyed();
      };

      ws.addEventListener('message', onUnbindMessage);
      ws.addEventListener('error', onUnbindError);
      ws.send(JSON.stringify(request));
      return;
    }

    Janus.httpAPICall(server + "/" + sessionId, {
      verb: 'POST',
      withCredentials: withCredentials,
      body: request,
      success: function success(json) {
        Janus.log("Destroyed session:");
        Janus.debug(json);
        sessionId = null;
        connected = false;

        if (json["janus"] !== "success") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME
        }

        callbacks.success();
        if (notifyDestroyed) gatewayCallbacks.destroyed();
      },
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown); // FIXME
        // Reset everything anyway

        sessionId = null;
        connected = false;
        callbacks.success();
        if (notifyDestroyed) gatewayCallbacks.destroyed();
      }
    });
  } // Private method to create a plugin handle


  function createHandle(callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    callbacks.consentDialog = typeof callbacks.consentDialog == "function" ? callbacks.consentDialog : Janus.noop;
    callbacks.iceState = typeof callbacks.iceState == "function" ? callbacks.iceState : Janus.noop;
    callbacks.mediaState = typeof callbacks.mediaState == "function" ? callbacks.mediaState : Janus.noop;
    callbacks.webrtcState = typeof callbacks.webrtcState == "function" ? callbacks.webrtcState : Janus.noop;
    callbacks.slowLink = typeof callbacks.slowLink == "function" ? callbacks.slowLink : Janus.noop;
    callbacks.onmessage = typeof callbacks.onmessage == "function" ? callbacks.onmessage : Janus.noop;
    callbacks.onlocalstream = typeof callbacks.onlocalstream == "function" ? callbacks.onlocalstream : Janus.noop;
    callbacks.onremotestream = typeof callbacks.onremotestream == "function" ? callbacks.onremotestream : Janus.noop;
    callbacks.ondata = typeof callbacks.ondata == "function" ? callbacks.ondata : Janus.noop;
    callbacks.ondataopen = typeof callbacks.ondataopen == "function" ? callbacks.ondataopen : Janus.noop;
    callbacks.oncleanup = typeof callbacks.oncleanup == "function" ? callbacks.oncleanup : Janus.noop;
    callbacks.ondetached = typeof callbacks.ondetached == "function" ? callbacks.ondetached : Janus.noop;

    if (!connected) {
      Janus.warn("Is the server down? (connected=false)");
      callbacks.error("Is the server down? (connected=false)");
      return;
    }

    var plugin = callbacks.plugin;

    if (!plugin) {
      Janus.error("Invalid plugin");
      callbacks.error("Invalid plugin");
      return;
    }

    var opaqueId = callbacks.opaqueId;
    var handleToken = callbacks.token ? callbacks.token : token;
    var transaction = Janus.randomString(12);
    var request = {
      "janus": "attach",
      "plugin": plugin,
      "opaque_id": opaqueId,
      "transaction": transaction
    };
    if (handleToken) request["token"] = handleToken;
    if (apisecret) request["apisecret"] = apisecret;

    if (websockets) {
      transactions[transaction] = function (json) {
        Janus.debug(json);

        if (json["janus"] !== "success") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

          callbacks.error("Ooops: " + json["error"].code + " " + json["error"].reason);
          return;
        }

        var handleId = json.data["id"];
        Janus.log("Created handle: " + handleId);
        var pluginHandle = {
          session: that,
          plugin: plugin,
          id: handleId,
          token: handleToken,
          detached: false,
          webrtcStuff: {
            started: false,
            myStream: null,
            streamExternal: false,
            remoteStream: null,
            mySdp: null,
            mediaConstraints: null,
            pc: null,
            dataChannel: {},
            dtmfSender: null,
            trickle: true,
            iceDone: false,
            volume: {
              value: null,
              timer: null
            },
            bitrate: {
              value: null,
              bsnow: null,
              bsbefore: null,
              tsnow: null,
              tsbefore: null,
              timer: null
            }
          },
          getId: function getId() {
            return handleId;
          },
          getPlugin: function getPlugin() {
            return plugin;
          },
          getVolume: function getVolume() {
            return _getVolume(handleId, true);
          },
          getRemoteVolume: function getRemoteVolume() {
            return _getVolume(handleId, true);
          },
          getLocalVolume: function getLocalVolume() {
            return _getVolume(handleId, false);
          },
          isAudioMuted: function isAudioMuted() {
            return isMuted(handleId, false);
          },
          muteAudio: function muteAudio() {
            return mute(handleId, false, true);
          },
          unmuteAudio: function unmuteAudio() {
            return mute(handleId, false, false);
          },
          isVideoMuted: function isVideoMuted() {
            return isMuted(handleId, true);
          },
          muteVideo: function muteVideo() {
            return mute(handleId, true, true);
          },
          unmuteVideo: function unmuteVideo() {
            return mute(handleId, true, false);
          },
          getBitrate: function getBitrate() {
            return _getBitrate(handleId);
          },
          send: function send(callbacks) {
            sendMessage(handleId, callbacks);
          },
          data: function data(callbacks) {
            sendData(handleId, callbacks);
          },
          dtmf: function dtmf(callbacks) {
            sendDtmf(handleId, callbacks);
          },
          consentDialog: callbacks.consentDialog,
          iceState: callbacks.iceState,
          mediaState: callbacks.mediaState,
          webrtcState: callbacks.webrtcState,
          slowLink: callbacks.slowLink,
          onmessage: callbacks.onmessage,
          createOffer: function createOffer(callbacks) {
            prepareWebrtc(handleId, true, callbacks);
          },
          createAnswer: function createAnswer(callbacks) {
            prepareWebrtc(handleId, false, callbacks);
          },
          handleRemoteJsep: function handleRemoteJsep(callbacks) {
            prepareWebrtcPeer(handleId, callbacks);
          },
          onlocalstream: callbacks.onlocalstream,
          onremotestream: callbacks.onremotestream,
          ondata: callbacks.ondata,
          ondataopen: callbacks.ondataopen,
          oncleanup: callbacks.oncleanup,
          ondetached: callbacks.ondetached,
          hangup: function hangup(sendRequest) {
            cleanupWebrtc(handleId, sendRequest === true);
          },
          detach: function detach(callbacks) {
            destroyHandle(handleId, callbacks);
          }
        };
        pluginHandles[handleId] = pluginHandle;
        callbacks.success(pluginHandle);
      };

      request["session_id"] = sessionId;
      ws.send(JSON.stringify(request));
      return;
    }

    Janus.httpAPICall(server + "/" + sessionId, {
      verb: 'POST',
      withCredentials: withCredentials,
      body: request,
      success: function success(json) {
        Janus.debug(json);

        if (json["janus"] !== "success") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

          callbacks.error("Ooops: " + json["error"].code + " " + json["error"].reason);
          return;
        }

        var handleId = json.data["id"];
        Janus.log("Created handle: " + handleId);
        var pluginHandle = {
          session: that,
          plugin: plugin,
          id: handleId,
          token: handleToken,
          detached: false,
          webrtcStuff: {
            started: false,
            myStream: null,
            streamExternal: false,
            remoteStream: null,
            mySdp: null,
            mediaConstraints: null,
            pc: null,
            dataChannel: {},
            dtmfSender: null,
            trickle: true,
            iceDone: false,
            volume: {
              value: null,
              timer: null
            },
            bitrate: {
              value: null,
              bsnow: null,
              bsbefore: null,
              tsnow: null,
              tsbefore: null,
              timer: null
            }
          },
          getId: function getId() {
            return handleId;
          },
          getPlugin: function getPlugin() {
            return plugin;
          },
          getVolume: function getVolume() {
            return _getVolume(handleId, true);
          },
          getRemoteVolume: function getRemoteVolume() {
            return _getVolume(handleId, true);
          },
          getLocalVolume: function getLocalVolume() {
            return _getVolume(handleId, false);
          },
          isAudioMuted: function isAudioMuted() {
            return isMuted(handleId, false);
          },
          muteAudio: function muteAudio() {
            return mute(handleId, false, true);
          },
          unmuteAudio: function unmuteAudio() {
            return mute(handleId, false, false);
          },
          isVideoMuted: function isVideoMuted() {
            return isMuted(handleId, true);
          },
          muteVideo: function muteVideo() {
            return mute(handleId, true, true);
          },
          unmuteVideo: function unmuteVideo() {
            return mute(handleId, true, false);
          },
          getBitrate: function getBitrate() {
            return _getBitrate(handleId);
          },
          send: function send(callbacks) {
            sendMessage(handleId, callbacks);
          },
          data: function data(callbacks) {
            sendData(handleId, callbacks);
          },
          dtmf: function dtmf(callbacks) {
            sendDtmf(handleId, callbacks);
          },
          consentDialog: callbacks.consentDialog,
          iceState: callbacks.iceState,
          mediaState: callbacks.mediaState,
          webrtcState: callbacks.webrtcState,
          slowLink: callbacks.slowLink,
          onmessage: callbacks.onmessage,
          createOffer: function createOffer(callbacks) {
            prepareWebrtc(handleId, true, callbacks);
          },
          createAnswer: function createAnswer(callbacks) {
            prepareWebrtc(handleId, false, callbacks);
          },
          handleRemoteJsep: function handleRemoteJsep(callbacks) {
            prepareWebrtcPeer(handleId, callbacks);
          },
          onlocalstream: callbacks.onlocalstream,
          onremotestream: callbacks.onremotestream,
          ondata: callbacks.ondata,
          ondataopen: callbacks.ondataopen,
          oncleanup: callbacks.oncleanup,
          ondetached: callbacks.ondetached,
          hangup: function hangup(sendRequest) {
            cleanupWebrtc(handleId, sendRequest === true);
          },
          detach: function detach(callbacks) {
            destroyHandle(handleId, callbacks);
          }
        };
        pluginHandles[handleId] = pluginHandle;
        callbacks.success(pluginHandle);
      },
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown); // FIXME

        if (errorThrown === "") callbacks.error(textStatus + ": Is the server down?");else callbacks.error(textStatus + ": " + errorThrown);
      }
    });
  } // Private method to send a message


  function sendMessage(handleId, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;

    if (!connected) {
      Janus.warn("Is the server down? (connected=false)");
      callbacks.error("Is the server down? (connected=false)");
      return;
    }

    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      callbacks.error("Invalid handle");
      return;
    }

    var message = callbacks.message;
    var jsep = callbacks.jsep;
    var transaction = Janus.randomString(12);
    var request = {
      "janus": "message",
      "body": message,
      "transaction": transaction
    };
    if (pluginHandle.token) request["token"] = pluginHandle.token;
    if (apisecret) request["apisecret"] = apisecret;

    if (jsep) {
      request.jsep = {
        type: jsep.type,
        sdp: jsep.sdp
      };
      if (jsep.e2ee) request.jsep.e2ee = true;
    }

    Janus.debug("Sending message to plugin (handle=" + handleId + "):");
    Janus.debug(request);

    if (websockets) {
      request["session_id"] = sessionId;
      request["handle_id"] = handleId;

      transactions[transaction] = function (json) {
        Janus.debug("Message sent!");
        Janus.debug(json);

        if (json["janus"] === "success") {
          // We got a success, must have been a synchronous transaction
          var plugindata = json["plugindata"];

          if (!plugindata) {
            Janus.warn("Request succeeded, but missing plugindata...");
            callbacks.success();
            return;
          }

          Janus.log("Synchronous transaction successful (" + plugindata["plugin"] + ")");
          var data = plugindata["data"];
          Janus.debug(data);
          callbacks.success(data);
          return;
        } else if (json["janus"] !== "ack") {
          // Not a success and not an ack, must be an error
          if (json["error"]) {
            Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

            callbacks.error(json["error"].code + " " + json["error"].reason);
          } else {
            Janus.error("Unknown error"); // FIXME

            callbacks.error("Unknown error");
          }

          return;
        } // If we got here, the plugin decided to handle the request asynchronously


        callbacks.success();
      };

      ws.send(JSON.stringify(request));
      return;
    }

    Janus.httpAPICall(server + "/" + sessionId + "/" + handleId, {
      verb: 'POST',
      withCredentials: withCredentials,
      body: request,
      success: function success(json) {
        Janus.debug("Message sent!");
        Janus.debug(json);

        if (json["janus"] === "success") {
          // We got a success, must have been a synchronous transaction
          var plugindata = json["plugindata"];

          if (!plugindata) {
            Janus.warn("Request succeeded, but missing plugindata...");
            callbacks.success();
            return;
          }

          Janus.log("Synchronous transaction successful (" + plugindata["plugin"] + ")");
          var data = plugindata["data"];
          Janus.debug(data);
          callbacks.success(data);
          return;
        } else if (json["janus"] !== "ack") {
          // Not a success and not an ack, must be an error
          if (json["error"]) {
            Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

            callbacks.error(json["error"].code + " " + json["error"].reason);
          } else {
            Janus.error("Unknown error"); // FIXME

            callbacks.error("Unknown error");
          }

          return;
        } // If we got here, the plugin decided to handle the request asynchronously


        callbacks.success();
      },
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown); // FIXME

        callbacks.error(textStatus + ": " + errorThrown);
      }
    });
  } // Private method to send a trickle candidate


  function sendTrickleCandidate(handleId, candidate) {
    if (!connected) {
      Janus.warn("Is the server down? (connected=false)");
      return;
    }

    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      return;
    }

    var request = {
      "janus": "trickle",
      "candidate": candidate,
      "transaction": Janus.randomString(12)
    };
    if (pluginHandle.token) request["token"] = pluginHandle.token;
    if (apisecret) request["apisecret"] = apisecret;
    Janus.vdebug("Sending trickle candidate (handle=" + handleId + "):");
    Janus.vdebug(request);

    if (websockets) {
      request["session_id"] = sessionId;
      request["handle_id"] = handleId;
      ws.send(JSON.stringify(request));
      return;
    }

    Janus.httpAPICall(server + "/" + sessionId + "/" + handleId, {
      verb: 'POST',
      withCredentials: withCredentials,
      body: request,
      success: function success(json) {
        Janus.vdebug("Candidate sent!");
        Janus.vdebug(json);

        if (json["janus"] !== "ack") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME

          return;
        }
      },
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown); // FIXME
      }
    });
  } // Private method to create a data channel


  function createDataChannel(handleId, dclabel, dcprotocol, incoming, pendingData) {
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;

    var onDataChannelMessage = function onDataChannelMessage(event) {
      Janus.log('Received message on data channel:', event);
      var label = event.target.label;
      pluginHandle.ondata(event.data, label);
    };

    var onDataChannelStateChange = function onDataChannelStateChange(event) {
      Janus.log('Received state change on data channel:', event);
      var label = event.target.label;
      var protocol = event.target.protocol;
      var dcState = config.dataChannel[label] ? config.dataChannel[label].readyState : "null";
      Janus.log('State change on <' + label + '> data channel: ' + dcState);

      if (dcState === 'open') {
        // Any pending messages to send?
        if (config.dataChannel[label].pending && config.dataChannel[label].pending.length > 0) {
          Janus.log("Sending pending messages on <" + label + ">:", config.dataChannel[label].pending.length);

          var _iterator4 = _createForOfIteratorHelper(config.dataChannel[label].pending),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var data = _step4.value;
              Janus.log("Sending data on data channel <" + label + ">");
              Janus.debug(data);
              config.dataChannel[label].send(data);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          config.dataChannel[label].pending = [];
        } // Notify the open data channel


        pluginHandle.ondataopen(label, protocol);
      }
    };

    var onDataChannelError = function onDataChannelError(error) {
      Janus.error('Got error on data channel:', error); // TODO
    };

    if (!incoming) {
      // FIXME Add options (ordered, maxRetransmits, etc.)
      var dcoptions = {
        ordered: true
      };
      if (dcprotocol) dcoptions.protocol = dcprotocol;
      config.dataChannel[dclabel] = config.pc.createDataChannel(dclabel, dcoptions);
    } else {
      // The channel was created by Janus
      config.dataChannel[dclabel] = incoming;
    }

    config.dataChannel[dclabel].onmessage = onDataChannelMessage;
    config.dataChannel[dclabel].onopen = onDataChannelStateChange;
    config.dataChannel[dclabel].onclose = onDataChannelStateChange;
    config.dataChannel[dclabel].onerror = onDataChannelError;
    config.dataChannel[dclabel].pending = [];
    if (pendingData) config.dataChannel[dclabel].pending.push(pendingData);
  } // Private method to send a data channel message


  function sendData(handleId, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      callbacks.error("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;
    var data = callbacks.text || callbacks.data;

    if (!data) {
      Janus.warn("Invalid data");
      callbacks.error("Invalid data");
      return;
    }

    var label = callbacks.label ? callbacks.label : Janus.dataChanDefaultLabel;

    if (!config.dataChannel[label]) {
      // Create new data channel and wait for it to open
      createDataChannel(handleId, label, callbacks.protocol, false, data, callbacks.protocol);
      callbacks.success();
      return;
    }

    if (config.dataChannel[label].readyState !== "open") {
      config.dataChannel[label].pending.push(data);
      callbacks.success();
      return;
    }

    Janus.log("Sending data on data channel <" + label + ">");
    Janus.debug(data);
    config.dataChannel[label].send(data);
    callbacks.success();
  } // Private method to send a DTMF tone


  function sendDtmf(handleId, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      callbacks.error("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;

    if (!config.dtmfSender) {
      // Create the DTMF sender the proper way, if possible
      if (config.pc) {
        var senders = config.pc.getSenders();
        var audioSender = senders.find(function (sender) {
          return sender.track && sender.track.kind === 'audio';
        });

        if (!audioSender) {
          Janus.warn("Invalid DTMF configuration (no audio track)");
          callbacks.error("Invalid DTMF configuration (no audio track)");
          return;
        }

        config.dtmfSender = audioSender.dtmf;

        if (config.dtmfSender) {
          Janus.log("Created DTMF Sender");

          config.dtmfSender.ontonechange = function (tone) {
            Janus.debug("Sent DTMF tone: " + tone.tone);
          };
        }
      }

      if (!config.dtmfSender) {
        Janus.warn("Invalid DTMF configuration");
        callbacks.error("Invalid DTMF configuration");
        return;
      }
    }

    var dtmf = callbacks.dtmf;

    if (!dtmf) {
      Janus.warn("Invalid DTMF parameters");
      callbacks.error("Invalid DTMF parameters");
      return;
    }

    var tones = dtmf.tones;

    if (!tones) {
      Janus.warn("Invalid DTMF string");
      callbacks.error("Invalid DTMF string");
      return;
    }

    var duration = typeof dtmf.duration === 'number' ? dtmf.duration : 500; // We choose 500ms as the default duration for a tone

    var gap = typeof dtmf.gap === 'number' ? dtmf.gap : 50; // We choose 50ms as the default gap between tones

    Janus.debug("Sending DTMF string " + tones + " (duration " + duration + "ms, gap " + gap + "ms)");
    config.dtmfSender.insertDTMF(tones, duration, gap);
    callbacks.success();
  } // Private method to destroy a plugin handle


  function destroyHandle(handleId, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    var noRequest = callbacks.noRequest === true;
    Janus.log("Destroying handle " + handleId + " (only-locally=" + noRequest + ")");
    cleanupWebrtc(handleId);
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || pluginHandle.detached) {
      // Plugin was already detached by Janus, calling detach again will return a handle not found error, so just exit here
      delete pluginHandles[handleId];
      callbacks.success();
      return;
    }

    if (noRequest) {
      // We're only removing the handle locally
      delete pluginHandles[handleId];
      callbacks.success();
      return;
    }

    if (!connected) {
      Janus.warn("Is the server down? (connected=false)");
      callbacks.error("Is the server down? (connected=false)");
      return;
    }

    var request = {
      "janus": "detach",
      "transaction": Janus.randomString(12)
    };
    if (pluginHandle.token) request["token"] = pluginHandle.token;
    if (apisecret) request["apisecret"] = apisecret;

    if (websockets) {
      request["session_id"] = sessionId;
      request["handle_id"] = handleId;
      ws.send(JSON.stringify(request));
      delete pluginHandles[handleId];
      callbacks.success();
      return;
    }

    Janus.httpAPICall(server + "/" + sessionId + "/" + handleId, {
      verb: 'POST',
      withCredentials: withCredentials,
      body: request,
      success: function success(json) {
        Janus.log("Destroyed handle:");
        Janus.debug(json);

        if (json["janus"] !== "success") {
          Janus.error("Ooops: " + json["error"].code + " " + json["error"].reason); // FIXME
        }

        delete pluginHandles[handleId];
        callbacks.success();
      },
      error: function error(textStatus, errorThrown) {
        Janus.error(textStatus + ":", errorThrown); // FIXME
        // We cleanup anyway

        delete pluginHandles[handleId];
        callbacks.success();
      }
    });
  } // WebRTC stuff


  function streamsDone(handleId, jsep, media, callbacks, stream) {
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle"); // Close all tracks if the given stream has been created internally

      if (!callbacks.stream) {
        Janus.stopAllTracks(stream);
      }

      callbacks.error("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;
    Janus.debug("streamsDone:", stream);

    if (stream) {
      Janus.debug("  -- Audio tracks:", stream.getAudioTracks());
      Janus.debug("  -- Video tracks:", stream.getVideoTracks());
    } // We're now capturing the new stream: check if we're updating or if it's a new thing


    var addTracks = false;

    if (!config.myStream || !media.update || config.streamExternal) {
      config.myStream = stream;
      addTracks = true;
    } else {
      // We only need to update the existing stream
      if ((!media.update && isAudioSendEnabled(media) || media.update && (media.addAudio || media.replaceAudio)) && stream.getAudioTracks() && stream.getAudioTracks().length) {
        config.myStream.addTrack(stream.getAudioTracks()[0]);

        if (Janus.unifiedPlan) {
          // Use Transceivers
          Janus.log((media.replaceAudio ? "Replacing" : "Adding") + " audio track:", stream.getAudioTracks()[0]);
          var audioTransceiver = null;
          var transceivers = config.pc.getTransceivers();

          if (transceivers && transceivers.length > 0) {
            var _iterator5 = _createForOfIteratorHelper(transceivers),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var t = _step5.value;

                if (t.sender && t.sender.track && t.sender.track.kind === "audio" || t.receiver && t.receiver.track && t.receiver.track.kind === "audio") {
                  audioTransceiver = t;
                  break;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          if (audioTransceiver && audioTransceiver.sender) {
            audioTransceiver.sender.replaceTrack(stream.getAudioTracks()[0]);
          } else {
            config.pc.addTrack(stream.getAudioTracks()[0], stream);
          }
        } else {
          Janus.log((media.replaceAudio ? "Replacing" : "Adding") + " audio track:", stream.getAudioTracks()[0]);
          config.pc.addTrack(stream.getAudioTracks()[0], stream);
        }
      }

      if ((!media.update && isVideoSendEnabled(media) || media.update && (media.addVideo || media.replaceVideo)) && stream.getVideoTracks() && stream.getVideoTracks().length) {
        config.myStream.addTrack(stream.getVideoTracks()[0]);

        if (Janus.unifiedPlan) {
          // Use Transceivers
          Janus.log((media.replaceVideo ? "Replacing" : "Adding") + " video track:", stream.getVideoTracks()[0]);
          var videoTransceiver = null;
          var transceivers = config.pc.getTransceivers();

          if (transceivers && transceivers.length > 0) {
            var _iterator6 = _createForOfIteratorHelper(transceivers),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var t = _step6.value;

                if (t.sender && t.sender.track && t.sender.track.kind === "video" || t.receiver && t.receiver.track && t.receiver.track.kind === "video") {
                  videoTransceiver = t;
                  break;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          if (videoTransceiver && videoTransceiver.sender) {
            videoTransceiver.sender.replaceTrack(stream.getVideoTracks()[0]);
          } else {
            config.pc.addTrack(stream.getVideoTracks()[0], stream);
          }
        } else {
          Janus.log((media.replaceVideo ? "Replacing" : "Adding") + " video track:", stream.getVideoTracks()[0]);
          config.pc.addTrack(stream.getVideoTracks()[0], stream);
        }
      }
    } // If we still need to create a PeerConnection, let's do that


    if (!config.pc) {
      var pc_config = {
        "iceServers": iceServers,
        "iceTransportPolicy": iceTransportPolicy,
        "bundlePolicy": bundlePolicy
      };

      if (Janus.webRTCAdapter.browserDetails.browser === "chrome") {
        // For Chrome versions before 72, we force a plan-b semantic, and unified-plan otherwise
        pc_config["sdpSemantics"] = Janus.webRTCAdapter.browserDetails.version < 72 ? "plan-b" : "unified-plan";
      }

      var pc_constraints = {
        "optional": [{
          "DtlsSrtpKeyAgreement": true
        }]
      };

      if (ipv6Support) {
        pc_constraints.optional.push({
          "googIPv6": true
        });
      } // Any custom constraint to add?


      if (callbacks.rtcConstraints && _typeof(callbacks.rtcConstraints) === 'object') {
        Janus.debug("Adding custom PeerConnection constraints:", callbacks.rtcConstraints);

        for (var i in callbacks.rtcConstraints) {
          pc_constraints.optional.push(callbacks.rtcConstraints[i]);
        }
      }

      if (Janus.webRTCAdapter.browserDetails.browser === "edge") {
        // This is Edge, enable BUNDLE explicitly
        pc_config.bundlePolicy = "max-bundle";
      } // Check if a sender or receiver transform has been provided


      if (RTCRtpSender && RTCRtpSender.prototype.createEncodedAudioStreams && RTCRtpSender.prototype.createEncodedVideoStreams && (callbacks.senderTransforms || callbacks.receiverTransforms)) {
        config.senderTransforms = callbacks.senderTransforms;
        config.receiverTransforms = callbacks.receiverTransforms;
        pc_config["forceEncodedAudioInsertableStreams"] = true;
        pc_config["forceEncodedVideoInsertableStreams"] = true;
        pc_config["encodedInsertableStreams"] = true;
      }

      Janus.log("Creating PeerConnection");
      Janus.debug(pc_constraints);
      config.pc = new RTCPeerConnection(pc_config, pc_constraints);
      Janus.debug(config.pc);

      if (config.pc.getStats) {
        // FIXME
        config.volume = {};
        config.bitrate.value = "0 kbits/sec";
      }

      Janus.log("Preparing local SDP and gathering candidates (trickle=" + config.trickle + ")");

      config.pc.oniceconnectionstatechange = function (e) {
        if (config.pc) pluginHandle.iceState(config.pc.iceConnectionState);
      };

      config.pc.onicecandidate = function (event) {
        if (!event.candidate || Janus.webRTCAdapter.browserDetails.browser === 'edge' && event.candidate.candidate.indexOf('endOfCandidates') > 0) {
          Janus.log("End of candidates.");
          config.iceDone = true;

          if (config.trickle === true) {
            // Notify end of candidates
            sendTrickleCandidate(handleId, {
              "completed": true
            });
          } else {
            // No trickle, time to send the complete SDP (including all candidates)
            sendSDP(handleId, callbacks);
          }
        } else {
          // JSON.stringify doesn't work on some WebRTC objects anymore
          // See https://code.google.com/p/chromium/issues/detail?id=467366
          var candidate = {
            "candidate": event.candidate.candidate,
            "sdpMid": event.candidate.sdpMid,
            "sdpMLineIndex": event.candidate.sdpMLineIndex
          };

          if (config.trickle === true) {
            // Send candidate
            sendTrickleCandidate(handleId, candidate);
          }
        }
      };

      config.pc.ontrack = function (event) {
        Janus.log("Handling Remote Track");
        Janus.debug(event);
        if (!event.streams) return;
        config.remoteStream = event.streams[0];
        pluginHandle.onremotestream(config.remoteStream);
        if (event.track.onended) return;

        if (config.receiverTransforms) {
          var receiverStreams = null;

          if (event.track.kind === "audio" && config.receiverTransforms["audio"]) {
            receiverStreams = event.receiver.createEncodedAudioStreams();
          } else if (event.track.kind === "video" && config.receiverTransforms["video"]) {
            receiverStreams = event.receiver.createEncodedVideoStreams();
          }

          if (receiverStreams) {
            receiverStreams.readableStream.pipeThrough(config.receiverTransforms[event.track.kind]).pipeTo(receiverStreams.writableStream);
          }
        }

        var trackMutedTimeoutId = null;
        Janus.log("Adding onended callback to track:", event.track);

        event.track.onended = function (ev) {
          Janus.log("Remote track removed:", ev);

          if (config.remoteStream) {
            clearTimeout(trackMutedTimeoutId);
            config.remoteStream.removeTrack(ev.target);
            pluginHandle.onremotestream(config.remoteStream);
          }
        };

        event.track.onmute = function (ev) {
          Janus.log("Remote track muted:", ev);

          if (config.remoteStream && trackMutedTimeoutId == null) {
            trackMutedTimeoutId = setTimeout(function () {
              Janus.log("Removing remote track");

              if (config.remoteStream) {
                config.remoteStream.removeTrack(ev.target);
                pluginHandle.onremotestream(config.remoteStream);
              }

              trackMutedTimeoutId = null; // Chrome seems to raise mute events only at multiples of 834ms;
              // we set the timeout to three times this value (rounded to 840ms)
            }, 3 * 840);
          }
        };

        event.track.onunmute = function (ev) {
          Janus.log("Remote track flowing again:", ev);

          if (trackMutedTimeoutId != null) {
            clearTimeout(trackMutedTimeoutId);
            trackMutedTimeoutId = null;
          } else {
            try {
              config.remoteStream.addTrack(ev.target);
              pluginHandle.onremotestream(config.remoteStream);
            } catch (e) {
              Janus.error(e);
            }

            ;
          }
        };
      };
    }

    if (addTracks && stream) {
      Janus.log('Adding local stream');
      var simulcast2 = callbacks.simulcast2 === true;
      stream.getTracks().forEach(function (track) {
        Janus.log('Adding local track:', track);

        if (!simulcast2) {
          var sender = config.pc.addTrack(track, stream); // Check if insertable streams are involved

          if (sender && config.senderTransforms) {
            var senderStreams = null;

            if (sender.track.kind === "audio" && config.senderTransforms["audio"]) {
              senderStreams = sender.createEncodedAudioStreams();
            } else if (sender.track.kind === "video" && config.senderTransforms["video"]) {
              senderStreams = sender.createEncodedVideoStreams();
            }

            if (senderStreams) {
              senderStreams.readableStream.pipeThrough(config.senderTransforms[sender.track.kind]).pipeTo(senderStreams.writableStream);
            }
          }
        } else {
          if (track.kind === "audio") {
            config.pc.addTrack(track, stream);
          } else {
            Janus.log('Enabling rid-based simulcasting:', track);
            var maxBitrates = getMaxBitrates(callbacks.simulcastMaxBitrates);
            config.pc.addTransceiver(track, {
              direction: "sendrecv",
              streams: [stream],
              sendEncodings: [{
                rid: "h",
                active: true,
                maxBitrate: maxBitrates.high
              }, {
                rid: "m",
                active: true,
                maxBitrate: maxBitrates.medium,
                scaleResolutionDownBy: 2
              }, {
                rid: "l",
                active: true,
                maxBitrate: maxBitrates.low,
                scaleResolutionDownBy: 4
              }]
            });
          }
        }
      });
    } // Any data channel to create?


    if (isDataEnabled(media) && !config.dataChannel[Janus.dataChanDefaultLabel]) {
      Janus.log("Creating default data channel");
      createDataChannel(handleId, Janus.dataChanDefaultLabel, null, false);

      config.pc.ondatachannel = function (event) {
        Janus.log("Data channel created by Janus:", event);
        createDataChannel(handleId, event.channel.label, event.channel.protocol, event.channel);
      };
    } // If there's a new local stream, let's notify the application


    if (config.myStream) {
      pluginHandle.onlocalstream(config.myStream);
    } // Create offer/answer now


    if (!jsep) {
      createOffer(handleId, media, callbacks);
    } else {
      config.pc.setRemoteDescription(jsep).then(function () {
        Janus.log("Remote description accepted!");
        config.remoteSdp = jsep.sdp; // Any trickle candidate we cached?

        if (config.candidates && config.candidates.length > 0) {
          for (var i = 0; i < config.candidates.length; i++) {
            var candidate = config.candidates[i];
            Janus.debug("Adding remote candidate:", candidate);

            if (!candidate || candidate.completed === true) {
              // end-of-candidates
              config.pc.addIceCandidate(Janus.endOfCandidates);
            } else {
              // New candidate
              config.pc.addIceCandidate(candidate);
            }
          }

          config.candidates = [];
        } // Create the answer now


        createAnswer(handleId, media, callbacks);
      }, callbacks.error);
    }
  }

  function prepareWebrtc(handleId, offer, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : webrtcError;
    var jsep = callbacks.jsep;

    if (offer && jsep) {
      Janus.error("Provided a JSEP to a createOffer");
      callbacks.error("Provided a JSEP to a createOffer");
      return;
    } else if (!offer && (!jsep || !jsep.type || !jsep.sdp)) {
      Janus.error("A valid JSEP is required for createAnswer");
      callbacks.error("A valid JSEP is required for createAnswer");
      return;
    }
    /* Check that callbacks.media is a (not null) Object */


    callbacks.media = _typeof(callbacks.media) === 'object' && callbacks.media ? callbacks.media : {
      audio: true,
      video: true
    };
    var media = callbacks.media;
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      callbacks.error("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;
    config.trickle = isTrickleEnabled(callbacks.trickle); // Are we updating a session?

    if (!config.pc) {
      // Nope, new PeerConnection
      media.update = false;
      media.keepAudio = false;
      media.keepVideo = false;
    } else {
      Janus.log("Updating existing media session");
      media.update = true; // Check if there's anything to add/remove/replace, or if we
      // can go directly to preparing the new SDP offer or answer

      if (callbacks.stream) {
        // External stream: is this the same as the one we were using before?
        if (callbacks.stream !== config.myStream) {
          Janus.log("Renegotiation involves a new external stream");
        }
      } else {
        // Check if there are changes on audio
        if (media.addAudio) {
          media.keepAudio = false;
          media.replaceAudio = false;
          media.removeAudio = false;
          media.audioSend = true;

          if (config.myStream && config.myStream.getAudioTracks() && config.myStream.getAudioTracks().length) {
            Janus.error("Can't add audio stream, there already is one");
            callbacks.error("Can't add audio stream, there already is one");
            return;
          }
        } else if (media.removeAudio) {
          media.keepAudio = false;
          media.replaceAudio = false;
          media.addAudio = false;
          media.audioSend = false;
        } else if (media.replaceAudio) {
          media.keepAudio = false;
          media.addAudio = false;
          media.removeAudio = false;
          media.audioSend = true;
        }

        if (!config.myStream) {
          // No media stream: if we were asked to replace, it's actually an "add"
          if (media.replaceAudio) {
            media.keepAudio = false;
            media.replaceAudio = false;
            media.addAudio = true;
            media.audioSend = true;
          }

          if (isAudioSendEnabled(media)) {
            media.keepAudio = false;
            media.addAudio = true;
          }
        } else {
          if (!config.myStream.getAudioTracks() || config.myStream.getAudioTracks().length === 0) {
            // No audio track: if we were asked to replace, it's actually an "add"
            if (media.replaceAudio) {
              media.keepAudio = false;
              media.replaceAudio = false;
              media.addAudio = true;
              media.audioSend = true;
            }

            if (isAudioSendEnabled(media)) {
              media.keepAudio = false;
              media.addAudio = true;
            }
          } else {
            // We have an audio track: should we keep it as it is?
            if (isAudioSendEnabled(media) && !media.removeAudio && !media.replaceAudio) {
              media.keepAudio = true;
            }
          }
        } // Check if there are changes on video


        if (media.addVideo) {
          media.keepVideo = false;
          media.replaceVideo = false;
          media.removeVideo = false;
          media.videoSend = true;

          if (config.myStream && config.myStream.getVideoTracks() && config.myStream.getVideoTracks().length) {
            Janus.error("Can't add video stream, there already is one");
            callbacks.error("Can't add video stream, there already is one");
            return;
          }
        } else if (media.removeVideo) {
          media.keepVideo = false;
          media.replaceVideo = false;
          media.addVideo = false;
          media.videoSend = false;
        } else if (media.replaceVideo) {
          media.keepVideo = false;
          media.addVideo = false;
          media.removeVideo = false;
          media.videoSend = true;
        }

        if (!config.myStream) {
          // No media stream: if we were asked to replace, it's actually an "add"
          if (media.replaceVideo) {
            media.keepVideo = false;
            media.replaceVideo = false;
            media.addVideo = true;
            media.videoSend = true;
          }

          if (isVideoSendEnabled(media)) {
            media.keepVideo = false;
            media.addVideo = true;
          }
        } else {
          if (!config.myStream.getVideoTracks() || config.myStream.getVideoTracks().length === 0) {
            // No video track: if we were asked to replace, it's actually an "add"
            if (media.replaceVideo) {
              media.keepVideo = false;
              media.replaceVideo = false;
              media.addVideo = true;
              media.videoSend = true;
            }

            if (isVideoSendEnabled(media)) {
              media.keepVideo = false;
              media.addVideo = true;
            }
          } else {
            // We have a video track: should we keep it as it is?
            if (isVideoSendEnabled(media) && !media.removeVideo && !media.replaceVideo) {
              media.keepVideo = true;
            }
          }
        } // Data channels can only be added


        if (media.addData) {
          media.data = true;
        }
      } // If we're updating and keeping all tracks, let's skip the getUserMedia part


      if (isAudioSendEnabled(media) && media.keepAudio && isVideoSendEnabled(media) && media.keepVideo) {
        pluginHandle.consentDialog(false);
        streamsDone(handleId, jsep, media, callbacks, config.myStream);
        return;
      }
    } // If we're updating, check if we need to remove/replace one of the tracks


    if (media.update && !config.streamExternal) {
      if (media.removeAudio || media.replaceAudio) {
        if (config.myStream && config.myStream.getAudioTracks() && config.myStream.getAudioTracks().length) {
          var at = config.myStream.getAudioTracks()[0];
          Janus.log("Removing audio track:", at);
          config.myStream.removeTrack(at);

          try {
            at.stop();
          } catch (e) {}
        }

        if (config.pc.getSenders() && config.pc.getSenders().length) {
          var ra = true;

          if (media.replaceAudio && Janus.unifiedPlan) {
            // We can use replaceTrack
            ra = false;
          }

          if (ra) {
            var _iterator7 = _createForOfIteratorHelper(config.pc.getSenders()),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var asnd = _step7.value;

                if (asnd && asnd.track && asnd.track.kind === "audio") {
                  Janus.log("Removing audio sender:", asnd);
                  config.pc.removeTrack(asnd);
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }
      }

      if (media.removeVideo || media.replaceVideo) {
        if (config.myStream && config.myStream.getVideoTracks() && config.myStream.getVideoTracks().length) {
          var vt = config.myStream.getVideoTracks()[0];
          Janus.log("Removing video track:", vt);
          config.myStream.removeTrack(vt);

          try {
            vt.stop();
          } catch (e) {}
        }

        if (config.pc.getSenders() && config.pc.getSenders().length) {
          var rv = true;

          if (media.replaceVideo && Janus.unifiedPlan) {
            // We can use replaceTrack
            rv = false;
          }

          if (rv) {
            var _iterator8 = _createForOfIteratorHelper(config.pc.getSenders()),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var vsnd = _step8.value;

                if (vsnd && vsnd.track && vsnd.track.kind === "video") {
                  Janus.log("Removing video sender:", vsnd);
                  config.pc.removeTrack(vsnd);
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }
      }
    } // Was a MediaStream object passed, or do we need to take care of that?


    if (callbacks.stream) {
      var stream = callbacks.stream;
      Janus.log("MediaStream provided by the application");
      Janus.debug(stream); // If this is an update, let's check if we need to release the previous stream

      if (media.update) {
        if (config.myStream && config.myStream !== callbacks.stream && !config.streamExternal) {
          // We're replacing a stream we captured ourselves with an external one
          Janus.stopAllTracks(config.myStream);
          config.myStream = null;
        }
      } // Skip the getUserMedia part


      config.streamExternal = true;
      pluginHandle.consentDialog(false);
      streamsDone(handleId, jsep, media, callbacks, stream);
      return;
    }

    if (isAudioSendEnabled(media) || isVideoSendEnabled(media)) {
      if (!Janus.isGetUserMediaAvailable()) {
        callbacks.error("getUserMedia not available");
        return;
      }

      var constraints = {
        mandatory: {},
        optional: []
      };
      pluginHandle.consentDialog(true);
      var audioSupport = isAudioSendEnabled(media);
      if (audioSupport && media && _typeof(media.audio) === 'object') audioSupport = media.audio;
      var videoSupport = isVideoSendEnabled(media);

      if (videoSupport && media) {
        var simulcast = callbacks.simulcast === true;
        var simulcast2 = callbacks.simulcast2 === true;
        if ((simulcast || simulcast2) && !jsep && !media.video) media.video = "hires";

        if (media.video && media.video != 'screen' && media.video != 'window') {
          if (_typeof(media.video) === 'object') {
            videoSupport = media.video;
          } else {
            var width = 0;
            var height = 0,
                maxHeight = 0;

            if (media.video === 'lowres') {
              // Small resolution, 4:3
              height = 240;
              maxHeight = 240;
              width = 320;
            } else if (media.video === 'lowres-16:9') {
              // Small resolution, 16:9
              height = 180;
              maxHeight = 180;
              width = 320;
            } else if (media.video === 'hires' || media.video === 'hires-16:9' || media.video === 'hdres') {
              // High(HD) resolution is only 16:9
              height = 720;
              maxHeight = 720;
              width = 1280;
            } else if (media.video === 'fhdres') {
              // Full HD resolution is only 16:9
              height = 1080;
              maxHeight = 1080;
              width = 1920;
            } else if (media.video === '4kres') {
              // 4K resolution is only 16:9
              height = 2160;
              maxHeight = 2160;
              width = 3840;
            } else if (media.video === 'stdres') {
              // Normal resolution, 4:3
              height = 480;
              maxHeight = 480;
              width = 640;
            } else if (media.video === 'stdres-16:9') {
              // Normal resolution, 16:9
              height = 360;
              maxHeight = 360;
              width = 640;
            } else {
              Janus.log("Default video setting is stdres 4:3");
              height = 480;
              maxHeight = 480;
              width = 640;
            }

            Janus.log("Adding media constraint:", media.video);
            videoSupport = {
              'height': {
                'ideal': height
              },
              'width': {
                'ideal': width
              }
            };
            Janus.log("Adding video constraint:", videoSupport);
          }
        } else if (media.video === 'screen' || media.video === 'window') {
          // We're going to try and use the extension for Chrome 34+, the old approach
          // for older versions of Chrome, or the experimental support in Firefox 33+
          var callbackUserMedia = function callbackUserMedia(error, stream) {
            pluginHandle.consentDialog(false);

            if (error) {
              callbacks.error(error);
            } else {
              streamsDone(handleId, jsep, media, callbacks, stream);
            }
          };

          var getScreenMedia = function getScreenMedia(constraints, gsmCallback, useAudio) {
            Janus.log("Adding media constraint (screen capture)");
            Janus.debug(constraints);
            navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
              if (useAudio) {
                navigator.mediaDevices.getUserMedia({
                  audio: true,
                  video: false
                }).then(function (audioStream) {
                  stream.addTrack(audioStream.getAudioTracks()[0]);
                  gsmCallback(null, stream);
                });
              } else {
                gsmCallback(null, stream);
              }
            })["catch"](function (error) {
              pluginHandle.consentDialog(false);
              gsmCallback(error);
            });
          };

          if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
            // The new experimental getDisplayMedia API is available, let's use that
            // https://groups.google.com/forum/#!topic/discuss-webrtc/Uf0SrR4uxzk
            // https://webrtchacks.com/chrome-screensharing-getdisplaymedia/
            constraints.video = {};

            if (media.screenshareFrameRate) {
              constraints.video.frameRate = media.screenshareFrameRate;
            }

            if (media.screenshareHeight) {
              constraints.video.height = media.screenshareHeight;
            }

            if (media.screenshareWidth) {
              constraints.video.width = media.screenshareWidth;
            }

            constraints.audio = media.captureDesktopAudio;
            navigator.mediaDevices.getDisplayMedia(constraints).then(function (stream) {
              pluginHandle.consentDialog(false);

              if (isAudioSendEnabled(media) && !media.keepAudio) {
                navigator.mediaDevices.getUserMedia({
                  audio: true,
                  video: false
                }).then(function (audioStream) {
                  stream.addTrack(audioStream.getAudioTracks()[0]);
                  streamsDone(handleId, jsep, media, callbacks, stream);
                });
              } else {
                streamsDone(handleId, jsep, media, callbacks, stream);
              }
            }, function (error) {
              pluginHandle.consentDialog(false);
              callbacks.error(error);
            });
            return;
          }

          if (Janus.webRTCAdapter.browserDetails.browser === 'chrome') {
            var chromever = Janus.webRTCAdapter.browserDetails.version;
            var maxver = 33;
            if (window.navigator.userAgent.match('Linux')) maxver = 35; // "known" crash in chrome 34 and 35 on linux

            if (chromever >= 26 && chromever <= maxver) {
              // Chrome 26->33 requires some awkward chrome://flags manipulation
              constraints = {
                video: {
                  mandatory: {
                    googLeakyBucket: true,
                    maxWidth: window.screen.width,
                    maxHeight: window.screen.height,
                    minFrameRate: media.screenshareFrameRate,
                    maxFrameRate: media.screenshareFrameRate,
                    chromeMediaSource: 'screen'
                  }
                },
                audio: isAudioSendEnabled(media) && !media.keepAudio
              };
              getScreenMedia(constraints, callbackUserMedia);
            } else {
              // Chrome 34+ requires an extension
              Janus.extension.getScreen(function (error, sourceId) {
                if (error) {
                  pluginHandle.consentDialog(false);
                  return callbacks.error(error);
                }

                constraints = {
                  audio: false,
                  video: {
                    mandatory: {
                      chromeMediaSource: 'desktop',
                      maxWidth: window.screen.width,
                      maxHeight: window.screen.height,
                      minFrameRate: media.screenshareFrameRate,
                      maxFrameRate: media.screenshareFrameRate
                    },
                    optional: [{
                      googLeakyBucket: true
                    }, {
                      googTemporalLayeredScreencast: true
                    }]
                  }
                };
                constraints.video.mandatory.chromeMediaSourceId = sourceId;
                getScreenMedia(constraints, callbackUserMedia, isAudioSendEnabled(media) && !media.keepAudio);
              });
            }
          } else if (Janus.webRTCAdapter.browserDetails.browser === 'firefox') {
            if (Janus.webRTCAdapter.browserDetails.version >= 33) {
              // Firefox 33+ has experimental support for screen sharing
              constraints = {
                video: {
                  mozMediaSource: media.video,
                  mediaSource: media.video
                },
                audio: isAudioSendEnabled(media) && !media.keepAudio
              };
              getScreenMedia(constraints, function (err, stream) {
                callbackUserMedia(err, stream); // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1045810

                if (!err) {
                  var lastTime = stream.currentTime;
                  var polly = window.setInterval(function () {
                    if (!stream) window.clearInterval(polly);

                    if (stream.currentTime == lastTime) {
                      window.clearInterval(polly);

                      if (stream.onended) {
                        stream.onended();
                      }
                    }

                    lastTime = stream.currentTime;
                  }, 500);
                }
              });
            } else {
              var error = new Error('NavigatorUserMediaError');
              error.name = 'Your version of Firefox does not support screen sharing, please install Firefox 33 (or more recent versions)';
              pluginHandle.consentDialog(false);
              callbacks.error(error);
              return;
            }
          }

          return;
        }
      } // If we got here, we're not screensharing


      if (!media || media.video !== 'screen') {
        // Check whether all media sources are actually available or not
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          var audioExist = devices.some(function (device) {
            return device.kind === 'audioinput';
          }),
              videoExist = isScreenSendEnabled(media) || devices.some(function (device) {
            return device.kind === 'videoinput';
          }); // Check whether a missing device is really a problem

          var audioSend = isAudioSendEnabled(media);
          var videoSend = isVideoSendEnabled(media);
          var needAudioDevice = isAudioSendRequired(media);
          var needVideoDevice = isVideoSendRequired(media);

          if (audioSend || videoSend || needAudioDevice || needVideoDevice) {
            // We need to send either audio or video
            var haveAudioDevice = audioSend ? audioExist : false;
            var haveVideoDevice = videoSend ? videoExist : false;

            if (!haveAudioDevice && !haveVideoDevice) {
              // FIXME Should we really give up, or just assume recvonly for both?
              pluginHandle.consentDialog(false);
              callbacks.error('No capture device found');
              return false;
            } else if (!haveAudioDevice && needAudioDevice) {
              pluginHandle.consentDialog(false);
              callbacks.error('Audio capture is required, but no capture device found');
              return false;
            } else if (!haveVideoDevice && needVideoDevice) {
              pluginHandle.consentDialog(false);
              callbacks.error('Video capture is required, but no capture device found');
              return false;
            }
          }

          var gumConstraints = {
            audio: audioExist && !media.keepAudio ? audioSupport : false,
            video: videoExist && !media.keepVideo ? videoSupport : false
          };
          Janus.debug("getUserMedia constraints", gumConstraints);

          if (!gumConstraints.audio && !gumConstraints.video) {
            pluginHandle.consentDialog(false);
            streamsDone(handleId, jsep, media, callbacks, stream);
          } else {
            navigator.mediaDevices.getUserMedia(gumConstraints).then(function (stream) {
              pluginHandle.consentDialog(false);
              streamsDone(handleId, jsep, media, callbacks, stream);
            })["catch"](function (error) {
              pluginHandle.consentDialog(false);
              callbacks.error({
                code: error.code,
                name: error.name,
                message: error.message
              });
            });
          }
        })["catch"](function (error) {
          pluginHandle.consentDialog(false);
          callbacks.error(error);
        });
      }
    } else {
      // No need to do a getUserMedia, create offer/answer right away
      streamsDone(handleId, jsep, media, callbacks);
    }
  }

  function prepareWebrtcPeer(handleId, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : webrtcError;
    var jsep = callbacks.jsep;
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      callbacks.error("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;

    if (jsep) {
      if (!config.pc) {
        Janus.warn("Wait, no PeerConnection?? if this is an answer, use createAnswer and not handleRemoteJsep");
        callbacks.error("No PeerConnection: if this is an answer, use createAnswer and not handleRemoteJsep");
        return;
      }

      config.pc.setRemoteDescription(jsep).then(function () {
        Janus.log("Remote description accepted!");
        config.remoteSdp = jsep.sdp; // Any trickle candidate we cached?

        if (config.candidates && config.candidates.length > 0) {
          for (var i = 0; i < config.candidates.length; i++) {
            var candidate = config.candidates[i];
            Janus.debug("Adding remote candidate:", candidate);

            if (!candidate || candidate.completed === true) {
              // end-of-candidates
              config.pc.addIceCandidate(Janus.endOfCandidates);
            } else {
              // New candidate
              config.pc.addIceCandidate(candidate);
            }
          }

          config.candidates = [];
        } // Done


        callbacks.success();
      }, callbacks.error);
    } else {
      callbacks.error("Invalid JSEP");
    }
  }

  function createOffer(handleId, media, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    callbacks.customizeSdp = typeof callbacks.customizeSdp == "function" ? callbacks.customizeSdp : Janus.noop;
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      callbacks.error("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;
    var simulcast = callbacks.simulcast === true;

    if (!simulcast) {
      Janus.log("Creating offer (iceDone=" + config.iceDone + ")");
    } else {
      Janus.log("Creating offer (iceDone=" + config.iceDone + ", simulcast=" + simulcast + ")");
    } // https://code.google.com/p/webrtc/issues/detail?id=3508


    var mediaConstraints = {};

    if (Janus.unifiedPlan) {
      // We can use Transceivers
      var audioTransceiver = null,
          videoTransceiver = null;
      var transceivers = config.pc.getTransceivers();

      if (transceivers && transceivers.length > 0) {
        var _iterator9 = _createForOfIteratorHelper(transceivers),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var t = _step9.value;

            if (t.sender && t.sender.track && t.sender.track.kind === "audio" || t.receiver && t.receiver.track && t.receiver.track.kind === "audio") {
              if (!audioTransceiver) {
                audioTransceiver = t;
              }

              continue;
            }

            if (t.sender && t.sender.track && t.sender.track.kind === "video" || t.receiver && t.receiver.track && t.receiver.track.kind === "video") {
              if (!videoTransceiver) {
                videoTransceiver = t;
              }

              continue;
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      } // Handle audio (and related changes, if any)


      var audioSend = isAudioSendEnabled(media);
      var audioRecv = isAudioRecvEnabled(media);

      if (!audioSend && !audioRecv) {
        // Audio disabled: have we removed it?
        if (media.removeAudio && audioTransceiver) {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection("inactive");
          } else {
            audioTransceiver.direction = "inactive";
          }

          Janus.log("Setting audio transceiver to inactive:", audioTransceiver);
        }
      } else {
        // Take care of audio m-line
        if (audioSend && audioRecv) {
          if (audioTransceiver) {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection("sendrecv");
            } else {
              audioTransceiver.direction = "sendrecv";
            }

            Janus.log("Setting audio transceiver to sendrecv:", audioTransceiver);
          }
        } else if (audioSend && !audioRecv) {
          if (audioTransceiver) {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection("sendonly");
            } else {
              audioTransceiver.direction = "sendonly";
            }

            Janus.log("Setting audio transceiver to sendonly:", audioTransceiver);
          }
        } else if (!audioSend && audioRecv) {
          if (audioTransceiver) {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection("recvonly");
            } else {
              audioTransceiver.direction = "recvonly";
            }

            Janus.log("Setting audio transceiver to recvonly:", audioTransceiver);
          } else {
            // In theory, this is the only case where we might not have a transceiver yet
            audioTransceiver = config.pc.addTransceiver("audio", {
              direction: "recvonly"
            });
            Janus.log("Adding recvonly audio transceiver:", audioTransceiver);
          }
        }
      } // Handle video (and related changes, if any)


      var videoSend = isVideoSendEnabled(media);
      var videoRecv = isVideoRecvEnabled(media);

      if (!videoSend && !videoRecv) {
        // Video disabled: have we removed it?
        if (media.removeVideo && videoTransceiver) {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection("inactive");
          } else {
            videoTransceiver.direction = "inactive";
          }

          Janus.log("Setting video transceiver to inactive:", videoTransceiver);
        }
      } else {
        // Take care of video m-line
        if (videoSend && videoRecv) {
          if (videoTransceiver) {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection("sendrecv");
            } else {
              videoTransceiver.direction = "sendrecv";
            }

            Janus.log("Setting video transceiver to sendrecv:", videoTransceiver);
          }
        } else if (videoSend && !videoRecv) {
          if (videoTransceiver) {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection("sendonly");
            } else {
              videoTransceiver.direction = "sendonly";
            }

            Janus.log("Setting video transceiver to sendonly:", videoTransceiver);
          }
        } else if (!videoSend && videoRecv) {
          if (videoTransceiver) {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection("recvonly");
            } else {
              videoTransceiver.direction = "recvonly";
            }

            Janus.log("Setting video transceiver to recvonly:", videoTransceiver);
          } else {
            // In theory, this is the only case where we might not have a transceiver yet
            videoTransceiver = config.pc.addTransceiver("video", {
              direction: "recvonly"
            });
            Janus.log("Adding recvonly video transceiver:", videoTransceiver);
          }
        }
      }
    } else {
      mediaConstraints["offerToReceiveAudio"] = isAudioRecvEnabled(media);
      mediaConstraints["offerToReceiveVideo"] = isVideoRecvEnabled(media);
    }

    var iceRestart = callbacks.iceRestart === true;

    if (iceRestart) {
      mediaConstraints["iceRestart"] = true;
    }

    Janus.debug(mediaConstraints); // Check if this is Firefox and we've been asked to do simulcasting

    var sendVideo = isVideoSendEnabled(media);

    if (sendVideo && simulcast && Janus.webRTCAdapter.browserDetails.browser === "firefox") {
      // FIXME Based on https://gist.github.com/voluntas/088bc3cc62094730647b
      Janus.log("Enabling Simulcasting for Firefox (RID)");
      var sender = config.pc.getSenders().find(function (s) {
        return s.track.kind === "video";
      });

      if (sender) {
        var parameters = sender.getParameters();

        if (!parameters) {
          parameters = {};
        }

        var maxBitrates = getMaxBitrates(callbacks.simulcastMaxBitrates);
        parameters.encodings = [{
          rid: "h",
          active: true,
          maxBitrate: maxBitrates.high
        }, {
          rid: "m",
          active: true,
          maxBitrate: maxBitrates.medium,
          scaleResolutionDownBy: 2
        }, {
          rid: "l",
          active: true,
          maxBitrate: maxBitrates.low,
          scaleResolutionDownBy: 4
        }];
        sender.setParameters(parameters);
      }
    }

    config.pc.createOffer(mediaConstraints).then(function (offer) {
      Janus.debug(offer); // JSON.stringify doesn't work on some WebRTC objects anymore
      // See https://code.google.com/p/chromium/issues/detail?id=467366

      var jsep = {
        "type": offer.type,
        "sdp": offer.sdp
      };
      callbacks.customizeSdp(jsep);
      offer.sdp = jsep.sdp;
      Janus.log("Setting local description");

      if (sendVideo && simulcast) {
        // This SDP munging only works with Chrome (Safari STP may support it too)
        if (Janus.webRTCAdapter.browserDetails.browser === "chrome" || Janus.webRTCAdapter.browserDetails.browser === "safari") {
          Janus.log("Enabling Simulcasting for Chrome (SDP munging)");
          offer.sdp = mungeSdpForSimulcasting(offer.sdp);
        } else if (Janus.webRTCAdapter.browserDetails.browser !== "firefox") {
          Janus.warn("simulcast=true, but this is not Chrome nor Firefox, ignoring");
        }
      }

      config.mySdp = offer.sdp;
      config.pc.setLocalDescription(offer)["catch"](callbacks.error);
      config.mediaConstraints = mediaConstraints;

      if (!config.iceDone && !config.trickle) {
        // Don't do anything until we have all candidates
        Janus.log("Waiting for all candidates...");
        return;
      } // If transforms are present, notify Janus that the media is end-to-end encrypted


      if (config.senderTransforms || config.receiverTransforms) {
        offer["e2ee"] = true;
      }

      callbacks.success(offer);
    }, callbacks.error);
  }

  function createAnswer(handleId, media, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    callbacks.customizeSdp = typeof callbacks.customizeSdp == "function" ? callbacks.customizeSdp : Janus.noop;
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      callbacks.error("Invalid handle");
      return;
    }

    var config = pluginHandle.webrtcStuff;
    var simulcast = callbacks.simulcast === true;

    if (!simulcast) {
      Janus.log("Creating answer (iceDone=" + config.iceDone + ")");
    } else {
      Janus.log("Creating answer (iceDone=" + config.iceDone + ", simulcast=" + simulcast + ")");
    }

    var mediaConstraints = null;

    if (Janus.unifiedPlan) {
      // We can use Transceivers
      mediaConstraints = {};
      var audioTransceiver = null,
          videoTransceiver = null;
      var transceivers = config.pc.getTransceivers();

      if (transceivers && transceivers.length > 0) {
        var _iterator10 = _createForOfIteratorHelper(transceivers),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var t = _step10.value;

            if (t.sender && t.sender.track && t.sender.track.kind === "audio" || t.receiver && t.receiver.track && t.receiver.track.kind === "audio") {
              if (!audioTransceiver) audioTransceiver = t;
              continue;
            }

            if (t.sender && t.sender.track && t.sender.track.kind === "video" || t.receiver && t.receiver.track && t.receiver.track.kind === "video") {
              if (!videoTransceiver) videoTransceiver = t;
              continue;
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      } // Handle audio (and related changes, if any)


      var audioSend = isAudioSendEnabled(media);
      var audioRecv = isAudioRecvEnabled(media);

      if (!audioSend && !audioRecv) {
        // Audio disabled: have we removed it?
        if (media.removeAudio && audioTransceiver) {
          try {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection("inactive");
            } else {
              audioTransceiver.direction = "inactive";
            }

            Janus.log("Setting audio transceiver to inactive:", audioTransceiver);
          } catch (e) {
            Janus.error(e);
          }
        }
      } else {
        // Take care of audio m-line
        if (audioSend && audioRecv) {
          if (audioTransceiver) {
            try {
              if (audioTransceiver.setDirection) {
                audioTransceiver.setDirection("sendrecv");
              } else {
                audioTransceiver.direction = "sendrecv";
              }

              Janus.log("Setting audio transceiver to sendrecv:", audioTransceiver);
            } catch (e) {
              Janus.error(e);
            }
          }
        } else if (audioSend && !audioRecv) {
          try {
            if (audioTransceiver) {
              if (audioTransceiver.setDirection) {
                audioTransceiver.setDirection("sendonly");
              } else {
                audioTransceiver.direction = "sendonly";
              }

              Janus.log("Setting audio transceiver to sendonly:", audioTransceiver);
            }
          } catch (e) {
            Janus.error(e);
          }
        } else if (!audioSend && audioRecv) {
          if (audioTransceiver) {
            try {
              if (audioTransceiver.setDirection) {
                audioTransceiver.setDirection("recvonly");
              } else {
                audioTransceiver.direction = "recvonly";
              }

              Janus.log("Setting audio transceiver to recvonly:", audioTransceiver);
            } catch (e) {
              Janus.error(e);
            }
          } else {
            // In theory, this is the only case where we might not have a transceiver yet
            audioTransceiver = config.pc.addTransceiver("audio", {
              direction: "recvonly"
            });
            Janus.log("Adding recvonly audio transceiver:", audioTransceiver);
          }
        }
      } // Handle video (and related changes, if any)


      var videoSend = isVideoSendEnabled(media);
      var videoRecv = isVideoRecvEnabled(media);

      if (!videoSend && !videoRecv) {
        // Video disabled: have we removed it?
        if (media.removeVideo && videoTransceiver) {
          try {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection("inactive");
            } else {
              videoTransceiver.direction = "inactive";
            }

            Janus.log("Setting video transceiver to inactive:", videoTransceiver);
          } catch (e) {
            Janus.error(e);
          }
        }
      } else {
        // Take care of video m-line
        if (videoSend && videoRecv) {
          if (videoTransceiver) {
            try {
              if (videoTransceiver.setDirection) {
                videoTransceiver.setDirection("sendrecv");
              } else {
                videoTransceiver.direction = "sendrecv";
              }

              Janus.log("Setting video transceiver to sendrecv:", videoTransceiver);
            } catch (e) {
              Janus.error(e);
            }
          }
        } else if (videoSend && !videoRecv) {
          if (videoTransceiver) {
            try {
              if (videoTransceiver.setDirection) {
                videoTransceiver.setDirection("sendonly");
              } else {
                videoTransceiver.direction = "sendonly";
              }

              Janus.log("Setting video transceiver to sendonly:", videoTransceiver);
            } catch (e) {
              Janus.error(e);
            }
          }
        } else if (!videoSend && videoRecv) {
          if (videoTransceiver) {
            try {
              if (videoTransceiver.setDirection) {
                videoTransceiver.setDirection("recvonly");
              } else {
                videoTransceiver.direction = "recvonly";
              }

              Janus.log("Setting video transceiver to recvonly:", videoTransceiver);
            } catch (e) {
              Janus.error(e);
            }
          } else {
            // In theory, this is the only case where we might not have a transceiver yet
            videoTransceiver = config.pc.addTransceiver("video", {
              direction: "recvonly"
            });
            Janus.log("Adding recvonly video transceiver:", videoTransceiver);
          }
        }
      }
    } else {
      if (Janus.webRTCAdapter.browserDetails.browser === "firefox" || Janus.webRTCAdapter.browserDetails.browser === "edge") {
        mediaConstraints = {
          offerToReceiveAudio: isAudioRecvEnabled(media),
          offerToReceiveVideo: isVideoRecvEnabled(media)
        };
      } else {
        mediaConstraints = {
          mandatory: {
            OfferToReceiveAudio: isAudioRecvEnabled(media),
            OfferToReceiveVideo: isVideoRecvEnabled(media)
          }
        };
      }
    }

    Janus.debug(mediaConstraints); // Check if this is Firefox and we've been asked to do simulcasting

    var sendVideo = isVideoSendEnabled(media);

    if (sendVideo && simulcast && Janus.webRTCAdapter.browserDetails.browser === "firefox") {
      // FIXME Based on https://gist.github.com/voluntas/088bc3cc62094730647b
      Janus.log("Enabling Simulcasting for Firefox (RID)");
      var sender = config.pc.getSenders()[1];
      Janus.log(sender);
      var parameters = sender.getParameters();
      Janus.log(parameters);
      var maxBitrates = getMaxBitrates(callbacks.simulcastMaxBitrates);
      sender.setParameters({
        encodings: [{
          rid: "high",
          active: true,
          priority: "high",
          maxBitrate: maxBitrates.high
        }, {
          rid: "medium",
          active: true,
          priority: "medium",
          maxBitrate: maxBitrates.medium
        }, {
          rid: "low",
          active: true,
          priority: "low",
          maxBitrate: maxBitrates.low
        }]
      });
    }

    config.pc.createAnswer(mediaConstraints).then(function (answer) {
      Janus.debug(answer); // JSON.stringify doesn't work on some WebRTC objects anymore
      // See https://code.google.com/p/chromium/issues/detail?id=467366

      var jsep = {
        "type": answer.type,
        "sdp": answer.sdp
      };
      callbacks.customizeSdp(jsep);
      answer.sdp = jsep.sdp;
      Janus.log("Setting local description");

      if (sendVideo && simulcast) {
        // This SDP munging only works with Chrome
        if (Janus.webRTCAdapter.browserDetails.browser === "chrome") {
          // FIXME Apparently trying to simulcast when answering breaks video in Chrome...
          //~ Janus.log("Enabling Simulcasting for Chrome (SDP munging)");
          //~ answer.sdp = mungeSdpForSimulcasting(answer.sdp);
          Janus.warn("simulcast=true, but this is an answer, and video breaks in Chrome if we enable it");
        } else if (Janus.webRTCAdapter.browserDetails.browser !== "firefox") {
          Janus.warn("simulcast=true, but this is not Chrome nor Firefox, ignoring");
        }
      }

      config.mySdp = answer.sdp;
      config.pc.setLocalDescription(answer)["catch"](callbacks.error);
      config.mediaConstraints = mediaConstraints;

      if (!config.iceDone && !config.trickle) {
        // Don't do anything until we have all candidates
        Janus.log("Waiting for all candidates...");
        return;
      } // If transforms are present, notify Janus that the media is end-to-end encrypted


      if (config.senderTransforms || config.receiverTransforms) {
        answer["e2ee"] = true;
      }

      callbacks.success(answer);
    }, callbacks.error);
  }

  function sendSDP(handleId, callbacks) {
    callbacks = callbacks || {};
    callbacks.success = typeof callbacks.success == "function" ? callbacks.success : Janus.noop;
    callbacks.error = typeof callbacks.error == "function" ? callbacks.error : Janus.noop;
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle, not sending anything");
      return;
    }

    var config = pluginHandle.webrtcStuff;
    Janus.log("Sending offer/answer SDP...");

    if (!config.mySdp) {
      Janus.warn("Local SDP instance is invalid, not sending anything...");
      return;
    }

    config.mySdp = {
      "type": config.pc.localDescription.type,
      "sdp": config.pc.localDescription.sdp
    };
    if (config.trickle === false) config.mySdp["trickle"] = false;
    Janus.debug(callbacks);
    config.sdpSent = true;
    callbacks.success(config.mySdp);
  }

  function _getVolume(handleId, remote) {
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      return 0;
    }

    var stream = remote ? "remote" : "local";
    var config = pluginHandle.webrtcStuff;
    if (!config.volume[stream]) config.volume[stream] = {
      value: 0
    }; // Start getting the volume, if audioLevel in getStats is supported (apparently
    // they're only available in Chrome/Safari right now: https://webrtc-stats.callstats.io/)

    if (config.pc.getStats && (Janus.webRTCAdapter.browserDetails.browser === "chrome" || Janus.webRTCAdapter.browserDetails.browser === "safari")) {
      if (remote && !config.remoteStream) {
        Janus.warn("Remote stream unavailable");
        return 0;
      } else if (!remote && !config.myStream) {
        Janus.warn("Local stream unavailable");
        return 0;
      }

      if (!config.volume[stream].timer) {
        Janus.log("Starting " + stream + " volume monitor");
        config.volume[stream].timer = setInterval(function () {
          config.pc.getStats().then(function (stats) {
            stats.forEach(function (res) {
              if (!res || res.kind !== "audio") return;
              if (remote && !res.remoteSource || !remote && res.type !== "media-source") return;
              config.volume[stream].value = res.audioLevel ? res.audioLevel : 0;
            });
          });
        }, 200);
        return 0; // We don't have a volume to return yet
      }

      return config.volume[stream].value;
    } else {
      // audioInputLevel and audioOutputLevel seem only available in Chrome? audioLevel
      // seems to be available on Chrome and Firefox, but they don't seem to work
      Janus.warn("Getting the " + stream + " volume unsupported by browser");
      return 0;
    }
  }

  function isMuted(handleId, video) {
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      return true;
    }

    var config = pluginHandle.webrtcStuff;

    if (!config.pc) {
      Janus.warn("Invalid PeerConnection");
      return true;
    }

    if (!config.myStream) {
      Janus.warn("Invalid local MediaStream");
      return true;
    }

    if (video) {
      // Check video track
      if (!config.myStream.getVideoTracks() || config.myStream.getVideoTracks().length === 0) {
        Janus.warn("No video track");
        return true;
      }

      return !config.myStream.getVideoTracks()[0].enabled;
    } else {
      // Check audio track
      if (!config.myStream.getAudioTracks() || config.myStream.getAudioTracks().length === 0) {
        Janus.warn("No audio track");
        return true;
      }

      return !config.myStream.getAudioTracks()[0].enabled;
    }
  }

  function mute(handleId, video, mute) {
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      return false;
    }

    var config = pluginHandle.webrtcStuff;

    if (!config.pc) {
      Janus.warn("Invalid PeerConnection");
      return false;
    }

    if (!config.myStream) {
      Janus.warn("Invalid local MediaStream");
      return false;
    }

    if (video) {
      // Mute/unmute video track
      if (!config.myStream.getVideoTracks() || config.myStream.getVideoTracks().length === 0) {
        Janus.warn("No video track");
        return false;
      }

      config.myStream.getVideoTracks()[0].enabled = !mute;
      return true;
    } else {
      // Mute/unmute audio track
      if (!config.myStream.getAudioTracks() || config.myStream.getAudioTracks().length === 0) {
        Janus.warn("No audio track");
        return false;
      }

      config.myStream.getAudioTracks()[0].enabled = !mute;
      return true;
    }
  }

  function _getBitrate(handleId) {
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle || !pluginHandle.webrtcStuff) {
      Janus.warn("Invalid handle");
      return "Invalid handle";
    }

    var config = pluginHandle.webrtcStuff;
    if (!config.pc) return "Invalid PeerConnection"; // Start getting the bitrate, if getStats is supported

    if (config.pc.getStats) {
      if (!config.bitrate.timer) {
        Janus.log("Starting bitrate timer (via getStats)");
        config.bitrate.timer = setInterval(function () {
          config.pc.getStats().then(function (stats) {
            stats.forEach(function (res) {
              if (!res) return;
              var inStats = false; // Check if these are statistics on incoming media

              if ((res.mediaType === "video" || res.id.toLowerCase().indexOf("video") > -1) && res.type === "inbound-rtp" && res.id.indexOf("rtcp") < 0) {
                // New stats
                inStats = true;
              } else if (res.type == 'ssrc' && res.bytesReceived && (res.googCodecName === "VP8" || res.googCodecName === "")) {
                // Older Chromer versions
                inStats = true;
              } // Parse stats now


              if (inStats) {
                config.bitrate.bsnow = res.bytesReceived;
                config.bitrate.tsnow = res.timestamp;

                if (config.bitrate.bsbefore === null || config.bitrate.tsbefore === null) {
                  // Skip this round
                  config.bitrate.bsbefore = config.bitrate.bsnow;
                  config.bitrate.tsbefore = config.bitrate.tsnow;
                } else {
                  // Calculate bitrate
                  var timePassed = config.bitrate.tsnow - config.bitrate.tsbefore;
                  if (Janus.webRTCAdapter.browserDetails.browser === "safari") timePassed = timePassed / 1000; // Apparently the timestamp is in microseconds, in Safari

                  var bitRate = Math.round((config.bitrate.bsnow - config.bitrate.bsbefore) * 8 / timePassed);
                  if (Janus.webRTCAdapter.browserDetails.browser === "safari") bitRate = parseInt(bitRate / 1000);
                  config.bitrate.value = bitRate + ' kbits/sec'; //~ Janus.log("Estimated bitrate is " + config.bitrate.value);

                  config.bitrate.bsbefore = config.bitrate.bsnow;
                  config.bitrate.tsbefore = config.bitrate.tsnow;
                }
              }
            });
          });
        }, 1000);
        return "0 kbits/sec"; // We don't have a bitrate value yet
      }

      return config.bitrate.value;
    } else {
      Janus.warn("Getting the video bitrate unsupported by browser");
      return "Feature unsupported by browser";
    }
  }

  function webrtcError(error) {
    Janus.error("WebRTC error:", error);
  }

  function cleanupWebrtc(handleId, hangupRequest) {
    Janus.log("Cleaning WebRTC stuff");
    var pluginHandle = pluginHandles[handleId];

    if (!pluginHandle) {
      // Nothing to clean
      return;
    }

    var config = pluginHandle.webrtcStuff;

    if (config) {
      if (hangupRequest === true) {
        // Send a hangup request (we don't really care about the response)
        var request = {
          "janus": "hangup",
          "transaction": Janus.randomString(12)
        };
        if (pluginHandle.token) request["token"] = pluginHandle.token;
        if (apisecret) request["apisecret"] = apisecret;
        Janus.debug("Sending hangup request (handle=" + handleId + "):");
        Janus.debug(request);

        if (websockets) {
          request["session_id"] = sessionId;
          request["handle_id"] = handleId;
          ws.send(JSON.stringify(request));
        } else {
          Janus.httpAPICall(server + "/" + sessionId + "/" + handleId, {
            verb: 'POST',
            withCredentials: withCredentials,
            body: request
          });
        }
      } // Cleanup stack


      config.remoteStream = null;

      if (config.volume) {
        if (config.volume["local"] && config.volume["local"].timer) clearInterval(config.volume["local"].timer);
        if (config.volume["remote"] && config.volume["remote"].timer) clearInterval(config.volume["remote"].timer);
      }

      config.volume = {};
      if (config.bitrate.timer) clearInterval(config.bitrate.timer);
      config.bitrate.timer = null;
      config.bitrate.bsnow = null;
      config.bitrate.bsbefore = null;
      config.bitrate.tsnow = null;
      config.bitrate.tsbefore = null;
      config.bitrate.value = null;

      if (!config.streamExternal && config.myStream) {
        Janus.log("Stopping local stream tracks");
        Janus.stopAllTracks(config.myStream);
      }

      config.streamExternal = false;
      config.myStream = null; // Close PeerConnection

      try {
        config.pc.close();
      } catch (e) {// Do nothing
      }

      config.pc = null;
      config.candidates = null;
      config.mySdp = null;
      config.remoteSdp = null;
      config.iceDone = false;
      config.dataChannel = {};
      config.dtmfSender = null;
      config.senderTransforms = null;
      config.receiverTransforms = null;
    }

    pluginHandle.oncleanup();
  } // Helper method to munge an SDP to enable simulcasting (Chrome only)


  function mungeSdpForSimulcasting(sdp) {
    // Let's munge the SDP to add the attributes for enabling simulcasting
    // (based on https://gist.github.com/ggarber/a19b4c33510028b9c657)
    var lines = sdp.split("\r\n");
    var video = false;
    var ssrc = [-1],
        ssrc_fid = [-1];
    var cname = null,
        msid = null,
        mslabel = null,
        label = null;
    var insertAt = -1;

    for (var i = 0; i < lines.length; i++) {
      var mline = lines[i].match(/m=(\w+) */);

      if (mline) {
        var medium = mline[1];

        if (medium === "video") {
          // New video m-line: make sure it's the first one
          if (ssrc[0] < 0) {
            video = true;
          } else {
            // We're done, let's add the new attributes here
            insertAt = i;
            break;
          }
        } else {
          // New non-video m-line: do we have what we were looking for?
          if (ssrc[0] > -1) {
            // We're done, let's add the new attributes here
            insertAt = i;
            break;
          }
        }

        continue;
      }

      if (!video) continue;
      var fid = lines[i].match(/a=ssrc-group:FID (\d+) (\d+)/);

      if (fid) {
        ssrc[0] = fid[1];
        ssrc_fid[0] = fid[2];
        lines.splice(i, 1);
        i--;
        continue;
      }

      if (ssrc[0]) {
        var match = lines[i].match('a=ssrc:' + ssrc[0] + ' cname:(.+)');

        if (match) {
          cname = match[1];
        }

        match = lines[i].match('a=ssrc:' + ssrc[0] + ' msid:(.+)');

        if (match) {
          msid = match[1];
        }

        match = lines[i].match('a=ssrc:' + ssrc[0] + ' mslabel:(.+)');

        if (match) {
          mslabel = match[1];
        }

        match = lines[i].match('a=ssrc:' + ssrc[0] + ' label:(.+)');

        if (match) {
          label = match[1];
        }

        if (lines[i].indexOf('a=ssrc:' + ssrc_fid[0]) === 0) {
          lines.splice(i, 1);
          i--;
          continue;
        }

        if (lines[i].indexOf('a=ssrc:' + ssrc[0]) === 0) {
          lines.splice(i, 1);
          i--;
          continue;
        }
      }

      if (lines[i].length == 0) {
        lines.splice(i, 1);
        i--;
        continue;
      }
    }

    if (ssrc[0] < 0) {
      // Couldn't find a FID attribute, let's just take the first video SSRC we find
      insertAt = -1;
      video = false;

      for (var i = 0; i < lines.length; i++) {
        var mline = lines[i].match(/m=(\w+) */);

        if (mline) {
          var medium = mline[1];

          if (medium === "video") {
            // New video m-line: make sure it's the first one
            if (ssrc[0] < 0) {
              video = true;
            } else {
              // We're done, let's add the new attributes here
              insertAt = i;
              break;
            }
          } else {
            // New non-video m-line: do we have what we were looking for?
            if (ssrc[0] > -1) {
              // We're done, let's add the new attributes here
              insertAt = i;
              break;
            }
          }

          continue;
        }

        if (!video) continue;

        if (ssrc[0] < 0) {
          var value = lines[i].match(/a=ssrc:(\d+)/);

          if (value) {
            ssrc[0] = value[1];
            lines.splice(i, 1);
            i--;
            continue;
          }
        } else {
          var match = lines[i].match('a=ssrc:' + ssrc[0] + ' cname:(.+)');

          if (match) {
            cname = match[1];
          }

          match = lines[i].match('a=ssrc:' + ssrc[0] + ' msid:(.+)');

          if (match) {
            msid = match[1];
          }

          match = lines[i].match('a=ssrc:' + ssrc[0] + ' mslabel:(.+)');

          if (match) {
            mslabel = match[1];
          }

          match = lines[i].match('a=ssrc:' + ssrc[0] + ' label:(.+)');

          if (match) {
            label = match[1];
          }

          if (lines[i].indexOf('a=ssrc:' + ssrc_fid[0]) === 0) {
            lines.splice(i, 1);
            i--;
            continue;
          }

          if (lines[i].indexOf('a=ssrc:' + ssrc[0]) === 0) {
            lines.splice(i, 1);
            i--;
            continue;
          }
        }

        if (lines[i].length === 0) {
          lines.splice(i, 1);
          i--;
          continue;
        }
      }
    }

    if (ssrc[0] < 0) {
      // Still nothing, let's just return the SDP we were asked to munge
      Janus.warn("Couldn't find the video SSRC, simulcasting NOT enabled");
      return sdp;
    }

    if (insertAt < 0) {
      // Append at the end
      insertAt = lines.length;
    } // Generate a couple of SSRCs (for retransmissions too)
    // Note: should we check if there are conflicts, here?


    ssrc[1] = Math.floor(Math.random() * 0xFFFFFFFF);
    ssrc[2] = Math.floor(Math.random() * 0xFFFFFFFF);
    ssrc_fid[1] = Math.floor(Math.random() * 0xFFFFFFFF);
    ssrc_fid[2] = Math.floor(Math.random() * 0xFFFFFFFF); // Add attributes to the SDP

    for (var i = 0; i < ssrc.length; i++) {
      if (cname) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc[i] + ' cname:' + cname);
        insertAt++;
      }

      if (msid) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc[i] + ' msid:' + msid);
        insertAt++;
      }

      if (mslabel) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc[i] + ' mslabel:' + mslabel);
        insertAt++;
      }

      if (label) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc[i] + ' label:' + label);
        insertAt++;
      } // Add the same info for the retransmission SSRC


      if (cname) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc_fid[i] + ' cname:' + cname);
        insertAt++;
      }

      if (msid) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc_fid[i] + ' msid:' + msid);
        insertAt++;
      }

      if (mslabel) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc_fid[i] + ' mslabel:' + mslabel);
        insertAt++;
      }

      if (label) {
        lines.splice(insertAt, 0, 'a=ssrc:' + ssrc_fid[i] + ' label:' + label);
        insertAt++;
      }
    }

    lines.splice(insertAt, 0, 'a=ssrc-group:FID ' + ssrc[2] + ' ' + ssrc_fid[2]);
    lines.splice(insertAt, 0, 'a=ssrc-group:FID ' + ssrc[1] + ' ' + ssrc_fid[1]);
    lines.splice(insertAt, 0, 'a=ssrc-group:FID ' + ssrc[0] + ' ' + ssrc_fid[0]);
    lines.splice(insertAt, 0, 'a=ssrc-group:SIM ' + ssrc[0] + ' ' + ssrc[1] + ' ' + ssrc[2]);
    sdp = lines.join("\r\n");
    if (!sdp.endsWith("\r\n")) sdp += "\r\n";
    return sdp;
  } // Helper methods to parse a media object


  function isAudioSendEnabled(media) {
    Janus.debug("isAudioSendEnabled:", media);
    if (!media) return true; // Default

    if (media.audio === false) return false; // Generic audio has precedence

    if (media.audioSend === undefined || media.audioSend === null) return true; // Default

    return media.audioSend === true;
  }

  function isAudioSendRequired(media) {
    Janus.debug("isAudioSendRequired:", media);
    if (!media) return false; // Default

    if (media.audio === false || media.audioSend === false) return false; // If we're not asking to capture audio, it's not required

    if (media.failIfNoAudio === undefined || media.failIfNoAudio === null) return false; // Default

    return media.failIfNoAudio === true;
  }

  function isAudioRecvEnabled(media) {
    Janus.debug("isAudioRecvEnabled:", media);
    if (!media) return true; // Default

    if (media.audio === false) return false; // Generic audio has precedence

    if (media.audioRecv === undefined || media.audioRecv === null) return true; // Default

    return media.audioRecv === true;
  }

  function isVideoSendEnabled(media) {
    Janus.debug("isVideoSendEnabled:", media);
    if (!media) return true; // Default

    if (media.video === false) return false; // Generic video has precedence

    if (media.videoSend === undefined || media.videoSend === null) return true; // Default

    return media.videoSend === true;
  }

  function isVideoSendRequired(media) {
    Janus.debug("isVideoSendRequired:", media);
    if (!media) return false; // Default

    if (media.video === false || media.videoSend === false) return false; // If we're not asking to capture video, it's not required

    if (media.failIfNoVideo === undefined || media.failIfNoVideo === null) return false; // Default

    return media.failIfNoVideo === true;
  }

  function isVideoRecvEnabled(media) {
    Janus.debug("isVideoRecvEnabled:", media);
    if (!media) return true; // Default

    if (media.video === false) return false; // Generic video has precedence

    if (media.videoRecv === undefined || media.videoRecv === null) return true; // Default

    return media.videoRecv === true;
  }

  function isScreenSendEnabled(media) {
    Janus.debug("isScreenSendEnabled:", media);
    if (!media) return false;
    if (_typeof(media.video) !== 'object' || _typeof(media.video.mandatory) !== 'object') return false;
    var constraints = media.video.mandatory;
    if (constraints.chromeMediaSource) return constraints.chromeMediaSource === 'desktop' || constraints.chromeMediaSource === 'screen';else if (constraints.mozMediaSource) return constraints.mozMediaSource === 'window' || constraints.mozMediaSource === 'screen';else if (constraints.mediaSource) return constraints.mediaSource === 'window' || constraints.mediaSource === 'screen';
    return false;
  }

  function isDataEnabled(media) {
    Janus.debug("isDataEnabled:", media);

    if (Janus.webRTCAdapter.browserDetails.browser === "edge") {
      Janus.warn("Edge doesn't support data channels yet");
      return false;
    }

    if (media === undefined || media === null) return false; // Default

    return media.data === true;
  }

  function isTrickleEnabled(trickle) {
    Janus.debug("isTrickleEnabled:", trickle);
    return trickle === false ? false : true;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Janus);

/***/ }),

/***/ "./src/mixins/audio.js":
/*!*****************************!*\
  !*** ./src/mixins/audio.js ***!
  \*****************************/
/*! exports provided: audioMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioMixin", function() { return audioMixin; });
var audioMixin = {
  data: function data() {
    return {
      audioEnabled: true
    };
  },
  methods: {
    toggleMute: function toggleMute() {
      this.audioEnabled = this.xayloConnection.isAudioMuted() ? false : true;
      this.Janus.log((this.audioEnabled ? "Unmuting" : "Muting") + " local audio stream...");

      if (this.audioEnabled) {
        this.xayloConnection.muteAudio();
      } else {
        this.xayloConnection.unmuteAudio();
      }

      this.audioEnabled = this.xayloConnection.isAudioMuted() ? false : true;
    }
  }
};

/***/ }),

/***/ "./src/mixins/canvas.js":
/*!******************************!*\
  !*** ./src/mixins/canvas.js ***!
  \******************************/
/*! exports provided: canvasMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasMixin", function() { return canvasMixin; });
var canvasMixin = {
  data: function data() {
    return {
      intervalDraw: null,
      stopCanvasLoop: null,
      osc: null,
      aCtx: null,
      silence: null,
      freq: null,
      stopped: null
    };
  },
  computed: {
    canvasContext: function canvasContext() {
      return this.$refs.streamingCanvas.getContext("2d");
    }
  },
  methods: {
    drawLocalVideo: function drawLocalVideo() {
      if (!this.canvasContext) {
        this.canvasContext = this.$refs.streamingCanvas.getContext("2d", {
          alpha: false
        });
      }

      this.$refs.streamingCanvas.width = 1280;
      this.$refs.streamingCanvas.height = 900;

      if (this.screenVideoElement) {
        this.canvasContext.drawImage(this.screenVideoElement, 0, 0, 1280, 720);
      }

      this.canvasContext.drawImage(this.$refs.localVideoElement, this.$refs.streamingCanvas.width - 300, this.$refs.streamingCanvas.height - 175, 300, 175);
      this.canvasContext.drawImage(this.$refs.remoteVideoElement, this.$refs.streamingCanvas.width - 610, this.$refs.streamingCanvas.height - 175, 300, 175); // Usually would use this to draw in a loop
      // When tab loses focus it cuts out though
      // that is the reason for the audio timer loop below
      // requestAnimationFrame(this.drawLocalVideo);
    },
    audioTimerLoop: function audioTimerLoop(frequency) {
      var _this = this;

      // AudioContext time parameters are in seconds
      this.freq = frequency / 1000;
      this.aCtx = new AudioContext(); // Chrome needs our oscillator node to be attached to the destination
      // So we create a silent Gain Node

      this.silence = this.aCtx.createGain();
      this.silence.gain.value = 0;
      this.silence.connect(this.aCtx.destination);
      this.onOSCend();
      this.stopped = false; // return a function to stop our loop

      return function () {
        _this.stopped = true;
      };
    },
    onOSCend: function onOSCend() {
      this.osc = this.aCtx.createOscillator();
      this.osc.onended = this.onOSCend;
      this.osc.connect(this.silence);
      this.osc.start(0);
      this.osc.stop(this.aCtx.currentTime + this.freq);
      this.drawLocalVideo(this.aCtx.currentTime);

      if (this.stopped) {
        this.osc.onended = function () {
          return;
        };
      }
    },
    startCanvasLoop: function startCanvasLoop() {
      this.stopCanvasLoop = this.audioTimerLoop(1000 / 30);
    },
    stop: function stop() {
      this.stopCanvasLoop();
    }
  },
  mounted: function mounted() {
    if (this.streamEnabled) {
      this.startCanvasLoop();
    }
  }
};

/***/ }),

/***/ "./src/mixins/janus/local.js":
/*!***********************************!*\
  !*** ./src/mixins/janus/local.js ***!
  \***********************************/
/*! exports provided: janusLocalMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "janusLocalMixin", function() { return janusLocalMixin; });
var janusLocalMixin = {
  data: function data() {
    return {
      localStream: null
    };
  },
  methods: {
    publishOwnFeed: function publishOwnFeed(useAudio) {
      var _this = this;

      // Publish our stream
      this.xayloConnection.createOffer({
        media: {
          audioRecv: false,
          videoRecv: false,
          audioSend: useAudio,
          videoSend: true
        },
        success: function success(jsep) {
          _this.Janus.debug("Got publisher SDP!", jsep);

          var publish = {
            request: "configure",
            audio: useAudio,
            video: true
          };

          _this.xayloConnection.send({
            message: publish,
            jsep: jsep
          });

          _this.published = true;
        },
        error: function error(_error) {
          _this.Janus.error("WebRTC error:", _error);

          if (useAudio) {
            _this.publishOwnFeed(false);
          } else {
            console.log("WebRTC error... " + _error.message);

            _this.publishOwnFeed(true);
          }
        }
      });
    },
    unpublishOwnFeed: function unpublishOwnFeed() {
      var _this2 = this;

      // Unpublish our stream
      var unpublish = {
        request: "unpublish"
      };
      this.xayloConnection.send({
        message: unpublish,
        success: function success() {
          _this2.published = false;
        }
      });
      this.streamingLocally = false;
      this.updateRoomStreaming();
      window.close("", "_parent", "");
    },
    registerUsername: function registerUsername() {
      var register = {
        request: "join",
        room: this.webinarRoomId,
        ptype: "publisher",
        display: this.currentUser.userName,
        quality: 0
      };
      this.xayloConnection.send({
        message: register
      }); //   this.published = true;
    }
  }
};

/***/ }),

/***/ "./src/mixins/janus/remote.js":
/*!************************************!*\
  !*** ./src/mixins/janus/remote.js ***!
  \************************************/
/*! exports provided: janusRemoteMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "janusRemoteMixin", function() { return janusRemoteMixin; });
var janusRemoteMixin = {
  data: function data() {
    return {
      remoteStream: null,
      bitrateTimer: []
    };
  },
  methods: {
    newRemoteFeed: function newRemoteFeed(id, display, audio, video) {
      var _this = this;

      // A new feed has been published, create a new plugin handle and attach to it as a subscriber
      var remoteFeed = null;
      this.janus.attach({
        plugin: "janus.plugin.videoroom",
        opaqueId: this.opaqueId,
        success: function success(pluginHandle) {
          remoteFeed = pluginHandle;
          remoteFeed.simulcastStarted = false;

          _this.Janus.log("Plugin attached! (" + remoteFeed.getPlugin() + ", id=" + remoteFeed.getId() + ")");

          _this.Janus.log("-- This is a subscriber - id:", id); // We wait for the plugin to send us an offer


          var subscribe = {
            request: "join",
            room: _this.webinarRoomId,
            ptype: "subscriber",
            feed: id,
            private_id: _this.myPrivateId,
            quality: 0
          }; // In case you don't want to receive audio, video or data, even if the
          // publisher is sending them, set the 'offer_audio', 'offer_video' or
          // 'offer_data' properties to false (they're true by default), e.g.:
          // 		subscribe["offer_video"] = false;
          // For example, if the publisher is VP8 and this is Safari, let's avoid video

          if (_this.Janus.webRTCAdapter.browserDetails.browser === "safari" && (video === "vp9" || video === "vp8" && !_this.Janus.safariVp8)) {
            if (video) video = video.toUpperCase();
            console.log("Publisher is using " + video + ", but Safari doesn't support it: disabling video");
            subscribe["offer_video"] = false;
          }

          remoteFeed.videoCodec = video;
          remoteFeed.send({
            message: subscribe
          });
        },
        error: function error(_error) {
          _this.Janus.error("-- Error attaching plugin...", _error);

          console.log("Error attaching plugin... " + _error);
        },
        onmessage: function onmessage(msg, jsep) {
          _this.Janus.debug(" ::: Got a message (subscriber) :::", msg);

          var event = msg["videoroom"];

          _this.Janus.debug("Event: " + event);

          if (msg["error"]) {
            console.log(msg["error"]);
          } else if (event) {
            if (event === "attached") {
              // Subscriber created and attached
              for (var i = 1; i < 6; i++) {
                if (!_this.feeds[i]) {
                  _this.feeds[i] = remoteFeed;
                  remoteFeed.rfindex = i;
                  break;
                }
              }

              remoteFeed.rfid = msg["id"];
              remoteFeed.rfdisplay = msg["display"];
              console.log(remoteFeed);

              _this.Janus.log("Successfully attached to feed " + remoteFeed.rfid + " (" + remoteFeed.rfdisplay + ") in room " + msg["room"]); //   was being put in as html


              console.log(remoteFeed.rfdisplay);
            } else {// What has just happened?
            }
          }

          if (jsep) {
            _this.Janus.debug("Handling SDP as well...", jsep); // Answer and attach


            remoteFeed.createAnswer({
              jsep: jsep,
              // Add data:true here if you want to subscribe to datachannels as well
              // (obviously only works if the publisher offered them in the first place)
              media: {
                audioSend: false,
                videoSend: false
              },
              // We want recvonly audio/video
              success: function success(jsep) {
                _this.Janus.debug("Got SDP!", jsep);

                var body = {
                  request: "start",
                  room: _this.webinarRoomId
                };
                remoteFeed.send({
                  message: body,
                  jsep: jsep
                });
              },
              error: function error(_error2) {
                _this.Janus.error("WebRTC error:", _error2);

                console.log("WebRTC error... " + _error2.message);
              }
            });
          }
        },
        iceState: function iceState(state) {
          _this.Janus.log("ICE state of this WebRTC PeerConnection (feed #" + remoteFeed.rfindex + ") changed to " + state);
        },
        webrtcState: function webrtcState(on) {
          _this.Janus.log("Xaylo Janus says this WebRTC PeerConnection (feed #" + remoteFeed.rfindex + ") is " + (on ? "up" : "down") + " now");
        },
        onlocalstream: function onlocalstream(stream) {// The subscriber stream is recvonly, we don't expect anything here
        },
        onremotestream: function onremotestream(stream) {
          _this.Janus.debug("Remote feed #" + remoteFeed.rfindex + ", stream:", stream);

          console.log("Checking the remote feed isnt a screen", remoteFeed.rfdisplay);

          if (remoteFeed.rfdisplay.includes("***SCREEN***")) {
            _this.screenShare = true;

            _this.$refs.remoteVideoElement.classList.add("screen-active");

            _this.$refs.remoteScreenVideoElement.classList.remove("hidden");

            _this.$refs.remoteScreenVideoElement.srcObject = stream;
          } else {
            _this.screenShare = false;
            _this.remoteStream = stream;
            _this.$refs.remoteVideoElement.srcObject = stream;
          }

          var videoTracks = stream.getVideoTracks();

          if (!videoTracks || videoTracks.length === 0) {// No remote video
            // Lets hide the main remote window?
            // Display no remote video but there is audio?
          } else {// Show the remote video
            }
        },
        oncleanup: function oncleanup() {
          _this.Janus.log(" ::: Got a cleanup notification (remote feed " + id + ") :::"); // Hide this remote video?


          if (remoteFeed.spinner) ;
          remoteFeed.spinner = null; // If showing bitrate and res reset it here

          if (_this.bitrateTimer[remoteFeed.rfindex]) clearInterval(_this.bitrateTimer[remoteFeed.rfindex]);
          _this.bitrateTimer[remoteFeed.rfindex] = null;
          remoteFeed.simulcastStarted = false;
        }
      });
    }
  }
};

/***/ }),

/***/ "./src/mixins/janus/setup.js":
/*!***********************************!*\
  !*** ./src/mixins/janus/setup.js ***!
  \***********************************/
/*! exports provided: janusSetupMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "janusSetupMixin", function() { return janusSetupMixin; });
var _this = undefined;

var janusSetupMixin = {
  data: function data() {
    return {
      room: this.roomData,
      server: this.serverUrl,
      janus: null,
      xayloConnection: null,
      webinarRoomId: parseInt(this.roomData.id),
      rtcState: null,
      // 
      userName: null,
      myJanusId: null,
      myPrivateId: null,
      // 
      screenUserName: null,
      myScreenId: null,
      myPrivateScreenId: null,
      // 
      published: false,
      role: "publisher",
      // 
      feeds: []
    };
  },
  computed: {
    currentUser: function currentUser() {
      return {
        userName: this.userData.email,
        screenUserName: "***SCREEN***" + this.userData.email
      };
    },
    opaqueId: function opaqueId() {
      return "videoroom-" + this.Janus.randomString(12);
    },
    screenOpaqueId: function screenOpaqueId() {
      return "screen-" + this.Janus.randomString(12);
    }
  },
  watch: {
    Janus: function Janus(val, oldVal) {
      if (val != null) {
        _this.setupJanus();
      }
    }
  },
  methods: {
    processFeeds: function processFeeds(list) {
      this.Janus.debug("Got a list of available publishers/feeds:", list);

      for (var f in list) {
        var id = list[f]["id"];
        var display = list[f]["display"];
        var audio = list[f]["audio_codec"];
        var video = list[f]["video_codec"];
        this.Janus.debug("  >> [" + id + "] " + display + " (audio: " + audio + ", video: " + video + ")");
        console.log("incoming feed from - " + display + " gonna add it now");

        if (display != this.currentUser.screenUserName) {
          this.newRemoteFeed(id, display, audio, video);
        }
      }
    },
    checkRoom: function checkRoom() {
      var _this2 = this;

      var exists = {
        request: "exists",
        room: this.webinarRoomId
      };
      var create = {
        request: "create",
        room: this.webinarRoomId
      };
      this.xayloConnection.send({
        message: exists,
        success: function success(result) {
          console.log("checking if room exists: ", result);

          if (result.exists) {
            //   good stuff
            _this2.registerUsername();

            return true;
          } else {
            _this2.xayloConnection.send({
              message: create,
              success: function success(result) {
                _this2.checkRoom();
              }
            });
          }
        }
      });
    },
    setupJanus: function setupJanus() {
      var _this3 = this;

      this.Janus.init({
        debug: "all",
        callback: function callback() {
          // Make sure the browser supports WebRTC
          if (!_this3.Janus.isWebrtcSupported()) {
            console.log("WebRTC is not supported, please use Chrome"); // console.log("No WebRTC support... ");

            return;
          }

          _this3.startJanus();
        }
      });
    },
    startJanus: function startJanus() {
      var _this4 = this;

      this.janus = new this.Janus({
        server: this.server,
        success: function success() {
          // Attach to VideoRoom plugin
          _this4.janus.attach({
            plugin: "janus.plugin.videoroom",
            opaqueId: _this4.opaqueId,
            success: function success(pluginHandle) {
              _this4.xayloConnection = pluginHandle;

              _this4.checkRoom();
            },
            error: function error(_error) {
              console.log("Error attaching plugin... " + _error);
            },
            iceState: function iceState(state) {
              _this4.Janus.log("ICE state changed to " + state);
            },
            mediaState: function mediaState(medium, on) {
              _this4.Janus.log("Xaylo Janus " + (on ? "started" : "stopped") + " receiving our " + medium);
            },
            webrtcState: function webrtcState(on) {
              _this4.Janus.log("Xaylo Janus says our WebRTC PeerConnection is " + (on ? "up" : "down") + " now");

              _this4.rtcState = on;

              if (on) {
                _this4.xayloConnection.send({
                  message: {
                    request: "configure",
                    bitrate: 0
                  }
                });
              }
            },
            onmessage: function onmessage(msg, jsep) {
              var event = msg["videoroom"];

              if (event) {
                if (event === "joined") {
                  _this4.myId = msg["id"];
                  _this4.myPrivateId = msg["private_id"];

                  _this4.publishOwnFeed(true); // Any new feed to attach to?


                  if (msg["publishers"]) {
                    var list = msg["publishers"];

                    _this4.processFeeds(list);
                  }
                } else if (event === "destroyed") {
                  // The room has been destroyed
                  _this4.Janus.warn("The room has been destroyed!");

                  console.log("The room has been destroyed", function () {// window.location.reload();
                  });
                } else if (event === "event") {
                  // Any new feed to attach to?
                  if (msg["publishers"]) {
                    var list = msg["publishers"];

                    _this4.processFeeds(list);
                  } else if (msg["leaving"]) {
                    // One of the publishers has gone away?
                    var leaving = msg["leaving"];

                    _this4.Janus.log("Publisher left: " + leaving);

                    var remoteFeed = null;

                    for (var i = 1; i < 6; i++) {
                      if (_this4.feeds[i] && _this4.feeds[i].rfid == leaving) {
                        remoteFeed = _this4.feeds[i];
                        break;
                      }
                    }

                    if (remoteFeed != null) {
                      _this4.Janus.debug("Feed " + remoteFeed.rfid + " (" + remoteFeed.rfdisplay + ") has left the room, detaching");

                      _this4.feeds[remoteFeed.rfindex] = null;
                      remoteFeed.detach();
                    }
                  } else if (msg["unpublished"]) {
                    // One of the publishers has unpublished?
                    var unpublished = msg["unpublished"];

                    _this4.Janus.log("Publisher left: " + unpublished);

                    if (unpublished === "ok") {
                      // That's us
                      _this4.xayloConnection.hangup();

                      return;
                    }

                    var remoteFeed = null;

                    for (var i = 1; i < 6; i++) {
                      if (_this4.feeds[i] && _this4.feeds[i].rfid == unpublished) {
                        remoteFeed = _this4.feeds[i];
                        break;
                      }
                    }

                    if (remoteFeed != null) {
                      _this4.Janus.debug("Feed " + remoteFeed.rfid + " (" + remoteFeed.rfdisplay + ") has left the room, detaching");

                      console.log("other persons screen is leaving");

                      if (remoteFeed.rfdisplay.includes("***SCREEN***")) {
                        _this4.screenShare = false;

                        _this4.$refs.remoteVideoElement.classList.remove("screen-active");

                        _this4.$refs.remoteScreenVideoElement.classList.add("hidden");
                      }

                      _this4.feeds[remoteFeed.rfindex] = null;
                      remoteFeed.detach();
                    }
                  } else if (msg["error"]) {
                    if (msg["error_code"] === 426) {
                      // This is a "no such room" error: give a more meaningful description
                      console.log("no such room");
                    } else {
                      console.log(msg["error"]);
                    }
                  }
                }
              }

              if (jsep) {
                _this4.Janus.debug("Handling SDP as well...", jsep);

                _this4.xayloConnection.handleRemoteJsep({
                  jsep: jsep
                }); // Check if any of the media we wanted to publish has
                // been rejected (e.g., wrong or unsupported codec)


                var audio = msg["audio_codec"];

                if (_this4.localStream && _this4.localStream.getAudioTracks() && _this4.localStream.getAudioTracks().length > 0 && !audio) {
                  // Audio has been rejected
                  console.log("Our audio stream has been rejected, viewers won't hear us");
                }

                var video = msg["video_codec"];

                if (_this4.localStream && _this4.localStream.getVideoTracks() && _this4.localStream.getVideoTracks().length > 0 && !video) {
                  // Video has been rejected
                  console.log("Our video stream has been rejected, viewers won't see us"); // Hide the webcam video
                }
              }
            },
            onlocalstream: function onlocalstream(stream) {
              _this4.Janus.debug(" ::: Got a local stream :::", stream);

              _this4.localStream = stream;
              _this4.$refs.localVideoElement.srcObject = stream;
              _this4.$refs.localVideoElement.muted = "muted"; //   this.Janus.attachMediaStream($("#myvideo").get(0), stream);

              _this4.drawLocalVideo();

              if (_this4.xayloConnection.webrtcStuff.pc.iceConnectionState !== "completed" && _this4.xayloConnection.webrtcStuff.pc.iceConnectionState !== "connected") {
                console.log("connecting local video"); // show a spinner or something
              }

              var videoTracks = stream.getVideoTracks();

              if (!videoTracks || videoTracks.length === 0) {// No webcam
              }
            },
            onremotestream: function onremotestream(stream) {// The publisher stream is sendonly, we don't expect anything here
            },
            oncleanup: function oncleanup() {
              _this4.Janus.log(" ::: Got a cleanup notification: we are unpublished now :::");

              _this4.localStream = null;
              _this4.published = false;
            }
          });
        },
        error: function error(_error2) {
          _this4.Janus.error(_error2);

          console.log(_error2, function () {
            window.location.reload();
          });
        },
        destroyed: function destroyed() {
          //   window.location.reload();
          _this4.unpublishOwnFeed();
        }
      });
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    if (this.Janus) {
      this.setupJanus();
    }

    window.addEventListener("beforeunload", function () {
      _this5.streamingLocally = false;

      _this5.updateRoomStreaming();

      _this5.janus.destroy();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.streamingLocally = false;
    this.updateRoomStreaming();
    this.janus.destroy();
  }
};

/***/ }),

/***/ "./src/mixins/screen.js":
/*!******************************!*\
  !*** ./src/mixins/screen.js ***!
  \******************************/
/*! exports provided: screenMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenMixin", function() { return screenMixin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var screenMixin = {
  data: function data() {
    return {
      screenVideoElement: null,
      screenShare: null,
      screenSources: [],
      localScreenShare: false,
      remoteScreenShare: false,
      selectedScreenSource: null,
      screenButtonBusy: false,
      localScreenStream: null,
      // 
      screenCaptureSettings: {
        cursor: "never" // always, motion, never

      }
    };
  },
  computed: {
    miniScreen: function miniScreen() {
      return this.$refs.miniScreen;
    }
  },
  methods: {
    endScreenShare: function endScreenShare() {
      var _this = this;

      this.screenButtonBusy = true;
      var unpublish = {
        request: "unpublish"
      };
      this.xayloScreenConnection.send({
        message: unpublish,
        success: function success() {
          _this.localScreenShare = false;
          _this.screenButtonBusy = false;
          _this.localScreenStream = null;
          _this.miniScreen.srcObject = null;

          _this.miniScreen.classList.add('hidden');

          _this.screenShare = null;
          _this.screenVideoElement = null;
        }
      });
    },
    registerScreenUsername: function registerScreenUsername() {
      // Create a new room
      this.Janus.log("Screen sharing session created: " + this.webinarRoomId);
      var register = {
        request: "join",
        room: this.webinarRoomId,
        ptype: "publisher",
        display: this.currentUser.screenUserName,
        quality: 0
      };
      this.screenUserName = this.currentUser.screenUserName;
      this.xayloConnection.send({
        message: register
      });
    },
    enableScreenShare: function enableScreenShare() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var displayMediaOptions, stream;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                displayMediaOptions = {
                  video: {
                    cursor: _this2.screenCaptureSettings.cursor
                  },
                  audio: false
                };
                _context.next = 3;
                return navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

              case 3:
                stream = _context.sent;

                _this2.selectScreenSource(stream);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    selectScreenSource: function selectScreenSource(stream) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.screenShare = true;
                _this3.localScreenShare = true;

                _this3.publishScreen(stream);

                _this3.screenSources = [];

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    publishScreen: function publishScreen(stream) {
      var _this4 = this;

      this.registerScreenUsername();
      this.janus.attach({
        plugin: "janus.plugin.videoroom",
        opaqueId: this.screenOpaqueId,
        success: function success(pluginHandle) {
          _this4.xayloScreenConnection = pluginHandle;
          var subscribe = {
            request: "join",
            room: _this4.webinarRoomId,
            ptype: "publisher",
            private_id: _this4.myPrivateScreenId,
            display: _this4.currentUser.screenUserName,
            quality: 0
          };

          _this4.xayloScreenConnection.send({
            message: subscribe
          });
        },
        error: function error(_error) {
          _this4.Janus.error("  -- Error attaching plugin...", _error);

          console.log("Error attaching plugin... " + _error);
        },
        onmessage: function onmessage(msg, jsep) {
          _this4.Janus.debug(" ::: Got a message (publisher) :::", msg);

          var event = msg["videoroom"];

          _this4.Janus.debug("Event: " + event);

          if (event) {
            if (event === "joined") {
              _this4.myscreenid = msg["id"];
              _this4.myPrivateScreenId = msg["private_id"];

              _this4.Janus.log("Successfully joined room " + msg["room"] + " with ID " + _this4.myScreenId);

              if (_this4.role === "publisher") {
                _this4.xayloScreenConnection.createOffer({
                  stream: stream,
                  media: {
                    video: true,
                    audioSend: true,
                    videoRecv: false
                  },
                  // Screen sharing Publishers are sendonly
                  success: function success(jsep) {
                    _this4.Janus.debug("Got publisher SDP!", jsep);

                    var publish = {
                      request: "configure",
                      audio: true,
                      video: true
                    };

                    _this4.xayloScreenConnection.send({
                      message: publish,
                      jsep: jsep
                    });
                  },
                  error: function error(_error2) {
                    _this4.Janus.error("WebRTC error:", _error2);

                    console.log("WebRTC error... " + _error2.message);
                  }
                });
              }
            }
          }

          if (jsep) {
            _this4.Janus.debug("Handling SDP as well...", jsep);

            _this4.xayloScreenConnection.handleRemoteJsep({
              jsep: jsep
            });
          }
        },
        onlocalstream: function onlocalstream(stream) {
          _this4.Janus.debug(" ::: Got a local screen stream :::", stream);

          _this4.localScreenStream = stream;
          _this4.miniScreen.srcObject = stream;

          _this4.miniScreen.classList.remove("hidden");

          _this4.screenVideoElement = document.createElement("video");
          _this4.screenVideoElement.srcObject = stream;
          _this4.screenVideoElement.autoplay = true;

          if (_this4.xayloConnection.webrtcStuff.pc.iceConnectionState !== "completed" && _this4.xayloConnection.webrtcStuff.pc.iceConnectionState !== "connected") {
            console.log("connecting local video"); // show a spinner or something
          }

          var videoTracks = stream.getVideoTracks();

          if (!videoTracks || videoTracks.length === 0) {// No webcam
          }
        },
        webrtcState: function webrtcState(on) {
          // this.Janus.log(
          //   "Xaylo Janus says this WebRTC PeerConnection (feed #" +
          //     remoteFeed.rfindex +
          //     ") is " +
          //     (on ? "up" : "down") +
          //     " now"
          // );
          if (on) {
            _this4.xayloScreenConnection.send({
              message: {
                request: "configure",
                bitrate: 0
              }
            });
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./src/mixins/settings.js":
/*!********************************!*\
  !*** ./src/mixins/settings.js ***!
  \********************************/
/*! exports provided: settingsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsMixin", function() { return settingsMixin; });
var settingsMixin = {
  data: function data() {
    return {
      showSettings: false
    };
  }
};

/***/ }),

/***/ "./src/mixins/streaming.js":
/*!*********************************!*\
  !*** ./src/mixins/streaming.js ***!
  \*********************************/
/*! exports provided: streamingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "streamingMixin", function() { return streamingMixin; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var streamingMixin = {
  data: function data() {
    return {
      streamingCountdown: 6,
      liveIndicator: false,
      // 
      webSocket: null,
      streamingLocally: false,
      canvasStream: null,
      audioElement: null,
      combinedStreams: null,
      mediaRecorder: null,
      mediaRecorderOptions: {
        mimeType: "video/webm;codecs=h264,opus,vp9",
        videoBitsPerSecond: 3 * 1024 * 1024
      }
    };
  },
  computed: {
    uniqueStreamUrl: function uniqueStreamUrl() {
      return "wss://broadcast.swandoola.com/wss/" + this.webinarRoomId;
    }
  },
  methods: {
    checkIfStreaming: function checkIfStreaming() {
      var _this = this;

      setInterval(function () {
        axios.get("/admin/media/" + _this.room.id + "/is-streaming").then(function (_ref) {
          var data = _ref.data;

          if (data.streaming == "true") {
            _this.room.streaming = true;
          } else {
            _this.room.streaming = false;
          }
        });
      }, 5000);
    },
    updateRoomStreaming: function updateRoomStreaming() {
      axios.post("/admin/media/" + this.room.id, {
        streaming: this.streamingLocally ? 1 : 0
      }).then(function (_ref2) {// console.log(data);

        var data = _ref2.data;
      });
    },
    beginCountdown: function beginCountdown() {
      var _this2 = this;

      var _int = setInterval(function () {
        if (_this2.streamingCountdown) {
          _this2.streamingCountdown--;
        } else {
          _this2.liveIndicator = true;
          clearInterval(_int);
        }
      }, 1000);
    },
    startBroadcasting: function startBroadcasting() {
      // update the room.streaming thing
      this.streamingLocally = true;
      this.room.streaming = true;
      this.updateRoomStreaming();
      this.startStreaming();
      this.beginCountdown();
    },
    stopBroadcasting: function stopBroadcasting() {
      // update the room.streaming thing
      this.liveIndicator = false;
      this.streamingLocally = false;
      this.room.streaming = false;
      this.updateRoomStreaming();
      this.startStreaming();
      this.unpublishOwnFeed();
    },
    setupWebSocket: function setupWebSocket() {
      this.webSocket = new WebSocket(this.uniqueStreamUrl);
    },
    startStreaming: function startStreaming() {
      if (this.webSocket) {
        this.stopStreamViaWebSocket();
      } else {
        this.startStreamViaWebSocket();
      }
    },
    startStreamViaWebSocket: function startStreamViaWebSocket() {
      var _this3 = this;

      this.setupWebSocket();

      if (this.webSocket) {
        this.webSocket.addEventListener("open", function (e) {
          console.log("WebSocket is now open Open:", e);
          _this3.canvasStream = _this3.$refs.streamingCanvas.captureStream(30);

          if (_this3.localStream && _this3.remoteStream) {
            var audioContext = new AudioContext();
            var audioIn_01 = audioContext.createMediaStreamSource(_this3.localStream);
            var audioIn_02 = audioContext.createMediaStreamSource(_this3.remoteStream);
            var dest = audioContext.createMediaStreamDestination();
            audioIn_01.connect(dest);
            audioIn_02.connect(dest);
            _this3.combinedStreams = new MediaStream([dest.stream.getAudioTracks()[0]].concat(_toConsumableArray(_this3.canvasStream.getTracks())));
          } else if (_this3.localStream && !_this3.remoteStream) {
            _this3.combinedStreams = new MediaStream([_this3.localStream.getAudioTracks()[0]].concat(_toConsumableArray(_this3.canvasStream.getTracks())));
          } else {
            _this3.combinedStreams = new MediaStream(_this3.canvasStream);
          }

          _this3.$refs.previewStreamElement.srcObject = _this3.canvasStream;

          _this3.$refs.previewStreamElement.classList.remove("hidden");

          _this3.mediaRecorder = new MediaRecorder(_this3.combinedStreams, _this3.mediaRecorderOptions);

          _this3.mediaRecorder.addEventListener("dataavailable", function (e) {
            console.log("Sending data through the websocket");

            _this3.webSocket.send(e.data);
          });

          _this3.mediaRecorder.addEventListener("stop", function (e) {
            console.log("Stopped sending data, closing websocket");

            _this3.webSocket.close.bind(_this3.webSocket);

            _this3.mediaRecorder = null;
          });

          _this3.mediaRecorder.start(1000);
        });
        this.webSocket.addEventListener("close", function (e) {
          console.log("WebSocket is now closed:", e);

          if (_this3.mediaRecorder) {
            _this3.mediaRecorder.stop();
          }

          _this3.webSocket = null;
        });
      } else {
        console.log("Web socket doesn't seem to be connected!");
      }
    },
    stopStreamViaWebSocket: function stopStreamViaWebSocket() {
      var _this4 = this;

      this.$refs.previewStreamElement.classList.add("hidden");
      this.mediaRecorder.stop();
      this.$nextTick(function () {
        _this4.screenDevice = null;
        _this4.cameraDevice = null;
        _this4.audioDevice = null;
        _this4.pictureInPicture = false;
        _this4.canvasStream = null;
        _this4.audioEnabled = false;
        _this4.audioStream = null;
        _this4.audioElement = null;
        _this4.selectedCameraId = null;
      });
    }
  },
  mounted: function mounted() {
    if (this.streamEnabled) {
      this.checkIfStreaming();
    }
  }
};

/***/ }),

/***/ "./src/mixins/video.js":
/*!*****************************!*\
  !*** ./src/mixins/video.js ***!
  \*****************************/
/*! exports provided: videoMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoMixin", function() { return videoMixin; });
var videoMixin = {
  data: function data() {
    return {
      videoEnabled: true
    };
  },
  methods: {
    toggleVideo: function toggleVideo() {
      this.videoEnabled = !this.videoEnabled;
      this.Janus.log((this.videoEnabled ? "Enabling" : "Disabling") + " local video stream...");

      if (this.videoEnabled) {
        this.$refs.localVideoElement.classList.remove('hidden');
      } else {
        this.$refs.localVideoElement.classList.add('hidden');
      }

      this.xayloConnection.send({
        message: {
          request: "configure",
          video: this.videoEnabled
        }
      });
    }
  }
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaythegeek/code/packages/janus-video-room/src/index.js */"./src/index.js");


/***/ })

/******/ });
});