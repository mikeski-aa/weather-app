/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/cleardaysky.jpg */ "./src/img/cleardaysky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    /* background-image:url(img/clearnightsky.jpg); */
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    opacity: 1;
}
.mainItems{
    display: flex;
}
.mainContent { 
    width: 650px;
    height: 50vh;
    border: 1px solid black;
    display: grid;
    grid-template-rows: 1fr 9fr;
    margin-right: 2fr;
    
}
.pageTitle{
    writing-mode: vertical-lr;
    text-orientation: upright;
    font-size: 2rem;
    padding: 0px;
    margin: 0px;
}

.sideBar {
    display: flex;
    align-items: center;
}

.expandButton{
    display: flex;
    justify-content: center;
    align-items: center;
    height:36px;
    width: fit-content;
    border-radius: 50%;
    border: 0px solid white;
}
.containerDiv {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid black;
}

.locationDetails, .currentDetails {
    display: grid;
    border: 1px solid black;
}

.locationDetails>div, .currentDetails>div {
    display: grid;
    border: 1px solid black;
}

.swal-overlay {
    background-color: rgba(111, 175, 9, 0.568);
}

.swal-modal {
    border: 5px solid red;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iDAAiD;IACjD,yDAA0C;IAC1C,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;;AAErB;AACA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["body {\n    /* background-image:url(img/clearnightsky.jpg); */\n    background-image: url(img/cleardaysky.jpg);\n    opacity: 1;\n}\n.mainItems{\n    display: flex;\n}\n.mainContent { \n    width: 650px;\n    height: 50vh;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    margin-right: 2fr;\n    \n}\n.pageTitle{\n    writing-mode: vertical-lr;\n    text-orientation: upright;\n    font-size: 2rem;\n    padding: 0px;\n    margin: 0px;\n}\n\n.sideBar {\n    display: flex;\n    align-items: center;\n}\n\n.expandButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height:36px;\n    width: fit-content;\n    border-radius: 50%;\n    border: 0px solid white;\n}\n.containerDiv {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    border: 1px solid black;\n}\n\n.locationDetails, .currentDetails {\n    display: grid;\n    border: 1px solid black;\n}\n\n.locationDetails>div, .currentDetails>div {\n    display: grid;\n    border: 1px solid black;\n}\n\n.swal-overlay {\n    background-color: rgba(111, 175, 9, 0.568);\n}\n\n.swal-modal {\n    border: 5px solid red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _domStuff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff.js */ "./src/modules/domStuff.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);


// async function for checking weather data
// if response.ok != true, a new error will be thrown with a specific
// response code - i.e 403 for forbidden - this provides clearer logging

async function checkFetchWorks(input) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=&q=${input}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const weather = await response.json();
      return weather;
    }
  } catch (error) {
    if (error == 'Error: 400') {
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()('You must enter a valid location name! Error code: 400 Bad Request')
    }
    else sweetalert__WEBPACK_IMPORTED_MODULE_1___default()(`Ooops something went wrong ` + error);
  }
}

//function to call the async function, and append weather data to DOM
function getWeatherData(startTm, input) {
  checkFetchWorks(input)
    .then((weather) => {
      console.log(weather);
      (0,_domStuff_js__WEBPACK_IMPORTED_MODULE_0__.appendDomElements)(weather);
    })
    .then(() => {
      const runTM = Date.now() - startTm;
      console.log(`Duration was: ${runTM}ms`);
    });
}




/***/ }),

/***/ "./src/modules/domStuff.js":
/*!*********************************!*\
  !*** ./src/modules/domStuff.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendDomElements: () => (/* binding */ appendDomElements),
/* harmony export */   doDomStuff: () => (/* binding */ doDomStuff),
/* harmony export */   newDomSkeleton: () => (/* binding */ newDomSkeleton)
/* harmony export */ });
/* harmony import */ var _img_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/searchIcon.svg */ "./src/img/searchIcon.svg");
/* harmony import */ var _img_arrowR_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/arrowR.svg */ "./src/img/arrowR.svg");
/* harmony import */ var _img_arrowL_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/arrowL.svg */ "./src/img/arrowL.svg");
// import search icon from image folder





// element manipulation
const doDomStuff = () => {
  const mainContent = document.querySelector(".mainContent");
  const expandIcon = document.querySelector("#expandIcon");
  const newDiv = document.createElement("div");
  const newPar = document.createElement("p");
  const container = document.querySelector(".containerDiv");
  const locationDetails = document.querySelector(".locationDetails");
  const currentDetails = document.querySelector(".currentDetails");

  // creates a new div in the main container
  const newDivInMain = (divName) => {
    newDiv.classList.add(`${divName}`);
    mainContent.appendChild(newDiv);
  };

  // creates two main divs within the container div
  const newDivInCtnr = (divName) => {
    newDiv.classList.add(`${divName}`);
    container.appendChild(newDiv);
  };
  // create new content divs within specific container
  const newContentLoc = (divName) => {
    newDiv.classList.add(`${divName}`);
    locationDetails.appendChild(newDiv);
  };

  // create new content divs within specific container
  const newContentCur = (divName) => {
    newDiv.classList.add(`${divName}`);
    currentDetails.appendChild(newDiv);
  };

  // create new paragraph box inside target container
  const newParAdd = (targetDiv, divName) => {
    const target = document.querySelector(`.${targetDiv}`);
    newPar.classList.add(`${divName}`);
    target.appendChild(newPar);
  };

  // append data to the dom
  const appendDom = (targetName, text) => {
    const target = document.querySelector(`.${targetName}`);
    target.textContent = text;
  };

  // appends search icon to the search text, creating pseudo button
  // needs to be styled appropriately at later stage
  const appendSearchIcon = () => {
    const searchImg = document.querySelector("#searchIcon");
    const searchIcon = _img_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__;
    searchImg.src = searchIcon;
  };

  // appends search icon to the search text, creating pseudo button
  // needs to be styled appropriately at later stage
  const appendExpandIconRight = () => {
    const expandArrow = _img_arrowR_svg__WEBPACK_IMPORTED_MODULE_1__;
    expandIcon.src = expandArrow;
  };

  const appendExpandIconLeft = () => {
    const expandArrow = _img_arrowL_svg__WEBPACK_IMPORTED_MODULE_2__;
    expandIcon.src = expandArrow;
  };

  return {
    appendExpandIconRight,
    appendExpandIconLeft,
    newParAdd,
    appendDom,
    newDivInMain,
    newDivInCtnr,
    newContentCur,
    newContentLoc,
    appendSearchIcon,
  };
};

// function neatly creates dom skeleton where values obtained from API can be stored
function newDomSkeleton() {
  doDomStuff().newDivInMain("locationName");
  doDomStuff().newDivInMain("containerDiv");
  doDomStuff().newDivInCtnr("locationDetails");
  doDomStuff().newDivInCtnr("currentDetails");

  doDomStuff().newContentLoc("locRegion");
  doDomStuff().newContentLoc("locLat");
  doDomStuff().newContentLoc("locLon");
  doDomStuff().newContentLoc("locTime");

  doDomStuff().newContentCur("currCondition");
  doDomStuff().newContentCur("currTemp");
  doDomStuff().newContentCur("currHum");
  doDomStuff().newContentCur("currFeels");
  doDomStuff().newContentCur("currWind");
  doDomStuff().newContentCur("currGust");

  doDomStuff().newParAdd("locRegion", "locRegionTemp");
  doDomStuff().newParAdd("locRegion", "locRegionVal");
  doDomStuff().newParAdd("locLat", "locLatTemp");
  doDomStuff().newParAdd("locLat", "locLatVal");
  doDomStuff().newParAdd("locLon", "locLonTemp");
  doDomStuff().newParAdd("locLon", "locLonVal");
  doDomStuff().newParAdd("locTime", "locTimeTemp");
  doDomStuff().newParAdd("locTime", "locTimeVal");

  doDomStuff().newParAdd("currCondition", "currConditionTemp");
  doDomStuff().newParAdd("currCondition", "currConditionVal");
  doDomStuff().newParAdd("currTemp", "currTempTemp");
  doDomStuff().newParAdd("currTemp", "currTempVal");
  doDomStuff().newParAdd("currHum", "currHumTemp");
  doDomStuff().newParAdd("currHum", "currHumVal");
  doDomStuff().newParAdd("currFeels", "currFeelsTemp");
  doDomStuff().newParAdd("currFeels", "currFeelsVal");
  doDomStuff().newParAdd("currWind", "currWindTemp");
  doDomStuff().newParAdd("currWind", "currWindVal");
  doDomStuff().newParAdd("currGust", "currGustTemp");
  doDomStuff().newParAdd("currGust", "currGustVal");
  doDomStuff().appendDom("locRegionTemp", "Region:");
  doDomStuff().appendDom("locLatTemp", "Latitude:");
  doDomStuff().appendDom("locLonTemp", "Longitude:");
  doDomStuff().appendDom("locTimeTemp", "Local Time:");
  doDomStuff().appendDom("currConditionTemp", "Conditions:");
  doDomStuff().appendDom("currTempTemp", "Temperature:");
  doDomStuff().appendDom("currHumTemp", "Humidity:");
  doDomStuff().appendDom("currFeelsTemp", "Feels like:");
  doDomStuff().appendDom("currWindTemp", "Wind speed:");
  doDomStuff().appendDom("currGustTemp", "Gust speed:");
}

// function neatly appends the dom elements created from values obtained by the API call
function appendDomElements(weather) {
  if (weather === undefined) {
    console.log("Error location not found");
  } else {
    doDomStuff().appendDom("locationName", weather.location.name);
    doDomStuff().appendDom("locRegionVal", weather.location.region);
    doDomStuff().appendDom("locLatVal", weather.location.lat);
    doDomStuff().appendDom("locLonVal", weather.location.lon);
    doDomStuff().appendDom("locTimeVal", weather.location.localtime);

    doDomStuff().appendDom("currConditionVal", weather.current.condition.text);
    doDomStuff().appendDom("currTempVal", weather.current.temp_c);
    doDomStuff().appendDom("currHumVal", weather.current.humidity);
    doDomStuff().appendDom("currFeelsVal", weather.current.feelslike_c);
    doDomStuff().appendDom("currWindVal", weather.current.wind_kph);
    doDomStuff().appendDom("currGustVal", weather.current.gust_kph);
  }
}




/***/ }),

/***/ "./src/modules/formvalid.js":
/*!**********************************!*\
  !*** ./src/modules/formvalid.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkFormValidation: () => (/* binding */ checkFormValidation)
/* harmony export */ });
// validation statement for form
// regular expression is used to check for special characters, number characters
// spaces are allowed as certain places have spaces in their names, i.e Hong Kong
// this function will also dynamically adjust text content of the error div to give
// error feedback to the user

const checkFormValidation = () => {
  const input = document.querySelector("#searchInput");
  const errorInput = document.querySelector(".errorInput");
  const submitBtn = document.querySelector(".searchButton");
  const re = new RegExp("^[a-zA-Z ]+$");


  input.addEventListener("input", (e) => {
    console.log(input.value.length);

    if (input.validity.valueMissing) {
      input.className = "errorActive";
      errorInput.className = "errorInput Active";
      errorInput.textContent = "Search field cannot be empty!";

    } else if (!input.value.match(re)) {
      console.log("INVALID INPUT");
      input.className = "errorActive";
      errorInput.className = "errorInput Active";
      errorInput.textContent =
        "You must enter a City name, the name cannot include numbers or any special characters!";

    } else {
      input.className = "";
      errorInput.className = "errorInput";
      errorInput.textContent = "";
 
    }
  });

};




/***/ }),

/***/ "./src/modules/searchSubmit.js":
/*!*************************************!*\
  !*** ./src/modules/searchSubmit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submitSearch: () => (/* binding */ submitSearch)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");

// this module takes care of search submission

function submitSearch() {
  const submitBtn = document.querySelector(".searchButton");
  const input = document.querySelector("#searchInput");
  const errorMessage = document.querySelector(".errorInput, .Active");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (errorMessage.className.match("Active") == null) {
      const startTm = Date.now();
      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(startTm, input.value);
      input.value = "";
    } else {
      console.log("cant submit this wrong shit");
    }
  });
}




/***/ }),

/***/ "./src/img/arrowL.svg":
/*!****************************!*\
  !*** ./src/img/arrowL.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "38bf066156a5efb50cf1.svg";

/***/ }),

/***/ "./src/img/arrowR.svg":
/*!****************************!*\
  !*** ./src/img/arrowR.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1476c74a5c452d3a23d2.svg";

/***/ }),

/***/ "./src/img/cleardaysky.jpg":
/*!*********************************!*\
  !*** ./src/img/cleardaysky.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b22a50d964bac88e1ad.jpg";

/***/ }),

/***/ "./src/img/searchIcon.svg":
/*!********************************!*\
  !*** ./src/img/searchIcon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "82d3481840537f55a197.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_domStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domStuff.js */ "./src/modules/domStuff.js");
/* harmony import */ var _modules_formvalid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formvalid.js */ "./src/modules/formvalid.js");
/* harmony import */ var _modules_searchSubmit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/searchSubmit.js */ "./src/modules/searchSubmit.js");








(0,_modules_domStuff_js__WEBPACK_IMPORTED_MODULE_1__.newDomSkeleton)();
(0,_modules_domStuff_js__WEBPACK_IMPORTED_MODULE_1__.doDomStuff)().appendSearchIcon();
(0,_modules_domStuff_js__WEBPACK_IMPORTED_MODULE_1__.doDomStuff)().appendExpandIconRight();
(0,_modules_formvalid_js__WEBPACK_IMPORTED_MODULE_2__.checkFormValidation)();
(0,_modules_searchSubmit_js__WEBPACK_IMPORTED_MODULE_3__.submitSearch)();


