(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Sv0":
    /*!******************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
      \******************************************************************/

    /*! exports provided: PageHeaderModule */

    /***/
    function Sv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
        return PageHeaderModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page-header.component */
      "3zLz");

      var PageHeaderModule = function PageHeaderModule() {
        _classCallCheck(this, PageHeaderModule);
      };

      PageHeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]]
      })], PageHeaderModule);
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
      /*! /home/lberraz/public_html/new_sec_front/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3zLz":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
      \*********************************************************************/

    /*! exports provided: PageHeaderComponent */

    /***/
    function zLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
        return PageHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "4wMH");
      /* harmony import */


      var _page_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-header.component.scss */
      "CBB2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PageHeaderComponent = /*#__PURE__*/function () {
        function PageHeaderComponent() {
          _classCallCheck(this, PageHeaderComponent);
        }

        _createClass(PageHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageHeaderComponent;
      }();

      PageHeaderComponent.ctorParameters = function () {
        return [];
      };

      PageHeaderComponent.propDecorators = {
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PageHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-header',
        template: _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PageHeaderComponent);
      /***/
    },

    /***/
    "4BSX":
    /*!*******************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.component.ts ***!
      \*******************************************************/

    /*! exports provided: StatComponent */

    /***/
    function BSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatComponent", function () {
        return StatComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stat.component.html */
      "zuw5");
      /* harmony import */


      var _stat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stat.component.scss */
      "c4wb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StatComponent = /*#__PURE__*/function () {
        function StatComponent() {
          _classCallCheck(this, StatComponent);

          this.type_icon = true;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(StatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatComponent;
      }();

      StatComponent.ctorParameters = function () {
        return [];
      };

      StatComponent.propDecorators = {
        bgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        type_icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      StatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stat',
        template: _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StatComponent);
      /***/
    },

    /***/
    "4wMH":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wMH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{ heading }}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a [routerLink]=\"['/dashboard']\" href=\"Javascript:void(0)\"> Principal</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{ icon }}\"></i> {{ heading }}</li>\n        </ol>\n    </div>\n</div>\n";
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CBB2":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function CBB2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KsZM":
    /*!***************************************!*\
      !*** ./src/app/shared/guard/index.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function KsZM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "eRTK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /***/

    },

    /***/
    "M0ag":
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /*! exports provided: PageHeaderModule, StatModule, SharedPipesModule, AuthGuard */

    /***/
    function M0ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modules */
      "vH0B");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
        return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatModule", function () {
        return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"];
      });
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes/shared-pipes.module */
      "aYsj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function () {
        return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"];
      });
      /* harmony import */


      var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guard */
      "KsZM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"];
      });
      /***/

    },

    /***/
    "MviD":
    /*!****************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.module.ts ***!
      \****************************************************/

    /*! exports provided: StatModule */

    /***/
    function MviD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatModule", function () {
        return StatModule;
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


      var _stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stat.component */
      "4BSX");

      var StatModule = function StatModule() {
        _classCallCheck(this, StatModule);
      };

      StatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
      })], StatModule);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AppComponent);
      /***/
    },

    /***/
    "UTFV":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/modules/language-translation/language-translation.module.ts ***!
      \************************************************************************************/

    /*! exports provided: HttpLoaderFactory, LanguageTranslationModule */

    /***/
    function UTFV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageTranslationModule", function () {
        return LanguageTranslationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /**
       * This module is used to language translations.
       * The translations are saved in a json file in /src/app/assets/i18n directory
       * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
       */
      // import ngx-translate and the http loader
      // ngx-translate - required for AOT compilation


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
      }

      var LanguageTranslationModule = function LanguageTranslationModule(translate) {
        _classCallCheck(this, LanguageTranslationModule);

        this.translate = translate; // Gets Default language from browser if available, otherwise set English ad default

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
      };

      LanguageTranslationModule.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      LanguageTranslationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
          }
        })],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], LanguageTranslationModule);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./db.service */
      "nA5i");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared */
      "M0ag");
      /* harmony import */


      var _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/modules/language-translation/language-translation.module */
      "UTFV");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_10__["LanguageTranslationModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "aYsj":
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
      \*****************************************************/

    /*! exports provided: SharedPipesModule */

    /***/
    function aYsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function () {
        return SharedPipesModule;
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

      var SharedPipesModule = function SharedPipesModule() {
        _classCallCheck(this, SharedPipesModule);
      };

      SharedPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: []
      })], SharedPipesModule);
      /***/
    },

    /***/
    "c4wb":
    /*!*********************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function c4wb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "eRTK":
    /*!********************************************!*\
      !*** ./src/app/shared/guard/auth.guard.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function eRTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (localStorage.getItem('isLoggedin')) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "nA5i":
    /*!*******************************!*\
      !*** ./src/app/db.service.ts ***!
      \*******************************/

    /*! exports provided: DbService */

    /***/
    function nA5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DbService", function () {
        return DbService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var DbService = /*#__PURE__*/function () {
        function DbService(http) {
          _classCallCheck(this, DbService);

          this.http = http;
          this.alerts = [];
          this.url = " http://10.4.12.14:8000/api";
        } ///////////////////////////////USERS////////////////////////////////////


        _createClass(DbService, [{
          key: "login",
          value: function login(user) {
            var email = user.email;
            var password = user.password;
            var remember_me = true;
            return this.http.post(this.url + '/auth/login', {
              email: email,
              password: password,
              remember_me: remember_me
            });
          }
        }, {
          key: "signup",
          value: function signup(user) {
            return this.http.post(this.url + '/auth/signup', user);
          }
        }, {
          key: "user",
          value: function user(type, token) {
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': type + " " + token
              })
            };
            return this.http.get(this.url + "/auth/user", httpOptions);
          }
        }, {
          key: "userList",
          value: function userList() {
            return this.http.get(this.url + '/auth/list');
          }
        }, {
          key: "userEdit",
          value: function userEdit(type, token, user) {
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': type + " " + token
              })
            };
            console.log(token);
            return this.http.post(this.url + '/auth/edit', user, httpOptions);
          }
        }, {
          key: "logout",
          value: function logout(type, token) {
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': type + " " + token
              })
            };
            return this.http.get(this.url + "/auth/logout", httpOptions);
          } ///////////////////////////////FILES////////////////////////////////////

        }, {
          key: "file_total",
          value: function file_total() {
            var id = localStorage.getItem('id');
            return this.http.get(this.url + "/files/total/" + id);
          }
        }, {
          key: "File_list",
          value: function File_list(status) {
            return this.http.get(this.url + "/files/store/" + status);
          }
        }, {
          key: "File_update",
          value: function File_update(data) {
            return this.http.post(this.url + '/files/update', data);
          }
        }, {
          key: "File_search",
          value: function File_search(data) {
            return this.http.post(this.url + '/files/search', data);
          }
        }, {
          key: "File_validation_create",
          value: function File_validation_create(data) {
            return this.http.post(this.url + '/files/validation_create', data);
          }
        }, {
          key: "File_create",
          value: function File_create(data) {
            return this.http.post(this.url + '/files/create', data);
          }
        }, {
          key: "File_close",
          value: function File_close(status) {
            return this.http.get(this.url + "/files/close/" + status);
          } ///////////////////////////////EXTERNAL PASSE///////////////////////////

        }, {
          key: "External_passe_create",
          value: function External_passe_create(newPasse) {
            return this.http.post(this.url + '/external_passe/create', newPasse);
          }
        }, {
          key: "External_passe_list",
          value: function External_passe_list() {
            return this.http.get(this.url + "/external_passe");
          }
        }, {
          key: "External_passe_search",
          value: function External_passe_search(id_file) {
            return this.http.get(this.url + "/external_passe/" + id_file);
          }
        }, {
          key: "External_passe_update",
          value: function External_passe_update(external_passe) {
            return this.http.post(this.url + "/external_passe/update", external_passe);
          }
        }, {
          key: "External_passe_export",
          value: function External_passe_export(id) {
            window.open(this.url + "/exports/" + id, "_blank"); //return this.http.get(this.url + "/exports/" + id);
          }
        }, {
          key: "External_passe_close",
          value: function External_passe_close(external_passe_id) {
            return this.http.get(this.url + "/external_passe/close/" + external_passe_id);
          } ///////////////////////////////INTERNAL PASSE///////////////////////////

        }, {
          key: "internal_passe_create",
          value: function internal_passe_create(newPasse) {
            return this.http.post(this.url + '/internal_passe/create', newPasse);
          }
        }, {
          key: "internal_passe_list",
          value: function internal_passe_list() {
            return this.http.get(this.url + "/internal_passe");
          }
        }, {
          key: "internal_passe_search",
          value: function internal_passe_search(External_passe_id) {
            return this.http.get(this.url + "/internal_passe/" + External_passe_id);
          }
        }, {
          key: "internal_passe_update",
          value: function internal_passe_update(internal_passe) {
            return this.http.post(this.url + "/internal_passe/update", internal_passe);
          } ///////////////////////////////OFFICCES////////////////////////////////////

        }, {
          key: "Offices_list",
          value: function Offices_list() {
            return this.http.get(this.url + "/offices");
          }
        }, {
          key: "Offices_edit",
          value: function Offices_edit(office) {
            return this.http.post(this.url + "/offices", office);
          }
        }, {
          key: "Offices_search",
          value: function Offices_search(data) {
            return this.http.post(this.url + "/offices/search", data);
          }
        }, {
          key: "Offices_export",
          value: function Offices_export(data) {
            return this.http.post(this.url + "/exports/offices", data);
          }
        }, {
          key: "Excel_export",
          value: function Excel_export() {
            //window.open(this.url + '/exports/excel', "_blank");
            return this.http.get(this.url + "/exports/excel");
          } ///////////////////////////////normativas////////////////////////////////////

        }, {
          key: "Normativas_search",
          value: function Normativas_search(data) {
            return this.http.post(this.url + "/normativas/search", data);
          }
        }, {
          key: "Normativas_export",
          value: function Normativas_export(name) {
            window.open(this.url + "/normativas/export/" + name, "_blank");
          }
        }, {
          key: "Normativas_see",
          value: function Normativas_see(name) {
            window.open(this.url + "/normativas/see/" + name, "_blank");
          }
        }, {
          key: "Normativas_agrupations_list",
          value: function Normativas_agrupations_list() {
            return this.http.get(this.url + "/normativas/agrupations");
          }
        }, {
          key: "Normativas_types_list",
          value: function Normativas_types_list() {
            return this.http.get(this.url + "/normativas/types");
          }
        }, {
          key: "Nomativas_create",
          value: function Nomativas_create(fileToUpload) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/pdf').set('Accept', '*/*');
            console.log(fileToUpload);
            return this.http.post(this.url + "/normativas/create", fileToUpload, {
              headers: headers
            });
          } ///////////////////////////////OTHER////////////////////////////////////

        }, {
          key: "Provis_list",
          value: function Provis_list(search) {
            return this.http.post(this.url + "/provis/search", search);
          }
        }, {
          key: "Agrupations_list",
          value: function Agrupations_list() {
            return this.http.get(this.url + "/agrupations");
          }
        }, {
          key: "GoToUrl",
          value: function GoToUrl(url) {
            return this.http.get(url);
          }
        }, {
          key: "GoToUrlFile",
          value: function GoToUrlFile(url, search) {
            return this.http.post(url, search);
          }
        }]);

        return DbService;
      }();

      DbService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      DbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DbService);
      /***/
    },

    /***/
    "vH0B":
    /*!*****************************************!*\
      !*** ./src/app/shared/modules/index.ts ***!
      \*****************************************/

    /*! exports provided: PageHeaderModule, StatModule */

    /***/
    function vH0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-header/page-header.module */
      "+Sv0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
        return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"];
      });
      /* harmony import */


      var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stat/stat.module */
      "MviD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatModule", function () {
        return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"];
      });
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared */
      "M0ag");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layout-layout-module */
          [__webpack_require__.e("default~layout-control-user-login-login-module~layout-control-user-signup-signup-module~layout-layout-module"), __webpack_require__.e("layout-layout-module")]).then(__webpack_require__.bind(null,
          /*! ./layout/layout.module */
          "Tx//")).then(function (m) {
            return m.LayoutModule;
          });
        },
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layout-control-user-login-login-module */
          [__webpack_require__.e("default~layout-control-user-login-login-module~layout-control-user-signup-signup-module~layout-layout-module"), __webpack_require__.e("layout-control-user-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./layout/control-user/login/login.module */
          "wp7O")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layout-control-user-signup-signup-module */
          [__webpack_require__.e("default~layout-control-user-login-login-module~layout-control-user-signup-signup-module~layout-layout-module"), __webpack_require__.e("layout-control-user-signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ./layout/control-user/signup/signup.module */
          "KUH4")).then(function (m) {
            return m.SignupModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | server-error-server-error-module */
          "server-error-server-error-module").then(__webpack_require__.bind(null,
          /*! ./server-error/server-error.module */
          "3sFj")).then(function (m) {
            return m.ServerErrorModule;
          });
        }
      }, {
        path: 'access-denied',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | access-denied-access-denied-module */
          "access-denied-access-denied-module").then(__webpack_require__.bind(null,
          /*! ./access-denied/access-denied.module */
          "LzIi")).then(function (m) {
            return m.AccessDeniedModule;
          });
        }
      }, {
        path: 'not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | not-found-not-found-module */
          "not-found-not-found-module").then(__webpack_require__.bind(null,
          /*! ./not-found/not-found.module */
          "QFL/")).then(function (m) {
            return m.NotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'not-found'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
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
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zuw5":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zuw5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card text-white bg-{{ bgClass }}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\" *ngIf=\"type_icon == true; else elseBlock\">\n                <i class=\"fa {{ icon }} fa-5x\"></i>\n            </div>\n            <ng-template #elseBlock>\n               <img src={{icon}} alt=\"\" srcset=\"\">\n            </ng-template>\n            <div class=\"col col-xs-9 text-right\" *ngIf=\"count != null; else elseCountBlock\">\n                <div class=\"d-block\">{{ label }}</div>\n                <div class=\"d-block huge\">Total: {{ count }} </div>\n                <div class=\"d-block huge\" >En Poseción: {{ inUser }} </div>\n            </div>\n            <ng-template #elseCountBlock >\n                <div class=\"d-block col col-xs-9 text-right\">{{ label }}</div>\n            </ng-template>\n            <span><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </div>\n    </div>\n</div>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map