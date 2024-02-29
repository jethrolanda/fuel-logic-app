"use strict";
(globalThis["webpackChunkapp"] = globalThis["webpackChunkapp"] || []).push([["src_Components_NotificationBox_jsx"],{

/***/ "./src/Components/NotificationBox.jsx":
/*!********************************************!*\
  !*** ./src/Components/NotificationBox.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducer/mapSlice */ "./src/store/reducer/mapSlice.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");






const NotificationBox = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.mapState.showNotification);
  const [placement, setPlacement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("bottom");
  const onClose = () => {
    dispatch((0,_store_reducer_mapSlice__WEBPACK_IMPORTED_MODULE_2__.setShowNotification)(false));
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_3__["default"]
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
        paddingTop: "40px",
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
    className: "notification"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: "absolute",
      right: "20px",
      top: "10px"
    },
    onClick: onClose
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    direction: "vertical",
    size: "middle",
    style: {
      display: "flex"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    bodyStyle: {
      padding: "20px"
    },
    className: "processing"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gridTemplateRows: "auto"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-wrap",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "order-number"
  }, "12/12/24, ORDER #12345"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "order-address"
  }, "323 s. Briscoe blvd. ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-status"
  }, "PROCCESING \u2026")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      textAlign: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "view-btn"
  }, "VIEW"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "chat-btn"
  }, "CHAT")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    bodyStyle: {
      padding: "20px"
    },
    className: "dispatched"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gridTemplateRows: "auto"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-wrap",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "order-number"
  }, "11/28/24, ORDER #22345"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("spa", {
    className: "order-address"
  }, "2000 Hawkings trail ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-status"
  }, "DISPATCHED \u2026")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      textAlign: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "view-btn"
  }, "VIEW"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "chat-btn"
  }, "CHAT")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    bodyStyle: {
      padding: "20px"
    },
    className: "completed"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gridTemplateRows: "auto"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-wrap",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "order-number"
  }, "11//02/24, ORDER #12345"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "order-address"
  }, "323 .s Briccoe blvd ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-status"
  }, "COMPLETED \u2026")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      textAlign: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "view-btn"
  }, "VIEW"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "reorder-btn"
  }, "REORDER")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    bodyStyle: {
      padding: "20px"
    },
    className: "completed"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gridTemplateRows: "auto"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-wrap",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "order-number"
  }, "11//02/24, ORDER #12345"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "order-address"
  }, "323 .s Briccoe blvd")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "order-status"
  }, "COMPLETED \u2026")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      textAlign: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "view-btn"
  }, "VIEW"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "reorder-btn"
  }, "REORDER")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationBox);

/***/ })

}]);
//# sourceMappingURL=src_Components_NotificationBox_jsx.js.map