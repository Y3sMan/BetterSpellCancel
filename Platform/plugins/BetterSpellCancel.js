/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = skyrimPlatform;

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pl": () => (/* binding */ pl)
/* harmony export */ });
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__);


var r = false;
var r_equipped;
var r_event = '';
var l = false;
var l_equipped;
var l_event = 'WeapOutLeftReplaceForceEquip';
function pl() { return _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendAnimationEvent.add({
    enter: function (ctx) {
        var e = ctx.animEventName;
        if (e.toLowerCase().includes('mrh_spell') && e.toLowerCase().includes('start')) {
            r = true;
        }
        ;
        if (e.toLowerCase().includes('mrh_spellrelease_event')) {
            r = false;
        }
        ;
        if ((e.toLowerCase().includes('mlh_spell') && e.toLowerCase().includes('start')) || (e.toLowerCase().includes('dualmagic_spell') && e.toLowerCase().includes('start'))) {
            l = true;
        }
        ;
        if (e.toLowerCase().includes('mlh_spellrelease_event')) {
            l = false;
        }
        ;
        (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
            l_equipped = pl().getEquippedItemType(1);
            r_equipped = pl().getEquippedItemType(0);
            if (l_equipped == 9 && r_equipped == 9) {
                l_event = 'MagicForceEquip';
                r_event = 'MagicForceEquip';
            }
            else if (l_equipped != 9 && r_equipped == 9) {
                l_event = 'WeapOutLeftReplaceForceEquip';
            }
            else if (l_equipped == 9 && r_equipped != 9) {
                r_event = 'magic_equip';
            }
        });
        if (e.toLowerCase().includes('unequip')) {
            if (r) {
                ctx.animEventName = r_event;
                r = false;
            }
            ;
            if (l) {
                ctx.animEventName = l_event;
                l = false;
            }
            ;
        }
    },
    leave: function () { }
}, 0x14, 0x14); // filter out non-player events

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmV0dGVyU3BlbGxDYW5jZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhEO0FBQ3ZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGdCQUFnQixPQUFPLDRFQUFjO0FBQzVDLDBGQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlclNwZWxsQ2FuY2VsL2V4dGVybmFsIHZhciBbXCJza3lyaW1QbGF0Zm9ybVwiXSIsIndlYnBhY2s6Ly9CZXR0ZXJTcGVsbENhbmNlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CZXR0ZXJTcGVsbENhbmNlbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9CZXR0ZXJTcGVsbENhbmNlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQmV0dGVyU3BlbGxDYW5jZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9CZXR0ZXJTcGVsbENhbmNlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0JldHRlclNwZWxsQ2FuY2VsLy4vc3JjL0JldHRlclNwZWxsQ2FuY2VsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gc2t5cmltUGxhdGZvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG9uY2UsIEdhbWUgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9za3lyaW0tcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgaG9va3MgfSBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHIgPSBmYWxzZTtcclxudmFyIHJfZXF1aXBwZWQ7XHJcbnZhciByX2V2ZW50ID0gJyc7XHJcbnZhciBsID0gZmFsc2U7XHJcbnZhciBsX2VxdWlwcGVkO1xyXG52YXIgbF9ldmVudCA9ICdXZWFwT3V0TGVmdFJlcGxhY2VGb3JjZUVxdWlwJztcclxuZXhwb3J0IGZ1bmN0aW9uIHBsKCkgeyByZXR1cm4gR2FtZS5nZXRQbGF5ZXIoKTsgfVxyXG5ob29rcy5zZW5kQW5pbWF0aW9uRXZlbnQuYWRkKHtcclxuICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIGUgPSBjdHguYW5pbUV2ZW50TmFtZTtcclxuICAgICAgICBpZiAoZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtcmhfc3BlbGwnKSAmJiBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3N0YXJ0JykpIHtcclxuICAgICAgICAgICAgciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtcmhfc3BlbGxyZWxlYXNlX2V2ZW50JykpIHtcclxuICAgICAgICAgICAgciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKChlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21saF9zcGVsbCcpICYmIGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc3RhcnQnKSkgfHwgKGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZHVhbG1hZ2ljX3NwZWxsJykgJiYgZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdGFydCcpKSkge1xyXG4gICAgICAgICAgICBsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGlmIChlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21saF9zcGVsbHJlbGVhc2VfZXZlbnQnKSkge1xyXG4gICAgICAgICAgICBsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBvbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxfZXF1aXBwZWQgPSBwbCgpLmdldEVxdWlwcGVkSXRlbVR5cGUoMSk7XHJcbiAgICAgICAgICAgIHJfZXF1aXBwZWQgPSBwbCgpLmdldEVxdWlwcGVkSXRlbVR5cGUoMCk7XHJcbiAgICAgICAgICAgIGlmIChsX2VxdWlwcGVkID09IDkgJiYgcl9lcXVpcHBlZCA9PSA5KSB7XHJcbiAgICAgICAgICAgICAgICBsX2V2ZW50ID0gJ01hZ2ljRm9yY2VFcXVpcCc7XHJcbiAgICAgICAgICAgICAgICByX2V2ZW50ID0gJ01hZ2ljRm9yY2VFcXVpcCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobF9lcXVpcHBlZCAhPSA5ICYmIHJfZXF1aXBwZWQgPT0gOSkge1xyXG4gICAgICAgICAgICAgICAgbF9ldmVudCA9ICdXZWFwT3V0TGVmdFJlcGxhY2VGb3JjZUVxdWlwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsX2VxdWlwcGVkID09IDkgJiYgcl9lcXVpcHBlZCAhPSA5KSB7XHJcbiAgICAgICAgICAgICAgICByX2V2ZW50ID0gJ21hZ2ljX2VxdWlwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3VuZXF1aXAnKSkge1xyXG4gICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgY3R4LmFuaW1FdmVudE5hbWUgPSByX2V2ZW50O1xyXG4gICAgICAgICAgICAgICAgciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5hbmltRXZlbnROYW1lID0gbF9ldmVudDtcclxuICAgICAgICAgICAgICAgIGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxlYXZlOiBmdW5jdGlvbiAoKSB7IH1cclxufSwgMHgxNCwgMHgxNCk7IC8vIGZpbHRlciBvdXQgbm9uLXBsYXllciBldmVudHNcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9