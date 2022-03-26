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
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);

var r = false;
var l = false;
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendAnimationEvent.add({
    enter: function (ctx) {
        var e = ctx.animEventName;
        if (e.toLowerCase().includes('mrh_spell') && e.toLowerCase().includes('start')) {
            r = true;
        }
        ;
        if ((e.toLowerCase().includes('mlh_spell') && e.toLowerCase().includes('start')) || (e.toLowerCase().includes('dualmagic_spell') && e.toLowerCase().includes('start'))) {
            l = true;
        }
        ;
        if (e.toLowerCase().includes('mrh_spellrelease_event')) {
            r = false;
        }
        ;
        if (e.toLowerCase().includes('mlh_spellrelease_event')) {
            l = false;
        }
        ;
        if (e.toLowerCase().includes('unequip')) {
            if (r) {
                ctx.animEventName = 'MagicForceEquip';
                r = false;
            }
            ;
            if (l) {
                ctx.animEventName = 'MagicForceEquip';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmV0dGVyU3BlbGxDYW5jZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTnVDO0FBQ3ZDO0FBQ0E7QUFDQSx3RUFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmV0dGVyU3BlbGxDYW5jZWwvZXh0ZXJuYWwgdmFyIFtcInNreXJpbVBsYXRmb3JtXCJdIiwid2VicGFjazovL0JldHRlclNwZWxsQ2FuY2VsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0JldHRlclNwZWxsQ2FuY2VsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0JldHRlclNwZWxsQ2FuY2VsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9CZXR0ZXJTcGVsbENhbmNlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0JldHRlclNwZWxsQ2FuY2VsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQmV0dGVyU3BlbGxDYW5jZWwvLi9zcmMvQmV0dGVyU3BlbGxDYW5jZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBza3lyaW1QbGF0Zm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9va3MgfSBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHIgPSBmYWxzZTtcclxudmFyIGwgPSBmYWxzZTtcclxuaG9va3Muc2VuZEFuaW1hdGlvbkV2ZW50LmFkZCh7XHJcbiAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBlID0gY3R4LmFuaW1FdmVudE5hbWU7XHJcbiAgICAgICAgaWYgKGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbXJoX3NwZWxsJykgJiYgZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdGFydCcpKSB7XHJcbiAgICAgICAgICAgIHIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKChlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21saF9zcGVsbCcpICYmIGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc3RhcnQnKSkgfHwgKGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZHVhbG1hZ2ljX3NwZWxsJykgJiYgZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdGFydCcpKSkge1xyXG4gICAgICAgICAgICBsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGlmIChlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21yaF9zcGVsbHJlbGVhc2VfZXZlbnQnKSkge1xyXG4gICAgICAgICAgICByID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtbGhfc3BlbGxyZWxlYXNlX2V2ZW50JykpIHtcclxuICAgICAgICAgICAgbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygndW5lcXVpcCcpKSB7XHJcbiAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguYW5pbUV2ZW50TmFtZSA9ICdNYWdpY0ZvcmNlRXF1aXAnO1xyXG4gICAgICAgICAgICAgICAgciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5hbmltRXZlbnROYW1lID0gJ01hZ2ljRm9yY2VFcXVpcCc7XHJcbiAgICAgICAgICAgICAgICBsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsZWF2ZTogZnVuY3Rpb24gKCkgeyB9XHJcbn0sIDB4MTQsIDB4MTQpOyAvLyBmaWx0ZXIgb3V0IG5vbi1wbGF5ZXIgZXZlbnRzXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==