"use strict";
(globalThis["webpackChunkapp"] = globalThis["webpackChunkapp"] || []).push([["src_Components_ChatBox_jsx"],{

/***/ "./src/Components/ChatBox.jsx":
/*!************************************!*\
  !*** ./src/Components/ChatBox.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducer/mapSlice */ "./src/store/reducer/mapSlice.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/avatar/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var _images_gate_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/gate.png */ "./images/gate.png");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");







const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_4__["default"];
const ChatBox = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.mapState.showChat);
  const [placement, setPlacement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("bottom");
  const onClose = () => {
    dispatch((0,_store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__.setShowChat)(false));
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_5__["default"]
  // title={<Test onClose={onClose} />}
  , {
    placement: placement,
    closable: false,
    onClose: onClose,
    open: isOpen,
    key: placement,
    styles: {
      header: {
        display: "flex",
        alignSelf: "center",
        padding: "0px",
        border: "0px"
      },
      body: {
        padding: "10px",
        paddingTop: "30px",
        display: "flex",
        flexDirection: "column"
      },
      content: {
        display: "flex",
        justifyContent: "center"
      },
      wrapper: {
        display: "flex",
        alignSelf: "center"
      }
    }
    // rootStyle={{ top: "30px" }}
    // closeIcon={<CloseOutlined />}
    ,
    height: 750,
    className: "chatbox"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    wrap: true,
    size: 16,
    style: {
      position: "relative"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "large",
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), "Erika - Operations - March 28, 2019 11:50", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      position: "absolute",
      right: 0,
      top: 0
    },
    onClick: onClose
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "chat left"
  }, "Morbi ullamcorper quis est et."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "chat right"
  }, "Integer quis eros quis et, vestibulum lobortis tortor, eleifend eleifend arcu."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "chat left"
  }, "In a nulla fermentum."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "chat left"
  }, "Pellentesque a lectus nulla, dapibus luctus arcu nec."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _images_gate_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "Gate",
    style: {
      alignSelf: "end",
      marginBottom: "30px"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextArea, {
    rows: 4,
    placeholder: "Type a Message"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBox);

/***/ }),

/***/ "./images/gate.png":
/*!*************************!*\
  !*** ./images/gate.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gate.ce46a943.png";

/***/ })

}]);
//# sourceMappingURL=src_Components_ChatBox_jsx.js.map