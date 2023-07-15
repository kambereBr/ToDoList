/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/updateAction.js":
/*!*****************************!*\
  !*** ./src/updateAction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

var editTastkStatus = function editTastkStatus(tasks, taskIndex, status) {
  tasks[taskIndex - 1].completed = status;
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTastkStatus);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "clearAllCompleted": () => (/* binding */ clearAllCompleted),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTaskDescription": () => (/* binding */ editTaskDescription),
/* harmony export */   "localData": () => (/* binding */ localData),
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
var localData = window.localStorage;
function Task(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}
var updateLocalStorage = function updateLocalStorage(data) {
  data.forEach(function (itemTask, index) {
    itemTask.index = index + 1;
  });
  localData.setItem('taskData', JSON.stringify(data));
};
var addTask = function addTask(tasks, description) {
  var newTask = new Task(description, false, tasks.length + 1);
  tasks.push(newTask);
  updateLocalStorage(tasks);
};
var deleteTask = function deleteTask(tasks, taskIndex) {
  if (tasks.length === 1) {
    tasks = [];
  } else {
    tasks.splice(taskIndex - 1, 1);
    for (var i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
  }
  updateLocalStorage(tasks);
};
var filterTask = function filterTask(tasks) {
  return tasks.completed === false;
};
var clearAllCompleted = function clearAllCompleted(tasks) {
  if (tasks.length === 1) {
    tasks = [];
  } else {
    tasks = tasks.filter(filterTask);
    for (var i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
  }
  updateLocalStorage(tasks);
};
var editTaskDescription = function editTaskDescription(tasks, taskIndex, description) {
  tasks[taskIndex - 1].description = description;
  updateLocalStorage(tasks);
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #ced9da;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  margin-top: 50px;\n  padding: 20px;\n  overflow-y: auto;\n}\n\na,\n.item-description,\n.todo-title {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.item-description {\n  border: none;\n  background-color: white;\n}\n\n.container {\n  background-color: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  width: 40%;\n}\n\n.list-header-container {\n  padding-top: 10px;\n}\n\n.todo-title {\n  font-size: 1.3rem;\n  color: #545862;\n  font-weight: bold;\n}\n\n.refresh-img-class,\n.enter-img-class,\n.more-img-class {\n  width: 20px;\n  height: 20px;\n}\n\n.refresh-img-class:hover {\n  cursor: pointer;\n  transform: scale(1.1) rotate(20deg);\n}\n\n.more-img-class:hover {\n  cursor: grab;\n}\n\nul {\n  width: 100%;\n  padding: 0;\n  margin-bottom: -9px;\n}\n\nli {\n  list-style: none;\n}\n\n.list-title,\n.todo-create {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.add-field {\n  width: 95%;\n  border: none;\n  outline: none;\n  font-style: italic;\n  font-size: 0.9rem;\n}\n\n.checkbox-container {\n  display: flex;\n}\n\n.checkbox-bbtn-class {\n  margin-right: 15px;\n}\n\n.footer-container {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #e9e9e9;\n}\n\na {\n  text-decoration: none;\n  color: #545862;\n  font-weight: bold;\n}\n\n.clear-btn:hover {\n  color: red;\n}\n\nhr {\n  border: none;\n  background: #e7e6e6;\n  height: 1px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AASA;EACE,sBAAA;AAPF;;AAUA;EACE,yBAZc;EAad,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;AAPF;;AAUA;;;EAGE,iCAzBK;AAkBP;;AAUA;EACE,YAAA;EACA,uBAAA;AAPF;;AAWA;EACE,uBAAA;EACA,wEArCW;EAsCX,kBAAA;EACA,UAAA;AARF;;AAWA;EACE,iBAAA;AARF;;AAWA;EACE,iBAAA;EACA,cA9CW;EA+CX,iBAAA;AARF;;AAWA;;;EAGE,WAAA;EACA,YAAA;AARF;;AAWA;EACE,eAAA;EACA,mCAAA;AARF;;AAWA;EACE,YAAA;AARF;;AAWA;EACE,WAAA;EACA,UAAA;EACA,mBAAA;AARF;;AAWA;EACE,gBAAA;AARF;;AAWA;;EAEE,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;AARF;;AAWA;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;AARF;;AAWA;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;AARF;;AAWA;EACE,aAAA;AARF;;AAWA;EACE,kBAAA;AARF;;AAWA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBA/GkB;AAuGpB;;AAWA;EACE,qBAAA;EACA,cArHW;EAsHX,iBAAA;AARF;;AAWA;EACE,UAAA;AARF;;AAWA;EACE,YAAA;EACA,mBAAA;EACA,WAAA;AARF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n$primary-color: #ced9da;\r\n$secondary-color: #f4f4f4;\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n$font: 'Roboto', sans-serif;\r\n$gray-color: #545862;\r\n$gray-footer-color: #e9e9e9;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: $primary-color;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  margin-top: 50px;\r\n  padding: 20px;\r\n  overflow-y: auto;\r\n}\r\n\r\na,\r\n.item-description,\r\n.todo-title {\r\n  font-family: $font;\r\n}\r\n\r\n.item-description {\r\n  border: none;\r\n  background-color: white;\r\n  // width: 300px;\r\n}\r\n\r\n.container {\r\n  background-color: white;\r\n  box-shadow: $box-shadow;\r\n  text-align: center;\r\n  width: 40%;\r\n}\r\n\r\n.list-header-container {\r\n  padding-top: 10px;\r\n}\r\n\r\n.todo-title {\r\n  font-size: 1.3rem;\r\n  color: $gray-color;\r\n  font-weight: bold;\r\n}\r\n\r\n.refresh-img-class,\r\n.enter-img-class,\r\n.more-img-class {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.refresh-img-class:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1) rotate(20deg);\r\n}\r\n\r\n.more-img-class:hover {\r\n  cursor: grab;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  padding: 0;\r\n  margin-bottom: -9px;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.list-title,\r\n.todo-create {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.add-field {\r\n  width: 95%;\r\n  border: none;\r\n  outline: none;\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.checkbox-container {\r\n  display: flex;\r\n}\r\n\r\n.checkbox-bbtn-class {\r\n  margin-right: 15px;\r\n}\r\n\r\n.footer-container {\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: $gray-footer-color;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: $gray-color;\r\n  font-weight: bold;\r\n}\r\n\r\n.clear-btn:hover {\r\n  color: red;\r\n}\r\n\r\nhr {\r\n  border: none;\r\n  background: rgb(231, 230, 230);\r\n  height: 1px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/assets/icons8_available_updates_20px_1.png":
/*!********************************************************!*\
  !*** ./src/assets/icons8_available_updates_20px_1.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons8_available_updates_20px_1.png";

/***/ }),

/***/ "./src/assets/icons8_enter_key_20px.png":
/*!**********************************************!*\
  !*** ./src/assets/icons8_enter_key_20px.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons8_enter_key_20px.png";

/***/ }),

