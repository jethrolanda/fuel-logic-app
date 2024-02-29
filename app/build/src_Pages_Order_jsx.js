"use strict";
(globalThis["webpackChunkapp"] = globalThis["webpackChunkapp"] || []).push([["src_Pages_Order_jsx"],{

/***/ "./src/Components/StepContent.jsx":
/*!****************************************!*\
  !*** ./src/Components/StepContent.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/radio/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/checkbox/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/date-picker/index.js");
/* harmony import */ var _images_Location_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/Location.png */ "./images/Location.png");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/MapContainer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/TileLayer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/Marker.js");
/* harmony import */ var _images_gate_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/gate.png */ "./images/gate.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_pin_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/pin.png */ "./images/pin.png");








const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_6__["default"];
const onFinish = values => {
  // console.log("Success:", values);
};
const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};
const ICON = (0,leaflet__WEBPACK_IMPORTED_MODULE_4__.icon)({
  iconUrl: _images_pin_png__WEBPACK_IMPORTED_MODULE_5__,
  iconSize: [32, 32]
});
const StepContent = props => {
  const {
    page,
    contents,
    next
  } = props;
  const coordinates = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.mapState.currentCoordinates);
  const location = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.mapState.currentLocation);
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  let counter = 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: 20
    }
  }, contents.map(content => {
    if (page + 1 !== content.pageNumber) return;
    switch (content.type) {
      case "html":
        if (counter === 0) {
          counter++;
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            className: "headings",
            style: {}
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
            src: _images_Location_png__WEBPACK_IMPORTED_MODULE_1__
          }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            dangerouslySetInnerHTML: {
              __html: content.content
            }
          }));
        } else {
          switch (content.content) {
            case "delivery address":
              return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "DELIVERY ADDRESS"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
                className: "address"
              }, location), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.MapContainer, {
                style: {
                  height: "300px"
                },
                center: coordinates,
                zoom: 13,
                scrollWheelZoom: true
              }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.TileLayer, {
                attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.Marker, {
                position: coordinates,
                icon: ICON
              })));
            case "delivery notes":
              return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column"
                }
              }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
                className: "chat left"
              }, "What do we need to know about this site? Is the yard locked? Is there a combination? Where is the equipment parked, etc\u2026"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
                className: "chat right"
              }, "Here is the order note. The gate is locked and a dog.."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: _images_gate_png__WEBPACK_IMPORTED_MODULE_2__,
                alt: "Gate",
                style: {
                  alignSelf: "end"
                }
              }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
                className: "chat right"
              }, "Here is a picture of the gate on the left side of the building.."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextArea, {
                rows: 4,
                placeholder: "Type a notes"
              }));
            default:
              return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
                dangerouslySetInnerHTML: {
                  __html: content.content
                }
              });
          }
        }
      case "radio":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, content.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
          onChange: onChange,
          style: {
            fontSize: "16px"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
          direction: "vertical"
        }, Object.keys(content.choices).map(i => {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: i,
            value: content.choices[i].text
          }, content.choices[i].text);
        })))));
      case "page":
        return;
      case "checkbox":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, content.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
          onChange: onChange,
          style: {
            fontSize: "16px"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
          direction: "vertical"
        }, Object.keys(content.choices).map(i => {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: i,
            value: content.choices[i].text
          }, content.choices[i].text);
        })))));
      case "text":
      case "phone":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, content.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
          placeholder: content.placeholder
        }));

      // return <Form.Item
      //   label={content.label}
      //   name={content.label}
      //   rules={[
      //     {
      //       required: true,
      //       message: 'required!',
      //     },
      //   ]}
      // >
      //   <Input />
      // </Form.Item>

      case "date":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, content.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onChange: onChange,
          style: {
            width: "100%"
          }
        })));
      case "email":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, content.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepContent);

/***/ }),

/***/ "./src/Pages/Order.jsx":
/*!*****************************!*\
  !*** ./src/Pages/Order.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/theme/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/steps/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _Components_StepContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/StepContent */ "./src/Components/StepContent.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _store_reducer_orderFormSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducer/orderFormSlice */ "./src/store/reducer/orderFormSlice.js");






const onFinish = values => {
  console.log("Success:", values);
};
const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};
const Order = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const {
    token
  } = antd__WEBPACK_IMPORTED_MODULE_4__["default"].useToken();
  const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [contents, setContents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = value => {
    setCurrent(value);
  };
  const contentStyle = {
    // textAlign: 'center',
    maxWidth: "1000px",
    width: "100%",
    // backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG
    // border: `1px dashed ${token.colorBorder}`,
    // marginTop: 16,
    // padding: '20px 40px'
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.title = "Order";
    setFetching(true);
    // Only show the steps if user is loggedin
    // If we allow non-login it will error out since we can only fetch api data if user is logged-in
    if (fuel_logic_app.is_logged_in) {
      (0,_store_reducer_orderFormSlice__WEBPACK_IMPORTED_MODULE_2__.fetchOrderForm)(({
        data,
        pageCounter
      }) => {
        setPages(pageCounter);
        setContents(data.fields);
        setFetching(false);
      });
    }
  }, [fuel_logic_app.is_logged_in]);

  // Set step content
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (contents.length === 0) return;
    setSteps(Array.from(Array(pages)).map((_, i) => {
      return {
        title: "",
        content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_StepContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
          page: i,
          contents: contents,
          next: next
        })
      };
    }));
  }, [pages, contents]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setItems(steps.map((item, i) => ({
      key: i,
      title: ""
    })));
  }, [steps]);
  if (!fuel_logic_app.is_logged_in) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Please login first.");
  if (fetching) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Fetching data...");
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: onChange,
    current: current,
    items: items,
    style: {
      maxWidth: "1000px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "20px"
    },
    responsive: false,
    size: "small"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: contentStyle
  }, steps[current]?.content), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: 24,
      maxWidth: "500px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, current < steps.length - 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "primary",
    className: "secondary-btn",
    onClick: () => next(),
    style: {
      margin: 10
    }
  }, current === 1 ? "Confirm" : "Next Step"), current === 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "btn",
    style: {
      margin: 10
    },
    onClick: () => navigate("/")
  }, "Edit")), current === steps.length - 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "primary",
    className: "secondary-btn",
    onClick: () => navigate("/confirmation"),
    style: {
      margin: 10
    }
  }, "Submit Order")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      textAlign: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "save-for-later"
  }, "Save for later"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ "./images/Location.png":
/*!*****************************!*\
  !*** ./images/Location.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Location.a58a6ba1.png";

/***/ }),

/***/ "./images/gate.png":
/*!*************************!*\
  !*** ./images/gate.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gate.ce46a943.png";

/***/ })

}]);
//# sourceMappingURL=src_Pages_Order_jsx.js.map