"use strict";
(globalThis["webpackChunkapp"] = globalThis["webpackChunkapp"] || []).push([["src_Components_MainMenu_jsx"],{

/***/ "./src/Components/MainMenu.jsx":
/*!*************************************!*\
  !*** ./src/Components/MainMenu.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducer/mapSlice */ "./src/store/reducer/mapSlice.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var _images_FL_logo_horizon_2021_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/FL-logo-horizon-2021.jpg */ "./images/FL-logo-horizon-2021.jpg");
/* harmony import */ var _store_reducer_loginSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducer/loginSlice */ "./src/store/reducer/loginSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");









const Test = ({
  onClose
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _images_FL_logo_horizon_2021_jpg__WEBPACK_IMPORTED_MODULE_3__,
    style: {
      maxWidth: "250px",
      width: "100%"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      position: "absolute",
      top: "20px",
      right: "20px"
    },
    onClick: onClose
  }));
};
const MainMenu = ({
  msg
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.mapState.showMenu);
  const [placement, setPlacement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("left");
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const onClose = () => {
    dispatch((0,_store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__.setShowMenu)(false));
  };
  const logout = () => {
    dispatch((0,_store_reducer_loginSlice__WEBPACK_IMPORTED_MODULE_4__.logoutUser)(async data => {
      msg(data);
      if (data.status === "success") {
        fuel_logic_app.is_logged_in = "0";
        await delay(500);
        navigate(0);
      }
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Test, {
      onClose: onClose
    }),
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
        padding: "0px"
      }
    }
    // rootStyle={{ top: "30px" }}
    // closeIcon={<CloseOutlined />}
    ,
    className: "main-menu"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: {
      padding: "0px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Saved Locations"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Orders"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Reports"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Profile"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Chat"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Contact Us"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Sync Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    onClick: logout
  }, "Logout"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenu);

/***/ }),

/***/ "./images/FL-logo-horizon-2021.jpg":
/*!*****************************************!*\
  !*** ./images/FL-logo-horizon-2021.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/FL-logo-horizon-2021.1014ccff.jpg";

/***/ })

}]);
//# sourceMappingURL=src_Components_MainMenu_jsx.js.map