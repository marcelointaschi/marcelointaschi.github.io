(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 310,
        vars: 2,
        consts: [["role", "main", 1, "content"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "left", 1, "container"], ["fxFlex", "80%"], ["fxFlex", "90%"], [1, "with-icon"], [2, "color", "#FB8C00"], ["color", "primary", "selected", ""]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Career");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "When early working with hardware, fixing computers, that my passion for IT started. Quickly, I moved to Linux, installing servers and building entire infrasctures. By reading books that I started to code, but only in 2003, at technical school with programming language classes that I realised what I really liked to do: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Software Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". Finally, at Ericcson (2007), working more closely to some great architects, I found a new goal in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Software Architecture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Professional Experiences");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Intive - IT consulting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2022 to present");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Senior Software engineering");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Work for Intive customers as Software Engineering.. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mutant - Bot Factory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2020 - 2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Developer & Solution Architect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Rogue Platform:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Designing, describing, and managing the solution engineering in relation to specific customer and the rogue Platform. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "VALID - Data Solutions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2014 - 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Developer & Solution Architect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Multichannel System - Brazil:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Built the architecture of the system, developed, tested and put it into production - 2014.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Digital CRM:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Built the architecture of the system, developed, tested and put it into production. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Demo - MONEY2020 Conference - 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "eUICC - Argentina/Spain:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Built the architecture of the system following the official documentation, developed, tested and put it into production (Telefonica Argentina). We were the first to work with the top 5 chip brands in the world. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Demo MWC2016 - Mobile World Congress - 2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "FWTSIM - Argentina:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Worked with a developer in a new interface doing documentation, codding, guiding the developer and putting it into on production.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Itau Geolocation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Create the solution, development of the solution and installation on production.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Customer Portal: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Built the architecture of the system and worked with the development team to build it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "VALID Gateway: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Built the architecture of the system and worked with the development team to build it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "IBM - Software Lab Brazil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "2009 - 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Developer & Level 3 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Tivoli Maximo Service Request Manager, Tivoli Maximo for BP, Tivoli Maximo for Service Providers, Tivoli Maximo for Mobile, Tivoli Maximo for Primavera, Web Report e Web Environment Managment.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Recognitions:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Put the Client First - 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " The Best IBM - For consistently demonstration IBM competencies and delivering excellent results - 2013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " You Made the Difference - 2011");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Software Development Lab Gratefully Thanks - For consistently demonstration IBM competencies and delivering excellent results in 2010 - 2010 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Ericsson - Systems Integreation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "2007 - 2008");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Developer & System Integration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Claro Charging System:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " In this project I learned and worked with all Ericcson's prepaid system for Claro Brazil. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Vivo portability:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Performed all the integration development in between Ericsson's system and Hawaii's systems for the portability project. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Simplex Inform\xE1tica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " \xA0 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "2003 - 2007");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Working as \uD835\uDE3E\uD835\uDE64\uD835\uDE62\uD835\uDE65\uD835\uDE6A\uD835\uDE69\uD835\uDE5A\uD835\uDE67 \uD835\uDE4F\uD835\uDE5A\uD835\uDE58\uD835\uDE5D\uD835\uDE63\uD835\uDE5E\uD835\uDE58\uD835\uDE5E\uD835\uDE56\uD835\uDE63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Fixing computers, monitors, printers, etc..; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Installing Linux servers (internet/data/VPN);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Installing windows servers;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Building the entire infrastructure; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "FIAP - MBA - Solution Architect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "2019 - 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " The goal of this MBA was to learn how to design software architectural solutions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "FIAP - MBA -Java Application Development - SOA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "2012 - 2013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " The goal of this MBA was to learn about webservies with focus in Java programming language. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "University S\xE3o Judas Tadeu - Graduation - Computer Science");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "2005 - 2009");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " The focus of this graduation was to learn about hardware and software world. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Tecnical School (SAA) - Computer Programming");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "2003 - 2005");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " The goal was to learn about programming language, logic, web and desktop programs. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "List of skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Java");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Spring Framework");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Spring Cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "NodeJS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Angular 8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Angular 1.8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Ajax");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "css");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "sass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Android");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Object-c");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "swift");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "JSF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "EJB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "React");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Struts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "python");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "ASP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "VB203/5 .net");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Cobol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "VB6.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Hadoop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "NestJS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Ts.ed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "VueJS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " New \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " Old ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", "10px");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px;\n}\n\n.with-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLndpdGgtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "GF+f":
    /*!*********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/accordion.js ***!
      \*********************************************************/

    /*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule, ɵangular_material_src_cdk_accordion_accordion_a */

    /***/
    function GFF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordion", function () {
        return CdkAccordion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function () {
        return CdkAccordionItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function () {
        return CdkAccordionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_accordion_accordion_a", function () {
        return CDK_ACCORDION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "CtHx");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion. */


      var nextId = 0;
      /**
       * Injection token that can be used to reference instances of `CdkAccordion`. It serves
       * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkAccordion');
      /**
       * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
       */

      var CdkAccordion = /*#__PURE__*/function () {
        function CdkAccordion() {
          _classCallCheck(this, CdkAccordion);

          /** Emits when the state of the accordion changes */
          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** Stream that emits true/false when openAll/closeAll is triggered. */

          this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** A readonly id value to use for unique selection coordination. */

          this.id = "cdk-accordion-".concat(nextId++);
          this._multi = false;
        }
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */


        _createClass(CdkAccordion, [{
          key: "openAll",

          /** Opens all enabled accordion items in an accordion where multi is enabled. */
          value: function openAll() {
            this._openCloseAll(true);
          }
          /** Closes all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._openCloseAll(false);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._stateChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "_openCloseAll",
          value: function _openCloseAll(expanded) {
            if (this.multi) {
              this._openCloseAllActions.next(expanded);
            }
          }
        }, {
          key: "multi",
          get: function get() {
            return this._multi;
          },
          set: function set(multi) {
            this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi);
          }
        }]);

        return CdkAccordion;
      }();

      CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
        return new (t || CdkAccordion)();
      };

      CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordion,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
          multi: "multi"
        },
        exportAs: ["cdkAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_ACCORDION,
          useExisting: CdkAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      CdkAccordion.propDecorators = {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'cdk-accordion, [cdkAccordion]',
            exportAs: 'cdkAccordion',
            providers: [{
              provide: CDK_ACCORDION,
              useExisting: CdkAccordion
            }]
          }]
        }], function () {
          return [];
        }, {
          multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion item. */


      var nextId$1 = 0;
      var ɵ0 = undefined;
      /**
       * An basic directive expected to be extended and decorated as a component.  Sets up all
       * events and attributes needed to be managed by a CdkAccordion parent.
       */

      var CdkAccordionItem = /*#__PURE__*/function () {
        function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
          var _this = this;

          _classCallCheck(this, CdkAccordionItem);

          this.accordion = accordion;
          this._changeDetectorRef = _changeDetectorRef;
          this._expansionDispatcher = _expansionDispatcher;
          /** Subscription to openAll/closeAll events. */

          this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
          /** Event emitted every time the AccordionItem is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Event emitted every time the AccordionItem is opened. */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Event emitted when the AccordionItem is destroyed. */

          this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits whenever the expanded state of the accordion changes.
           * Primarily used to facilitate two-way binding.
           * @docs-private
           */

          this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** The unique AccordionItem id. */

          this.id = "cdk-accordion-child-".concat(nextId$1++);
          this._expanded = false;
          this._disabled = false;
          /** Unregister function for _expansionDispatcher. */

          this._removeUniqueSelectionListener = function () {};

          this._removeUniqueSelectionListener = _expansionDispatcher.listen(function (id, accordionId) {
            if (_this.accordion && !_this.accordion.multi && _this.accordion.id === accordionId && _this.id !== id) {
              _this.expanded = false;
            }
          }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

          if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
          }
        }
        /** Whether the AccordionItem is expanded. */


        _createClass(CdkAccordionItem, [{
          key: "ngOnDestroy",

          /** Emits an event for the accordion item being destroyed. */
          value: function ngOnDestroy() {
            this.opened.complete();
            this.closed.complete();
            this.destroyed.emit();
            this.destroyed.complete();

            this._removeUniqueSelectionListener();

            this._openCloseAllSubscription.unsubscribe();
          }
          /** Toggles the expanded state of the accordion item. */

        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.disabled) {
              this.expanded = !this.expanded;
            }
          }
          /** Sets the expanded state of the accordion item to false. */

        }, {
          key: "close",
          value: function close() {
            if (!this.disabled) {
              this.expanded = false;
            }
          }
          /** Sets the expanded state of the accordion item to true. */

        }, {
          key: "open",
          value: function open() {
            if (!this.disabled) {
              this.expanded = true;
            }
          }
        }, {
          key: "_subscribeToOpenCloseAllActions",
          value: function _subscribeToOpenCloseAllActions() {
            var _this2 = this;

            return this.accordion._openCloseAllActions.subscribe(function (expanded) {
              // Only change expanded state if item is enabled
              if (!_this2.disabled) {
                _this2.expanded = expanded;
              }
            });
          }
        }, {
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(expanded) {
            expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded); // Only emit events and update the internal value if the value changes.

            if (this._expanded !== expanded) {
              this._expanded = expanded;
              this.expandedChange.emit(expanded);

              if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 */

                var accordionId = this.accordion ? this.accordion.id : this.id;

                this._expansionDispatcher.notify(this.id, accordionId);
              } else {
                this.closed.emit();
              } // Ensures that the animation will run when the value is set outside of an `@Input`.
              // This includes cases like the open, close and toggle methods.


              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the AccordionItem is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(disabled) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled);
          }
        }]);

        return CdkAccordionItem;
      }();

      CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
        return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]));
      };

      CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordionItem,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
          expanded: "expanded",
          disabled: "disabled"
        },
        outputs: {
          closed: "closed",
          opened: "opened",
          destroyed: "destroyed",
          expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: ɵ0
        }])]
      });

      CdkAccordionItem.ctorParameters = function () {
        return [{
          type: CdkAccordion,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_ACCORDION]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
        }];
      };

      CdkAccordionItem.propDecorators = {
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expandedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'cdk-accordion-item, [cdkAccordionItem]',
            exportAs: 'cdkAccordionItem',
            providers: [// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
            // registering to the same accordion.
            {
              provide: CDK_ACCORDION,
              useValue: ɵ0
            }]
          }]
        }], function () {
          return [{
            type: CdkAccordion,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_ACCORDION]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
          }];
        }, {
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkAccordionModule = function CdkAccordionModule() {
        _classCallCheck(this, CdkAccordionModule);
      };

      CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CdkAccordionModule
      });
      CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CdkAccordionModule_Factory(t) {
          return new (t || CdkAccordionModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, {
          declarations: [CdkAccordion, CdkAccordionItem],
          exports: [CdkAccordion, CdkAccordionItem]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkAccordion, CdkAccordionItem],
            declarations: [CdkAccordion, CdkAccordionItem]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=accordion.js.map

      /***/

    },

    /***/
    "LS6v":
    /*!****************************************!*\
      !*** ./src/app/auth/auth.component.ts ***!
      \****************************************/

    /*! exports provided: AuthComponent */

    /***/
    function LS6v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _core_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/sidemenu/sidemenu.component */
      "3V7X");
      /* harmony import */


      var _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/toolbar/toolbar.component */
      "fTgK");
      /* harmony import */


      var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-scrollbar */
      "AV7R");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/sidebar/sidebar.component */
      "1qzX");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(media) {
          _classCallCheck(this, AuthComponent);

          this.media = media;
          this.isVisible = true;
          this.visibility = 'shown';
          this.sideNavOpened = true;
          this.matDrawerOpened = false;
          this.matDrawerShow = true;
          this.sideNavMode = 'side';
        }

        _createClass(AuthComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.visibility = this.isVisible ? 'shown' : 'hidden';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.media.asObservable().subscribe(function () {
              _this3.toggleView();
            });
          }
        }, {
          key: "getRouteAnimation",
          value: function getRouteAnimation(outlet) {
            return outlet.activatedRouteData.animation; //return outlet.isActivated ? outlet.activatedRoute : ''
          }
        }, {
          key: "toggleView",
          value: function toggleView() {
            if (this.media.isActive('gt-md')) {
              this.sideNavMode = 'side';
              this.sideNavOpened = true;
              this.matDrawerOpened = false;
              this.matDrawerShow = true;
            } else if (this.media.isActive('gt-xs')) {
              this.sideNavMode = 'side';
              this.sideNavOpened = false;
              this.matDrawerOpened = true;
              this.matDrawerShow = true;
            } else if (this.media.isActive('lt-sm')) {
              this.sideNavMode = 'over';
              this.sideNavOpened = false;
              this.matDrawerOpened = false;
              this.matDrawerShow = false;
            }
          }
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]));
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        inputs: {
          isVisible: "isVisible"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 22,
        vars: 8,
        consts: [["fullscreen", "", 1, "container"], [1, "sidenav", 2, "overflow", "hidden", 3, "mode", "opened"], ["sidenav", ""], ["color", "primary", 1, "mat-elevation-z4"], [1, "logo"], [2, "font-size", "12px"], [2, "z-index", "unset", "overflow", "hidden"], ["fullscreen", ""], ["mode", "side", 1, "drawer", 2, "overflow", "hidden", 3, "opened"], ["drawer", ""], [3, "iconOnly"], [2, "overflow", "hidden"], [2, "z-index", "500", 3, "sidenav", "drawer", "sidebar", "matDrawerShow"], [2, "height", "calc(100% - 33px)"], ["position", "end", "mode", "over"], ["sidenav2", ""]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " marcelo.intaschi. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cdk-sidemenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-drawer-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-drawer", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "cdk-sidemenu", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-drawer-content", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "cdk-toolbar", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-scrollbar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "cdk-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.sideNavMode)("opened", ctx.sideNavOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.matDrawerOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconOnly", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidenav", _r0)("drawer", _r1)("sidebar", _r2)("matDrawerShow", ctx.matDrawerShow);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _core_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__["SidemenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__["NgScrollbar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]
          }];
        }, {
          isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component */
      "LS6v");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-scrollbar */
      "AV7R");
      /* harmony import */


      var _lazyloader_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./lazyloader.routes */
      "oLDI");
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../home/home.module */
      "ct+p");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/core.module */
      "pKmL"); // import {
      //     PerfectScrollbarModule, 
      //     PERFECT_SCROLLBAR_CONFIG,
      //     PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
      // const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
      //     suppressScrollX: true
      // };


      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        providers: [// {
          //     provide: PERFECT_SCROLLBAR_CONFIG,
          //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          // }
        ],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_lazyloader_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"]), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], // PerfectScrollbarModule,
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__["NgScrollbarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], // PerfectScrollbarModule,
          ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__["NgScrollbarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_lazyloader_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"]), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], // PerfectScrollbarModule,
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__["NgScrollbarModule"]],
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]],
            providers: [// {
              //     provide: PERFECT_SCROLLBAR_CONFIG,
              //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
              // }
            ]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: appRoutes, HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
        return appRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");

      var appRoutes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }];

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"]],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            exports: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "o4Yh":
    /*!**************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/expansion.js ***!
      \**************************************************************/

    /*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations, ɵ0 */

    /***/
    function o4Yh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () {
        return EXPANSION_PANEL_ANIMATION_TIMING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () {
        return MAT_ACCORDION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () {
        return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAccordion", function () {
        return MatAccordion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () {
        return MatExpansionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () {
        return MatExpansionPanel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () {
        return MatExpansionPanelActionRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () {
        return MatExpansionPanelContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () {
        return MatExpansionPanelDescription;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () {
        return MatExpansionPanelHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () {
        return MatExpansionPanelTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () {
        return matExpansionAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      "GF+f");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "Ht+U");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "CtHx");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
       * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
       */


      var _c0 = ["body"];

      function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

      var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
      var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

      function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
        }
      }

      var _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
      var _c4 = ["mat-panel-title", "mat-panel-description", "*"];
      var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time and timing curve for expansion panel animations. */
      // Note: Keep this in sync with the Sass variable for the panel header animation.

      var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
      /**
       * Animations used by the Material expansion panel.
       *
       * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
       * causes the animation state of moved components to become `void` upon exit, and not update again
       * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
       * of the panel is `expanded` or `collapsed` but the animation state is `void`.
       *
       * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
       * are defined to have the same styles. Since angular animates from the current styles to the
       * destination state's style definition, in situations where we are moving from `void`'s styles to
       * `collapsed` this acts a noop since no style values change.
       *
       * In the case where angular's animation state is out of sync with the expansion panel's state, the
       * expansion panel being `expanded` and angular animations being `void`, the animation from the
       * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
       * occur as expected.
       *
       * Angular Bug: https://github.com/angular/angular/issues/18847
       *
       * @docs-private
       */

      var matExpansionAnimations = {
        /** Animation that rotates the indicator arrow. */
        indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          transform: 'rotate(0deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          transform: 'rotate(180deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))]),

        /** Animation that expands and collapses the panel content. */
        bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('bodyExpansion', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          height: '0px',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          height: '*',
          visibility: 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Expansion panel content that will be rendered lazily
       * after the panel is opened for the first time.
       */

      var MatExpansionPanelContent = function MatExpansionPanelContent(_template) {
        _classCallCheck(this, MatExpansionPanelContent);

        this._template = _template;
      };

      MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
        return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelContent,
        selectors: [["ng-template", "matExpansionPanelContent", ""]]
      });

      MatExpansionPanelContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matExpansionPanelContent]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter for generating unique element ids. */


      var uniqueId = 0;
      /**
       * Injection token that can be used to configure the defalt
       * options for the expansion panel component.
       */

      var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
      var ɵ0 = undefined;
      /**
       * This component can be used as a single element to show expandable content, or as one of
       * multiple children of an element with the MatAccordion directive attached.
       */

      var MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
        _inherits(MatExpansionPanel, _angular_cdk_accordio);

        var _super = _createSuper(MatExpansionPanel);

        function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
          var _this4;

          _classCallCheck(this, MatExpansionPanel);

          _this4 = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
          _this4._viewContainerRef = _viewContainerRef;
          _this4._animationMode = _animationMode;
          _this4._hideToggle = false;
          /** An event emitted after the body's expansion animation happens. */

          _this4.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** An event emitted after the body's collapse animation happens. */

          _this4.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Stream that emits for changes in `@Input` properties. */

          _this4._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** ID for the associated header element. Used for a11y labelling. */

          _this4._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
          /** Stream of body animation done events. */

          _this4._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          _this4.accordion = accordion;
          _this4._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
          // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

          _this4._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            if (event.fromState !== 'void') {
              if (event.toState === 'expanded') {
                _this4.afterExpand.emit();
              } else if (event.toState === 'collapsed') {
                _this4.afterCollapse.emit();
              }
            }
          });

          if (defaultOptions) {
            _this4.hideToggle = defaultOptions.hideToggle;
          }

          return _this4;
        }
        /** Whether the toggle indicator should be hidden. */


        _createClass(MatExpansionPanel, [{
          key: "_hasSpacing",

          /** Determines whether the expansion panel should have spacing between it and its siblings. */
          value: function _hasSpacing() {
            if (this.accordion) {
              return this.expanded && this.accordion.displayMode === 'default';
            }

            return false;
          }
          /** Gets the expanded state string. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.expanded ? 'expanded' : 'collapsed';
          }
          /** Toggles the expanded state of the expansion panel. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.expanded = !this.expanded;
          }
          /** Sets the expanded state of the expansion panel to false. */

        }, {
          key: "close",
          value: function close() {
            this.expanded = false;
          }
          /** Sets the expanded state of the expansion panel to true. */

        }, {
          key: "open",
          value: function open() {
            this.expanded = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this5 = this;

            if (this._lazyContent) {
              // Render the content as soon as the panel becomes open.
              this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () {
                return _this5.expanded && !_this5._portal;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
                _this5._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](_this5._lazyContent._template, _this5._viewContainerRef);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._inputChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

            this._bodyAnimationDone.complete();

            this._inputChanges.complete();
          }
          /** Checks whether the expansion panel's content contains the currently-focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (this._body) {
              var focusedElement = this._document.activeElement;
              var bodyElement = this._body.nativeElement;
              return focusedElement === bodyElement || bodyElement.contains(focusedElement);
            }

            return false;
          }
        }, {
          key: "hideToggle",
          get: function get() {
            return this._hideToggle || this.accordion && this.accordion.hideToggle;
          },
          set: function set(value) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** The position of the expansion indicator. */

        }, {
          key: "togglePosition",
          get: function get() {
            return this._togglePosition || this.accordion && this.accordion.togglePosition;
          },
          set: function set(value) {
            this._togglePosition = value;
          }
        }]);

        return MatExpansionPanel;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"]);

      MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
        return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
      };

      MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatExpansionPanel,
        selectors: [["mat-expansion-panel"]],
        contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
          }
        },
        viewQuery: function MatExpansionPanel_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
          }
        },
        hostAttrs: [1, "mat-expansion-panel"],
        hostVars: 6,
        hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
          }
        },
        inputs: {
          disabled: "disabled",
          expanded: "expanded",
          hideToggle: "hideToggle",
          togglePosition: "togglePosition"
        },
        outputs: {
          opened: "opened",
          closed: "closed",
          expandedChange: "expandedChange",
          afterExpand: "afterExpand",
          afterCollapse: "afterCollapse"
        },
        exportAs: ["matExpansionPanel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: ɵ0
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 4,
        consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
        template: function MatExpansionPanel_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
              return ctx._bodyAnimationDone.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.bodyExpansion]
        },
        changeDetection: 0
      });

      MatExpansionPanel.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_ACCORDION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      MatExpansionPanel.propDecorators = {
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        afterExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        afterCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatExpansionPanelContent]
        }],
        _body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['body']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-expansion-panel',
            exportAs: 'matExpansionPanel',
            template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled', 'expanded'],
            outputs: ['opened', 'closed', 'expandedChange'],
            animations: [matExpansionAnimations.bodyExpansion],
            providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            {
              provide: MAT_ACCORDION,
              useValue: ɵ0
            }],
            host: {
              'class': 'mat-expansion-panel',
              '[class.mat-expanded]': 'expanded',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
            },
            styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_ACCORDION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatExpansionPanelContent]
          }],
          _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['body']
          }]
        });
      })();
      /**
       * Actions of a `<mat-expansion-panel>`.
       */


      var MatExpansionPanelActionRow = function MatExpansionPanelActionRow() {
        _classCallCheck(this, MatExpansionPanelActionRow);
      };

      MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
        return new (t || MatExpansionPanelActionRow)();
      };

      MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelActionRow,
        selectors: [["mat-action-row"]],
        hostAttrs: [1, "mat-action-row"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-action-row',
            host: {
              "class": 'mat-action-row'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Header element of a `<mat-expansion-panel>`.
       */


      var MatExpansionPanelHeader = /*#__PURE__*/function () {
        function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode) {
          var _this6 = this;

          _classCallCheck(this, MatExpansionPanelHeader);

          this.panel = panel;
          this._element = _element;
          this._focusMonitor = _focusMonitor;
          this._changeDetectorRef = _changeDetectorRef;
          this._animationMode = _animationMode;
          this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (changes) {
            return !!(changes['hideToggle'] || changes['togglePosition']);
          })) : rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"]; // Since the toggle state depends on an @Input on the panel, we
          // need to subscribe and trigger change detection manually.

          this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (changes) {
            return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
          }))).subscribe(function () {
            return _this6._changeDetectorRef.markForCheck();
          }); // Avoids focus being lost if the panel contained the focused element and was closed.

          panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () {
            return panel._containsFocus();
          })).subscribe(function () {
            return _focusMonitor.focusVia(_element, 'program');
          });

          if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
          }
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * @docs-private
         */


        _createClass(MatExpansionPanelHeader, [{
          key: "_toggle",

          /** Toggles the expanded state of the panel. */
          value: function _toggle() {
            if (!this.disabled) {
              this.panel.toggle();
            }
          }
          /** Gets whether the panel is expanded. */

        }, {
          key: "_isExpanded",
          value: function _isExpanded() {
            return this.panel.expanded;
          }
          /** Gets the expanded state string of the panel. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.panel._getExpandedState();
          }
          /** Gets the panel id. */

        }, {
          key: "_getPanelId",
          value: function _getPanelId() {
            return this.panel.id;
          }
          /** Gets the toggle position for the header. */

        }, {
          key: "_getTogglePosition",
          value: function _getTogglePosition() {
            return this.panel.togglePosition;
          }
          /** Gets whether the expand indicator should be shown. */

        }, {
          key: "_showToggle",
          value: function _showToggle() {
            return !this.panel.hideToggle && !this.panel.disabled;
          }
          /**
           * Gets the current height of the header. Null if no custom height has been
           * specified, and if the default height from the stylesheet should be used.
           */

        }, {
          key: "_getHeaderHeight",
          value: function _getHeaderHeight() {
            var isExpanded = this._isExpanded();

            if (isExpanded && this.expandedHeight) {
              return this.expandedHeight;
            } else if (!isExpanded && this.collapsedHeight) {
              return this.collapsedHeight;
            }

            return null;
          }
          /** Handle keydown event calling to toggle() if appropriate. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            switch (event.keyCode) {
              // Toggle for space and enter keys.
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event)) {
                  event.preventDefault();

                  this._toggle();
                }

                break;

              default:
                if (this.panel.accordion) {
                  this.panel.accordion._handleHeaderKeydown(event);
                }

                return;
            }
          }
          /**
           * Focuses the panel header. Implemented as a part of `FocusableOption`.
           * @param origin Origin of the action that triggered the focus.
           * @docs-private
           */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            this._focusMonitor.focusVia(this._element, origin, options);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            this._focusMonitor.monitor(this._element).subscribe(function (origin) {
              if (origin && _this7.panel.accordion) {
                _this7.panel.accordion._handleHeaderFocus(_this7);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._parentChangeSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._element);
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.panel.disabled;
          }
        }]);

        return MatExpansionPanelHeader;
      }();

      MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
        return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatExpansionPanelHeader,
        selectors: [["mat-expansion-panel-header"]],
        hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
              return ctx._toggle();
            })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          expandedHeight: "expandedHeight",
          collapsedHeight: "collapsedHeight"
        },
        ngContentSelectors: _c4,
        decls: 5,
        vars: 1,
        consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
        template: function MatExpansionPanelHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.indicatorRotate]
        },
        changeDetection: 0
      });

      MatExpansionPanelHeader.ctorParameters = function () {
        return [{
          type: MatExpansionPanel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatExpansionPanelHeader.propDecorators = {
        expandedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-expansion-panel-header',
            template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            animations: [matExpansionAnimations.indicatorRotate],
            host: {
              'class': 'mat-expansion-panel-header mat-focus-indicator',
              'role': 'button',
              '[attr.id]': 'panel._headerId',
              '[attr.tabindex]': 'disabled ? -1 : 0',
              '[attr.aria-controls]': '_getPanelId()',
              '[attr.aria-expanded]': '_isExpanded()',
              '[attr.aria-disabled]': 'panel.disabled',
              '[class.mat-expanded]': '_isExpanded()',
              '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
              '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[style.height]': '_getHeaderHeight()',
              '(click)': '_toggle()',
              '(keydown)': '_keydown($event)'
            },
            styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
          }]
        }], function () {
          return [{
            type: MatExpansionPanel,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * Description element of a `<mat-expansion-panel-header>`.
       */


      var MatExpansionPanelDescription = function MatExpansionPanelDescription() {
        _classCallCheck(this, MatExpansionPanelDescription);
      };

      MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
        return new (t || MatExpansionPanelDescription)();
      };

      MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelDescription,
        selectors: [["mat-panel-description"]],
        hostAttrs: [1, "mat-expansion-panel-header-description"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-panel-description',
            host: {
              "class": 'mat-expansion-panel-header-description'
            }
          }]
        }], null, null);
      })();
      /**
       * Title element of a `<mat-expansion-panel-header>`.
       */


      var MatExpansionPanelTitle = function MatExpansionPanelTitle() {
        _classCallCheck(this, MatExpansionPanelTitle);
      };

      MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
        return new (t || MatExpansionPanelTitle)();
      };

      MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelTitle,
        selectors: [["mat-panel-title"]],
        hostAttrs: [1, "mat-expansion-panel-header-title"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-panel-title',
            host: {
              "class": 'mat-expansion-panel-header-title'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive for a Material Design Accordion.
       */


      var MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
        _inherits(MatAccordion, _angular_cdk_accordio2);

        var _super2 = _createSuper(MatAccordion);

        function MatAccordion() {
          var _this8;

          _classCallCheck(this, MatAccordion);

          _this8 = _super2.apply(this, arguments);
          /** Headers belonging to this accordion. */

          _this8._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          _this8._hideToggle = false;
          /**
           * Display mode used for all expansion panels in the accordion. Currently two display
           * modes exist:
           *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
           *     panel at a different elevation from the rest of the accordion.
           *  flat - no spacing is placed around expanded panels, showing all panels at the same
           *     elevation.
           */

          _this8.displayMode = 'default';
          /** The position of the expansion indicator. */

          _this8.togglePosition = 'after';
          return _this8;
        }
        /** Whether the expansion indicator should be hidden. */


        _createClass(MatAccordion, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this9 = this;

            this._headers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._headers)).subscribe(function (headers) {
              _this9._ownHeaders.reset(headers.filter(function (header) {
                return header.panel.accordion === _this9;
              }));

              _this9._ownHeaders.notifyOnChanges();
            });

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this._ownHeaders).withWrap().withHomeAndEnd();
          }
          /** Handles keyboard events coming in from the panel headers. */

        }, {
          key: "_handleHeaderKeydown",
          value: function _handleHeaderKeydown(event) {
            this._keyManager.onKeydown(event);
          }
        }, {
          key: "_handleHeaderFocus",
          value: function _handleHeaderFocus(header) {
            this._keyManager.updateActiveItem(header);
          }
        }, {
          key: "hideToggle",
          get: function get() {
            return this._hideToggle;
          },
          set: function set(show) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(show);
          }
        }]);

        return MatAccordion;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"]);

      MatAccordion.ɵfac = function MatAccordion_Factory(t) {
        return ɵMatAccordion_BaseFactory(t || MatAccordion);
      };

      MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatAccordion,
        selectors: [["mat-accordion"]],
        contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
          }
        },
        hostAttrs: [1, "mat-accordion"],
        hostVars: 2,
        hostBindings: function MatAccordion_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
          }
        },
        inputs: {
          multi: "multi",
          displayMode: "displayMode",
          togglePosition: "togglePosition",
          hideToggle: "hideToggle"
        },
        exportAs: ["matAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_ACCORDION,
          useExisting: MatAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });
      MatAccordion.propDecorators = {
        _headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatExpansionPanelHeader, {
            descendants: true
          }]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        displayMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatAccordion_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-accordion',
            exportAs: 'matAccordion',
            inputs: ['multi'],
            providers: [{
              provide: MAT_ACCORDION,
              useExisting: MatAccordion
            }],
            host: {
              "class": 'mat-accordion',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if multiple panel support is enabled.
              '[class.mat-accordion-multi]': 'this.multi'
            }
          }]
        }], null, {
          displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatExpansionPanelHeader, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatExpansionModule = function MatExpansionModule() {
        _classCallCheck(this, MatExpansionModule);
      };

      MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatExpansionModule
      });
      MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatExpansionModule_Factory(t) {
          return new (t || MatExpansionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, {
          declarations: function declarations() {
            return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]];
          },
          exports: function exports() {
            return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
            exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
            declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=expansion.js.map

      /***/

    },

    /***/
    "oLDI":
    /*!*******************************************!*\
      !*** ./src/app/auth/lazyloader.routes.ts ***!
      \*******************************************/

    /*! exports provided: appRoutes */

    /***/
    function oLDI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
        return appRoutes;
      });
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.component */
      "LS6v");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../home/home.component */
      "9vUh");

      var appRoutes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__["AuthComponent"],
        children: [{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
        }, {
          path: 'article',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | article-article-module */
            "article-article-module").then(__webpack_require__.bind(null,
            /*! ../article/article.module */
            "rZHr")).then(function (m) {
              return m.ArticleModule;
            });
          }
        }, {
          path: 'devpatterns',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | devpatterns-devpatterns-module */
            "devpatterns-devpatterns-module").then(__webpack_require__.bind(null,
            /*! ../devpatterns/devpatterns.module */
            "71NG")).then(function (m) {
              return m.DevpatternsModule;
            });
          }
        }, {
          path: 'technology',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | technology-technology-module */
            "technology-technology-module").then(__webpack_require__.bind(null,
            /*! ../technology/technology.module */
            "sXCT")).then(function (m) {
              return m.TechnologyModule;
            });
          }
        }, {
          path: 'contact',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | contact-contact-module */
            "contact-contact-module").then(__webpack_require__.bind(null,
            /*! ../contact/contact.module */
            "BjQp")).then(function (m) {
              return m.ContactModule;
            });
          }
        }, {
          path: 'devopsmachine',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | devpatterns-devopsmachine-devopsmachine-module */
            "devpatterns-devopsmachine-devopsmachine-module").then(__webpack_require__.bind(null,
            /*! ../devpatterns/devopsmachine/devopsmachine.module */
            "cqQk")).then(function (m) {
              return m.DevopsmachineModule;
            });
          }
        }, {
          path: 'gitflow',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | devpatterns-gitflow-gitflow-module */
            "devpatterns-gitflow-gitflow-module").then(__webpack_require__.bind(null,
            /*! ../devpatterns/gitflow/gitflow.module */
            "/fXz")).then(function (m) {
              return m.GitflowModule;
            });
          }
        }, {
          path: 'devprocscrum',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | devpatterns-developmentprocessscrum-developmentprocessscrummodule */
            "devpatterns-developmentprocessscrum-developmentprocessscrummodule").then(__webpack_require__.bind(null,
            /*! ../devpatterns/developmentprocessscrum/developmentprocessscrummodule */
            "cNIz")).then(function (m) {
              return m.DevelopmentprocessscrumModule;
            });
          }
        }]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map