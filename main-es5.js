(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+P2p":
    /*!*******************************************************!*\
      !*** ./src/app/core/user-menu/user-menu.component.ts ***!
      \*******************************************************/

    /*! exports provided: UserMenuComponent */

    /***/
    function P2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
        return UserMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");

      var _c0 = function _c0() {
        return {
          "min-width": "70px"
        };
      };

      var UserMenuComponent = /*#__PURE__*/function () {
        function UserMenuComponent(elementRef) {
          _classCallCheck(this, UserMenuComponent);

          this.elementRef = elementRef;
          this.isOpen = false;
          this.currentUser = null;
        }

        _createClass(UserMenuComponent, [{
          key: "onClick",
          value: function onClick(event, targetElement) {
            if (!targetElement) {
              return;
            }

            var clickedInside = this.elementRef.nativeElement.contains(targetElement);

            if (!clickedInside) {
              this.isOpen = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserMenuComponent;
      }();

      UserMenuComponent.ɵfac = function UserMenuComponent_Factory(t) {
        return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      UserMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserMenuComponent,
        selectors: [["cdk-user-menu"]],
        hostBindings: function UserMenuComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserMenuComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event, $event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          currentUser: "currentUser"
        },
        decls: 36,
        vars: 8,
        consts: [[1, "toolbar-user-container"], ["mat-button", "", 1, "toolbar-user-btn", 3, "ngStyle.xs", "click"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "avatar", 3, "src"], ["fxHide", "", "fxShow.gt-xs", "", 1, "name"], ["fxHide", "", "fxShow.gt-xs", "", 1, "icon"], [1, "dropdown", "mat-elevation-z1"], [1, "content"], ["matLine", ""], ["mat-icon-button", ""]],
        template: function UserMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserMenuComponent_Template_button_click_1_listener() {
              return ctx.isOpen = !ctx.isOpen;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "keyboard_arrow_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx.currentUser == null ? null : ctx.currentUser.photoURL) || "assets/images/avatars/noavatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.currentUserName) || ctx.Hari);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.toolbar-user-container[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .toolbar-user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  min-width: 160px;\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .toolbar-user-btn[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .toolbar-user-btn[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0 8px 0 10px;\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .toolbar-user-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  transform: rotate(0);\n  transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .toolbar-user-btn.open[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .toolbar-user-btn.open[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  background: white;\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  min-width: 160px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.25s linear, max-height 0.25s linear, opacity 0.25s linear;\n}\n\n@media screen and (max-width: 599px) {\n  .toolbar-user-container[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    min-width: 65px;\n  }\n}\n\n.toolbar-user-container[_ngcontent-%COMP%]   .dropdown.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFFSTtFQUNJLG9CQUFBO0FBQVI7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDREQUFBO0FBRFI7O0FBSUk7RUFDSSwrQkFBQTtBQUZSOztBQUlNO0VBQ0UsMEJBQUE7QUFGUjs7QUFPSTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkVBQUE7QUFMUjs7QUFPUTtFQVZKO0lBV1EsZUFBQTtFQUpWO0FBQ0Y7O0FBTVE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFKWiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9vbGJhci11c2VyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC50b29sYmFyLXVzZXItYnRuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcblxuICAgIC5hdmF0YXIge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgICBtYXJnaW46IDAgOHB4IDAgMTBweDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICAgIH1cblxuICAgICYub3BlbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA1KTtcblxuICAgICAgLmljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAgIC5kcm9wZG93biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGxpbmVhciwgbWF4LWhlaWdodCAuMjVzIGxpbmVhciwgb3BhY2l0eSAuMjVzIGxpbmVhcjtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5vcGVuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-user-menu',
            templateUrl: './user-menu.component.html',
            styleUrls: ['./user-menu.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
          }]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /workspace/marcelo/personalsiteV1/marcelointaschi/sourcecode/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1qzX":
    /*!***************************************************!*\
      !*** ./src/app/core/sidebar/sidebar.component.ts ***!
      \***************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function qzX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function SidebarComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r3.time);
        }
      }

      function SidebarComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var todolist_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todolist_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todolist_r4.time);
        }
      }

      function SidebarComponent_mat_list_item_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r5.from, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r5.subject, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" -- ", message_r5.content, " ");
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);

          this.today = Date.now(); // public bufferValue;

          this.events = [{
            id: 'id',
            title: 'Business Meeting',
            time: '05:00 PM',
            state: 'state'
          }, {
            id: 'id',
            title: 'Ask for a Vacation',
            time: '05:00 PM',
            state: 'state'
          }, {
            id: 'id',
            title: 'Dinner with Micheal',
            time: '05:00 PM',
            state: 'state'
          }, {
            id: 'id',
            title: 'Deadline for Project ABC',
            time: '05:00 PM',
            state: 'state'
          }];
          this.todolists = [{
            id: 'id',
            title: 'Get to know Angular more',
            time: 'Added:4 days ago'
          }, {
            id: 'id',
            title: 'Configure new Router',
            time: 'Added:4 days ago'
          }, {
            id: 'id',
            title: 'Invite Joy to play Carroms',
            time: 'Added:4 days ago'
          }, {
            id: 'id',
            title: 'Check SRS of Project X',
            time: 'Added:4 days ago'
          }];
          this.messages = [{
            from: 'Catherin',
            subject: 'Shopping',
            content: 'hi there??'
          }, {
            from: 'Jack',
            subject: 'Function',
            content: 'yes'
          }, {
            from: 'Karina',
            subject: 'Get together',
            content: 'nice'
          }, {
            from: 'Micheal',
            subject: 'Trip',
            content: 'ya.. I will'
          }, {
            from: 'Ashik',
            subject: 'Meeting',
            content: 'Time??'
          }, {
            from: 'Joy',
            subject: 'Party',
            content: 'Lets enjoy'
          }];
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)();
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["cdk-sidebar"]],
        decls: 52,
        vars: 31,
        consts: [["label", "Overview"], [1, "sidebar"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "padding", "30px 0", "background", "url('./assets/images/bg/city1.jpg')"], [2, "width", "100%", "height", "22%", "position", "absolute", "background", "#17161642", "z-index", "1"], [1, "mat-display-2", 2, "margin", "0", "color", "white", "z-index", "2"], [1, "mat-subheading-2", 2, "margin", "0", "color", "white", "z-index", "2"], [1, "mat-subheading-2", 2, "margin", "10px 14px 0"], [4, "ngFor", "ngForOf"], ["label", "Notifications"], [2, "margin", "10px 14px 0"], [3, "color", "mode", "value", "bufferValue"], ["fxLayout", "row", "fxLayoutAlign", "start center", "mat-ripple", ""], ["fxLayout", "column"], [1, "mat-ubheading-2", 2, "margin", "0", "font-weight", "bold"], [2, "font-size", "12px"], ["fxLayout", "column", 1, "title"], ["matListAvatar", "", "src", "assets/images/avatars/friend1.jpeg", "alt", "..."], ["matLine", "", 2, "margin", "0", "font-weight", "bold"], ["matLine", ""]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upcoming Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SidebarComponent_div_17_Template, 8, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Todo-List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SidebarComponent_div_22_Template, 8, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Friends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SidebarComponent_mat_list_item_30_Template, 9, 3, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Server Statistics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "CPU Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-progress-bar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "RAM Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-progress-bar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "CPU Temp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-progress-bar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 19, ctx.today, "shortTime"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 22, ctx.today, "EEEE"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 25, ctx.today, "MMMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 28, ctx.today, "dd"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todolists);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent")("mode", "buffer")("value", "70")("bufferValue", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary")("mode", "buffer")("value", "47")("bufferValue", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn")("mode", "buffer")("value", "43")("bufferValue", 100);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.today[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 22%;\n  position: absolute;\n  background: \"#17161642\";\n  z-index: 1;\n}\n\n.today-bg[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n\n.today-time[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  z-index: 2;\n}\n\n.today-date[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxlQUFBO0FBREQ7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBR0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQUQ7O0FBRUE7RUFDQyxlQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFRDs7QUFBQTtFQUNDLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUdEIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcbiAgfVxuLmNvbnRlbnR7XG5cdG1hcmdpbi10b3A6IDJweDtcblxufVxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4udG9kYXl7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDIyJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRiYWNrZ3JvdW5kOiAnIzE3MTYxNjQyJztcblx0ei1pbmRleDogMTtcbn1cbi50b2RheS1iZ3tcblx0cGFkZGluZzogMzBweCAwO1xufVxuLnRvZGF5LXRpbWV7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6IHdoaXRlO1xuXHR6LWluZGV4OiAyO1xufVxuLnRvZGF5LWRhdGV7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6IHdoaXRlO1xuXHR6LWluZGV4OiAyO1xufVxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "3V7X":
    /*!*****************************************************!*\
      !*** ./src/app/core/sidemenu/sidemenu.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidemenuComponent */

    /***/
    function V7X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function () {
        return SidemenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _menu_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-element */
      "TJdt");
      /* harmony import */


      var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-scrollbar */
      "AV7R");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../sidemenu-item/sidemenu-item.component */
      "l53g");

      function SidemenuComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "10px 0px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "50%");
        }
      }

      function SidemenuComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "50%");
        }
      }

      function SidemenuComponent_cdk_sidemenu_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cdk-sidemenu-item", 9);
        }

        if (rf & 2) {
          var menu_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", menu_r3)("iconOnly", ctx_r2.iconOnly);
        }
      }

      var SidemenuComponent = /*#__PURE__*/function () {
        function SidemenuComponent() {
          _classCallCheck(this, SidemenuComponent);

          this.iconOnly = false;
          this.menus = _menu_element__WEBPACK_IMPORTED_MODULE_1__["menus"];
        }

        _createClass(SidemenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidemenuComponent;
      }();

      SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) {
        return new (t || SidemenuComponent)();
      };

      SidemenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidemenuComponent,
        selectors: [["cdk-sidemenu"]],
        inputs: {
          iconOnly: "iconOnly"
        },
        decls: 5,
        vars: 3,
        consts: [[2, "height", "calc(100% - 33px)"], ["fxLayout", "column"], ["fxLayoutAlign", "space-around center", 3, "margin", 4, "ngIf"], ["style", "height: 100px;", "fxLayoutAlign", "space-around center", 4, "ngIf"], [3, "menu", "iconOnly", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "space-around center"], ["width", "100", "src", "./assets/user-image.jpg"], ["fxLayoutAlign", "space-around center", 2, "height", "100px"], ["width", "50", "src", "./assets/user-image.jpg"], [3, "menu", "iconOnly"]],
        template: function SidemenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-scrollbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidemenuComponent_div_2_Template, 2, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidemenuComponent_div_3_Template, 2, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidemenuComponent_cdk_sidemenu_item_4_Template, 1, 2, "cdk-sidemenu-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.iconOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
          }
        },
        directives: [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_2__["NgScrollbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_5__["SidemenuItemComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidemenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-sidemenu',
            templateUrl: './sidemenu.component.html',
            styleUrls: ['./sidemenu.component.scss']
          }]
        }], function () {
          return [];
        }, {
          iconOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "4BE0":
    /*!*********************************************************!*\
      !*** ./src/app/core/fullscreen/fullscreen.component.ts ***!
      \*********************************************************/

    /*! exports provided: FullscreenComponent */

    /***/
    function BE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullscreenComponent", function () {
        return FullscreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! screenfull */
      "k7+O");
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function FullscreenComponent_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fullscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        }
      }

      function FullscreenComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fullscreen_exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        }
      }

      var FullscreenComponent = /*#__PURE__*/function () {
        function FullscreenComponent() {
          _classCallCheck(this, FullscreenComponent);

          this.isFullscreen = false;
        }

        _createClass(FullscreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
              screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
              this.isFullscreen = !this.isFullscreen;
            }
          }
        }]);

        return FullscreenComponent;
      }();

      FullscreenComponent.ɵfac = function FullscreenComponent_Factory(t) {
        return new (t || FullscreenComponent)();
      };

      FullscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullscreenComponent,
        selectors: [["cdk-fullscreen"]],
        decls: 4,
        vars: 4,
        consts: [["mat-icon-button", "", 3, "fxHide", "fxHide.gt-xs", "click"], [1, "icon"], [3, "inline", 4, "ngIf"], [3, "inline"]],
        template: function FullscreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullscreenComponent_Template_button_click_0_listener() {
              return ctx.toggleFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullscreenComponent_mat_icon_2_Template, 2, 1, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullscreenComponent_mat_icon_3_Template, 2, 1, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", true)("fxHide.gt-xs", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFullscreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFullscreen);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: [".icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mdWxsc2NyZWVuL2Z1bGxzY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullscreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-fullscreen',
            templateUrl: './fullscreen.component.html',
            styleUrls: ['./fullscreen.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyDYv02aLpqUgtJIP9CbT31mOHpu0a77xLM",
          authDomain: "marcelo.intaschi.com",
          databaseURL: "https://marcelointaschi.firebaseio.com",
          projectId: "marcelointaschi",
          storageBucket: "marcelointaschi.appspot.com",
          messagingSenderId: "542053337228",
          appId: "1:442235031109:prd:331c3f03d8dbb330t58e22",
          measurementId: "M-BRGCB65FNN"
        }
      };
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'app';
        }

        _createClass(AppComponent, [{
          key: "getRouteAnimation",
          value: function getRouteAnimation(outlet) {
            return outlet.activatedRouteData.animation;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TJdt":
    /*!***********************************************!*\
      !*** ./src/app/core/sidemenu/menu-element.ts ***!
      \***********************************************/

    /*! exports provided: menus */

    /***/
    function TJdt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "menus", function () {
        return menus;
      });

      var menus = [{
        'name': 'Marcelo Intaschi',
        'icon': 'grade',
        'link': '/auth/home',
        'open': false
      }, {
        'name': 'Article',
        'icon': 'content_copy',
        'link': '/auth/article',
        'open': false
      }, {
        'name': 'Dev & Patterns',
        'icon': 'code',
        'link': '/auth/devpatterns',
        'open': false
      }, {
        'name': 'Technology',
        'icon': 'dashboard',
        'link': '/auth/technology',
        'open': false
      }, {
        'name': 'Contact',
        'icon': 'mail',
        'link': '/auth/contact',
        'open': false
      }];
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lazy-load/lazy-load.module */
      "vxi5");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__["LazyLoadModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__["LazyLoadModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__["LazyLoadModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "fTgK":
    /*!***************************************************!*\
      !*** ./src/app/core/toolbar/toolbar.component.ts ***!
      \***************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function fTgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar.helpers */
      "xp2L");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../search-bar/search-bar.component */
      "u0im");
      /* harmony import */


      var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../fullscreen/fullscreen.component */
      "4BE0");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function ToolbarComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r2.sidenav.toggle();
            return ctx_r2.drawer.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolbarComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.sidenav.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent() {
          _classCallCheck(this, ToolbarComponent);

          this.searchOpen = false;
          this.toolbarHelpers = _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__["ToolbarHelpers"];
        }

        _createClass(ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)();
      };

      ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["cdk-toolbar"]],
        inputs: {
          sidenav: "sidenav",
          sidebar: "sidebar",
          drawer: "drawer",
          matDrawerShow: "matDrawerShow"
        },
        decls: 9,
        vars: 3,
        consts: [[1, "mat-elevation-z4"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "spacer"], [3, "open"], ["href", "https://github.com/marcelointaschi", "target", "_blank"], ["src", "../../assets/images/github.png", "alt", "Avatar", 2, "width", "30px", "border-radius", "10%"], ["mat-icon-button", "", 3, "click"], [1, "material-icons", "app-toolbar-menu"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarComponent_button_1_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_button_2_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cdk-search-bar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "cdk-fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matDrawerShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.matDrawerShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.searchOpen);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["FullscreenComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["[_nghost-%COMP%] {\n  z-index: 4;\n}\n\n.main-toolbar[_ngcontent-%COMP%] {\n  height: 64px;\n  padding-left: 16px;\n}\n\n.more-btn[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 70px;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5tYWluLXRvb2xiYXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLm1vcmUtYnRuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDcwcHg7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.scss']
          }]
        }], function () {
          return [];
        }, {
          sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          matDrawerShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "l53g":
    /*!***************************************************************!*\
      !*** ./src/app/core/sidemenu-item/sidemenu-item.component.ts ***!
      \***************************************************************/

    /*! exports provided: SidemenuItemComponent */

    /***/
    function l53g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidemenuItemComponent", function () {
        return SidemenuItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function SidemenuItemComponent_mat_list_item_1_h3_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.menu.name, " ");
        }
      }

      function SidemenuItemComponent_mat_list_item_1_mat_chip_list_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.menu == null ? null : ctx_r4.menu.chip == null ? null : ctx_r4.menu.chip.value, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "indicateOpen": a0
        };
      };

      function SidemenuItemComponent_mat_list_item_1_mat_icon_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.menu.open));
        }
      }

      function SidemenuItemComponent_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuItemComponent_mat_list_item_1_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.menu.open = !ctx_r6.menu.open;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidemenuItemComponent_mat_list_item_1_h3_3_Template, 2, 1, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidemenuItemComponent_mat_list_item_1_mat_chip_list_4_Template, 3, 1, "mat-chip-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidemenuItemComponent_mat_list_item_1_mat_icon_5_Template, 2, 3, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.menu.icon, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.iconOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.menu == null ? null : ctx_r0.menu.chip) && !ctx_r0.iconOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chechForChildMenu());
        }
      }

      function SidemenuItemComponent_mat_list_item_2_h3_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.menu.name, " ");
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function SidemenuItemComponent_mat_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuItemComponent_mat_list_item_2_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.menu.open = !ctx_r9.menu.open;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidemenuItemComponent_mat_list_item_2_h3_3_Template, 2, 1, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.menu.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.menu.icon, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.iconOnly);
        }
      }

      function SidemenuItemComponent_cdk_sidemenu_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cdk-sidemenu-item", 12);
        }

        if (rf & 2) {
          var submenu_r11 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", submenu_r11)("iconOnly", ctx_r2.iconOnly)("secondaryMenu", true);
        }
      }

      var _c2 = function _c2(a0, a1) {
        return {
          "secondaryMenu": a0,
          "primary": a1
        };
      };

      var SidemenuItemComponent = /*#__PURE__*/function () {
        function SidemenuItemComponent() {
          _classCallCheck(this, SidemenuItemComponent);

          this.secondaryMenu = false;
        }

        _createClass(SidemenuItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openLink",
          value: function openLink() {
            this.menu.open = this.menu.open;
          }
        }, {
          key: "chechForChildMenu",
          value: function chechForChildMenu() {
            return this.menu && this.menu.sub ? true : false;
          }
        }]);

        return SidemenuItemComponent;
      }();

      SidemenuItemComponent.ɵfac = function SidemenuItemComponent_Factory(t) {
        return new (t || SidemenuItemComponent)();
      };

      SidemenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidemenuItemComponent,
        selectors: [["cdk-sidemenu-item"]],
        inputs: {
          menu: "menu",
          iconOnly: "iconOnly",
          secondaryMenu: "secondaryMenu"
        },
        decls: 4,
        vars: 9,
        consts: [[3, "ngClass"], [3, "click", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], [3, "menu", "iconOnly", "secondaryMenu", 4, "ngFor", "ngForOf"], [3, "click"], ["matListIcon", "", "iconsmall", ""], ["matLine", "", 4, "ngIf"], [4, "ngIf"], ["class", "sidenav-dropdown-indicator rotate ", 3, "ngClass", 4, "ngIf"], ["matLine", ""], [1, "sidenav-dropdown-indicator", "rotate", 3, "ngClass"], [3, "routerLink", "click"], [3, "menu", "iconOnly", "secondaryMenu"]],
        template: function SidemenuItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidemenuItemComponent_mat_list_item_1_Template, 6, 4, "mat-list-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidemenuItemComponent_mat_list_item_2_Template, 4, 5, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidemenuItemComponent_cdk_sidemenu_item_3_Template, 1, 3, "cdk-sidemenu-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx.menu.open ? "1200px" : "48px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx.secondaryMenu, !ctx.secondaryMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu.link == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu.link != false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu == null ? null : ctx.menu.sub);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], SidemenuItemComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZW1lbnUtaXRlbS9zaWRlbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidemenuItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-sidemenu-item',
            templateUrl: './sidemenu-item.component.html',
            styleUrls: ['./sidemenu-item.component.scss']
          }]
        }], function () {
          return [];
        }, {
          menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          iconOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          secondaryMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
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


      var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidemenu/sidemenu.component */
      "3V7X");
      /* harmony import */


      var _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidemenu-item/sidemenu-item.component */
      "l53g");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-scrollbar */
      "AV7R");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./toolbar-notification/toolbar-notification.component */
      "tk7m");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "fTgK");
      /* harmony import */


      var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./search-bar/search-bar.component */
      "u0im");
      /* harmony import */


      var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./fullscreen/fullscreen.component */
      "4BE0");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "1qzX");
      /* harmony import */


      var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./user-menu/user-menu.component */
      "+P2p");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK"); // import {
      //     PerfectScrollbarModule, 
      //     PERFECT_SCROLLBAR_CONFIG,
      //     PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
      // const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
      //     suppressScrollX: true
      // };


      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [// {
          //     provide: PERFECT_SCROLLBAR_CONFIG,
          //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          // }
        ],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], // PerfectScrollbarModule,
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_13__["NgScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"], _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"], _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"], _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], // PerfectScrollbarModule,
          ngx_scrollbar__WEBPACK_IMPORTED_MODULE_13__["NgScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"]],
          exports: [_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"], _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"], _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"], _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"], _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"], _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"], _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], // PerfectScrollbarModule,
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_13__["NgScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"]],
            exports: [_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"], _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"], _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"], _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]],
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
    "tk7m":
    /*!*****************************************************************************!*\
      !*** ./src/app/core/toolbar-notification/toolbar-notification.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ToolbarNotificationComponent */

    /***/
    function tk7m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarNotificationComponent", function () {
        return ToolbarNotificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-scrollbar */
      "AV7R");

      function ToolbarNotificationComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.notifications == null ? null : ctx_r0.notifications.length);
        }
      }

      function ToolbarNotificationComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function ToolbarNotificationComponent_ng_template_20_div_1_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
        }
      }

      function ToolbarNotificationComponent_ng_template_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarNotificationComponent_ng_template_20_div_1_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var notification_r7 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10["delete"](notification_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ToolbarNotificationComponent_ng_template_20_div_1_div_13_Template, 1, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r7 = ctx.$implicit;
          var isLast_r8 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r7.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r7.lastTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r8);
        }
      }

      function ToolbarNotificationComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-scrollbar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarNotificationComponent_ng_template_20_div_1_Template, 14, 3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.notifications);
        }
      }

      function ToolbarNotificationComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6682\u65E0\u901A\u77E5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var ToolbarNotificationComponent = /*#__PURE__*/function () {
        // @HostListener('document:click', ['$event', '$event.target'])
        // onClick(event: MouseEvent, targetElement: HTMLElement) {
        //     if (!targetElement) {
        //           return;
        //     }
        //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        //     if (!clickedInside) {
        //          this.isOpen = false;
        //     }
        // }
        function ToolbarNotificationComponent(elementRef) {
          _classCallCheck(this, ToolbarNotificationComponent);

          this.elementRef = elementRef;
          this.cssPrefix = 'toolbar-notification';
          this.isOpen = false;
          this.notifications = [];
        }

        _createClass(ToolbarNotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select() {}
        }, {
          key: "delete",
          value: function _delete(notification) {}
        }]);

        return ToolbarNotificationComponent;
      }();

      ToolbarNotificationComponent.ɵfac = function ToolbarNotificationComponent_Factory(t) {
        return new (t || ToolbarNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ToolbarNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarNotificationComponent,
        selectors: [["cdk-toolbar-notification"]],
        inputs: {
          notifications: "notifications"
        },
        decls: 24,
        vars: 12,
        consts: [[1, "toolbar-notification-container"], ["mat-icon-button", "", 3, "ngClass", "click"], ["class", "badge", 4, "ngIf"], [1, "dropdown", "mat-elevation-z4"], [1, "card"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "header"], [1, "title"], [1, "name"], [1, "extra"], ["type", "button", "mat-icon-button", ""], [1, "icon"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "footer"], [1, "action"], ["thenBlock", ""], ["elseBlock", ""], [1, "badge"], [1, "content"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "mat-ripple", "", 1, "notification"], ["fxLayout", "column", 1, "title"], [1, "time"], ["fxFlex", ""], ["type", "button", "mat-icon-button", "", 3, "click"], [1, "close"], ["class", "divider", 4, "ngIf"], [1, "divider"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "no"]],
        template: function ToolbarNotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarNotificationComponent_Template_button_click_1_listener() {
              return ctx.isOpen = !ctx.isOpen;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarNotificationComponent_span_4_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ToolbarNotificationComponent_div_16_Template, 1, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mark all as read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ToolbarNotificationComponent_ng_template_20_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ToolbarNotificationComponent_ng_template_22_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.cssPrefix + "-btn"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications && (ctx.notifications == null ? null : ctx.notifications.length) !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nYou have ", ctx.notifications == null ? null : ctx.notifications.length, " new notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.notifications == null ? null : ctx.notifications.length) !== 0)("ngIfThen", _r2)("ngIfElse", _r4);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__["NgScrollbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"]],
        styles: [".badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  font-weight: 700;\n  line-height: 13px;\n  height: 13px;\n  padding: 5px;\n  border-radius: 26%;\n  width: 30%;\n  background-color: #f44336;\n  color: #fff;\n  border-color: #f44336;\n}\n\n.toolbar-notification-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.toolbar-notification-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  background: white;\n  position: absolute;\n  top: 42px;\n  right: 28px;\n  min-width: 350px;\n  z-index: 1000;\n  transform: translateY(0) scale(0);\n  transform-origin: top right;\n  visibility: hidden;\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n@media screen and (max-width: 599px) {\n  .dropdown[_ngcontent-%COMP%] {\n    min-width: 50vw;\n    right: 5px;\n    transform: translateY(0);\n    visibility: hidden;\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n}\n\n.dropdown.open[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1);\n  visibility: visible;\n}\n\n.dropdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background: #EEEEEE;\n  min-height: 54px;\n  padding-left: 16px;\n  padding-right: 8px;\n  color: #555;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.dropdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: 256px;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  min-height: 64px;\n  padding: 0 16px 0 14px;\n  position: relative;\n  color: #666;\n  cursor: pointer;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 28px;\n  line-height: 28px;\n  font-size: 18px;\n  margin-right: 13px;\n  text-align: center;\n  border-radius: 50%;\n  background: #FFF;\n  color: #888;\n  border: 1px solid #EEE;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification.primary[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification.accent[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #aaa;\n  color: #bbb;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification.warn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #eee;\n  color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification.read[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n.dropdown[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification.read[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.dropdown[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  min-height: 42px;\n  border-top: 1px solid #EEE;\n}\n\n.dropdown[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #AAA;\n  text-align: center;\n  font-size: 13px;\n}\n\n.dropdown[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  height: 1px;\n  background: #EEE;\n  margin: 0 16px 0 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b29sYmFyLW5vdGlmaWNhdGlvbi90b29sYmFyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNELFdBQUE7RUFDQSxxQkFBQTtBQURIOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2R0FBQTtBQUhEOztBQUtDO0VBWkQ7SUFhSyxlQUFBO0lBQ0EsVUFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSw2R0FBQTtFQUZIO0FBQ0Y7O0FBSUM7RUFDSSxpQ0FBQTtFQUNBLG1CQUFBO0FBRkw7O0FBTUs7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFKUDs7QUFNTztFQUNFLGVBQUE7RUFDQSxXQUFBO0FBSlQ7O0FBUUk7RUFDRyxnQkFBQTtFQUNBLGlCQUFBO0FBTlA7O0FBUU87RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU5UOztBQVFTO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQU5WOztBQVNTO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0FBUFo7O0FBVVM7RUFDRSxlQUFBO0FBUlg7O0FBV1M7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUNELFlBQUE7RUFDQSxpQkFBQTtBQVRYOztBQWFXO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBWGI7O0FBZ0JXO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBZGI7O0FBbUJXO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBakJiOztBQXFCUztFQUNFLFdBQUE7QUFuQlg7O0FBcUJXO0VBQ0UsbUJBQUE7QUFuQmI7O0FBeUJJO0VBQ0csZ0JBQUE7RUFDQSwwQkFBQTtBQXZCUDs7QUF5Qks7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXZCVDs7QUEyQkk7RUFDRyx3QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBekJQIiwiZmlsZSI6InNyYy9hcHAvY29yZS90b29sYmFyLW5vdGlmaWNhdGlvbi90b29sYmFyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmVmaXg6ICd0b29sYmFyLW5vdGlmaWNhdGlvbic7XG5cbi5iYWRnZSB7XG4gIFx0cG9zaXRpb246IGFic29sdXRlO1xuICBcdHRvcDogMDtcbiAgXHRsZWZ0OiA1MCU7XG4gIFx0Zm9udC13ZWlnaHQ6IDcwMDtcbiAgXHRsaW5lLWhlaWdodDogMTNweDtcbiAgXHRoZWlnaHQ6IDEzcHg7XG4gIFx0cGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI2JTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIFx0Y29sb3I6ICNmZmY7XG4gIFx0Ym9yZGVyLWNvbG9yOiNmNDQzMzZcbn1cblxuLiN7JHByZWZpeH0ge1xuICAmLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLmRyb3Bkb3duIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA0MnB4O1xuXHRyaWdodDogMjhweDtcblx0bWluLXdpZHRoOiAzNTBweDtcblx0ei1pbmRleDogMTAwMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDApO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSwgdmlzaWJpbGl0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcblx0ICAgIG1pbi13aWR0aDogNTB2dztcblx0ICAgIHJpZ2h0OiA1cHg7XG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgXHR2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLCB2aXNpYmlsaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblx0fVxuXG5cdCYub3BlbiB7XG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG5cdCAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHR9XG5cdC5jYXJkIHtcbiAgICAgIFxuXHQgICAgLmhlYWRlciB7XG5cdCAgICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7XG5cdCAgICAgIG1pbi1oZWlnaHQ6IDU0cHg7XG5cdCAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcblx0ICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuXHQgICAgICBjb2xvcjogIzU1NTtcblx0ICAgICAgZGlzcGxheTogZmxleDtcblx0ICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHQgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdCAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXG5cdCAgICAgIC5leHRyYSB7XG5cdCAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXHQgICAgICAgIGNvbG9yOiAjODg4O1xuXHQgICAgICB9XG4gICAgXHR9XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIFx0b3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFx0bWF4LWhlaWdodDogMjU2cHg7XG5cbiAgICAgIFx0Lm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIFx0bWluLWhlaWdodDogNjRweDtcblx0ICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAxNHB4O1xuXHQgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICBjb2xvcjogIzY2Njtcblx0ICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblx0ICAgICAgICAuaWNvbiB7XG5cdFx0ICAgICAgICBoZWlnaHQ6IDI4cHg7XG5cdFx0ICAgICAgICB3aWR0aDogMjhweDtcblx0XHQgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRcdCAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXHRcdCAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuXHRcdCAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdCAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXHRcdCAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcblx0XHQgICAgICAgIGNvbG9yOiAjODg4O1xuXHRcdCAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VFRTtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHQudGl0bGUge1xuICAgICAgICAgIFx0XHRmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIFx0XHRmb250LXNpemU6IDE0cHg7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0LnRpbWUge1xuICAgICAgICAgXHRcdGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHQuY2xvc2Uge1xuICAgICAgICAgIFx0XHRmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgXHRcdHdpZHRoOiAxOHB4O1xuXHQgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuXHQgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi5wcmltYXJ5IHtcblx0ICAgICAgICAgIC5pY29uIHtcblx0ICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcblx0ICAgICAgICAgICAgY29sb3I6ICNkZGQ7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi5hY2NlbnQge1xuXHQgICAgICAgICAgLmljb24ge1xuXHQgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuXHQgICAgICAgICAgICBjb2xvcjogI2JiYjtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICAmLndhcm4ge1xuXHQgICAgICAgICAgLmljb24ge1xuXHQgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuXHQgICAgICAgICAgICBjb2xvcjogI2RkZDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICAmLnJlYWQge1xuXHQgICAgICAgICAgY29sb3I6ICM5OTk7XG5cblx0ICAgICAgICAgIC5uYW1lIHtcblx0ICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG4gICAgICBcdH1cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIFx0bWluLWhlaWdodDogNDJweDtcbiAgICAgIFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNFRUU7XG5cblx0ICAgIC5hY3Rpb24ge1xuXHQgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblx0ICAgICAgICBjb2xvcjogI0FBQTtcblx0ICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXHQgICAgfVxuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgIFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgXHRoZWlnaHQ6IDFweDtcbiAgICAgIFx0YmFja2dyb3VuZDogI0VFRTtcbiAgICAgIFx0bWFyZ2luOiAwIDE2cHggMCAxNHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarNotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-toolbar-notification',
            templateUrl: './toolbar-notification.component.html',
            styleUrls: ['./toolbar-notification.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          notifications: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "u0im":
    /*!*********************************************************!*\
      !*** ./src/app/core/search-bar/search-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: SearchBarComponent */

    /***/
    function u0im(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () {
        return SearchBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");

      var _c0 = function _c0(a0) {
        return {
          "search-open": a0
        };
      };

      var SearchBarComponent = /*#__PURE__*/function () {
        function SearchBarComponent() {
          _classCallCheck(this, SearchBarComponent);
        }

        _createClass(SearchBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchBarComponent;
      }();

      SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
        return new (t || SearchBarComponent)();
      };

      SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchBarComponent,
        selectors: [["cdk-search-bar"]],
        inputs: {
          open: "open"
        },
        decls: 2,
        vars: 3,
        consts: [[1, "search", 3, "ngClass"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "focus", "focusout"]],
        template: function SearchBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SearchBarComponent_Template_input_focus_1_listener() {
              return ctx.bigMenu = true;
            })("focusout", function SearchBarComponent_Template_input_focusout_1_listener() {
              return ctx.bigMenu = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.open == true));
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"]],
        styles: [".search[_ngcontent-%COMP%] {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px;\n}\n\n.search.search-open[_ngcontent-%COMP%] {\n  width: 250px;\n  visibility: visible;\n  opacity: 1;\n  margin-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcblx0d2lkdGg6IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG9wYWNpdHk6IDA7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0dHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xuXHRtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5zZWFyY2guc2VhcmNoLW9wZW4ge1xuXHR3aWR0aDogMjUwcHg7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdG9wYWNpdHk6IDE7XG5cdG1hcmdpbi10b3A6IDExcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-search-bar',
            templateUrl: './search-bar.component.html',
            styleUrls: ['./search-bar.component.scss']
          }]
        }], function () {
          return [];
        }, {
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vxi5":
    /*!***********************************************!*\
      !*** ./src/app/lazy-load/lazy-load.module.ts ***!
      \***********************************************/

    /*! exports provided: LazyLoadModule */

    /***/
    function vxi5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function () {
        return LazyLoadModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-auth-module */
          [__webpack_require__.e("default~auth-auth-module~pages-login-login-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null,
          /*! ../auth/auth.module */
          "Yj9t")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("default~auth-auth-module~pages-login-login-module"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, // {path: 'editor', loadChildren: () => import('../editor/editor.module').then(m => m.EditorModule)},
      {
        path: '**',
        redirectTo: 'auth/home'
      }];

      var LazyLoadModule = function LazyLoadModule() {
        _classCallCheck(this, LazyLoadModule);
      };

      LazyLoadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LazyLoadModule
      });
      LazyLoadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LazyLoadModule_Factory(t) {
          return new (t || LazyLoadModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LazyLoadModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyLoadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xp2L":
    /*!*************************************************!*\
      !*** ./src/app/core/toolbar/toolbar.helpers.ts ***!
      \*************************************************/

    /*! exports provided: ToolbarHelpers */

    /***/
    function xp2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarHelpers", function () {
        return ToolbarHelpers;
      });

      var ToolbarHelpers = {
        notifications: [{
          id: 'id',
          title: 'Mail 5',
          lastTime: '23 Minutes ago',
          state: 'state'
        }, {
          id: 'id',
          title: 'Mail 5',
          lastTime: '23 Minutes ago',
          state: 'state'
        }, {
          id: 'id',
          title: 'Mail 5',
          lastTime: '23 Minutes ago',
          state: 'state'
        }],
        currentUser: {
          photoURL: 'assets/images/avatars/hari.jpg',
          currentUserName: 'Hari Krishna'
        }
      };
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map