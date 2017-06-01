webpackJsonp([1],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_dialog_assets_index_less__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_dialog_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rc_dialog_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__ = __webpack_require__(86);




/* eslint no-console:0 */



// use import Dialog from 'rc-dialog'


var MyControl = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MyControl, _React$Component);

    function MyControl() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyControl);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MyControl.__proto__ || Object.getPrototypeOf(MyControl)).apply(this, arguments));

        _this.state = {
            visible: false,
            width: 600,
            destroyOnClose: false,
            center: false
        };
        _this.onClick = function (e) {
            _this.setState({
                mousePosition: {
                    x: e.pageX,
                    y: e.pageY
                },
                visible: true
            });
        };
        _this.onClose = function (e) {
            // console.log(e);
            _this.setState({
                visible: false
            });
        };
        _this.onDestroyOnCloseChange = function (e) {
            _this.setState({
                destroyOnClose: e.target.checked
            });
        };
        _this.changeWidth = function () {
            _this.setState({
                width: _this.state.width === 600 ? 800 : 600
            });
        };
        _this.center = function (e) {
            _this.setState({
                center: e.target.checked
            });
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MyControl, [{
        key: 'render',
        value: function render() {
            var dialog = void 0;
            if (this.state.visible || !this.state.destroyOnClose) {
                var style = {
                    width: this.state.width
                };
                var wrapClassName = '';
                if (this.state.center) {
                    wrapClassName = 'center';
                }
                dialog = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__["a" /* default */], { visible: this.state.visible, wrapClassName: wrapClassName, animation: "zoom", maskAnimation: "fade", onClose: this.onClose, style: style, mousePosition: this.state.mousePosition }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", null), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "basic modal"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { onClick: this.changeWidth }, "change width"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { style: { height: 200 } }));
            }
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { style: { width: '90%', margin: '0 auto' } }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("style", null, '\n            .center {\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            }\n            '), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { className: "btn btn-primary", onClick: this.onClick }, "show dialog"), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("label", null, "destroy on close:", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "checkbox", checked: this.state.destroyOnClose, onChange: this.onDestroyOnCloseChange })), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("label", null, "center", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "checkbox", checked: this.state.center, onChange: this.center }))), dialog);
        }
    }]);

    return MyControl;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h2", null, "ant-design dialog"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(MyControl, null)), document.getElementById('__react-content'));

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ })

},[292]);
//# sourceMappingURL=ant-design.js.map