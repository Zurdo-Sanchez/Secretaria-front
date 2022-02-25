(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"], {
    /***/
    "/3YG":
    /*!**************************************************************!*\
      !*** ./src/app/layout/components/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function YG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "wq+O");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "DwMd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../db.service */
      "nA5i");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(translate, router, DB) {
          var _this = this;

          _classCallCheck(this, HeaderComponent);

          this.translate = translate;
          this.router = router;
          this.DB = DB;
          this.user = {
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email")
          };
          this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
              _this.toggleSidebar();
            }
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pushRightClass = 'push-right';
          }
        }, {
          key: "isToggled",
          value: function isToggled() {
            var dom = document.querySelector('body');
            return dom.classList.contains(this.pushRightClass);
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            var dom = document.querySelector('body');
            dom.classList.toggle(this.pushRightClass);
          }
        }, {
          key: "rltAndLtr",
          value: function rltAndLtr() {
            var dom = document.querySelector('body');
            dom.classList.toggle('rtl');
          }
        }, {
          key: "onLoggedout",
          value: function onLoggedout() {
            var _this2 = this;

            this.DB.logout(localStorage.token_type, localStorage.access_token).subscribe({
              next: function next(data) {
                _this2.DB.alerts.push({
                  id: 1,
                  type: 'success',
                  message: "Sesion cerrada con éxito"
                });

                console.log(data);
              }
            });
            localStorage.clear();
          }
        }, {
          key: "changeLang",
          value: function changeLang(language) {
            this.translate.use(language);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]])], HeaderComponent);
      /***/
    },

    /***/
    "Dn25":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dn25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n<app-posticks></app-posticks>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section [ngClass]=\"{ collapsed: collapedSideBar }\" class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>\n";
      /***/
    },

    /***/
    "DwMd":
    /*!****************************************************************!*\
      !*** ./src/app/layout/components/header/header.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function DwMd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .navbar {\n  background-color: #222;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #999;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHNCQUhrQjtBQUUxQjtBQUdRO0VBQ0ksV0FBQTtBQURaO0FBSVE7RUFDSSxXQUFBO0FBRlo7QUFJWTtFQUNJLFdBQUE7QUFGaEI7QUFPSTtFQUNJLFlBQUE7QUFMUjtBQU9RO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQUxaO0FBT1k7RUFDSSxtQkFBQTtBQUxoQjtBQVVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUmhCO0FBV1k7RUFDSSxTQUFBO0FBVGhCO0FBWVk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQVZoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XG46aG9zdCB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcblxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1pdGVtID4gYSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWVzc2FnZXMge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG5cbiAgICAgICAgLm1lZGlhIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sYXN0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "IIaJ":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IIaJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav [ngClass]=\"{ sidebarPushRight: isActive, collapsed: collapsed }\" class=\"sidebar\">\n    <div class=\"list-group\">\n        <a [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" routerLink=\"/dashboard\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\n            <span>{{ 'Dashboard' | translate }}</span>\n        </a>\n         <a *ngIf = \"SCE == 1\"\n            [routerLinkActive]=\"['router-link-active']\"\n             [routerLink]=\"['/graphics']\"\n              class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\n            <span>{{ 'Charts' | translate }}</span>\n        </a>\n\n        <a [routerLinkActive]=\"['router-link-active']\" href=\"https://www.santafe.gob.ar/isieme/\" target=\"_blank\" class=\"list-group-item\">\n            <img   src=\"assets/images/isieme logo-S.png\"\n            style=\"width: 20px; height: 20px;\"/>&nbsp;\n            <span style=\"padding-left: 12px;\">{{ 'ISIEME' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" href=\"https://www.santafe.gob.ar/milegajo\" target=\"_blank\" class=\"list-group-item\">\n            <img   src=\"assets/images/milegajo.png\"\n            style=\"width: 20px; height: 20px;\"/>&nbsp;\n            <span style=\"padding-left: 12px;\">{{ 'Mi Legajo' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" href=\"https://www.santafe.gov.ar/intranetv2/login\" target=\"_blank\" class=\"list-group-item\">\n            <img   src=\"assets/images/intranet.png\"\n            style=\"width: 20px; height: 20px;\"/>&nbsp;\n            <span style=\"padding-left: 12px;\">{{ 'INTRANET' | translate }}</span>\n        </a>\n\n        <!--<a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/forms']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\n            <span>{{ 'Forms' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/bs-element']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\n            <span>{{ 'Bootstrap Element' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/grid']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\n            <span>{{ 'Bootstrap Grid' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/components']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i>&nbsp;\n            <span>{{ 'Component' | translate }}</span>\n        </a>\n        <div class=\"nested-menu\">\n            <a (click)=\"addExpandClass('pages')\" class=\"list-group-item\">\n                <i class=\"fa fa-plus\"></i>&nbsp;\n                <span>{{ 'Menu' | translate }}</span>\n            </a>\n            <li [class.expand]=\"showMenu === 'pages'\" class=\"nested\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/blank-page']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>&nbsp;\n            <span>{{ 'Blank Page' | translate }}</span>\n        </a>\n        <a class=\"list-group-item\" href=\"http://www.strapui.com/\">\n            <i class=\"fa fa-caret-down\"></i>&nbsp;\n            <span>{{ 'More Themes' | translate }}</span>\n        </a> -->\n\n        <div class=\"header-fields\">\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\n            </a>\n            <div class=\"nested-menu\">\n                <a (click)=\"addExpandClass('languages')\" class=\"list-group-item\">\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\n                </a>\n                <li [class.expand]=\"showMenu === 'languages'\" class=\"nested\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a (click)=\"changeLang('en')\" href=\"javascript:void(0)\">\n                                {{ 'English' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('fr')\" href=\"javascript:void(0)\">\n                                {{ 'French' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('ur')\" href=\"javascript:void(0)\">\n                                {{ 'Urdu' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('es')\" href=\"javascript:void(0)\">\n                                {{ 'Spanish' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('it')\" href=\"javascript:void(0)\">\n                                {{ 'Italian' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('fa')\" href=\"javascript:void(0)\">\n                                {{ 'Farsi' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('de')\" href=\"javascript:void(0)\">\n                                {{ 'German' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <div class=\"nested-menu\">\n                <a (click)=\"addExpandClass('profile')\" class=\"list-group-item\">\n                    <span><i class=\"fa fa-user\"></i>&nbsp; {{user.name}}</span>\n                </a>\n                <li [class.expand]=\"showMenu === 'profile'\" class=\"nested\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"onLoggedout()\" [routerLink]=\"['/login']\">\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n    <div (click)=\"toggleCollapsed()\" [ngClass]=\"{ collapsed: collapsed }\" class=\"toggle-button\">\n        <i class=\"fa fa-fw fa-angle-double-{{ collapsed ? 'right' : 'left' }}\"></i>&nbsp;\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\n\n    </div>\n</nav>\n";
      /***/
    },

    /***/
    "SpYX":
    /*!**********************************************!*\
      !*** ./src/app/layout/layout.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function SpYX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n.collapsed {\n  margin-left: 60px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLDJCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSwyQkFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjM1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2xsYXBzZWQge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "Tx//":
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /*! exports provided: LayoutModule */

    /***/
    function Tx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/header/header.component */
      "/3YG");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "eSv6");
      /* harmony import */


      var _components_posticks_posticks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/posticks/posticks.component */
      "hMEx");
      /* harmony import */


      var _layout_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layout-routing.module */
      "iKbT");
      /* harmony import */


      var _layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layout.component */
      "uswQ");

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_9__["LayoutRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_posticks_posticks_component__WEBPACK_IMPORTED_MODULE_8__["PosticksComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]]
      })], LayoutModule);
      /***/
    },

    /***/
    "dHAK":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/posticks/posticks.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dHAK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Handlee&display=swap\" rel=\"stylesheet\">\n\n\n\n<div *ngIf=\"Colapse; else noColapse\">\n    <div class=\"button pos1\" (click)=\"chageEstate()\">\n        <img class=\"img\" src=\"assets/images/post-it.png\" width=\"90px\" />\n        <p class=\"number pos1\">{{totalPostIt}}</p>\n\n    </div>\n</div>\n<ng-template #noColapse >\n    <nav [ngClass]=\"{ sidebarPushRight: isActive, collapsed: collapsed }\" class=\"sidebar\">\n        <div style=\"display: flex;\">\n            <img class=\"imgmas\" (click)=\"Adding()\" src=\"assets/images/mas.png\"/>\n            <p class=\"title\">Post-It!!</p>\n        </div>\n        <div class=\"button pos2\" (click)=\"chageEstate()\">\n            <img class=\"img\" src=\"assets/images/post-it.png\" width=\"100px\"/>\n            <p class=\"number pos3\">{{totalPostIt}}</p>\n        </div>\n\n        <div class=\"post\" *ngIf='adding'>\n\n            <textarea #N1\n             type=\"text\"\n             style= \"width: 280px;     border: 2px solid rgb(53, 53, 53);\"\n             [(ngModel)]=\"newPostIt.text\"\n             ></textarea>\n\n            <div>\n                <img class=\"nok\" name=\"echo\" src=\"assets/images/me-gusta.png\" width=\"25px\" (click)=\"createPostIt()\" />\n                <img name='tacho' src=\"assets/images/tacho.png\" (click)=\"cancelAdding()\" width=\"25px\" style=\"padding-left: 3px;\"/>\n            </div>\n        </div>\n\n\n        <div *ngFor=\"let item of PostIts.data; let i = index \" style=\"width: 100%; \" >\n            <div class=\"linea\">\n\n                <div class=\"post\">\n                    <textarea *ngIf= \"item.post_it.echo; else Else \" class=\"echo\" name=\"textA\" cols=\"40\" rows=\"4\">{{item.post_it.text}}</textarea>\n\n                    <ng-template #Else>\n                        <textarea name=\"textA\" cols=\"40\" rows=\"4\"> {{item.post_it.text}} </textarea>\n                    </ng-template>\n                    <div>\n                        <img *ngIf= \"item.post_it.echo; else elseEcho \" class=\"nok\" name=\"echo\" src=\"assets/images/no-me-gusta.png\" width=\"25px\" (click)=\"echo(item.post_it)\"/>\n                        <ng-template  #elseEcho>\n                            <img class=\"nok\" name=\"echo\" src=\"assets/images/me-gusta.png\" width=\"25px\" (click)=\"echo(item.post_it)\"/>\n                        </ng-template>\n\n                        <img name='tacho' src=\"assets/images/tacho.png\" width=\"25px\" style=\"padding-left: 3px;\"(click)=\"deletePostIt(item.id)\"/>\n                    </div>\n                </div>\n\n                <p class=\"createby\" >Creada por {{item.post_it.user.name}} </p>\n                <img (click)=\"To_Share(item.id)\" src=\"assets/images/mas.png\" width=\"15px\" height=\"15px\" style=\"padding-left: 3px;\"/>\n                <div class=\"cont\">Compartido con:</div>\n                  <div class=\"grid-container\">\n                        <div class=\"comp\" *ngFor=\"let shared of item.Shared_By; let i = index \">\n                            <div *ngIf = \"shared.user.name != item.user.name\">\n                                {{shared.user.name}}\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <!-- <div class=\"comp grid-container\"  *ngFor=\"let shared of item.Shared_By; let i = index \">\n                            <div *ngIf = \"shared.user.name != item.user.name\">\n                                <div class=\"grid-item1\" style=\"list-style: none;\">{{shared.user.name}}</div>\n                                </div>\n                        </div> -->\n\n                <div *ngIf = \"to_share\">\n                    <div *ngIf = \"to_share_id === item.id\">\n                        <div class=\"comp\" *ngFor=\"let user of users; let i = index \">\n                            <div *ngIf = \"user.name[0] != 0  \">\n                                <div *ngIf = \"user.name[0] != 1 \">\n                                    <div *ngIf = \"user.id != item.user_id\" style=\"display:flex; height: 14px ;\">\n                                        <table>\n                                            <th>{{item.user_id}}</th>\n                                            <th style=\"width: 60px;\">{{user.name}}</th>\n                                            <th> <input (change)=\"changeCheckBox(user.id)\" type=\"checkbox\" style=\"padding-left: 3px;\"></th>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <button class=\"btn btn-outline-success small pt-0 pb-0 px-2\"\n                            type=\"button\"\n                            style=\"width:80px; margin-top: 5px;\"\n                            (click)=\"save(item.post_it.id)\">\n                            Guardar\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n\n\n</ng-template>\n\n\n\n\n";
      /***/
    },

    /***/
    "eSv6":
    /*!****************************************************************!*\
      !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
      \****************************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function eSv6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "IIaJ");
      /* harmony import */


      var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar.component.scss */
      "kSlK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../db.service */
      "nA5i");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(translate, router, DB) {
          var _this3 = this;

          _classCallCheck(this, SidebarComponent);

          this.translate = translate;
          this.router = router;
          this.DB = DB;
          this.SCE = localStorage.getItem('SCE');
          this.user = {
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email")
          };
          this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"] && window.innerWidth <= 992 && _this3.isToggled()) {
              _this3.toggleSidebar();
            }
          });
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isActive = false;
            this.collapsed = false;
            this.showMenu = '';
            this.pushRightClass = 'push-right';
            this.toggleCollapsed();
          }
        }, {
          key: "eventCalled",
          value: function eventCalled() {
            this.isActive = !this.isActive;
          }
        }, {
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "toggleCollapsed",
          value: function toggleCollapsed() {
            this.collapsed = !this.collapsed;
            this.collapsedEvent.emit(this.collapsed);
          }
        }, {
          key: "isToggled",
          value: function isToggled() {
            var dom = document.querySelector('body');
            return dom.classList.contains(this.pushRightClass);
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            var dom = document.querySelector('body');
            dom.classList.toggle(this.pushRightClass);
          }
        }, {
          key: "rltAndLtr",
          value: function rltAndLtr() {
            var dom = document.querySelector('body');
            dom.classList.toggle('rtl');
          }
        }, {
          key: "changeLang",
          value: function changeLang(language) {
            this.translate.use(language);
          }
        }, {
          key: "onLoggedout",
          value: function onLoggedout() {
            this.DB.logout(localStorage.token_type, localStorage.access_token).subscribe(function (data) {
              console.log(data);
            });
            localStorage.clear();
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }];
      };

      SidebarComponent.propDecorators = {
        collapsedEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]])], SidebarComponent);
      /***/
    },

    /***/
    "hMEx":
    /*!******************************************************************!*\
      !*** ./src/app/layout/components/posticks/posticks.component.ts ***!
      \******************************************************************/

    /*! exports provided: PosticksComponent */

    /***/
    function hMEx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PosticksComponent", function () {
        return PosticksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_posticks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./posticks.component.html */
      "dHAK");
      /* harmony import */


      var _posticks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./posticks.component.scss */
      "j38e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../db.service */
      "nA5i");

      var PosticksComponent = /*#__PURE__*/function () {
        function PosticksComponent(DB) {
          _classCallCheck(this, PosticksComponent);

          this.DB = DB;
          this.addUser = [];
          this.newPostIt = {
            text: "",
            user_id: localStorage.getItem("id")
          };
          this.adding = false;
          this.Colapse = true;
        }

        _createClass(PosticksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.actualizacion(30000);
            this.to_share = false;
            this.DB.userList().subscribe({
              next: function next(data) {
                _this4.users = data;
              }
            });
            this.DB.PostItList().subscribe({
              next: function next(data) {
                _this4.PostIts = data;

                if (_this4.PostIts.total < 10) {
                  _this4.totalPostIt = "0" + _this4.PostIts.total;
                } else {
                  _this4.totalPostIt = _this4.PostIts.total;
                }

                _this4.PostIts.data.forEach(function (element) {
                  var aux = _this4.users.find(function (x) {
                    return x.id == element.post_it.user_id;
                  });

                  element.post_it.user = aux;
                });
              }
            });
          }
        }, {
          key: "chageEstate",
          value: function chageEstate() {
            if (this.Colapse) {
              this.Colapse = false;
            } else {
              this.Colapse = true;
            }

            console.log(this.PostIts);
            this.ngOnInit();
          }
        }, {
          key: "echo",
          value: function echo(Post_it) {
            var _this5 = this;

            if (Post_it.echo == 0) {
              Post_it.echo = 1;
            } else {
              Post_it.echo = 0;
            }

            this.DB.PostItEdit(Post_it).subscribe({
              next: function next(data) {
                console.log(data);

                _this5.ngOnInit();
              },
              error: function error(err) {
                console.error('algo salio mal: ' + err.message);
              }
            });
            console.log(Post_it);
          }
        }, {
          key: "Adding",
          value: function Adding() {
            if (this.adding == false) {
              this.adding = true;
              console.log(this.N1.nativeElement);
              this.N1.nativeElement.focus();
            }
          }
        }, {
          key: "deletePostIt",
          value: function deletePostIt(id) {
            var _this6 = this;

            this.DB.PostITDetroy(id).subscribe({
              next: function next(data) {
                console.log(data);

                _this6.ngOnInit();
              },
              error: function error(err) {
                console.error('algo salio mal: ' + err.message);
              }
            });
          }
        }, {
          key: "createPostIt",
          value: function createPostIt() {
            var _this7 = this;

            this.DB.PostItCreate(this.newPostIt).subscribe({
              next: function next(data) {
                console.log(data);
                _this7.adding = false;
                _this7.newPostIt.text = "";

                _this7.ngOnInit();
              }
            });
          }
        }, {
          key: "cancelAdding",
          value: function cancelAdding() {
            this.adding = false;
          }
        }, {
          key: "To_Share",
          value: function To_Share(id) {
            if (this.to_share == true) {
              this.to_share = false;
            } else {
              this.to_share = true;
              this.to_share_id = id;
            }
          }
        }, {
          key: "changeCheckBox",
          value: function changeCheckBox(id) {
            var aux = this.addUser.find(function (x) {
              return id;
            });

            if (aux === id) {
              this.addUser.pop();
            } else {
              this.addUser.push(id);
            }

            console.log(this.addUser);
          }
        }, {
          key: "save",
          value: function save(id) {
            var aux = {
              id: id,
              shared_ids: this.addUser
            };
            this.DB.PostItShare(aux).subscribe({
              next: function next(data) {
                console.log(data);
              }
            });
            this.ngOnInit();
          }
        }, {
          key: "actualizacion",
          value: function actualizacion(ms) {
            var _this8 = this;

            if (this.to_share) {
              window.setInterval(function () {
                return _this8.DB.PostItList().subscribe({
                  next: function next(data) {
                    _this8.PostIts = data;

                    if (_this8.PostIts.total < 10) {
                      _this8.totalPostIt = "0" + _this8.PostIts.total;
                    } else {
                      _this8.totalPostIt = _this8.PostIts.total;
                    }

                    _this8.PostIts.data.forEach(function (element) {
                      var aux = _this8.users.find(function (x) {
                        return x.id == element.post_it.user_id;
                      });

                      element.post_it.user = aux;
                    });

                    console.log(data);
                  }
                });
              }, ms);
            }
          }
        }]);

        return PosticksComponent;
      }();

      PosticksComponent.ctorParameters = function () {
        return [{
          type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }];
      };

      PosticksComponent.propDecorators = {
        N1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['N1']
        }]
      };
      PosticksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-posticks',
        template: _raw_loader_posticks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_posticks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]])], PosticksComponent);
      /***/
    },

    /***/
    "iKbT":
    /*!*************************************************!*\
      !*** ./src/app/layout/layout-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: LayoutRoutingModule */

    /***/
    function iKbT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
        return LayoutRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout.component */
      "uswQ");

      var routes = [{
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [{
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'prefix'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-dashboard-module */
            [__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboard/dashboard.module */
            "GZeB")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'listExp',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Files-list-exp-list-exp-module */
            [__webpack_require__.e("common"), __webpack_require__.e("Files-list-exp-list-exp-module")]).then(__webpack_require__.bind(null,
            /*! ./Files/list-exp/list-exp.module */
            "/Iki")).then(function (m) {
              return m.ListexpModule;
            });
          }
        }, {
          path: 'createExp',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Files-create-exp-create-exp-module */
            [__webpack_require__.e("common"), __webpack_require__.e("Files-create-exp-create-exp-module")]).then(__webpack_require__.bind(null,
            /*! ./Files/create-exp/create-exp.module */
            "x8ij")).then(function (m) {
              return m.CreateexpModule;
            });
          }
        }, {
          path: 'passes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | external-passes-passes-passes-module */
            [__webpack_require__.e("common"), __webpack_require__.e("external-passes-passes-passes-module")]).then(__webpack_require__.bind(null,
            /*! ./external-passes/passes/passes.module */
            "Qz+8")).then(function (m) {
              return m.PassesModule;
            });
          }
        }, {
          path: 'passe',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | internal-passe-passe-passe-module */
            [__webpack_require__.e("common"), __webpack_require__.e("internal-passe-passe-passe-module")]).then(__webpack_require__.bind(null,
            /*! ./internal-passe/passe/passe.module */
            "qtcw")).then(function (m) {
              return m.PasseModule;
            });
          }
        }, {
          path: 'graphics',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | graphics-graphics-module */
            [__webpack_require__.e("default~dontUse-charts-charts-module~graphics-graphics-module"), __webpack_require__.e("graphics-graphics-module")]).then(__webpack_require__.bind(null,
            /*! ./graphics/graphics.module */
            "KjeO")).then(function (m) {
              return m.GraphicsModule;
            });
          }
        }, {
          path: 'dependencies',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dependecies-dependecies-module */
            [__webpack_require__.e("common"), __webpack_require__.e("dependecies-dependecies-module")]).then(__webpack_require__.bind(null,
            /*! ./dependecies/dependecies.module */
            "xv/k")).then(function (m) {
              return m.DependenciesModule;
            });
          }
        }, {
          path: 'normativas',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | normativas-normativas-module */
            [__webpack_require__.e("common"), __webpack_require__.e("normativas-normativas-module")]).then(__webpack_require__.bind(null,
            /*! ./normativas/normativas.module */
            "OhqQ")).then(function (m) {
              return m.NormativasModule;
            });
          }
        }, {
          path: 'peaj',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | PEAJ-peaj-peaj-module */
            "PEAJ-peaj-peaj-module").then(__webpack_require__.bind(null,
            /*! ./PEAJ/peaj/peaj.module */
            "7Vvu")).then(function (m) {
              return m.PeajModule;
            });
          }
        }, {
          path: 'Not-Objetions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | PEAJ-not-objetions-not-objetions-module */
            "PEAJ-not-objetions-not-objetions-module").then(__webpack_require__.bind(null,
            /*! ./PEAJ/not-objetions/not-objetions.module */
            "FCPp")).then(function (m) {
              return m.NotObjetionsModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | control-user-profile-profile-module */
            "control-user-profile-profile-module").then(__webpack_require__.bind(null,
            /*! ./control-user/profile/profile.module */
            "waom")).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dontUse-form-form-module */
            "dontUse-form-form-module").then(__webpack_require__.bind(null,
            /*! ./dontUse/form/form.module */
            "ZJB+")).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dontUse-charts-charts-module */
            [__webpack_require__.e("default~dontUse-charts-charts-module~graphics-graphics-module"), __webpack_require__.e("dontUse-charts-charts-module")]).then(__webpack_require__.bind(null,
            /*! ./dontUse/charts/charts.module */
            "0Ggm")).then(function (m) {
              return m.ChartsModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dontUse-tables-tables-module */
            "dontUse-tables-tables-module").then(__webpack_require__.bind(null,
            /*! ./dontUse/tables/tables.module */
            "k89M")).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'bs-element',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dontUse-bs-element-bs-element-module */
            "dontUse-bs-element-bs-element-module").then(__webpack_require__.bind(null,
            /*! ./dontUse/bs-element/bs-element.module */
            "Wgu2")).then(function (m) {
              return m.BsElementModule;
            });
          }
        }, {
          path: 'grid',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dontUse-grid-grid-module */
            "dontUse-grid-grid-module").then(__webpack_require__.bind(null,
            /*! ./dontUse/grid/grid.module */
            "/BT/")).then(function (m) {
              return m.GridModule;
            });
          }
        }, {
          path: 'blank-page',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | blank-page-blank-page-module */
            "blank-page-blank-page-module").then(__webpack_require__.bind(null,
            /*! ./blank-page/blank-page.module */
            "yUho")).then(function (m) {
              return m.BlankPageModule;
            });
          }
        }]
      }];

      var LayoutRoutingModule = function LayoutRoutingModule() {
        _classCallCheck(this, LayoutRoutingModule);
      };

      LayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LayoutRoutingModule);
      /***/
    },

    /***/
    "j38e":
    /*!********************************************************************!*\
      !*** ./src/app/layout/components/posticks/posticks.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function j38e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "textarea {\n  background-color: #FCF0AD;\n  border: 0;\n}\n\n.sidebar {\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  right: 0px;\n  width: 325px;\n  border-radius: 0;\n  overflow-y: auto;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n  background-color: #FCF0AD;\n  border: 2px solid #353535;\n}\n\n.button {\n  position: fixed;\n  padding: 2px;\n  z-index: 1000;\n  bottom: 5px;\n  right: 5px;\n  width: 62px;\n  height: 70px;\n  border-radius: 10px;\n  bottom: 5px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n\n.img {\n  border-radius: 100%;\n}\n\n.imgmas {\n  margin-top: 10px;\n  margin-left: 3px;\n  margin-right: 5px;\n  width: 50px;\n  height: 50px;\n}\n\n.number {\n  position: fixed;\n  z-index: 1000;\n  border-radius: 10px;\n  padding-bottom: 5px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.pos1 {\n  bottom: 17px;\n  right: 35px;\n  opacity: 80%;\n}\n\n.pos2 {\n  top: 55px;\n  right: 30px;\n  opacity: 100%;\n}\n\n.pos3 {\n  top: 75px;\n  right: 25px;\n  opacity: 100%;\n}\n\n.title {\n  font-family: \"Handlee\", cursive;\n  font-size: 45px;\n  font-weight: bolder;\n  padding-left: 5px;\n  padding-top: 15px;\n}\n\n.post {\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Handlee\", cursive;\n  font-size: 16px;\n  align-items: center;\n  text-align: right;\n  width: 100%;\n  margin: 1px;\n  padding: 1px;\n  padding-top: 3px;\n}\n\n.echo {\n  text-decoration: line-through;\n}\n\n.nok {\n  transform: scaleX(-1);\n}\n\n.createby {\n  font-family: \"Handlee\", cursive;\n  font-size: 10px;\n  font-weight: lighter;\n  margin: 0;\n  padding-left: 5px;\n}\n\n.comp {\n  font-family: \"Handlee\", cursive;\n  font-size: 10px;\n  font-weight: lighter;\n  margin: 0;\n  padding-left: 5px;\n  height: auto;\n}\n\n.cont {\n  font-family: \"Handlee\", cursive;\n  font-size: 10px;\n  font-weight: bold;\n  margin: 0;\n  padding-left: 5px;\n}\n\n.linea {\n  border-bottom: 1px solid black;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Bvc3RpY2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBS0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFLQSxnQ0FBQTtBQUNKOztBQUdBO0VBRUksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUtBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQURKOztBQUdBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksNkJBQUE7QUFESjs7QUFJQTtFQUVJLHFCQUFBO0FBREo7O0FBSUE7RUFDRywrQkFBQTtFQUNDLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBR0E7RUFFSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksOEJBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtBQURKIiwiZmlsZSI6InBvc3RpY2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjBBRDtcbiAgICBib3JkZXI6IDA7XG59XG4uc2lkZWJhcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB0b3A6IDU2cHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMzI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0YwQUQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDUzLCA1MywgNTMpO1xuXG59XG5cbi5idXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDYycHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5cbi5pbWcge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uaW1nbWFze1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHhcbn1cblxuLm51bWJlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuXG59XG5cbi5wb3MxIHtcbiAgICBib3R0b206IDE3cHg7XG4gICAgcmlnaHQ6IDM1cHggO1xuICAgIG9wYWNpdHk6IDgwJTtcbn1cblxuLnBvczJ7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiAzMHB4IDtcbiAgICBvcGFjaXR5OiAxMDAlO1xufVxuLnBvczN7XG4gICAgdG9wOiA3NXB4O1xuICAgIHJpZ2h0OiAyNXB4IDtcbiAgICBvcGFjaXR5OiAxMDAlO1xufVxuLnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnSGFuZGxlZScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbn1cblxuLnBvc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ0hhbmRsZWUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMXB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuXG59XG5cbi5lY2hve1xuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XG59XG5cbi5ub2t7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG4uY3JlYXRlYnl7XG4gICBmb250LWZhbWlseTogJ0hhbmRsZWUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmNvbXB7XG4gICAgZm9udC1mYW1pbHk6ICdIYW5kbGVlJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmNvbnR7XG5cbiAgICBmb250LWZhbWlseTogJ0hhbmRsZWUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmxpbmVhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDVweDtcbn1cblxuXG4iXX0= */";
      /***/
    },

    /***/
    "kSlK":
    /*!******************************************************************!*\
      !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function kSlK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar .list-group a.list-group-item {\n  background: #222;\n  border: 0;\n  border-radius: 0;\n  color: #999;\n  text-decoration: none;\n}\n.sidebar .list-group a.list-group-item .fa {\n  margin-right: 10px;\n}\n.sidebar .list-group a:hover {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group a.router-link-active {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group .header-fields {\n  padding-top: 10px;\n}\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sidebar .sidebar-dropdown *:focus {\n  border-radius: none;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-title {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n.sidebar .sidebar-dropdown .panel-title a {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #222;\n}\n.sidebar .sidebar-dropdown .panel-title a span {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n.sidebar .sidebar-dropdown .panel-title a:hover,\n.sidebar .sidebar-dropdown .panel-title a:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n.sidebar .sidebar-dropdown .panel-title:hover {\n  background: #151515;\n}\n.sidebar .sidebar-dropdown .panel-collapse {\n  border-radious: 0;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n  border-radius: 0;\n  background-color: #222;\n  border: 0 solid transparent;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n  color: #999;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n  color: #fff;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n  background: #151515;\n}\n.nested-menu .list-group-item {\n  cursor: pointer;\n}\n.nested-menu .nested {\n  list-style-type: none;\n}\n.nested-menu ul.submenu {\n  display: none;\n  height: 0;\n}\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n}\n.nested-menu .expand ul.submenu li a {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px;\n  }\n}\n@media print {\n  .sidebar {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields {\n    display: none;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white;\n}\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button i {\n  font-size: 23px;\n}\n.toggle-button:hover {\n  background: #151515;\n  color: #fff;\n}\n.collapsed {\n  width: 60px;\n}\n.collapsed span {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBYnNCO0VBY3RCLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFLQSxnQ0FBQTtBQUFKO0FBR1E7RUFDSSxnQkExQmM7RUEyQmQsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0FBRGhCO0FBS1E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFIWjtBQU1RO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBSlo7QUFPUTtFQUNJLGlCQUFBO0FBTFo7QUFPWTtFQUNJLDhDQUFBO0FBTGhCO0FBV1E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFUWjtBQVlRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVZaO0FBWVk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQXZFVTtBQTZEMUI7QUFZZ0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBVnBCO0FBY1k7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQVpoQjtBQWdCUTtFQUNJLG1CQUFBO0FBZFo7QUFpQlE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFmWjtBQWtCZ0I7RUFDSSxnQkFBQTtFQUNBLHNCQXBHTTtFQXFHTiwyQkFBQTtBQWhCcEI7QUFrQm9CO0VBQ0ksV0FBQTtBQWhCeEI7QUFtQm9CO0VBQ0ksV0FBQTtBQWpCeEI7QUFxQmdCO0VBQ0ksbUJBQUE7QUFuQnBCO0FBMkJJO0VBQ0ksZUFBQTtBQXhCUjtBQTJCSTtFQUNJLHFCQUFBO0FBekJSO0FBNEJJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUExQlI7QUE4QlE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBNUJaO0FBK0JnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQTdCcEI7QUFvQ0E7RUFDSTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VBakNOO0FBQ0Y7QUFvQ0E7RUFDSTtJQUNJLHdCQUFBO0VBbENOO0FBQ0Y7QUFxQ0E7RUFDSTtJQUNJLGFBQUE7RUFuQ047QUFDRjtBQXNDQTtFQUNJLFVBQUE7QUFwQ0o7QUF1Q0E7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0FBcENKO0FBdUNBO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtBQXBDSjtBQXVDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBV0EsMEJBQUE7RUFLQSxnQ0FBQTtBQTlDSjtBQWdDSTtFQUNJLGVBQUE7QUE5QlI7QUFpQ0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUEvQlI7QUEwQ0E7RUFDSSxXQUFBO0FBdkNKO0FBeUNJO0VBQ0ksYUFBQTtBQXZDUiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuLnNpZGViYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdG9wOiA1NnB4O1xuICAgIGxlZnQ6IDIzNXB4O1xuICAgIHdpZHRoOiAyMzVweDtcbiAgICBtYXJnaW4tbGVmdDogLTIzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICAubGlzdC1ncm91cCB7XG4gICAgICAgIGEubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgLmZhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLWZpZWxkcyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItZHJvcGRvd24ge1xuICAgICAgICAqOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIsXG4gICAgICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaW91czogMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgICAgLnBhbmVsLWJvZHkge1xuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmVzdGVkLW1lbnUge1xuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm5lc3RlZCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG5cbiAgICB1bC5zdWJtZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cblxuICAgICYgLmV4cGFuZCB7XG4gICAgICAgIHVsLnN1Ym1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHByaW50IHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5oZWFkZXItZmllbGRzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyMzZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcblxuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNvbGxhcHNlZCB7XG4gICAgd2lkdGg6IDYwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "uswQ":
    /*!********************************************!*\
      !*** ./src/app/layout/layout.component.ts ***!
      \********************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function uswQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./layout.component.html */
      "Dn25");
      /* harmony import */


      var _layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout.component.scss */
      "SpYX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent() {
          _classCallCheck(this, LayoutComponent);
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "receiveCollapsed",
          value: function receiveCollapsed($event) {
            this.collapedSideBar = $event;
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ctorParameters = function () {
        return [];
      };

      LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-layout',
        template: _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutComponent);
      /***/
    },

    /***/
    "wq+O":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Secretaria de Educación </a>\n    <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i aria-hidden=\"true\" class=\"fa fa-bars text-muted\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto\">\n            &nbsp;\n            <!-- <li class=\"nav-item\">\n                <a\n                    (click)=\"rltAndLtr()\"\n                    class=\"nav-link mt-1\"\n                    href=\"javascript:void(0)\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                >\n                    RTL/LTR\n                </a>\n            </li> -->\n            &nbsp;\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\"> {{user.name}} </h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">{{user.name}}</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">{{user.name}}</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                </ul>\n            </li> -->\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n                    <li class=\"dropdown-divider\"></li>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'View All' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a (click)=\"changeLang('en')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'English' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fr')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'French' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('ur')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Urdu' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('es')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Spanish' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('it')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Italian' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fa')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Farsi' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('de')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'German' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('zh-CHS')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Simplified Chinese' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> {{user.name}} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/profile']\">\n                        <i class=\"fa fa-fw fa-user\"  ></i> {{ 'Profile' | translate }}\n                    </a>\n                    <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                    </a> -->\n                    <a (click)=\"onLoggedout()\" [routerLink]=\"['/login']\" class=\"dropdown-item\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=layout-layout-module-es5.js.map