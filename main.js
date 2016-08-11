/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	window.REM_UNIT = 75; // NEED CONFIG IN EACH PROJECT
	window.CDN_URL = __webpack_require__(4);
	
	console.log(window.REM_UNIT, window.devicePixelRatio);
	
	addEventListener('DOMContentLoaded', function () {
	
	  var opt = __webpack_require__(5);
	  var app = new Vue(opt).$mount('#app');
	
	  window.app = app;
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"logo.png": "http://gw.alicdn.com/tfscom/TB1.796KFXXXXbHXpXX7WcCNVXX-400-400.png",
		"one.png": "http://gw.alicdn.com/tfscom/TB1vzG3KFXXXXXuXFXX_g.pNVXX-400-300.png",
		"taobao.jpg": "http://gw.alicdn.com/tfscom/TB1ki5YKFXXXXbrXFXXuLfz_XXX-1125-422.jpg"
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)
	module.exports = __webpack_require__(11)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(18)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/DaisyCream/test/src/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-77acec0c&file=main.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-77acec0c&file=main.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  background-color: #f18f3e;\n  height: 100%;\n}\n\nbody {\n  width: 10rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-image: url(" + __webpack_require__(9) + ");\n  background-size: 10rem 3.76rem;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n#app {\n  line-height: 32px;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: 3.546667rem 3.546667rem;\n}\n\n[data-dpr=\"1\"] #app {\n  font-size: 11px;\n}\n\n[data-dpr=\"2\"] #app {\n  font-size: 22px;\n}\n\n[data-dpr=\"3\"] #app {\n  font-size: 33px;\n}\n\n#app h1 {\n  line-height: 2;\n  text-align: center;\n  margin: 1em 2em;\n}\n\n[data-dpr=\"1\"] #app h1 {\n  font-size: 16px;\n}\n\n[data-dpr=\"2\"] #app h1 {\n  font-size: 32px;\n}\n\n[data-dpr=\"3\"] #app h1 {\n  font-size: 48px;\n}\n\n.test-img {\n  display: block;\n  margin: auto;\n  width: 1.866667rem;\n  height: 1.866667rem;\n}", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = (function () {
	  var url = window.CDN_URL["taobao.jpg"];
	  return /data:image\/.*;base64/.test(url) ? url : lib.img({q: ["q90", "q75"], sharpen: "s150"}).getNewUrl(url);
	}) ();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <style>
	//   html {
	//     background-color: #f18f3e;
	//     height: 100%;
	//   }
	//   body {
	//     width: 750px;
	//     display: flex;
	//     background-position: top left;
	//     background-repeat: no-repeat;
	//     background-image: url(../images/taobao.jpg);
	//     background-size: 750px 282px;
	//     height: 100%;
	//     justify-content: center;
	//     flex-direction: column;
	//   }
	//   #app {
	//     font-size: 22px; /*px*/
	//     line-height: 32px; /*no*/
	//     background-repeat: no-repeat;
	//     background-position: top center;
	//     background-size: 266px 266px;
	//   }
	//   #app h1 {
	//     font-size: 32px; /*px*/
	//     line-height: 2;
	//     text-align: center;
	//     margin: 1em 2em;
	//   }
	//   .test-img {
	//     display: block;
	//     margin: auto;
	//     width: 140px;
	//     height: 140px;
	//   }
	// </style>
	
	// <template>
	//   <div>
	//     <h1>This is a page via <code>just-vue</code> template!</h1>
	//     <img class="test-img" src="../images/one.png">
	//     <img class="test-img" v-src="testUrl" size="cover">
	//     <img class="test-img" v-src.literal="../images/one.png" size="cover">
	//     <!-- size="(auto)|200x200|cover" -->
	//     <!-- @todo <img data-src="../images/one.png"> -->
	//     <div class="container">
	//       <t-foo baz="qux">powered by {{name}}</t-foo>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	var cdn = __webpack_require__(12);
	module.exports = {
	  components: {
	    't-foo': __webpack_require__(13)
	  },
	  data: {
	    name: 'just-vue',
	    testUrl: '../images/one.png'
	  },
	  computed: {},
	  methods: {
	    loadData: function loadData(data) {
	      this.name = data.name;
	    }
	  },
	  created: function created() {
	    this.$on('append-name', function (data) {
	      this.name += data;
	    });
	  },
	  ready: function ready() {
	    this.$el.style.backgroundImage = 'url(' + cdn('../images/logo.png') + ')';
	  }
	};
	// </script>

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	;(function (win, lib) {
	
	  // Get file basename, borrowed from `browserify`
	  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	  function splitPath(filename) {
	    return splitPathRe.exec(filename).slice(1);
	  }
	  function basename(path, ext) {
	    var f = splitPath(path)[2];
	    if (ext && f.substr(-1 * ext.length) === ext) {
	      f = f.substr(0, f.length - ext.length);
	    }
	    return f;
	  }
	
	  lib.cdnurl = function (path, pathMap) {
	    var fileName = basename(path);
	    pathMap = pathMap || win.CDN_URL;
	    if (pathMap && pathMap[fileName]) {
	      return pathMap[fileName];
	    } else {
	      return path;
	    }
	  };
	})(window, window['lib'] || (window['lib'] = {}));
	
	module.exports = lib.cdnurl;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	module.exports = __webpack_require__(16)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(17)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/DaisyCream/test/components/foo.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-31d36b7a&file=foo.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./foo.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-31d36b7a&file=foo.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./foo.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "p[_v-31d36b7a] {\n  display: block;\n  text-align: center;\n}\n\np .qux[_v-31d36b7a] {\n  margin: 1em 2em;\n}", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <style scoped>
	//   p {display: block; text-align: center;}
	//   p .qux {margin: 1em 2em;}
	// </style>
	
	// <template>
	//   <p :class="baz" @click="changeName">
	//     <slot></slot>
	//   </p>
	// </template>
	
	// <script>
	var cdn = __webpack_require__(12);
	module.exports = {
	  props: ['baz'],
	  components: {},
	  data: function data() {
	    return {};
	  },
	  methods: {
	    changeName: function changeName(e) {
	      this.$dispatch('append-name', ', Amfe');
	    }
	  },
	  ready: function ready() {}
	};
	// </script>

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<p :class=\"baz\" @click=\"changeName\" _v-31d36b7a=\"\">\n    <slot _v-31d36b7a=\"\"></slot>\n  </p>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\n    <h1>This is a page via <code>just-vue</code> template!</h1>\n    <img class=\"test-img\" src=\"" + __webpack_require__(19) + "\">\n    <img class=\"test-img\" v-src=\"testUrl\" size=\"cover\">\n    <img class=\"test-img\" v-src.literal=\"../images/one.png\" size=\"cover\">\n    <!-- size=\"(auto)|200x200|cover\" -->\n    <!-- @todo <img data-src=\"../images/one.png\"> -->\n    <div class=\"container\">\n      <t-foo baz=\"qux\">powered by {{name}}</t-foo>\n    </div>\n  </div>";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = (function () {
	  var url = window.CDN_URL["one.png"];
	  return /data:image\/.*;base64/.test(url) ? url : lib.img({q: ["q90", "q75"], sharpen: "s150"}).getNewUrl(url);
	}) ();

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map