/***/ "./src/assets/icons8_menu_vertical_20px.png":
/*!**************************************************!*\
  !*** ./src/assets/icons8_menu_vertical_20px.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons8_menu_vertical_20px.png";

/***/ }),

/***/ "./src/assets/icons8_trash_20px.png":
/*!******************************************!*\
  !*** ./src/assets/icons8_trash_20px.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons8_trash_20px.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _assets_icons8_available_updates_20px_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons8_available_updates_20px_1.png */ "./src/assets/icons8_available_updates_20px_1.png");
/* harmony import */ var _assets_icons8_enter_key_20px_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons8_enter_key_20px.png */ "./src/assets/icons8_enter_key_20px.png");
/* harmony import */ var _assets_icons8_menu_vertical_20px_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons8_menu_vertical_20px.png */ "./src/assets/icons8_menu_vertical_20px.png");
/* harmony import */ var _assets_icons8_trash_20px_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons8_trash_20px.png */ "./src/assets/icons8_trash_20px.png");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _updateAction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateAction.js */ "./src/updateAction.js");







var imageRefresh = document.getElementById('refresh-img');
imageRefresh.src = _assets_icons8_available_updates_20px_1_png__WEBPACK_IMPORTED_MODULE_1__;
var imageEnter = document.getElementById('enter-img');
imageEnter.src = _assets_icons8_enter_key_20px_png__WEBPACK_IMPORTED_MODULE_2__;
var addField = document.getElementById('add-field');
var clearBtn = document.getElementById('clear-all-btn');
var listContainer = document.querySelector('.list-body-container');
var myData = [];
function cleanSelected() {
  var todoItem = document.querySelectorAll('.item-description');
  todoItem.forEach(function (items) {
    var element = document.getElementById(items.id);
    var container = document.getElementById("item-".concat(items.id));
    var moreImg = document.getElementById("more-img-".concat(items.id));
    element.disabled = true;
    container.style.background = 'none';
    element.style.background = '#ffff';
    element.style.outline = '#ffff';
    moreImg.src = _assets_icons8_menu_vertical_20px_png__WEBPACK_IMPORTED_MODULE_3__;
  });
}
function renderList() {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_5__.localData.getItem('taskData')) {
    myData = JSON.parse(_utils_js__WEBPACK_IMPORTED_MODULE_5__.localData.getItem('taskData'));
    var itemsArraySorted = myData.sort(function (a, b) {
      return a.index - b.index;
    });
    listContainer.replaceChildren();
    itemsArraySorted.forEach(function (item) {
      var li = document.createElement('li');
      li.classList.add('todo-item');
      li.id = "item-".concat(item.index);
      var divChkCont = document.createElement('div');
      divChkCont.classList.add('checkbox-container');
      var divChkBtn = document.createElement('div');
      divChkBtn.classList.add('checkbox-bbtn-class');
      var inputCheck = document.createElement('input');
      inputCheck.classList.add('add-field');
      inputCheck.type = 'checkbox';
      inputCheck.id = "chk-".concat(item.index);
      inputCheck.checked = item.completed;
      var divDescr = document.createElement('div');
      divDescr.classList.add('item-description-container');
      var inputDescript = document.createElement('input');
      inputDescript.type = 'text';
      inputDescript.id = item.index;
      inputDescript.value = item.description;
      inputDescript.classList.add('item-description');
      inputDescript.disabled = true;
      var imgBtn = document.createElement('img');
      imgBtn.id = "more-img-".concat(item.index);
      imgBtn.alt = 'more icon';
      imgBtn.src = _assets_icons8_menu_vertical_20px_png__WEBPACK_IMPORTED_MODULE_3__;
      imgBtn.classList.add('more-img-class');
      var hr = document.createElement('hr');

      // Events listeners
      li.addEventListener('click', function () {
        cleanSelected();
        li.style.background = '#f7ef8c';
        inputDescript.disabled = false;
        inputDescript.focus();
        inputDescript.style.outline = '#f7ef8c';
        inputDescript.style.background = '#f7ef8c';
        imgBtn.src = _assets_icons8_trash_20px_png__WEBPACK_IMPORTED_MODULE_4__;
      });
      imgBtn.addEventListener('click', function () {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.deleteTask)(myData, item.index);
        renderList();
      });
      inputDescript.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && inputDescript !== '') {
          // update data
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.editTaskDescription)(myData, inputDescript.id, inputDescript.value);
          renderList();
        }
      });
      inputCheck.addEventListener('change', function () {
        var completed = !!inputCheck.checked;
        (0,_updateAction_js__WEBPACK_IMPORTED_MODULE_6__["default"])(myData, item.index, completed);
      });
      divChkBtn.appendChild(inputCheck);
      divChkCont.appendChild(divChkBtn);
      divDescr.appendChild(inputDescript);
      divChkCont.appendChild(divDescr);
      li.appendChild(divChkCont);
      li.appendChild(imgBtn);
      listContainer.append(li);
      listContainer.appendChild(hr);
    });
  }
}
renderList();

// 1. add item
addField.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' && addField.value !== '') {
    event.preventDefault();
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.addTask)(myData, addField.value);
    addField.value = '';
    renderList();
  }
});

// clear all completed tasks
clearBtn.addEventListener('click', function () {
  if (window.confirm('Do you want to clear all completed tasks ?') === true) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.clearAllCompleted)(myData);
    renderList();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundleb24be21a8f5a0e88e0cd.js.map