// some stuff to get list of weather conditions for later!
async function getConditions() {

  const getJson = await fetch('https://www.weatherapi.com/docs/conditions.json', {mode: 'cors'});
  const json = await getJson.json();
  console.log(json);
  let arr = [];
  for (let x of json) {
    if (x.day === x.night) {
      console.log(x.day);
      arr.push(x.day);
    } else {
      console.log(x.day);
      console.log(x.night);
      arr.push(x.day, x.night);
     
    } 
  }

  console.log(arr)

}
getConditions();

 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvbW9kdWxlcy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL21vZHVsZXMvZm9ybXZhbGlkLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvbW9kdWxlcy9zZWFyY2hTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWcvY2xlYXJkYXlza3kuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOnVybChpbWcvY2xlYXJuaWdodHNreS5qcGcpOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBvcGFjaXR5OiAxO1xufVxuLm1haW5JdGVtc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5Db250ZW50IHsgXG4gICAgd2lkdGg6IDY1MHB4O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDJmcjtcbiAgICBcbn1cbi5wYWdlVGl0bGV7XG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5zaWRlQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leHBhbmRCdXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDozNnB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAwcHggc29saWQgd2hpdGU7XG59XG4uY29udGFpbmVyRGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmxvY2F0aW9uRGV0YWlscywgLmN1cnJlbnREZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubG9jYXRpb25EZXRhaWxzPmRpdiwgLmN1cnJlbnREZXRhaWxzPmRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnN3YWwtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTEsIDE3NSwgOSwgMC41NjgpO1xufVxuXG4uc3dhbC1tb2RhbCB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlEQUFpRDtJQUNqRCx5REFBMEM7SUFDMUMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOnVybChpbWcvY2xlYXJuaWdodHNreS5qcGcpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1nL2NsZWFyZGF5c2t5LmpwZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tYWluSXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tYWluQ29udGVudCB7IFxcbiAgICB3aWR0aDogNjUwcHg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyZnI7XFxuICAgIFxcbn1cXG4ucGFnZVRpdGxle1xcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5zaWRlQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZEJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDozNnB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwcHggc29saWQgd2hpdGU7XFxufVxcbi5jb250YWluZXJEaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubG9jYXRpb25EZXRhaWxzLCAuY3VycmVudERldGFpbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmxvY2F0aW9uRGV0YWlscz5kaXYsIC5jdXJyZW50RGV0YWlscz5kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN3YWwtb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTExLCAxNzUsIDksIDAuNTY4KTtcXG59XFxuXFxuLnN3YWwtbW9kYWwge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5zd2FsPWUoKTp0LnN3YWw9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUobyl7aWYobltvXSlyZXR1cm4gbltvXS5leHBvcnRzO3ZhciByPW5bb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W29dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGUpLHIubD0hMCxyLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIGUubT10LGUuYz1uLGUuZD1mdW5jdGlvbih0LG4sbyl7ZS5vKHQsbil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpvfSl9LGUubj1mdW5jdGlvbih0KXt2YXIgbj10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gZS5kKG4sXCJhXCIsbiksbn0sZS5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxlLnA9XCJcIixlKGUucz04KX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1cInN3YWwtYnV0dG9uXCI7ZS5DTEFTU19OQU1FUz17TU9EQUw6XCJzd2FsLW1vZGFsXCIsT1ZFUkxBWTpcInN3YWwtb3ZlcmxheVwiLFNIT1dfTU9EQUw6XCJzd2FsLW92ZXJsYXktLXNob3ctbW9kYWxcIixNT0RBTF9USVRMRTpcInN3YWwtdGl0bGVcIixNT0RBTF9URVhUOlwic3dhbC10ZXh0XCIsSUNPTjpcInN3YWwtaWNvblwiLElDT05fQ1VTVE9NOlwic3dhbC1pY29uLS1jdXN0b21cIixDT05URU5UOlwic3dhbC1jb250ZW50XCIsRk9PVEVSOlwic3dhbC1mb290ZXJcIixCVVRUT05fQ09OVEFJTkVSOlwic3dhbC1idXR0b24tY29udGFpbmVyXCIsQlVUVE9OOm8sQ09ORklSTV9CVVRUT046bytcIi0tY29uZmlybVwiLENBTkNFTF9CVVRUT046bytcIi0tY2FuY2VsXCIsREFOR0VSX0JVVFRPTjpvK1wiLS1kYW5nZXJcIixCVVRUT05fTE9BRElORzpvK1wiLS1sb2FkaW5nXCIsQlVUVE9OX0xPQURFUjpvK1wiX19sb2FkZXJcIn0sZS5kZWZhdWx0PWUuQ0xBU1NfTkFNRVN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmdldE5vZGU9ZnVuY3Rpb24odCl7dmFyIGU9XCIuXCIrdDtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKX0sZS5zdHJpbmdUb05vZGU9ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9dC50cmltKCksZS5maXJzdENoaWxkfSxlLmluc2VydEFmdGVyPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5uZXh0U2libGluZztlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsbil9LGUucmVtb3ZlTm9kZT1mdW5jdGlvbih0KXt0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodCl9LGUudGhyb3dFcnI9ZnVuY3Rpb24odCl7dGhyb3cgdD10LnJlcGxhY2UoLyArKD89ICkvZyxcIlwiKSxcIlN3ZWV0QWxlcnQ6IFwiKyh0PXQudHJpbSgpKX0sZS5pc1BsYWluT2JqZWN0PWZ1bmN0aW9uKHQpe2lmKFwiW29iamVjdCBPYmplY3RdXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpcmV0dXJuITE7dmFyIGU9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3JldHVybiBudWxsPT09ZXx8ZT09PU9iamVjdC5wcm90b3R5cGV9LGUub3JkaW5hbFN1ZmZpeE9mPWZ1bmN0aW9uKHQpe3ZhciBlPXQlMTAsbj10JTEwMDtyZXR1cm4gMT09PWUmJjExIT09bj90K1wic3RcIjoyPT09ZSYmMTIhPT1uP3QrXCJuZFwiOjM9PT1lJiYxMyE9PW4/dCtcInJkXCI6dCtcInRoXCJ9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyh0KXtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHwoZVtuXT10W25dKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKG4oMjUpKTt2YXIgcj1uKDI2KTtlLm92ZXJsYXlNYXJrdXA9ci5kZWZhdWx0LG8obigyNykpLG8obigyOCkpLG8obigyOSkpO3ZhciBpPW4oMCksYT1pLmRlZmF1bHQuTU9EQUxfVElUTEUscz1pLmRlZmF1bHQuTU9EQUxfVEVYVCxjPWkuZGVmYXVsdC5JQ09OLGw9aS5kZWZhdWx0LkZPT1RFUjtlLmljb25NYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrYysnXCI+PC9kaXY+JyxlLnRpdGxlTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2ErJ1wiPjwvZGl2PlxcbicsZS50ZXh0TWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3MrJ1wiPjwvZGl2PicsZS5mb290ZXJNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrbCsnXCI+PC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSk7ZS5DT05GSVJNX0tFWT1cImNvbmZpcm1cIixlLkNBTkNFTF9LRVk9XCJjYW5jZWxcIjt2YXIgcj17dmlzaWJsZTohMCx0ZXh0Om51bGwsdmFsdWU6bnVsbCxjbGFzc05hbWU6XCJcIixjbG9zZU1vZGFsOiEwfSxpPU9iamVjdC5hc3NpZ24oe30scix7dmlzaWJsZTohMSx0ZXh0OlwiQ2FuY2VsXCIsdmFsdWU6bnVsbH0pLGE9T2JqZWN0LmFzc2lnbih7fSxyLHt0ZXh0OlwiT0tcIix2YWx1ZTohMH0pO2UuZGVmYXVsdEJ1dHRvbkxpc3Q9e2NhbmNlbDppLGNvbmZpcm06YX07dmFyIHM9ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2UgZS5DT05GSVJNX0tFWTpyZXR1cm4gYTtjYXNlIGUuQ0FOQ0VMX0tFWTpyZXR1cm4gaTtkZWZhdWx0OnZhciBuPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxyLHt0ZXh0Om4sdmFsdWU6dH0pfX0sYz1mdW5jdGlvbih0LGUpe3ZhciBuPXModCk7cmV0dXJuITA9PT1lP09iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMH0pOlwic3RyaW5nXCI9PXR5cGVvZiBlP09iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMCx0ZXh0OmV9KTpvLmlzUGxhaW5PYmplY3QoZSk/T2JqZWN0LmFzc2lnbih7dmlzaWJsZTohMH0sbixlKTpPYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITF9KX0sbD1mdW5jdGlvbih0KXtmb3IodmFyIGU9e30sbj0wLG89T2JqZWN0LmtleXModCk7bjxvLmxlbmd0aDtuKyspe3ZhciByPW9bbl0sYT10W3JdLHM9YyhyLGEpO2Vbcl09c31yZXR1cm4gZS5jYW5jZWx8fChlLmNhbmNlbD1pKSxlfSx1PWZ1bmN0aW9uKHQpe3ZhciBuPXt9O3N3aXRjaCh0Lmxlbmd0aCl7Y2FzZSAxOm5bZS5DQU5DRUxfS0VZXT1PYmplY3QuYXNzaWduKHt9LGkse3Zpc2libGU6ITF9KTticmVhaztjYXNlIDI6bltlLkNBTkNFTF9LRVldPWMoZS5DQU5DRUxfS0VZLHRbMF0pLG5bZS5DT05GSVJNX0tFWV09YyhlLkNPTkZJUk1fS0VZLHRbMV0pO2JyZWFrO2RlZmF1bHQ6by50aHJvd0VycihcIkludmFsaWQgbnVtYmVyIG9mICdidXR0b25zJyBpbiBhcnJheSAoXCIrdC5sZW5ndGgrXCIpLlxcbiAgICAgIElmIHlvdSB3YW50IG1vcmUgdGhhbiAyIGJ1dHRvbnMsIHlvdSBuZWVkIHRvIHVzZSBhbiBvYmplY3QhXCIpfXJldHVybiBufTtlLmdldEJ1dHRvbkxpc3RPcHRzPWZ1bmN0aW9uKHQpe3ZhciBuPWUuZGVmYXVsdEJ1dHRvbkxpc3Q7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/bltlLkNPTkZJUk1fS0VZXT1jKGUuQ09ORklSTV9LRVksdCk6QXJyYXkuaXNBcnJheSh0KT9uPXUodCk6by5pc1BsYWluT2JqZWN0KHQpP249bCh0KTohMD09PXQ/bj11KFshMCwhMF0pOiExPT09dD9uPXUoWyExLCExXSk6dm9pZCAwPT09dCYmKG49ZS5kZWZhdWx0QnV0dG9uTGlzdCksbn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigyKSxpPW4oMCksYT1pLmRlZmF1bHQuTU9EQUwscz1pLmRlZmF1bHQuT1ZFUkxBWSxjPW4oMzApLGw9bigzMSksdT1uKDMyKSxmPW4oMzMpO2UuaW5qZWN0RWxJbnRvTW9kYWw9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXROb2RlKGEpLG49by5zdHJpbmdUb05vZGUodCk7cmV0dXJuIGUuYXBwZW5kQ2hpbGQobiksbn07dmFyIGQ9ZnVuY3Rpb24odCl7dC5jbGFzc05hbWU9YSx0LnRleHRDb250ZW50PVwiXCJ9LHA9ZnVuY3Rpb24odCxlKXtkKHQpO3ZhciBuPWUuY2xhc3NOYW1lO24mJnQuY2xhc3NMaXN0LmFkZChuKX07ZS5pbml0TW9kYWxDb250ZW50PWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0Tm9kZShhKTtwKGUsdCksYy5kZWZhdWx0KHQuaWNvbiksbC5pbml0VGl0bGUodC50aXRsZSksbC5pbml0VGV4dCh0LnRleHQpLGYuZGVmYXVsdCh0LmNvbnRlbnQpLHUuZGVmYXVsdCh0LmJ1dHRvbnMsdC5kYW5nZXJNb2RlKX07dmFyIG09ZnVuY3Rpb24oKXt2YXIgdD1vLmdldE5vZGUocyksZT1vLnN0cmluZ1RvTm9kZShyLm1vZGFsTWFya3VwKTt0LmFwcGVuZENoaWxkKGUpfTtlLmRlZmF1bHQ9bX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMykscj17aXNPcGVuOiExLHByb21pc2U6bnVsbCxhY3Rpb25zOnt9LHRpbWVyOm51bGx9LGk9T2JqZWN0LmFzc2lnbih7fSxyKTtlLnJlc2V0U3RhdGU9ZnVuY3Rpb24oKXtpPU9iamVjdC5hc3NpZ24oe30scil9LGUuc2V0QWN0aW9uVmFsdWU9ZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIGEoby5DT05GSVJNX0tFWSx0KTtmb3IodmFyIGUgaW4gdClhKGUsdFtlXSl9O3ZhciBhPWZ1bmN0aW9uKHQsZSl7aS5hY3Rpb25zW3RdfHwoaS5hY3Rpb25zW3RdPXt9KSxPYmplY3QuYXNzaWduKGkuYWN0aW9uc1t0XSx7dmFsdWU6ZX0pfTtlLnNldEFjdGlvbk9wdGlvbnNGb3I9ZnVuY3Rpb24odCxlKXt2YXIgbj0odm9pZCAwPT09ZT97fTplKS5jbG9zZU1vZGFsLG89dm9pZCAwPT09bnx8bjtPYmplY3QuYXNzaWduKGkuYWN0aW9uc1t0XSx7Y2xvc2VNb2RhbDpvfSl9LGUuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMyksaT1uKDApLGE9aS5kZWZhdWx0Lk9WRVJMQVkscz1pLmRlZmF1bHQuU0hPV19NT0RBTCxjPWkuZGVmYXVsdC5CVVRUT04sbD1pLmRlZmF1bHQuQlVUVE9OX0xPQURJTkcsdT1uKDUpO2Uub3Blbk1vZGFsPWZ1bmN0aW9uKCl7by5nZXROb2RlKGEpLmNsYXNzTGlzdC5hZGQocyksdS5kZWZhdWx0LmlzT3Blbj0hMH07dmFyIGY9ZnVuY3Rpb24oKXtvLmdldE5vZGUoYSkuY2xhc3NMaXN0LnJlbW92ZShzKSx1LmRlZmF1bHQuaXNPcGVuPSExfTtlLm9uQWN0aW9uPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PXIuQ0FOQ0VMX0tFWSk7dmFyIGU9dS5kZWZhdWx0LmFjdGlvbnNbdF0sbj1lLnZhbHVlO2lmKCExPT09ZS5jbG9zZU1vZGFsKXt2YXIgaT1jK1wiLS1cIit0O28uZ2V0Tm9kZShpKS5jbGFzc0xpc3QuYWRkKGwpfWVsc2UgZigpO3UuZGVmYXVsdC5wcm9taXNlLnJlc29sdmUobil9LGUuZ2V0U3RhdGU9ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3QuYXNzaWduKHt9LHUuZGVmYXVsdCk7cmV0dXJuIGRlbGV0ZSB0LnByb21pc2UsZGVsZXRlIHQudGltZXIsdH0sZS5zdG9wTG9hZGluZz1mdW5jdGlvbigpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2MpLGU9MDtlPHQubGVuZ3RoO2UrKyl7dFtlXS5jbGFzc0xpc3QucmVtb3ZlKGwpfX19LGZ1bmN0aW9uKHQsZSl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKXx8KDAsZXZhbCkoXCJ0aGlzXCIpfWNhdGNoKHQpe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJihuPXdpbmRvdyl9dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7dC5leHBvcnRzPWUuc3dlZXRBbGVydD1uKDkpfSkuY2FsbChlLG4oNykpfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe3QuZXhwb3J0cz1lLnN3YWw9bigxMCl9KS5jYWxsKGUsbig3KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZuKDExKSxuKDE2KTt2YXIgbz1uKDIzKS5kZWZhdWx0O3QuZXhwb3J0cz1vfSxmdW5jdGlvbih0LGUsbil7dmFyIG89bigxMik7XCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPVtbdC5pLG8sXCJcIl1dKTt2YXIgcj17aW5zZXJ0QXQ6XCJ0b3BcIn07ci50cmFuc2Zvcm09dm9pZCAwO24oMTQpKG8scik7by5sb2NhbHMmJih0LmV4cG9ydHM9by5sb2NhbHMpfSxmdW5jdGlvbih0LGUsbil7ZT10LmV4cG9ydHM9bigxMykodm9pZCAwKSxlLnB1c2goW3QuaSwnLnN3YWwtaWNvbi0tZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQ7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZUVycm9ySWNvbiAuNXM7YW5pbWF0aW9uOmFuaW1hdGVFcnJvckljb24gLjVzfS5zd2FsLWljb24tLWVycm9yX194LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlWE1hcmsgLjVzO2FuaW1hdGlvbjphbmltYXRlWE1hcmsgLjVzfS5zd2FsLWljb24tLWVycm9yX19saW5le3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDo1cHg7d2lkdGg6NDdweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzQ7ZGlzcGxheTpibG9jazt0b3A6MzdweDtib3JkZXItcmFkaXVzOjJweH0uc3dhbC1pY29uLS1lcnJvcl9fbGluZS0tbGVmdHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2xlZnQ6MTdweH0uc3dhbC1pY29uLS1lcnJvcl9fbGluZS0tcmlnaHR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3JpZ2h0OjE2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVFcnJvckljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFuaW1hdGVFcnJvckljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVhNYXJrezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KTttYXJnaW4tdG9wOi02cHh9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO21hcmdpbi10b3A6MDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZVhNYXJrezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KTttYXJnaW4tdG9wOi02cHh9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO21hcmdpbi10b3A6MDtvcGFjaXR5OjF9fS5zd2FsLWljb24tLXdhcm5pbmd7Ym9yZGVyLWNvbG9yOiNmOGJiODY7LXdlYmtpdC1hbmltYXRpb246cHVsc2VXYXJuaW5nIC43NXMgaW5maW5pdGUgYWx0ZXJuYXRlO2FuaW1hdGlvbjpwdWxzZVdhcm5pbmcgLjc1cyBpbmZpbml0ZSBhbHRlcm5hdGV9LnN3YWwtaWNvbi0td2FybmluZ19fYm9keXt3aWR0aDo1cHg7aGVpZ2h0OjQ3cHg7dG9wOjEwcHg7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLWxlZnQ6LTJweH0uc3dhbC1pY29uLS13YXJuaW5nX19ib2R5LC5zd2FsLWljb24tLXdhcm5pbmdfX2RvdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmOGJiODZ9LnN3YWwtaWNvbi0td2FybmluZ19fZG90e3dpZHRoOjdweDtoZWlnaHQ6N3B4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0Oi00cHg7Ym90dG9tOi0xMXB4fUAtd2Via2l0LWtleWZyYW1lcyBwdWxzZVdhcm5pbmd7MCV7Ym9yZGVyLWNvbG9yOiNmOGQ0ODZ9dG97Ym9yZGVyLWNvbG9yOiNmOGJiODZ9fUBrZXlmcmFtZXMgcHVsc2VXYXJuaW5nezAle2JvcmRlci1jb2xvcjojZjhkNDg2fXRve2JvcmRlci1jb2xvcjojZjhiYjg2fX0uc3dhbC1pY29uLS1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsLWljb24tLXN1Y2Nlc3M6YWZ0ZXIsLnN3YWwtaWNvbi0tc3VjY2VzczpiZWZvcmV7Y29udGVudDpcIlwiO2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjYwcHg7aGVpZ2h0OjEyMHB4O2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsLWljb24tLXN1Y2Nlc3M6YmVmb3Jle2JvcmRlci1yYWRpdXM6MTIwcHggMCAwIDEyMHB4O3RvcDotN3B4O2xlZnQ6LTMzcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo2MHB4IDYwcHg7dHJhbnNmb3JtLW9yaWdpbjo2MHB4IDYwcHh9LnN3YWwtaWNvbi0tc3VjY2VzczphZnRlcntib3JkZXItcmFkaXVzOjAgMTIwcHggMTIwcHggMDt0b3A6LTExcHg7bGVmdDozMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46MCA2MHB4Oy13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZVBsYWNlaG9sZGVyIDQuMjVzIGVhc2UtaW47YW5pbWF0aW9uOnJvdGF0ZVBsYWNlaG9sZGVyIDQuMjVzIGVhc2UtaW59LnN3YWwtaWNvbi0tc3VjY2Vzc19fcmluZ3t3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlcjo0cHggc29saWQgaHNsYSg5OCw1NSUsNjklLC4yKTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTRweDt0b3A6LTRweDt6LWluZGV4OjJ9LnN3YWwtaWNvbi0tc3VjY2Vzc19faGlkZS1jb3JuZXJze3dpZHRoOjVweDtoZWlnaHQ6OTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoxcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoyOHB4O3RvcDo4cHg7ei1pbmRleDoxOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbC1pY29uLS1zdWNjZXNzX19saW5le2hlaWdodDo1cHg7YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2O2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmUtLXRpcHt3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDZweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzVGlwIC43NXM7YW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzVGlwIC43NXN9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZS0tbG9uZ3t3aWR0aDo0N3B4O3JpZ2h0OjhweDt0b3A6MzhweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NMb25nIC43NXM7YW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzTG9uZyAuNzVzfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzVGlwezAle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NTQle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NzAle3dpZHRoOjUwcHg7bGVmdDotOHB4O3RvcDozN3B4fTg0JXt3aWR0aDoxN3B4O2xlZnQ6MjFweDt0b3A6NDhweH10b3t3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDVweH19QGtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc1RpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc0xvbmd7MCV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTY1JXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9ODQle3dpZHRoOjU1cHg7cmlnaHQ6MDt0b3A6MzVweH10b3t3aWR0aDo0N3B4O3JpZ2h0OjhweDt0b3A6MzhweH19QGtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc0xvbmd7MCV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTY1JXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9ODQle3dpZHRoOjU1cHg7cmlnaHQ6MDt0b3A6MzVweH10b3t3aWR0aDo0N3B4O3JpZ2h0OjhweDt0b3A6MzhweH19LnN3YWwtaWNvbi0taW5mb3tib3JkZXItY29sb3I6I2M5ZGFlMX0uc3dhbC1pY29uLS1pbmZvOmJlZm9yZXt3aWR0aDo1cHg7aGVpZ2h0OjI5cHg7Ym90dG9tOjE3cHg7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLWxlZnQ6LTJweH0uc3dhbC1pY29uLS1pbmZvOmFmdGVyLC5zd2FsLWljb24tLWluZm86YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNjOWRhZTF9LnN3YWwtaWNvbi0taW5mbzphZnRlcnt3aWR0aDo3cHg7aGVpZ2h0OjdweDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDotM3B4O3RvcDoxOXB4fS5zd2FsLWljb257d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXItd2lkdGg6NHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjUwJTtwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpjb250ZW50LWJveDttYXJnaW46MjBweCBhdXRvfS5zd2FsLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDozMnB4fS5zd2FsLWljb24tLWN1c3RvbXt3aWR0aDphdXRvO2hlaWdodDphdXRvO21heC13aWR0aDoxMDAlO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MH0uc3dhbC1pY29uIGltZ3ttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LnN3YWwtdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuNjUpO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LXRyYW5zZm9ybTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxM3B4IDE2cHg7Zm9udC1zaXplOjI3cHg7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MH0uc3dhbC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjI2cHh9LnN3YWwtdGl0bGU6bm90KDpmaXJzdC1jaGlsZCl7cGFkZGluZy1ib3R0b206MH0uc3dhbC10aXRsZTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MTNweH0uc3dhbC10ZXh0e2ZvbnQtc2l6ZToxNnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0Om5vbmU7bGluZS1oZWlnaHQ6bm9ybWFsO3ZlcnRpY2FsLWFsaWduOnRvcDt0ZXh0LWFsaWduOmxlZnQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjA7cGFkZGluZzowIDEwcHg7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOnJnYmEoMCwwLDAsLjY0KTttYXgtd2lkdGg6Y2FsYygxMDAlIC0gMjBweCk7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3dhbC10ZXh0OmZpcnN0LWNoaWxke21hcmdpbi10b3A6NDVweH0uc3dhbC10ZXh0Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTo0NXB4fS5zd2FsLWZvb3Rlcnt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctdG9wOjEzcHg7bWFyZ2luLXRvcDoxM3B4O3BhZGRpbmc6MTNweCAxNnB4O2JvcmRlci1yYWRpdXM6aW5oZXJpdDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3dhbC1idXR0b24tY29udGFpbmVye21hcmdpbjo1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LnN3YWwtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzdjZDFmOTtjb2xvcjojZmZmO2JvcmRlcjpub25lO2JveC1zaGFkb3c6bm9uZTtib3JkZXItcmFkaXVzOjVweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7cGFkZGluZzoxMHB4IDI0cHg7bWFyZ2luOjA7Y3Vyc29yOnBvaW50ZXJ9LnN3YWwtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM3OGNiZjJ9LnN3YWwtYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM3MGJjZTB9LnN3YWwtYnV0dG9uOmZvY3Vze291dGxpbmU6bm9uZTtib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDQzLDExNCwxNjUsLjI5KX0uc3dhbC1idXR0b25bZGlzYWJsZWRde29wYWNpdHk6LjU7Y3Vyc29yOmRlZmF1bHR9LnN3YWwtYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsLWJ1dHRvbi0tY2FuY2Vse2NvbG9yOiM1NTU7YmFja2dyb3VuZC1jb2xvcjojZWZlZmVmfS5zd2FsLWJ1dHRvbi0tY2FuY2VsOm5vdChbZGlzYWJsZWRdKTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTh9LnN3YWwtYnV0dG9uLS1jYW5jZWw6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2Q3ZDdkN30uc3dhbC1idXR0b24tLWNhbmNlbDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDExNiwxMzYsMTUwLC4yOSl9LnN3YWwtYnV0dG9uLS1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZTY0OTQyfS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOm5vdChbZGlzYWJsZWRdKTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZjQ3NDB9LnN3YWwtYnV0dG9uLS1kYW5nZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2NmNDIzYn0uc3dhbC1idXR0b24tLWRhbmdlcjpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDE2NSw0Myw0MywuMjkpfS5zd2FsLWNvbnRlbnR7cGFkZGluZzowIDIwcHg7bWFyZ2luLXRvcDoyMHB4O2ZvbnQtc2l6ZTptZWRpdW19LnN3YWwtY29udGVudDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MjBweH0uc3dhbC1jb250ZW50X19pbnB1dCwuc3dhbC1jb250ZW50X190ZXh0YXJlYXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjE0cHg7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE0KTtwYWRkaW5nOjEwcHggMTNweDtib3JkZXItcmFkaXVzOjJweDt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMnN9LnN3YWwtY29udGVudF9faW5wdXQ6Zm9jdXMsLnN3YWwtY29udGVudF9fdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlci1jb2xvcjojNmRiOGZmfS5zd2FsLWNvbnRlbnRfX3RleHRhcmVhe3Jlc2l6ZTp2ZXJ0aWNhbH0uc3dhbC1idXR0b24tLWxvYWRpbmd7Y29sb3I6dHJhbnNwYXJlbnR9LnN3YWwtYnV0dG9uLS1sb2FkaW5nfi5zd2FsLWJ1dHRvbl9fbG9hZGVye29wYWNpdHk6MX0uc3dhbC1idXR0b25fX2xvYWRlcntwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6YXV0bzt3aWR0aDo0M3B4O3otaW5kZXg6MjtsZWZ0OjUwJTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO3RleHQtYWxpZ246Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3dpZHRoOjlweDtoZWlnaHQ6OXB4O3BhZGRpbmc6MDtib3JkZXI6bm9uZTttYXJnaW46MnB4O29wYWNpdHk6LjQ7Ym9yZGVyLXJhZGl1czo3cHg7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSk7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yczstd2Via2l0LWFuaW1hdGlvbjpzd2FsLWxvYWRpbmctYW5pbSAxcyBpbmZpbml0ZTthbmltYXRpb246c3dhbC1sb2FkaW5nLWFuaW0gMXMgaW5maW5pdGV9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2Om50aC1jaGlsZCgzbisyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMTVzO2FuaW1hdGlvbi1kZWxheTouMTVzfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdjpudGgtY2hpbGQoM24rMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjNzO2FuaW1hdGlvbi1kZWxheTouM3N9QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwtbG9hZGluZy1hbmltezAle29wYWNpdHk6LjR9MjAle29wYWNpdHk6LjR9NTAle29wYWNpdHk6MX10b3tvcGFjaXR5Oi40fX1Aa2V5ZnJhbWVzIHN3YWwtbG9hZGluZy1hbmltezAle29wYWNpdHk6LjR9MjAle29wYWNpdHk6LjR9NTAle29wYWNpdHk6MX10b3tvcGFjaXR5Oi40fX0uc3dhbC1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTowO292ZXJmbG93LXk6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpO3otaW5kZXg6MTAwMDA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4zc30uc3dhbC1vdmVybGF5OmJlZm9yZXtjb250ZW50OlwiIFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtoZWlnaHQ6MTAwJX0uc3dhbC1vdmVybGF5LS1zaG93LW1vZGFse29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5zd2FsLW92ZXJsYXktLXNob3ctbW9kYWwgLnN3YWwtbW9kYWx7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zczthbmltYXRpb246c2hvd1N3ZWV0QWxlcnQgLjNzO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uc3dhbC1tb2RhbHt3aWR0aDo0NzhweDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1cHg7cG9zaXRpb246c3RhdGljO21hcmdpbjoyMHB4IGF1dG87ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7ei1pbmRleDoxMDAwMTt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msb3BhY2l0eSAuMnM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLG9wYWNpdHkgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4zc31AbWVkaWEgKG1heC13aWR0aDo1MDBweCl7LnN3YWwtbW9kYWx7d2lkdGg6Y2FsYygxMDAlIC0gMjBweCl9fUAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc2hvd1N3ZWV0QWxlcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0nLFwiXCJdKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQsZSl7dmFyIG49dFsxXXx8XCJcIixyPXRbM107aWYoIXIpcmV0dXJuIG47aWYoZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYSl7dmFyIGk9byhyKTtyZXR1cm5bbl0uY29uY2F0KHIuc291cmNlcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiK3Iuc291cmNlUm9vdCt0K1wiICovXCJ9KSkuY29uY2F0KFtpXSkuam9pbihcIlxcblwiKX1yZXR1cm5bbl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiBvKHQpe3JldHVyblwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHQpKSkpK1wiICovXCJ9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3ZhciBvPW4oZSx0KTtyZXR1cm4gZVsyXT9cIkBtZWRpYSBcIitlWzJdK1wie1wiK28rXCJ9XCI6b30pLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbih0LG4pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1bW251bGwsdCxcIlwiXV0pO2Zvcih2YXIgbz17fSxyPTA7cjx0aGlzLmxlbmd0aDtyKyspe3ZhciBpPXRoaXNbcl1bMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJihvW2ldPSEwKX1mb3Iocj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgYT10W3JdO1wibnVtYmVyXCI9PXR5cGVvZiBhWzBdJiZvW2FbMF1dfHwobiYmIWFbMl0/YVsyXT1uOm4mJihhWzJdPVwiKFwiK2FbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksZS5wdXNoKGEpKX19LGV9fSxmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dLHI9bVtvLmlkXTtpZihyKXtyLnJlZnMrKztmb3IodmFyIGk9MDtpPHIucGFydHMubGVuZ3RoO2krKylyLnBhcnRzW2ldKG8ucGFydHNbaV0pO2Zvcig7aTxvLnBhcnRzLmxlbmd0aDtpKyspci5wYXJ0cy5wdXNoKHUoby5wYXJ0c1tpXSxlKSl9ZWxzZXtmb3IodmFyIGE9W10saT0wO2k8by5wYXJ0cy5sZW5ndGg7aSsrKWEucHVzaCh1KG8ucGFydHNbaV0sZSkpO21bby5pZF09e2lkOm8uaWQscmVmczoxLHBhcnRzOmF9fX19ZnVuY3Rpb24gcih0LGUpe2Zvcih2YXIgbj1bXSxvPXt9LHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGk9dFtyXSxhPWUuYmFzZT9pWzBdK2UuYmFzZTppWzBdLHM9aVsxXSxjPWlbMl0sbD1pWzNdLHU9e2NzczpzLG1lZGlhOmMsc291cmNlTWFwOmx9O29bYV0/b1thXS5wYXJ0cy5wdXNoKHUpOm4ucHVzaChvW2FdPXtpZDphLHBhcnRzOlt1XX0pfXJldHVybiBufWZ1bmN0aW9uIGkodCxlKXt2YXIgbj12KHQuaW5zZXJ0SW50byk7aWYoIW4pdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7dmFyIG89d1t3Lmxlbmd0aC0xXTtpZihcInRvcFwiPT09dC5pbnNlcnRBdClvP28ubmV4dFNpYmxpbmc/bi5pbnNlcnRCZWZvcmUoZSxvLm5leHRTaWJsaW5nKTpuLmFwcGVuZENoaWxkKGUpOm4uaW5zZXJ0QmVmb3JlKGUsbi5maXJzdENoaWxkKSx3LnB1c2goZSk7ZWxzZXtpZihcImJvdHRvbVwiIT09dC5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7bi5hcHBlbmRDaGlsZChlKX19ZnVuY3Rpb24gYSh0KXtpZihudWxsPT09dC5wYXJlbnROb2RlKXJldHVybiExO3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KTt2YXIgZT13LmluZGV4T2YodCk7ZT49MCYmdy5zcGxpY2UoZSwxKX1mdW5jdGlvbiBzKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtyZXR1cm4gdC5hdHRycy50eXBlPVwidGV4dC9jc3NcIixsKGUsdC5hdHRycyksaSh0LGUpLGV9ZnVuY3Rpb24gYyh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtyZXR1cm4gdC5hdHRycy50eXBlPVwidGV4dC9jc3NcIix0LmF0dHJzLnJlbD1cInN0eWxlc2hlZXRcIixsKGUsdC5hdHRycyksaSh0LGUpLGV9ZnVuY3Rpb24gbCh0LGUpe09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7dC5zZXRBdHRyaWJ1dGUobixlW25dKX0pfWZ1bmN0aW9uIHUodCxlKXt2YXIgbixvLHIsaTtpZihlLnRyYW5zZm9ybSYmdC5jc3Mpe2lmKCEoaT1lLnRyYW5zZm9ybSh0LmNzcykpKXJldHVybiBmdW5jdGlvbigpe307dC5jc3M9aX1pZihlLnNpbmdsZXRvbil7dmFyIGw9aCsrO249Z3x8KGc9cyhlKSksbz1mLmJpbmQobnVsbCxuLGwsITEpLHI9Zi5iaW5kKG51bGwsbixsLCEwKX1lbHNlIHQuc291cmNlTWFwJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEJsb2ImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2E/KG49YyhlKSxvPXAuYmluZChudWxsLG4sZSkscj1mdW5jdGlvbigpe2Eobiksbi5ocmVmJiZVUkwucmV2b2tlT2JqZWN0VVJMKG4uaHJlZil9KToobj1zKGUpLG89ZC5iaW5kKG51bGwsbikscj1mdW5jdGlvbigpe2Eobil9KTtyZXR1cm4gbyh0KSxmdW5jdGlvbihlKXtpZihlKXtpZihlLmNzcz09PXQuY3NzJiZlLm1lZGlhPT09dC5tZWRpYSYmZS5zb3VyY2VNYXA9PT10LnNvdXJjZU1hcClyZXR1cm47byh0PWUpfWVsc2UgcigpfX1mdW5jdGlvbiBmKHQsZSxuLG8pe3ZhciByPW4/XCJcIjpvLmNzcztpZih0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9eChlLHIpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUociksYT10LmNoaWxkTm9kZXM7YVtlXSYmdC5yZW1vdmVDaGlsZChhW2VdKSxhLmxlbmd0aD90Lmluc2VydEJlZm9yZShpLGFbZV0pOnQuYXBwZW5kQ2hpbGQoaSl9fWZ1bmN0aW9uIGQodCxlKXt2YXIgbj1lLmNzcyxvPWUubWVkaWE7aWYobyYmdC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLG8pLHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD1uO2Vsc2V7Zm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKTt0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKX19ZnVuY3Rpb24gcCh0LGUsbil7dmFyIG89bi5jc3Mscj1uLnNvdXJjZU1hcCxpPXZvaWQgMD09PWUuY29udmVydFRvQWJzb2x1dGVVcmxzJiZyOyhlLmNvbnZlcnRUb0Fic29sdXRlVXJsc3x8aSkmJihvPXkobykpLHImJihvKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocikpKSkrXCIgKi9cIik7dmFyIGE9bmV3IEJsb2IoW29dLHt0eXBlOlwidGV4dC9jc3NcIn0pLHM9dC5ocmVmO3QuaHJlZj1VUkwuY3JlYXRlT2JqZWN0VVJMKGEpLHMmJlVSTC5yZXZva2VPYmplY3RVUkwocyl9dmFyIG09e30sYj1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dC5hcHBseSh0aGlzLGFyZ3VtZW50cykpLGV9fShmdW5jdGlvbigpe3JldHVybiB3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYn0pLHY9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB2b2lkIDA9PT1lW25dJiYoZVtuXT10LmNhbGwodGhpcyxuKSksZVtuXX19KGZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpfSksZz1udWxsLGg9MCx3PVtdLHk9bigxNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIERFQlVHJiZERUJVRyYmXCJvYmplY3RcIiE9dHlwZW9mIGRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtlPWV8fHt9LGUuYXR0cnM9XCJvYmplY3RcIj09dHlwZW9mIGUuYXR0cnM/ZS5hdHRyczp7fSxlLnNpbmdsZXRvbnx8KGUuc2luZ2xldG9uPWIoKSksZS5pbnNlcnRJbnRvfHwoZS5pbnNlcnRJbnRvPVwiaGVhZFwiKSxlLmluc2VydEF0fHwoZS5pbnNlcnRBdD1cImJvdHRvbVwiKTt2YXIgbj1yKHQsZSk7cmV0dXJuIG8obixlKSxmdW5jdGlvbih0KXtmb3IodmFyIGk9W10sYT0wO2E8bi5sZW5ndGg7YSsrKXt2YXIgcz1uW2FdLGM9bVtzLmlkXTtjLnJlZnMtLSxpLnB1c2goYyl9aWYodCl7byhyKHQsZSksZSl9Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe3ZhciBjPWlbYV07aWYoMD09PWMucmVmcyl7Zm9yKHZhciBsPTA7bDxjLnBhcnRzLmxlbmd0aDtsKyspYy5wYXJ0c1tsXSgpO2RlbGV0ZSBtW2MuaWRdfX19fTt2YXIgeD1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiBmdW5jdGlvbihlLG4pe3JldHVybiB0W2VdPW4sdC5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5sb2NhdGlvbjtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtpZighdHx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7dmFyIG49ZS5wcm90b2NvbCtcIi8vXCIrZS5ob3N0LG89bitlLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLyxcIi9cIik7cmV0dXJuIHQucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksZnVuY3Rpb24odCxlKXt2YXIgcj1lLnRyaW0oKS5yZXBsYWNlKC9eXCIoLiopXCIkLyxmdW5jdGlvbih0LGUpe3JldHVybiBlfSkucmVwbGFjZSgvXicoLiopJyQvLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9KTtpZigvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHIpKXJldHVybiB0O3ZhciBpO3JldHVybiBpPTA9PT1yLmluZGV4T2YoXCIvL1wiKT9yOjA9PT1yLmluZGV4T2YoXCIvXCIpP24rcjpvK3IucmVwbGFjZSgvXlxcLlxcLy8sXCJcIiksXCJ1cmwoXCIrSlNPTi5zdHJpbmdpZnkoaSkrXCIpXCJ9KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1uKDE3KTtcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHx3aW5kb3cuUHJvbWlzZXx8KHdpbmRvdy5Qcm9taXNlPW8pLG4oMjEpLFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXN8fChTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzPWZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuXCJudW1iZXJcIiE9dHlwZW9mIGUmJihlPTApLCEoZSt0Lmxlbmd0aD50aGlzLmxlbmd0aCkmJi0xIT09dGhpcy5pbmRleE9mKHQsZSl9KSxBcnJheS5wcm90b3R5cGUuaW5jbHVkZXN8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsXCJpbmNsdWRlc1wiLHt2YWx1ZTpmdW5jdGlvbih0LGUpe2lmKG51bGw9PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO3ZhciBuPU9iamVjdCh0aGlzKSxvPW4ubGVuZ3RoPj4+MDtpZigwPT09bylyZXR1cm4hMTtmb3IodmFyIHI9MHxlLGk9TWF0aC5tYXgocj49MD9yOm8tTWF0aC5hYnMociksMCk7aTxvOyl7aWYoZnVuY3Rpb24odCxlKXtyZXR1cm4gdD09PWV8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZcIm51bWJlclwiPT10eXBlb2YgZSYmaXNOYU4odCkmJmlzTmFOKGUpfShuW2ldLHQpKXJldHVybiEwO2krK31yZXR1cm4hMX19KSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZmdW5jdGlvbih0KXt0LmZvckVhY2goZnVuY3Rpb24odCl7dC5oYXNPd25Qcm9wZXJ0eShcInJlbW92ZVwiKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJyZW1vdmVcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyl9fSl9KX0oW0VsZW1lbnQucHJvdG90eXBlLENoYXJhY3RlckRhdGEucHJvdG90eXBlLERvY3VtZW50VHlwZS5wcm90b3R5cGVdKX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXshZnVuY3Rpb24obil7ZnVuY3Rpb24gbygpe31mdW5jdGlvbiByKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dC5hcHBseShlLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkodCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT0wLHRoaXMuX2hhbmRsZWQ9ITEsdGhpcy5fdmFsdWU9dm9pZCAwLHRoaXMuX2RlZmVycmVkcz1bXSxmKHQsdGhpcyl9ZnVuY3Rpb24gYSh0LGUpe2Zvcig7Mz09PXQuX3N0YXRlOyl0PXQuX3ZhbHVlO2lmKDA9PT10Ll9zdGF0ZSlyZXR1cm4gdm9pZCB0Ll9kZWZlcnJlZHMucHVzaChlKTt0Ll9oYW5kbGVkPSEwLGkuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCl7dmFyIG49MT09PXQuX3N0YXRlP2Uub25GdWxmaWxsZWQ6ZS5vblJlamVjdGVkO2lmKG51bGw9PT1uKXJldHVybiB2b2lkKDE9PT10Ll9zdGF0ZT9zOmMpKGUucHJvbWlzZSx0Ll92YWx1ZSk7dmFyIG87dHJ5e289bih0Ll92YWx1ZSl9Y2F0Y2godCl7cmV0dXJuIHZvaWQgYyhlLnByb21pc2UsdCl9cyhlLnByb21pc2Usbyl9KX1mdW5jdGlvbiBzKHQsZSl7dHJ5e2lmKGU9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpKXt2YXIgbj1lLnRoZW47aWYoZSBpbnN0YW5jZW9mIGkpcmV0dXJuIHQuX3N0YXRlPTMsdC5fdmFsdWU9ZSx2b2lkIGwodCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbilyZXR1cm4gdm9pZCBmKHIobixlKSx0KX10Ll9zdGF0ZT0xLHQuX3ZhbHVlPWUsbCh0KX1jYXRjaChlKXtjKHQsZSl9fWZ1bmN0aW9uIGModCxlKXt0Ll9zdGF0ZT0yLHQuX3ZhbHVlPWUsbCh0KX1mdW5jdGlvbiBsKHQpezI9PT10Ll9zdGF0ZSYmMD09PXQuX2RlZmVycmVkcy5sZW5ndGgmJmkuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCl7dC5faGFuZGxlZHx8aS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4odC5fdmFsdWUpfSk7Zm9yKHZhciBlPTAsbj10Ll9kZWZlcnJlZHMubGVuZ3RoO2U8bjtlKyspYSh0LHQuX2RlZmVycmVkc1tlXSk7dC5fZGVmZXJyZWRzPW51bGx9ZnVuY3Rpb24gdSh0LGUsbil7dGhpcy5vbkZ1bGZpbGxlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbCx0aGlzLm9uUmVqZWN0ZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOm51bGwsdGhpcy5wcm9taXNlPW59ZnVuY3Rpb24gZih0LGUpe3ZhciBuPSExO3RyeXt0KGZ1bmN0aW9uKHQpe258fChuPSEwLHMoZSx0KSl9LGZ1bmN0aW9uKHQpe258fChuPSEwLGMoZSx0KSl9KX1jYXRjaCh0KXtpZihuKXJldHVybjtuPSEwLGMoZSx0KX19dmFyIGQ9c2V0VGltZW91dDtpLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKG51bGwsdCl9LGkucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24odCxlKXt2YXIgbj1uZXcgdGhpcy5jb25zdHJ1Y3RvcihvKTtyZXR1cm4gYSh0aGlzLG5ldyB1KHQsZSxuKSksbn0saS5hbGw9ZnVuY3Rpb24odCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCk7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gbyhpLGEpe3RyeXtpZihhJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpKXt2YXIgcz1hLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgcylyZXR1cm4gdm9pZCBzLmNhbGwoYSxmdW5jdGlvbih0KXtvKGksdCl9LG4pfWVbaV09YSwwPT0tLXImJnQoZSl9Y2F0Y2godCl7bih0KX19aWYoMD09PWUubGVuZ3RoKXJldHVybiB0KFtdKTtmb3IodmFyIHI9ZS5sZW5ndGgsaT0wO2k8ZS5sZW5ndGg7aSsrKW8oaSxlW2ldKX0pfSxpLnJlc29sdmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yPT09aT90Om5ldyBpKGZ1bmN0aW9uKGUpe2UodCl9KX0saS5yZWplY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKGUsbil7bih0KX0pfSxpLnJhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKGUsbil7Zm9yKHZhciBvPTAscj10Lmxlbmd0aDtvPHI7bysrKXRbb10udGhlbihlLG4pfSl9LGkuX2ltbWVkaWF0ZUZuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmZ1bmN0aW9uKHQpe2UodCl9fHxmdW5jdGlvbih0KXtkKHQsMCl9LGkuX3VuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZjb25zb2xlJiZjb25zb2xlLndhcm4oXCJQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246XCIsdCl9LGkuX3NldEltbWVkaWF0ZUZuPWZ1bmN0aW9uKHQpe2kuX2ltbWVkaWF0ZUZuPXR9LGkuX3NldFVuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKHQpe2kuX3VuaGFuZGxlZFJlamVjdGlvbkZuPXR9LHZvaWQgMCE9PXQmJnQuZXhwb3J0cz90LmV4cG9ydHM9aTpuLlByb21pc2V8fChuLlByb21pc2U9aSl9KHRoaXMpfSkuY2FsbChlLG4oMTgpLnNldEltbWVkaWF0ZSl9LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKHQsZSl7dGhpcy5faWQ9dCx0aGlzLl9jbGVhckZuPWV9dmFyIHI9RnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O2Uuc2V0VGltZW91dD1mdW5jdGlvbigpe3JldHVybiBuZXcgbyhyLmNhbGwoc2V0VGltZW91dCx3aW5kb3csYXJndW1lbnRzKSxjbGVhclRpbWVvdXQpfSxlLnNldEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBvKHIuY2FsbChzZXRJbnRlcnZhbCx3aW5kb3csYXJndW1lbnRzKSxjbGVhckludGVydmFsKX0sZS5jbGVhclRpbWVvdXQ9ZS5jbGVhckludGVydmFsPWZ1bmN0aW9uKHQpe3QmJnQuY2xvc2UoKX0sby5wcm90b3R5cGUudW5yZWY9by5wcm90b3R5cGUucmVmPWZ1bmN0aW9uKCl7fSxvLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csdGhpcy5faWQpfSxlLmVucm9sbD1mdW5jdGlvbih0LGUpe2NsZWFyVGltZW91dCh0Ll9pZGxlVGltZW91dElkKSx0Ll9pZGxlVGltZW91dD1lfSxlLnVuZW5yb2xsPWZ1bmN0aW9uKHQpe2NsZWFyVGltZW91dCh0Ll9pZGxlVGltZW91dElkKSx0Ll9pZGxlVGltZW91dD0tMX0sZS5fdW5yZWZBY3RpdmU9ZS5hY3RpdmU9ZnVuY3Rpb24odCl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpO3ZhciBlPXQuX2lkbGVUaW1lb3V0O2U+PTAmJih0Ll9pZGxlVGltZW91dElkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0Ll9vblRpbWVvdXQmJnQuX29uVGltZW91dCgpfSxlKSl9LG4oMTkpLGUuc2V0SW1tZWRpYXRlPXNldEltbWVkaWF0ZSxlLmNsZWFySW1tZWRpYXRlPWNsZWFySW1tZWRpYXRlfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKHQsZSl7IWZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyh0KXtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiYodD1uZXcgRnVuY3Rpb24oXCJcIit0KSk7Zm9yKHZhciBlPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLG49MDtuPGUubGVuZ3RoO24rKyllW25dPWFyZ3VtZW50c1tuKzFdO3ZhciBvPXtjYWxsYmFjazp0LGFyZ3M6ZX07cmV0dXJuIGxbY109byxzKGMpLGMrK31mdW5jdGlvbiByKHQpe2RlbGV0ZSBsW3RdfWZ1bmN0aW9uIGkodCl7dmFyIGU9dC5jYWxsYmFjayxvPXQuYXJncztzd2l0Y2goby5sZW5ndGgpe2Nhc2UgMDplKCk7YnJlYWs7Y2FzZSAxOmUob1swXSk7YnJlYWs7Y2FzZSAyOmUob1swXSxvWzFdKTticmVhaztjYXNlIDM6ZShvWzBdLG9bMV0sb1syXSk7YnJlYWs7ZGVmYXVsdDplLmFwcGx5KG4sbyl9fWZ1bmN0aW9uIGEodCl7aWYodSlzZXRUaW1lb3V0KGEsMCx0KTtlbHNle3ZhciBlPWxbdF07aWYoZSl7dT0hMDt0cnl7aShlKX1maW5hbGx5e3IodCksdT0hMX19fX1pZighdC5zZXRJbW1lZGlhdGUpe3ZhciBzLGM9MSxsPXt9LHU9ITEsZj10LmRvY3VtZW50LGQ9T2JqZWN0LmdldFByb3RvdHlwZU9mJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7ZD1kJiZkLnNldFRpbWVvdXQ/ZDp0LFwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbCh0LnByb2Nlc3MpP2Z1bmN0aW9uKCl7cz1mdW5jdGlvbih0KXtlLm5leHRUaWNrKGZ1bmN0aW9uKCl7YSh0KX0pfX0oKTpmdW5jdGlvbigpe2lmKHQucG9zdE1lc3NhZ2UmJiF0LmltcG9ydFNjcmlwdHMpe3ZhciBlPSEwLG49dC5vbm1lc3NhZ2U7cmV0dXJuIHQub25tZXNzYWdlPWZ1bmN0aW9uKCl7ZT0hMX0sdC5wb3N0TWVzc2FnZShcIlwiLFwiKlwiKSx0Lm9ubWVzc2FnZT1uLGV9fSgpP2Z1bmN0aW9uKCl7dmFyIGU9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixuPWZ1bmN0aW9uKG4pe24uc291cmNlPT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIG4uZGF0YSYmMD09PW4uZGF0YS5pbmRleE9mKGUpJiZhKCtuLmRhdGEuc2xpY2UoZS5sZW5ndGgpKX07dC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixuLCExKTp0LmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsbikscz1mdW5jdGlvbihuKXt0LnBvc3RNZXNzYWdlKGUrbixcIipcIil9fSgpOnQuTWVzc2FnZUNoYW5uZWw/ZnVuY3Rpb24oKXt2YXIgdD1uZXcgTWVzc2FnZUNoYW5uZWw7dC5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24odCl7YSh0LmRhdGEpfSxzPWZ1bmN0aW9uKGUpe3QucG9ydDIucG9zdE1lc3NhZ2UoZSl9fSgpOmYmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiBmLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/ZnVuY3Rpb24oKXt2YXIgdD1mLmRvY3VtZW50RWxlbWVudDtzPWZ1bmN0aW9uKGUpe3ZhciBuPWYuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtuLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2EoZSksbi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCx0LnJlbW92ZUNoaWxkKG4pLG49bnVsbH0sdC5hcHBlbmRDaGlsZChuKX19KCk6ZnVuY3Rpb24oKXtzPWZ1bmN0aW9uKHQpe3NldFRpbWVvdXQoYSwwLHQpfX0oKSxkLnNldEltbWVkaWF0ZT1vLGQuY2xlYXJJbW1lZGlhdGU9cn19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PXQ/dGhpczp0OnNlbGYpfSkuY2FsbChlLG4oNyksbigyMCkpfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIG8oKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcih0KXtpZih1PT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dCh0LDApO2lmKCh1PT09bnx8IXUpJiZzZXRUaW1lb3V0KXJldHVybiB1PXNldFRpbWVvdXQsc2V0VGltZW91dCh0LDApO3RyeXtyZXR1cm4gdSh0LDApfWNhdGNoKGUpe3RyeXtyZXR1cm4gdS5jYWxsKG51bGwsdCwwKX1jYXRjaChlKXtyZXR1cm4gdS5jYWxsKHRoaXMsdCwwKX19fWZ1bmN0aW9uIGkodCl7aWYoZj09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KHQpO2lmKChmPT09b3x8IWYpJiZjbGVhclRpbWVvdXQpcmV0dXJuIGY9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dCh0KTt0cnl7cmV0dXJuIGYodCl9Y2F0Y2goZSl7dHJ5e3JldHVybiBmLmNhbGwobnVsbCx0KX1jYXRjaChlKXtyZXR1cm4gZi5jYWxsKHRoaXMsdCl9fX1mdW5jdGlvbiBhKCl7YiYmcCYmKGI9ITEscC5sZW5ndGg/bT1wLmNvbmNhdChtKTp2PS0xLG0ubGVuZ3RoJiZzKCkpfWZ1bmN0aW9uIHMoKXtpZighYil7dmFyIHQ9cihhKTtiPSEwO2Zvcih2YXIgZT1tLmxlbmd0aDtlOyl7Zm9yKHA9bSxtPVtdOysrdjxlOylwJiZwW3ZdLnJ1bigpO3Y9LTEsZT1tLmxlbmd0aH1wPW51bGwsYj0hMSxpKHQpfX1mdW5jdGlvbiBjKHQsZSl7dGhpcy5mdW49dCx0aGlzLmFycmF5PWV9ZnVuY3Rpb24gbCgpe312YXIgdSxmLGQ9dC5leHBvcnRzPXt9OyFmdW5jdGlvbigpe3RyeXt1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDpufWNhdGNoKHQpe3U9bn10cnl7Zj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0Om99Y2F0Y2godCl7Zj1vfX0oKTt2YXIgcCxtPVtdLGI9ITEsdj0tMTtkLm5leHRUaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKWVbbi0xXT1hcmd1bWVudHNbbl07bS5wdXNoKG5ldyBjKHQsZSkpLDEhPT1tLmxlbmd0aHx8Ynx8cihzKX0sYy5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0sZC50aXRsZT1cImJyb3dzZXJcIixkLmJyb3dzZXI9ITAsZC5lbnY9e30sZC5hcmd2PVtdLGQudmVyc2lvbj1cIlwiLGQudmVyc2lvbnM9e30sZC5vbj1sLGQuYWRkTGlzdGVuZXI9bCxkLm9uY2U9bCxkLm9mZj1sLGQucmVtb3ZlTGlzdGVuZXI9bCxkLnJlbW92ZUFsbExpc3RlbmVycz1sLGQuZW1pdD1sLGQucHJlcGVuZExpc3RlbmVyPWwsZC5wcmVwZW5kT25jZUxpc3RlbmVyPWwsZC5saXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuW119LGQuYmluZGluZz1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0sZC5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0sZC5jaGRpcj1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGQudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuKDIyKS5wb2x5ZmlsbCgpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyh0LGUpe2lmKHZvaWQgMD09PXR8fG51bGw9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCBmaXJzdCBhcmd1bWVudCB0byBvYmplY3RcIik7Zm9yKHZhciBuPU9iamVjdCh0KSxvPTE7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl7dmFyIHI9YXJndW1lbnRzW29dO2lmKHZvaWQgMCE9PXImJm51bGwhPT1yKWZvcih2YXIgaT1PYmplY3Qua2V5cyhPYmplY3QocikpLGE9MCxzPWkubGVuZ3RoO2E8czthKyspe3ZhciBjPWlbYV0sbD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsYyk7dm9pZCAwIT09bCYmbC5lbnVtZXJhYmxlJiYobltjXT1yW2NdKX19cmV0dXJuIG59ZnVuY3Rpb24gcigpe09iamVjdC5hc3NpZ258fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QsXCJhc3NpZ25cIix7ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6b30pfXQuZXhwb3J0cz17YXNzaWduOm8scG9seWZpbGw6cn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDI0KSxyPW4oNiksaT1uKDUpLGE9bigzNikscz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgbj1hLmdldE9wdHMuYXBwbHkodm9pZCAwLHQpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0LGUpe2kuZGVmYXVsdC5wcm9taXNlPXtyZXNvbHZlOnQscmVqZWN0OmV9LG8uZGVmYXVsdChuKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5vcGVuTW9kYWwoKX0pfSl9fTtzLmNsb3NlPXIub25BY3Rpb24scy5nZXRTdGF0ZT1yLmdldFN0YXRlLHMuc2V0QWN0aW9uVmFsdWU9aS5zZXRBY3Rpb25WYWx1ZSxzLnN0b3BMb2FkaW5nPXIuc3RvcExvYWRpbmcscy5zZXREZWZhdWx0cz1hLnNldERlZmF1bHRzLGUuZGVmYXVsdD1zfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMCksaT1yLmRlZmF1bHQuTU9EQUwsYT1uKDQpLHM9bigzNCksYz1uKDM1KSxsPW4oMSk7ZS5pbml0PWZ1bmN0aW9uKHQpe28uZ2V0Tm9kZShpKXx8KGRvY3VtZW50LmJvZHl8fGwudGhyb3dFcnIoXCJZb3UgY2FuIG9ubHkgdXNlIFN3ZWV0QWxlcnQgQUZURVIgdGhlIERPTSBoYXMgbG9hZGVkIVwiKSxzLmRlZmF1bHQoKSxhLmRlZmF1bHQoKSksYS5pbml0TW9kYWxDb250ZW50KHQpLGMuZGVmYXVsdCh0KX0sZS5kZWZhdWx0PWUuaW5pdH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuTU9EQUw7ZS5tb2RhbE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIj48L2Rpdj4nLGUuZGVmYXVsdD1lLm1vZGFsTWFya3VwfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5PVkVSTEFZLGk9JzxkaXYgXFxuICAgIGNsYXNzPVwiJytyKydcIlxcbiAgICB0YWJJbmRleD1cIi0xXCI+XFxuICA8L2Rpdj4nO2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5JQ09OO2UuZXJyb3JJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0tZXJyb3JcIixlPXQrXCJfX2xpbmVcIjtyZXR1cm4nXFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19feC1tYXJrXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK2UrXCIgXCIrZSsnLS1sZWZ0XCI+PC9zcGFuPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJytlK1wiIFwiK2UrJy0tcmlnaHRcIj48L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgJ30sZS53YXJuaW5nSWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLXdhcm5pbmdcIjtyZXR1cm4nXFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0KydfX2JvZHlcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrdCsnX19kb3RcIj48L3NwYW4+XFxuICAgIDwvc3Bhbj5cXG4gICd9LGUuc3VjY2Vzc0ljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS1zdWNjZXNzXCI7cmV0dXJuJ1xcbiAgICA8c3BhbiBjbGFzcz1cIicrdCtcIl9fbGluZSBcIit0KydfX2xpbmUtLWxvbmdcIj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0K1wiX19saW5lIFwiK3QrJ19fbGluZS0tdGlwXCI+PC9zcGFuPlxcblxcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX3JpbmdcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX19oaWRlLWNvcm5lcnNcIj48L2Rpdj5cXG4gICd9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5DT05URU5UO2UuY29udGVudE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIj5cXG5cXG4gIDwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LkJVVFRPTl9DT05UQUlORVIsaT1vLmRlZmF1bHQuQlVUVE9OLGE9by5kZWZhdWx0LkJVVFRPTl9MT0FERVI7ZS5idXR0b25NYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCI+XFxuXFxuICAgIDxidXR0b25cXG4gICAgICBjbGFzcz1cIicraSsnXCJcXG4gICAgPjwvYnV0dG9uPlxcblxcbiAgICA8ZGl2IGNsYXNzPVwiJythKydcIj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICA8L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89big0KSxyPW4oMiksaT1uKDApLGE9aS5kZWZhdWx0LklDT04scz1pLmRlZmF1bHQuSUNPTl9DVVNUT00sYz1bXCJlcnJvclwiLFwid2FybmluZ1wiLFwic3VjY2Vzc1wiLFwiaW5mb1wiXSxsPXtlcnJvcjpyLmVycm9ySWNvbk1hcmt1cCgpLHdhcm5pbmc6ci53YXJuaW5nSWNvbk1hcmt1cCgpLHN1Y2Nlc3M6ci5zdWNjZXNzSWNvbk1hcmt1cCgpfSx1PWZ1bmN0aW9uKHQsZSl7dmFyIG49YStcIi0tXCIrdDtlLmNsYXNzTGlzdC5hZGQobik7dmFyIG89bFt0XTtvJiYoZS5pbm5lckhUTUw9byl9LGY9ZnVuY3Rpb24odCxlKXtlLmNsYXNzTGlzdC5hZGQocyk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtuLnNyYz10LGUuYXBwZW5kQ2hpbGQobil9LGQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9by5pbmplY3RFbEludG9Nb2RhbChyLmljb25NYXJrdXApO2MuaW5jbHVkZXModCk/dSh0LGUpOmYodCxlKX19O2UuZGVmYXVsdD1kfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigyKSxyPW4oNCksaT1mdW5jdGlvbih0KXtuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiQXBwbGVXZWJLaXRcIikmJih0LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdC5vZmZzZXRIZWlnaHQsdC5zdHlsZS5kaXNwbGF5PVwiXCIpfTtlLmluaXRUaXRsZT1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1yLmluamVjdEVsSW50b01vZGFsKG8udGl0bGVNYXJrdXApO2UudGV4dENvbnRlbnQ9dCxpKGUpfX0sZS5pbml0VGV4dD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7dC5zcGxpdChcIlxcblwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQsbixvKXtlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKSxuPG8ubGVuZ3RoLTEmJmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKX0pO3ZhciBuPXIuaW5qZWN0RWxJbnRvTW9kYWwoby50ZXh0TWFya3VwKTtuLmFwcGVuZENoaWxkKGUpLGkobil9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDQpLGk9bigwKSxhPWkuZGVmYXVsdC5CVVRUT04scz1pLmRlZmF1bHQuREFOR0VSX0JVVFRPTixjPW4oMyksbD1uKDIpLHU9big2KSxmPW4oNSksZD1mdW5jdGlvbih0LGUsbil7dmFyIHI9ZS50ZXh0LGk9ZS52YWx1ZSxkPWUuY2xhc3NOYW1lLHA9ZS5jbG9zZU1vZGFsLG09by5zdHJpbmdUb05vZGUobC5idXR0b25NYXJrdXApLGI9bS5xdWVyeVNlbGVjdG9yKFwiLlwiK2EpLHY9YStcIi0tXCIrdDtpZihiLmNsYXNzTGlzdC5hZGQodiksZCl7KEFycmF5LmlzQXJyYXkoZCk/ZDpkLnNwbGl0KFwiIFwiKSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Lmxlbmd0aD4wfSkuZm9yRWFjaChmdW5jdGlvbih0KXtiLmNsYXNzTGlzdC5hZGQodCl9KX1uJiZ0PT09Yy5DT05GSVJNX0tFWSYmYi5jbGFzc0xpc3QuYWRkKHMpLGIudGV4dENvbnRlbnQ9cjt2YXIgZz17fTtyZXR1cm4gZ1t0XT1pLGYuc2V0QWN0aW9uVmFsdWUoZyksZi5zZXRBY3Rpb25PcHRpb25zRm9yKHQse2Nsb3NlTW9kYWw6cH0pLGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtyZXR1cm4gdS5vbkFjdGlvbih0KX0pLG19LHA9ZnVuY3Rpb24odCxlKXt2YXIgbj1yLmluamVjdEVsSW50b01vZGFsKGwuZm9vdGVyTWFya3VwKTtmb3IodmFyIG8gaW4gdCl7dmFyIGk9dFtvXSxhPWQobyxpLGUpO2kudmlzaWJsZSYmbi5hcHBlbmRDaGlsZChhKX0wPT09bi5jaGlsZHJlbi5sZW5ndGgmJm4ucmVtb3ZlKCl9O2UuZGVmYXVsdD1wfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigzKSxyPW4oNCksaT1uKDIpLGE9big1KSxzPW4oNiksYz1uKDApLGw9Yy5kZWZhdWx0LkNPTlRFTlQsdT1mdW5jdGlvbih0KXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0LG49ZS52YWx1ZTthLnNldEFjdGlvblZhbHVlKG4pfSksdC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixmdW5jdGlvbih0KXtpZihcIkVudGVyXCI9PT10LmtleSlyZXR1cm4gcy5vbkFjdGlvbihvLkNPTkZJUk1fS0VZKX0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmZvY3VzKCksYS5zZXRBY3Rpb25WYWx1ZShcIlwiKX0sMCl9LGY9ZnVuY3Rpb24odCxlLG4pe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSkscj1sK1wiX19cIitlO28uY2xhc3NMaXN0LmFkZChyKTtmb3IodmFyIGkgaW4gbil7dmFyIGE9bltpXTtvW2ldPWF9XCJpbnB1dFwiPT09ZSYmdShvKSx0LmFwcGVuZENoaWxkKG8pfSxkPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXIuaW5qZWN0RWxJbnRvTW9kYWwoaS5jb250ZW50TWFya3VwKSxuPXQuZWxlbWVudCxvPXQuYXR0cmlidXRlcztcInN0cmluZ1wiPT10eXBlb2Ygbj9mKGUsbixvKTplLmFwcGVuZENoaWxkKG4pfX07ZS5kZWZhdWx0PWR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigyKSxpPWZ1bmN0aW9uKCl7dmFyIHQ9by5zdHJpbmdUb05vZGUoci5vdmVybGF5TWFya3VwKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpfTtlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oNSkscj1uKDYpLGk9bigxKSxhPW4oMykscz1uKDApLGM9cy5kZWZhdWx0Lk1PREFMLGw9cy5kZWZhdWx0LkJVVFRPTix1PXMuZGVmYXVsdC5PVkVSTEFZLGY9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHYoKX0sZD1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZygpfSxwPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pc3dpdGNoKHQua2V5KXtjYXNlXCJFc2NhcGVcIjpyZXR1cm4gci5vbkFjdGlvbihhLkNBTkNFTF9LRVkpfX0sbT1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXN3aXRjaCh0LmtleSl7Y2FzZVwiVGFiXCI6cmV0dXJuIGYodCl9fSxiPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pcmV0dXJuXCJUYWJcIj09PXQua2V5JiZ0LnNoaWZ0S2V5P2QodCk6dm9pZCAwfSx2PWZ1bmN0aW9uKCl7dmFyIHQ9aS5nZXROb2RlKGwpO3QmJih0LnRhYkluZGV4PTAsdC5mb2N1cygpKX0sZz1mdW5jdGlvbigpe3ZhciB0PWkuZ2V0Tm9kZShjKSxlPXQucXVlcnlTZWxlY3RvckFsbChcIi5cIitsKSxuPWUubGVuZ3RoLTEsbz1lW25dO28mJm8uZm9jdXMoKX0saD1mdW5jdGlvbih0KXt0W3QubGVuZ3RoLTFdLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsbSl9LHc9ZnVuY3Rpb24odCl7dFswXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGIpfSx5PWZ1bmN0aW9uKCl7dmFyIHQ9aS5nZXROb2RlKGMpLGU9dC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2wpO2UubGVuZ3RoJiYoaChlKSx3KGUpKX0seD1mdW5jdGlvbih0KXtpZihpLmdldE5vZGUodSk9PT10LnRhcmdldClyZXR1cm4gci5vbkFjdGlvbihhLkNBTkNFTF9LRVkpfSxfPWZ1bmN0aW9uKHQpe3ZhciBlPWkuZ2V0Tm9kZSh1KTtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHgpLHQmJmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseCl9LGs9ZnVuY3Rpb24odCl7by5kZWZhdWx0LnRpbWVyJiZjbGVhclRpbWVvdXQoby5kZWZhdWx0LnRpbWVyKSx0JiYoby5kZWZhdWx0LnRpbWVyPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHIub25BY3Rpb24oYS5DQU5DRUxfS0VZKX0sdCkpfSxPPWZ1bmN0aW9uKHQpe3QuY2xvc2VPbkVzYz9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixwKTpkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIixwKSx0LmRhbmdlck1vZGU/digpOmcoKSx5KCksXyh0LmNsb3NlT25DbGlja091dHNpZGUpLGsodC50aW1lcil9O2UuZGVmYXVsdD1PfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMyksaT1uKDM3KSxhPW4oMzgpLHM9e3RpdGxlOm51bGwsdGV4dDpudWxsLGljb246bnVsbCxidXR0b25zOnIuZGVmYXVsdEJ1dHRvbkxpc3QsY29udGVudDpudWxsLGNsYXNzTmFtZTpudWxsLGNsb3NlT25DbGlja091dHNpZGU6ITAsY2xvc2VPbkVzYzohMCxkYW5nZXJNb2RlOiExLHRpbWVyOm51bGx9LGM9T2JqZWN0LmFzc2lnbih7fSxzKTtlLnNldERlZmF1bHRzPWZ1bmN0aW9uKHQpe2M9T2JqZWN0LmFzc2lnbih7fSxzLHQpfTt2YXIgbD1mdW5jdGlvbih0KXt2YXIgZT10JiZ0LmJ1dHRvbixuPXQmJnQuYnV0dG9ucztyZXR1cm4gdm9pZCAwIT09ZSYmdm9pZCAwIT09biYmby50aHJvd0VycihcIkNhbm5vdCBzZXQgYm90aCAnYnV0dG9uJyBhbmQgJ2J1dHRvbnMnIG9wdGlvbnMhXCIpLHZvaWQgMCE9PWU/e2NvbmZpcm06ZX06bn0sdT1mdW5jdGlvbih0KXtyZXR1cm4gby5vcmRpbmFsU3VmZml4T2YodCsxKX0sZj1mdW5jdGlvbih0LGUpe28udGhyb3dFcnIodShlKStcIiBhcmd1bWVudCAoJ1wiK3QrXCInKSBpcyBpbnZhbGlkXCIpfSxkPWZ1bmN0aW9uKHQsZSl7dmFyIG49dCsxLHI9ZVtuXTtvLmlzUGxhaW5PYmplY3Qocil8fHZvaWQgMD09PXJ8fG8udGhyb3dFcnIoXCJFeHBlY3RlZCBcIit1KG4pK1wiIGFyZ3VtZW50ICgnXCIrcitcIicpIHRvIGJlIGEgcGxhaW4gb2JqZWN0XCIpfSxwPWZ1bmN0aW9uKHQsZSl7dmFyIG49dCsxLHI9ZVtuXTt2b2lkIDAhPT1yJiZvLnRocm93RXJyKFwiVW5leHBlY3RlZCBcIit1KG4pK1wiIGFyZ3VtZW50IChcIityK1wiKVwiKX0sbT1mdW5jdGlvbih0LGUsbixyKXt2YXIgaT10eXBlb2YgZSxhPVwic3RyaW5nXCI9PT1pLHM9ZSBpbnN0YW5jZW9mIEVsZW1lbnQ7aWYoYSl7aWYoMD09PW4pcmV0dXJue3RleHQ6ZX07aWYoMT09PW4pcmV0dXJue3RleHQ6ZSx0aXRsZTpyWzBdfTtpZigyPT09bilyZXR1cm4gZChuLHIpLHtpY29uOmV9O2YoZSxuKX1lbHNle2lmKHMmJjA9PT1uKXJldHVybiBkKG4scikse2NvbnRlbnQ6ZX07aWYoby5pc1BsYWluT2JqZWN0KGUpKXJldHVybiBwKG4sciksZTtmKGUsbil9fTtlLmdldE9wdHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07dmFyIG49e307dC5mb3JFYWNoKGZ1bmN0aW9uKGUsbyl7dmFyIHI9bSgwLGUsbyx0KTtPYmplY3QuYXNzaWduKG4scil9KTt2YXIgbz1sKG4pO24uYnV0dG9ucz1yLmdldEJ1dHRvbkxpc3RPcHRzKG8pLGRlbGV0ZSBuLmJ1dHRvbixuLmNvbnRlbnQ9aS5nZXRDb250ZW50T3B0cyhuLmNvbnRlbnQpO3ZhciB1PU9iamVjdC5hc3NpZ24oe30scyxjLG4pO3JldHVybiBPYmplY3Qua2V5cyh1KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2EuREVQUkVDQVRFRF9PUFRTW3RdJiZhLmxvZ0RlcHJlY2F0aW9uKHQpfSksdX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9e2VsZW1lbnQ6XCJpbnB1dFwiLGF0dHJpYnV0ZXM6e3BsYWNlaG9sZGVyOlwiXCJ9fTtlLmdldENvbnRlbnRPcHRzPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBvLmlzUGxhaW5PYmplY3QodCk/T2JqZWN0LmFzc2lnbihlLHQpOnQgaW5zdGFuY2VvZiBFbGVtZW50P3tlbGVtZW50OnR9OlwiaW5wdXRcIj09PXQ/cjpudWxsfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUubG9nRGVwcmVjYXRpb249ZnVuY3Rpb24odCl7dmFyIG49ZS5ERVBSRUNBVEVEX09QVFNbdF0sbz1uLm9ubHlSZW5hbWUscj1uLnJlcGxhY2VtZW50LGk9bi5zdWJPcHRpb24sYT1uLmxpbmsscz1vP1wicmVuYW1lZFwiOlwiZGVwcmVjYXRlZFwiLGM9J1N3ZWV0QWxlcnQgd2FybmluZzogXCInK3QrJ1wiIG9wdGlvbiBoYXMgYmVlbiAnK3MrXCIuXCI7aWYocil7Yys9XCIgUGxlYXNlIHVzZVwiKyhpPycgXCInK2krJ1wiIGluICc6XCIgXCIpKydcIicrcisnXCIgaW5zdGVhZC4nfXZhciBsPVwiaHR0cHM6Ly9zd2VldGFsZXJ0LmpzLm9yZ1wiO2MrPWE/XCIgTW9yZSBkZXRhaWxzOiBcIitsK2E6XCIgTW9yZSBkZXRhaWxzOiBcIitsK1wiL2d1aWRlcy8jdXBncmFkaW5nLWZyb20tMXhcIixjb25zb2xlLndhcm4oYyl9LGUuREVQUkVDQVRFRF9PUFRTPXt0eXBlOntyZXBsYWNlbWVudDpcImljb25cIixsaW5rOlwiL2RvY3MvI2ljb25cIn0saW1hZ2VVcmw6e3JlcGxhY2VtZW50OlwiaWNvblwiLGxpbms6XCIvZG9jcy8jaWNvblwifSxjdXN0b21DbGFzczp7cmVwbGFjZW1lbnQ6XCJjbGFzc05hbWVcIixvbmx5UmVuYW1lOiEwLGxpbms6XCIvZG9jcy8jY2xhc3NuYW1lXCJ9LGltYWdlU2l6ZTp7fSxzaG93Q2FuY2VsQnV0dG9uOntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIixsaW5rOlwiL2RvY3MvI2J1dHRvbnNcIn0sc2hvd0NvbmZpcm1CdXR0b246e3JlcGxhY2VtZW50OlwiYnV0dG9uXCIsbGluazpcIi9kb2NzLyNidXR0b25cIn0sY29uZmlybUJ1dHRvblRleHQ6e3JlcGxhY2VtZW50OlwiYnV0dG9uXCIsbGluazpcIi9kb2NzLyNidXR0b25cIn0sY29uZmlybUJ1dHRvbkNvbG9yOnt9LGNhbmNlbEJ1dHRvblRleHQ6e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wiLGxpbms6XCIvZG9jcy8jYnV0dG9uc1wifSxjbG9zZU9uQ29uZmlybTp7cmVwbGFjZW1lbnQ6XCJidXR0b25cIixzdWJPcHRpb246XCJjbG9zZU1vZGFsXCIsbGluazpcIi9kb2NzLyNidXR0b25cIn0sY2xvc2VPbkNhbmNlbDp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCIsc3ViT3B0aW9uOlwiY2xvc2VNb2RhbFwiLGxpbms6XCIvZG9jcy8jYnV0dG9uc1wifSxzaG93TG9hZGVyT25Db25maXJtOntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIn0sYW5pbWF0aW9uOnt9LGlucHV0VHlwZTp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGlucHV0VmFsdWU6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxpbnB1dFBsYWNlaG9sZGVyOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0saHRtbDp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGFsbG93RXNjYXBlS2V5OntyZXBsYWNlbWVudDpcImNsb3NlT25Fc2NcIixvbmx5UmVuYW1lOiEwLGxpbms6XCIvZG9jcy8jY2xvc2VvbmVzY1wifSxhbGxvd0NsaWNrT3V0c2lkZTp7cmVwbGFjZW1lbnQ6XCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCIsb25seVJlbmFtZTohMCxsaW5rOlwiL2RvY3MvI2Nsb3Nlb25jbGlja291dHNpZGVcIn19fV0pfSk7IiwiaW1wb3J0IHsgYXBwZW5kRG9tRWxlbWVudHMgfSBmcm9tIFwiLi9kb21TdHVmZi5qc1wiO1xuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcbi8vIGFzeW5jIGZ1bmN0aW9uIGZvciBjaGVja2luZyB3ZWF0aGVyIGRhdGFcbi8vIGlmIHJlc3BvbnNlLm9rICE9IHRydWUsIGEgbmV3IGVycm9yIHdpbGwgYmUgdGhyb3duIHdpdGggYSBzcGVjaWZpY1xuLy8gcmVzcG9uc2UgY29kZSAtIGkuZSA0MDMgZm9yIGZvcmJpZGRlbiAtIHRoaXMgcHJvdmlkZXMgY2xlYXJlciBsb2dnaW5nXG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRmV0Y2hXb3JrcyhpbnB1dCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0mcT0ke2lucHV0fWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHdlYXRoZXI7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciA9PSAnRXJyb3I6IDQwMCcpIHtcbiAgICAgICAgc3dhbCgnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbiBuYW1lISBFcnJvciBjb2RlOiA0MDAgQmFkIFJlcXVlc3QnKVxuICAgIH1cbiAgICBlbHNlIHN3YWwoYE9vb3BzIHNvbWV0aGluZyB3ZW50IHdyb25nIGAgKyBlcnJvcik7XG4gIH1cbn1cblxuLy9mdW5jdGlvbiB0byBjYWxsIHRoZSBhc3luYyBmdW5jdGlvbiwgYW5kIGFwcGVuZCB3ZWF0aGVyIGRhdGEgdG8gRE9NXG5mdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShzdGFydFRtLCBpbnB1dCkge1xuICBjaGVja0ZldGNoV29ya3MoaW5wdXQpXG4gICAgLnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgICAgYXBwZW5kRG9tRWxlbWVudHMod2VhdGhlcik7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBydW5UTSA9IERhdGUubm93KCkgLSBzdGFydFRtO1xuICAgICAgY29uc29sZS5sb2coYER1cmF0aW9uIHdhczogJHtydW5UTX1tc2ApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9O1xuIiwiLy8gaW1wb3J0IHNlYXJjaCBpY29uIGZyb20gaW1hZ2UgZm9sZGVyXG5pbXBvcnQgc2VhcmNoWm9vbUJveSBmcm9tIFwiLi4vaW1nL3NlYXJjaEljb24uc3ZnXCI7XG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tIFwiLi4vaW1nL2Fycm93Ui5zdmdcIjtcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSBcIi4uL2ltZy9hcnJvd0wuc3ZnXCI7XG5cblxuLy8gZWxlbWVudCBtYW5pcHVsYXRpb25cbmNvbnN0IGRvRG9tU3R1ZmYgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudFwiKTtcbiAgY29uc3QgZXhwYW5kSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kSWNvblwiKTtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmV3UGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyRGl2XCIpO1xuICBjb25zdCBsb2NhdGlvbkRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uRGV0YWlsc1wiKTtcbiAgY29uc3QgY3VycmVudERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnREZXRhaWxzXCIpO1xuXG4gIC8vIGNyZWF0ZXMgYSBuZXcgZGl2IGluIHRoZSBtYWluIGNvbnRhaW5lclxuICBjb25zdCBuZXdEaXZJbk1haW4gPSAoZGl2TmFtZSkgPT4ge1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGAke2Rpdk5hbWV9YCk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgfTtcblxuICAvLyBjcmVhdGVzIHR3byBtYWluIGRpdnMgd2l0aGluIHRoZSBjb250YWluZXIgZGl2XG4gIGNvbnN0IG5ld0RpdkluQ3RuciA9IChkaXZOYW1lKSA9PiB7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYCR7ZGl2TmFtZX1gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgfTtcbiAgLy8gY3JlYXRlIG5ldyBjb250ZW50IGRpdnMgd2l0aGluIHNwZWNpZmljIGNvbnRhaW5lclxuICBjb25zdCBuZXdDb250ZW50TG9jID0gKGRpdk5hbWUpID0+IHtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChgJHtkaXZOYW1lfWApO1xuICAgIGxvY2F0aW9uRGV0YWlscy5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICB9O1xuXG4gIC8vIGNyZWF0ZSBuZXcgY29udGVudCBkaXZzIHdpdGhpbiBzcGVjaWZpYyBjb250YWluZXJcbiAgY29uc3QgbmV3Q29udGVudEN1ciA9IChkaXZOYW1lKSA9PiB7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYCR7ZGl2TmFtZX1gKTtcbiAgICBjdXJyZW50RGV0YWlscy5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICB9O1xuXG4gIC8vIGNyZWF0ZSBuZXcgcGFyYWdyYXBoIGJveCBpbnNpZGUgdGFyZ2V0IGNvbnRhaW5lclxuICBjb25zdCBuZXdQYXJBZGQgPSAodGFyZ2V0RGl2LCBkaXZOYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0RGl2fWApO1xuICAgIG5ld1Bhci5jbGFzc0xpc3QuYWRkKGAke2Rpdk5hbWV9YCk7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5ld1Bhcik7XG4gIH07XG5cbiAgLy8gYXBwZW5kIGRhdGEgdG8gdGhlIGRvbVxuICBjb25zdCBhcHBlbmREb20gPSAodGFyZ2V0TmFtZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldE5hbWV9YCk7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcblxuICAvLyBhcHBlbmRzIHNlYXJjaCBpY29uIHRvIHRoZSBzZWFyY2ggdGV4dCwgY3JlYXRpbmcgcHNldWRvIGJ1dHRvblxuICAvLyBuZWVkcyB0byBiZSBzdHlsZWQgYXBwcm9wcmlhdGVseSBhdCBsYXRlciBzdGFnZVxuICBjb25zdCBhcHBlbmRTZWFyY2hJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoSWNvblwiKTtcbiAgICBjb25zdCBzZWFyY2hJY29uID0gc2VhcmNoWm9vbUJveTtcbiAgICBzZWFyY2hJbWcuc3JjID0gc2VhcmNoSWNvbjtcbiAgfTtcblxuICAvLyBhcHBlbmRzIHNlYXJjaCBpY29uIHRvIHRoZSBzZWFyY2ggdGV4dCwgY3JlYXRpbmcgcHNldWRvIGJ1dHRvblxuICAvLyBuZWVkcyB0byBiZSBzdHlsZWQgYXBwcm9wcmlhdGVseSBhdCBsYXRlciBzdGFnZVxuICBjb25zdCBhcHBlbmRFeHBhbmRJY29uUmlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwYW5kQXJyb3cgPSBhcnJvd1JpZ2h0O1xuICAgIGV4cGFuZEljb24uc3JjID0gZXhwYW5kQXJyb3c7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kRXhwYW5kSWNvbkxlZnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwYW5kQXJyb3cgPSBhcnJvd0xlZnQ7XG4gICAgZXhwYW5kSWNvbi5zcmMgPSBleHBhbmRBcnJvdztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFwcGVuZEV4cGFuZEljb25SaWdodCxcbiAgICBhcHBlbmRFeHBhbmRJY29uTGVmdCxcbiAgICBuZXdQYXJBZGQsXG4gICAgYXBwZW5kRG9tLFxuICAgIG5ld0RpdkluTWFpbixcbiAgICBuZXdEaXZJbkN0bnIsXG4gICAgbmV3Q29udGVudEN1cixcbiAgICBuZXdDb250ZW50TG9jLFxuICAgIGFwcGVuZFNlYXJjaEljb24sXG4gIH07XG59O1xuXG4vLyBmdW5jdGlvbiBuZWF0bHkgY3JlYXRlcyBkb20gc2tlbGV0b24gd2hlcmUgdmFsdWVzIG9idGFpbmVkIGZyb20gQVBJIGNhbiBiZSBzdG9yZWRcbmZ1bmN0aW9uIG5ld0RvbVNrZWxldG9uKCkge1xuICBkb0RvbVN0dWZmKCkubmV3RGl2SW5NYWluKFwibG9jYXRpb25OYW1lXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3RGl2SW5NYWluKFwiY29udGFpbmVyRGl2XCIpO1xuICBkb0RvbVN0dWZmKCkubmV3RGl2SW5DdG5yKFwibG9jYXRpb25EZXRhaWxzXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3RGl2SW5DdG5yKFwiY3VycmVudERldGFpbHNcIik7XG5cbiAgZG9Eb21TdHVmZigpLm5ld0NvbnRlbnRMb2MoXCJsb2NSZWdpb25cIik7XG4gIGRvRG9tU3R1ZmYoKS5uZXdDb250ZW50TG9jKFwibG9jTGF0XCIpO1xuICBkb0RvbVN0dWZmKCkubmV3Q29udGVudExvYyhcImxvY0xvblwiKTtcbiAgZG9Eb21TdHVmZigpLm5ld0NvbnRlbnRMb2MoXCJsb2NUaW1lXCIpO1xuXG4gIGRvRG9tU3R1ZmYoKS5uZXdDb250ZW50Q3VyKFwiY3VyckNvbmRpdGlvblwiKTtcbiAgZG9Eb21TdHVmZigpLm5ld0NvbnRlbnRDdXIoXCJjdXJyVGVtcFwiKTtcbiAgZG9Eb21TdHVmZigpLm5ld0NvbnRlbnRDdXIoXCJjdXJySHVtXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3Q29udGVudEN1cihcImN1cnJGZWVsc1wiKTtcbiAgZG9Eb21TdHVmZigpLm5ld0NvbnRlbnRDdXIoXCJjdXJyV2luZFwiKTtcbiAgZG9Eb21TdHVmZigpLm5ld0NvbnRlbnRDdXIoXCJjdXJyR3VzdFwiKTtcblxuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwibG9jUmVnaW9uXCIsIFwibG9jUmVnaW9uVGVtcFwiKTtcbiAgZG9Eb21TdHVmZigpLm5ld1BhckFkZChcImxvY1JlZ2lvblwiLCBcImxvY1JlZ2lvblZhbFwiKTtcbiAgZG9Eb21TdHVmZigpLm5ld1BhckFkZChcImxvY0xhdFwiLCBcImxvY0xhdFRlbXBcIik7XG4gIGRvRG9tU3R1ZmYoKS5uZXdQYXJBZGQoXCJsb2NMYXRcIiwgXCJsb2NMYXRWYWxcIik7XG4gIGRvRG9tU3R1ZmYoKS5uZXdQYXJBZGQoXCJsb2NMb25cIiwgXCJsb2NMb25UZW1wXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwibG9jTG9uXCIsIFwibG9jTG9uVmFsXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwibG9jVGltZVwiLCBcImxvY1RpbWVUZW1wXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwibG9jVGltZVwiLCBcImxvY1RpbWVWYWxcIik7XG5cbiAgZG9Eb21TdHVmZigpLm5ld1BhckFkZChcImN1cnJDb25kaXRpb25cIiwgXCJjdXJyQ29uZGl0aW9uVGVtcFwiKTtcbiAgZG9Eb21TdHVmZigpLm5ld1BhckFkZChcImN1cnJDb25kaXRpb25cIiwgXCJjdXJyQ29uZGl0aW9uVmFsXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwiY3VyclRlbXBcIiwgXCJjdXJyVGVtcFRlbXBcIik7XG4gIGRvRG9tU3R1ZmYoKS5uZXdQYXJBZGQoXCJjdXJyVGVtcFwiLCBcImN1cnJUZW1wVmFsXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwiY3Vyckh1bVwiLCBcImN1cnJIdW1UZW1wXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwiY3Vyckh1bVwiLCBcImN1cnJIdW1WYWxcIik7XG4gIGRvRG9tU3R1ZmYoKS5uZXdQYXJBZGQoXCJjdXJyRmVlbHNcIiwgXCJjdXJyRmVlbHNUZW1wXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwiY3VyckZlZWxzXCIsIFwiY3VyckZlZWxzVmFsXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwiY3VycldpbmRcIiwgXCJjdXJyV2luZFRlbXBcIik7XG4gIGRvRG9tU3R1ZmYoKS5uZXdQYXJBZGQoXCJjdXJyV2luZFwiLCBcImN1cnJXaW5kVmFsXCIpO1xuICBkb0RvbVN0dWZmKCkubmV3UGFyQWRkKFwiY3Vyckd1c3RcIiwgXCJjdXJyR3VzdFRlbXBcIik7XG4gIGRvRG9tU3R1ZmYoKS5uZXdQYXJBZGQoXCJjdXJyR3VzdFwiLCBcImN1cnJHdXN0VmFsXCIpO1xuICBkb0RvbVN0dWZmKCkuYXBwZW5kRG9tKFwibG9jUmVnaW9uVGVtcFwiLCBcIlJlZ2lvbjpcIik7XG4gIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJsb2NMYXRUZW1wXCIsIFwiTGF0aXR1ZGU6XCIpO1xuICBkb0RvbVN0dWZmKCkuYXBwZW5kRG9tKFwibG9jTG9uVGVtcFwiLCBcIkxvbmdpdHVkZTpcIik7XG4gIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJsb2NUaW1lVGVtcFwiLCBcIkxvY2FsIFRpbWU6XCIpO1xuICBkb0RvbVN0dWZmKCkuYXBwZW5kRG9tKFwiY3VyckNvbmRpdGlvblRlbXBcIiwgXCJDb25kaXRpb25zOlwiKTtcbiAgZG9Eb21TdHVmZigpLmFwcGVuZERvbShcImN1cnJUZW1wVGVtcFwiLCBcIlRlbXBlcmF0dXJlOlwiKTtcbiAgZG9Eb21TdHVmZigpLmFwcGVuZERvbShcImN1cnJIdW1UZW1wXCIsIFwiSHVtaWRpdHk6XCIpO1xuICBkb0RvbVN0dWZmKCkuYXBwZW5kRG9tKFwiY3VyckZlZWxzVGVtcFwiLCBcIkZlZWxzIGxpa2U6XCIpO1xuICBkb0RvbVN0dWZmKCkuYXBwZW5kRG9tKFwiY3VycldpbmRUZW1wXCIsIFwiV2luZCBzcGVlZDpcIik7XG4gIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJjdXJyR3VzdFRlbXBcIiwgXCJHdXN0IHNwZWVkOlwiKTtcbn1cblxuLy8gZnVuY3Rpb24gbmVhdGx5IGFwcGVuZHMgdGhlIGRvbSBlbGVtZW50cyBjcmVhdGVkIGZyb20gdmFsdWVzIG9idGFpbmVkIGJ5IHRoZSBBUEkgY2FsbFxuZnVuY3Rpb24gYXBwZW5kRG9tRWxlbWVudHMod2VhdGhlcikge1xuICBpZiAod2VhdGhlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBsb2NhdGlvbiBub3QgZm91bmRcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9Eb21TdHVmZigpLmFwcGVuZERvbShcImxvY2F0aW9uTmFtZVwiLCB3ZWF0aGVyLmxvY2F0aW9uLm5hbWUpO1xuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJsb2NSZWdpb25WYWxcIiwgd2VhdGhlci5sb2NhdGlvbi5yZWdpb24pO1xuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJsb2NMYXRWYWxcIiwgd2VhdGhlci5sb2NhdGlvbi5sYXQpO1xuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJsb2NMb25WYWxcIiwgd2VhdGhlci5sb2NhdGlvbi5sb24pO1xuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJsb2NUaW1lVmFsXCIsIHdlYXRoZXIubG9jYXRpb24ubG9jYWx0aW1lKTtcblxuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJjdXJyQ29uZGl0aW9uVmFsXCIsIHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gICAgZG9Eb21TdHVmZigpLmFwcGVuZERvbShcImN1cnJUZW1wVmFsXCIsIHdlYXRoZXIuY3VycmVudC50ZW1wX2MpO1xuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJjdXJySHVtVmFsXCIsIHdlYXRoZXIuY3VycmVudC5odW1pZGl0eSk7XG4gICAgZG9Eb21TdHVmZigpLmFwcGVuZERvbShcImN1cnJGZWVsc1ZhbFwiLCB3ZWF0aGVyLmN1cnJlbnQuZmVlbHNsaWtlX2MpO1xuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJjdXJyV2luZFZhbFwiLCB3ZWF0aGVyLmN1cnJlbnQud2luZF9rcGgpO1xuICAgIGRvRG9tU3R1ZmYoKS5hcHBlbmREb20oXCJjdXJyR3VzdFZhbFwiLCB3ZWF0aGVyLmN1cnJlbnQuZ3VzdF9rcGgpO1xuICB9XG59XG5cbmV4cG9ydCB7IGRvRG9tU3R1ZmYsIG5ld0RvbVNrZWxldG9uLCBhcHBlbmREb21FbGVtZW50cyB9O1xuIiwiLy8gdmFsaWRhdGlvbiBzdGF0ZW1lbnQgZm9yIGZvcm1cbi8vIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyB1c2VkIHRvIGNoZWNrIGZvciBzcGVjaWFsIGNoYXJhY3RlcnMsIG51bWJlciBjaGFyYWN0ZXJzXG4vLyBzcGFjZXMgYXJlIGFsbG93ZWQgYXMgY2VydGFpbiBwbGFjZXMgaGF2ZSBzcGFjZXMgaW4gdGhlaXIgbmFtZXMsIGkuZSBIb25nIEtvbmdcbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBhbHNvIGR5bmFtaWNhbGx5IGFkanVzdCB0ZXh0IGNvbnRlbnQgb2YgdGhlIGVycm9yIGRpdiB0byBnaXZlXG4vLyBlcnJvciBmZWVkYmFjayB0byB0aGUgdXNlclxuXG5jb25zdCBjaGVja0Zvcm1WYWxpZGF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoSW5wdXRcIik7XG4gIGNvbnN0IGVycm9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9ySW5wdXRcIik7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnV0dG9uXCIpO1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoXCJeW2EtekEtWiBdKyRcIik7XG5cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJlcnJvckFjdGl2ZVwiO1xuICAgICAgZXJyb3JJbnB1dC5jbGFzc05hbWUgPSBcImVycm9ySW5wdXQgQWN0aXZlXCI7XG4gICAgICBlcnJvcklucHV0LnRleHRDb250ZW50ID0gXCJTZWFyY2ggZmllbGQgY2Fubm90IGJlIGVtcHR5IVwiO1xuXG4gICAgfSBlbHNlIGlmICghaW5wdXQudmFsdWUubWF0Y2gocmUpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIklOVkFMSUQgSU5QVVRcIik7XG4gICAgICBpbnB1dC5jbGFzc05hbWUgPSBcImVycm9yQWN0aXZlXCI7XG4gICAgICBlcnJvcklucHV0LmNsYXNzTmFtZSA9IFwiZXJyb3JJbnB1dCBBY3RpdmVcIjtcbiAgICAgIGVycm9ySW5wdXQudGV4dENvbnRlbnQgPVxuICAgICAgICBcIllvdSBtdXN0IGVudGVyIGEgQ2l0eSBuYW1lLCB0aGUgbmFtZSBjYW5ub3QgaW5jbHVkZSBudW1iZXJzIG9yIGFueSBzcGVjaWFsIGNoYXJhY3RlcnMhXCI7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgIGVycm9ySW5wdXQuY2xhc3NOYW1lID0gXCJlcnJvcklucHV0XCI7XG4gICAgICBlcnJvcklucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiBcbiAgICB9XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgeyBjaGVja0Zvcm1WYWxpZGF0aW9uIH07XG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2FwaS5qc1wiO1xuLy8gdGhpcyBtb2R1bGUgdGFrZXMgY2FyZSBvZiBzZWFyY2ggc3VibWlzc2lvblxuXG5mdW5jdGlvbiBzdWJtaXRTZWFyY2goKSB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnV0dG9uXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoSW5wdXRcIik7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JJbnB1dCwgLkFjdGl2ZVwiKTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGlmIChlcnJvck1lc3NhZ2UuY2xhc3NOYW1lLm1hdGNoKFwiQWN0aXZlXCIpID09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0VG0gPSBEYXRlLm5vdygpO1xuICAgICAgZ2V0V2VhdGhlckRhdGEoc3RhcnRUbSwgaW5wdXQudmFsdWUpO1xuICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbnQgc3VibWl0IHRoaXMgd3Jvbmcgc2hpdFwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBzdWJtaXRTZWFyY2ggfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBkb0RvbVN0dWZmLCBuZXdEb21Ta2VsZXRvbiB9IGZyb20gXCIuL21vZHVsZXMvZG9tU3R1ZmYuanNcIjtcbmltcG9ydCB7IGNoZWNrRm9ybVZhbGlkYXRpb24gfSBmcm9tIFwiLi9tb2R1bGVzL2Zvcm12YWxpZC5qc1wiO1xuaW1wb3J0IHsgc3VibWl0U2VhcmNoIH0gZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hTdWJtaXQuanNcIjtcblxuXG5cbm5ld0RvbVNrZWxldG9uKCk7XG5kb0RvbVN0dWZmKCkuYXBwZW5kU2VhcmNoSWNvbigpO1xuZG9Eb21TdHVmZigpLmFwcGVuZEV4cGFuZEljb25SaWdodCgpO1xuY2hlY2tGb3JtVmFsaWRhdGlvbigpO1xuc3VibWl0U2VhcmNoKCk7XG5cblxuLy8gc29tZSBzdHVmZiB0byBnZXQgbGlzdCBvZiB3ZWF0aGVyIGNvbmRpdGlvbnMgZm9yIGxhdGVyIVxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29uZGl0aW9ucygpIHtcblxuICBjb25zdCBnZXRKc29uID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2RvY3MvY29uZGl0aW9ucy5qc29uJywge21vZGU6ICdjb3JzJ30pO1xuICBjb25zdCBqc29uID0gYXdhaXQgZ2V0SnNvbi5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGpzb24pO1xuICBsZXQgYXJyID0gW107XG4gIGZvciAobGV0IHggb2YganNvbikge1xuICAgIGlmICh4LmRheSA9PT0geC5uaWdodCkge1xuICAgICAgY29uc29sZS5sb2coeC5kYXkpO1xuICAgICAgYXJyLnB1c2goeC5kYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyh4LmRheSk7XG4gICAgICBjb25zb2xlLmxvZyh4Lm5pZ2h0KTtcbiAgICAgIGFyci5wdXNoKHguZGF5LCB4Lm5pZ2h0KTtcbiAgICAgXG4gICAgfSBcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGFycilcblxufVxuZ2V0Q29uZGl0aW9ucygpO1xuXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9