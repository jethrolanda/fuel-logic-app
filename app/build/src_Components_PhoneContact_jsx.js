"use strict";
(globalThis["webpackChunkapp"] = globalThis["webpackChunkapp"] || []).push([["src_Components_PhoneContact_jsx"],{

/***/ "./src/Components/PhoneContact.jsx":
/*!*****************************************!*\
  !*** ./src/Components/PhoneContact.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducer/mapSlice */ "./src/store/reducer/mapSlice.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/phone.png */ "./images/phone.png");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");








const PhoneContact = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.mapState.showPhoneContact);
  const [placement, setPlacement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("bottom");
  const onClose = () => {
    dispatch((0,_store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__.setShowPhoneContact)(false));
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_4__["default"]
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
        padding: "20px",
        display: "flex",
        justifyContent: "center"
      },
      mask: {
        background: "none"
      },
      content: {
        background: "rgba(0, 0, 0, 0.45)"
      }
    }
    // rootStyle={{ top: "30px" }}
    // closeIcon={<CloseOutlined />}
    ,
    height: 600
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      maxWidth: "1000px",
      width: "100%",
      textAlign: "center",
      background: "#fff",
      borderRadius: "15px",
      position: "relative"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      position: "absolute",
      right: "20px",
      top: "10px"
    },
    onClick: onClose
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: "40px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _images_phone_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "Phone",
    style: {
      maxWidth: "327px",
      width: "100%"
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Give us a call!"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Click to talk to someone now"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "large",
    style: {
      background: "#F5FAE9",
      color: "#F88160",
      borderRadius: "10px"
    },
    href: "tel: 888-234-2324"
  }, "888-234-2324"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneContact);

/***/ }),

/***/ "./images/phone.png":
/*!**************************!*\
  !*** ./images/phone.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/phone.2cf15f36.png";

/***/ })

}]);
//# sourceMappingURL=src_Components_PhoneContact_jsx.js.map