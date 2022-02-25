(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["normativas-normativas-module"], {
    /***/
    "ENqZ":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/normativas/normativas.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ENqZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mb-3\">\n    <div class=\"card-header d-flex justify-content-between\">Listado de Normativas del Ministerio de Educación\n        <button\n            type=\"button\"\n            class=\"btn btn-m btn-danger\"\n            [routerLink]=\"['/dashboard']\">\n            Volver\n        </button>\n    </div>\n    <p *ngFor=\"let alert of alerts\" class=\"small\">\n        <ngb-alert class=\"m-0\" (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{alert.message}}</ngb-alert>\n    </p>\n\n    <!-- search -->\n    <div>\n      <table class=\"table table-hover table-striped m-0\">\n        <thead>\n            <tr class=\"mx-auto\">\n                <th style=\"width: 150px; \" class=\"titles\">Tipo</th>\n                <th style=\"width: 120px;\" class=\"titles\">Numero</th>\n                <th style=\"width: 80px;\" class=\"titles\">Año</th>\n                <th class=\"titles\">Referencia</th>\n                <th style=\"width: 200px;\" class=\"titles\">Agrupación</th>\n                <th style=\"width: 200px;\" class=\"titles\" >Ordenar por</th>\n                <th style=\"width: 40px;\" class=\"titles\"  ></th>\n            </tr>\n        </thead>\n        <tbody>\n            <td style=\"display: flex;\">\n             <select class=\"form-control small mr-1 p-0 b-0 text-center w-100 h-75 peke\"\n                aria-label=\"Sizing example input\"\n                aria-describedby=\"inputGroup-sizing-sm\"\n                style=\"font-size: small;\"\n                [(ngModel)]=\"normativa_search.type\">\n                <option></option>\n                <option *ngFor=\"let agrupation of types\" [value]=\"agrupation.id\"> {{agrupation.name}} </option>\n\n            </select>\n                <td style=\"width: auto;\">\n                    <input type=\"text\"\n                        style=\"font-size: small;\"\n                        class=\"form-control mr-1 p-0 text-center h-25\"\n                        [(ngModel)]=\"normativa_search.number\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\">\n                </td>\n\n                <td>\n                    <input type=\"text\"\n                    style=\"font-size: small;\"\n                    class=\"form-control mr-1 p-0 text-center h-25\"\n                    [(ngModel)]=\"normativa_search.year\"\n                    aria-label=\"Sizing example input\"\n                    aria-describedby=\"inputGroup-sizing-sm\">\n                </td>\n\n                <td>\n                    <input type=\"text\"\n                        style=\"font-size: small;\"\n                        class=\"form-control mr-1 p-0 text-center h-25\"\n                        [(ngModel)]=\"normativa_search.reference\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\">\n                </td>\n\n                <td >\n                    <select class=\"form-control small mr-1 p-0 b-0 text-center w-100 h-75 peke\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        style=\"font-size: small;\"\n                        [(ngModel)]=\"normativa_search.agrupation\">\n                        <option></option>\n                        <option *ngFor=\"let agrupation of agrupations\" [value]=\"agrupation.id\"> {{agrupation.name}} </option>\n\n                    </select>\n\n\n                <td style=\"display: flex;\">\n                    <select class=\"form-control small mr-1 p-0 b-0 text-center w-100 h-75 peke\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        style=\"font-size: small;\"\n                        [(ngModel)]=\"normativa_search.order_by\">\n\n                        <option value=\"type_id\"> Tipo </option>\n                        <option value=\"number\"> Numero </option>\n                        <option value=\"year\"> Año </option>\n                        <option value=\"agrupation_id\"> Agrupación </option>\n\n                    </select>\n\n                        <img\n                            id=\"arrow\"\n                            src=\"assets/images/flecha.png\"\n                            style=\"width: 19px; height: 19px;\"\n                            class=\"rotate180\"\n                            (click)= invert_order()\n                            />\n\n                </td>\n\n                <td style=\"padding: 8px;\">\n                    <button #BSearch\n                        class=\"btn btn-outline-info small pt-0 pb-0 px-2\"\n                        type=\"button\"\n                        (click)=\"search_normativa()\">\n                        buscar\n                    </button>\n\n                </td>\n        </tbody>\n      </table>\n    </div>\n\n    <!-- end search -->\n\n\n    <div>\n        <table class=\"table table-hover table-striped m-0\">\n          <thead>\n              <tr class=\"mx-auto\" style=\"text-align: center;\">\n                  <th style=\"width: 10px; padding: 2px; font-weight: bolder; background-color:rgb(237, 237, 237);\" class=\"titles\">N°</th>\n                  <th class=\"titles\" style=\"width: 100px; padding: 2px; font-weight: bolder; background-color:rgb(237, 237, 237);\"> Tipo</th>\n                  <th style=\"width: 100px; padding: 2px; font-weight: bolder; background-color:rgb(237, 237, 237);\" class=\"titles\">Numero</th>\n                  <th style=\"width:50px; padding: 2px; font-weight: bolder;  background-color:rgb(237, 237, 237);\" class=\"titles\">Año</th>\n                  <th style=\"padding: 2px; font-weight: bolder; background-color:rgb(237, 237, 237);\" class=\"titles\">Referencia</th>\n                  <th class=\"titles\" style=\"width: 150px;padding: 2px; font-weight: bolder; background-color:rgb(237, 237, 237);\" >Agrupación</th>\n                  <th style=\"width: 70px; padding: 2px; font-weight: bolder; background-color:rgb(237, 237, 237);\">\n                    <button class=\"btn btn-outline-success\"\n                        style=\" text-align: center; font-size: small; padding: 3px; margin: 2px;\"\n                        type=\"button\"\n                        (click)=\"open(content)\">\n                        Nueva\n                    </button>\n\n                </th>\n              </tr>\n          </thead>\n          <tbody  *ngFor=\"let normativa of normativas.data; let i = index \">\n                  <td class=\"date\" style=\"text-align: center;\" > {{(i+1)+(normativas.per_page * (normativas.current_page-1)) }} </td>\n                  <td class=\"date\" style=\"text-align: center;background-color:rgb(237, 237, 237);\"> {{normativa.type.name}} </td>\n                  <td class=\"date\" style=\"text-align: center;\"> {{normativa.number}}</td>\n                  <td class=\"date\" style=\"text-align: center; background-color:rgb(237, 237, 237);\"> {{normativa.year}} </td>\n                  <td class=\"date\" style=\"text-align: center;\"> {{normativa.reference}}</td>\n                  <td class=\"date\" style=\"text-align: center; background-color:rgb(237, 237, 237);\"> {{normativa.agrupation.name}} </td>\n                  <td class=\"date\" style=\"height: 1vh;\" >\n                    <div style=\"display:flex; justify-content: center; height: 100%;\">\n                        <button class=\"btn btn-outline-info\"\n                            style=\" text-align: center; font-size: small; padding: 3px; margin: 2px;\"\n                            type=\"button\"\n                            (click)=\"see(normativa.name)\">\n                            ver\n                        </button>\n                        <button class=\"btn btn-outline-info\"\n                            style=\" text-align: center; font-size: small; padding: 3px; margin: 2px;\"\n                            type=\"button\"\n                            (click)=\"export(normativa.name)\">\n                            Descargar\n                        </button>\n                    </div>\n                  </td>\n            </tbody>\n        </table>\n      </div>\n\n    </div>\n\n\n<!-- //////////////////////////////////MODAL PROVIS//////////////////////////// -->\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\"  style=\"padding: 2px;\">\n         <div class=\"modal-title\" style=\"text-align: center; padding-top: 5px; width: 90%;\" id=\"modal-basic-title\">Agregar Normativa </div>\n        <button\n        style=\"font-size: small;\"\n        type=\"button\" class=\"btn btn-m btn-danger\"\n        (click)=\"modal.dismiss('Cross click')\">\n        Volver\n    </button>\n      </div>\n\n       <div class=\"modal-body\">\n        <div style=\"display: flex;\">\n            <div>\n                <p style=\"font-size: small;margin-bottom: 2px; \">Tipo<p>\n                <select class=\"form-control small mr-1 p-0 b-0 text-center peke\"\n                style=\"width: 200px; height: 25px;\"\n                aria-label=\"Sizing example input\"\n                aria-describedby=\"inputGroup-sizing-sm\"\n                [(ngModel)]=\"new_normativa.type\">\n                    <option  *ngFor=\"let type of types\" [value]=\"type.id\" >\n                        {{type.name}}\n                    </option>\n            </select>\n\n            </div>\n            <div>\n                <p style=\"font-size: small; ;\">Numero<p>\n                <input type=\"text\"\n                 style=\"font-size: small;width: 150px\"\n                 [(ngModel)]=\"new_normativa.number\">\n            </div>\n            <div>\n                <p style=\"font-size: small; \">Año<p>\n                    <input type=\"text\"\n                     style=\"font-size: small;width: 100px;\"\n                     [(ngModel)]=\"new_normativa.year\">\n                </div>\n            </div>\n                <div>\n            <p style=\"font-size: small;\">Referencia<p>\n            <textarea style=\"font-size: small; width: 100%;\"rows=\"5\"\n                [(ngModel)]=\"new_normativa.reference\">\n            </textarea>\n        </div>\n        <div >\n            <p style=\"font-size: small; text-align: left; padding-left: 40px;\">Agrupación<p>\n                    <div style=\"display:flex; \">\n                <select class=\"form-control small mr-1 p-0 b-0 text-center peke\"\n                    style=\"width: 160px; height: 25px;\"\n                    aria-label=\"Sizing example input\"\n                    aria-describedby=\"inputGroup-sizing-sm\"\n                    [(ngModel)]=\"new_normativa.agrupation\">\n                        <option  *ngFor=\"let agrupation of agrupations\" [value]=\"agrupation.id\" >\n                            {{agrupation.name}}\n                        </option>\n                </select>\n                <input type=\"file\" accept=\"application/pdf\" (change)='seleccionarArchivo($event)'>\n            </div>\n        </div>\n    </div>\n      <div class=\"modal-footer\">\n        <button\n        style=\"font-size: small;\"\n        type=\"button\" class=\"btn btn-m btn-outline-success\"\n        (click)=\"onSubmit()\">\n        Guardar\n    </button>\n      </div>\n</ng-template>\n\n\n      <!-- pagination -->\n<div>\n    <nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center \">\n        <ul class=\"pagination\" *ngFor = \" let item of normativas.links; let i = index\">\n\n            <div *ngIf=\"item.active; else noActive\">\n                <li class=\"page-item active\"  >\n                    <a class=\"page-link p-0 pl-1 pr-1 active\" style=\"margin: 1px;\" [innerHTML]= item.label></a>\n                </li>\n            </div>\n            <ng-template #noActive >\n\n\n                <ng-container *ngIf=\"(normativas.current_page === normativas.last_page && i == normativas.last_page +1) || (normativas.current_page === 1 && i ==0)    ; else elseTemplate\">\n                    <li class=\"page-item disabled\">\n                        <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\" [innerHTML]= item.label></p>\n                    </li>\n                </ng-container>\n                <ng-template #elseTemplate>\n                    <li class=\"page-item\"  >\n                        <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\"  (click)=\"goToUrl(item.url)\" [innerHTML]= item.label></p>\n                    </li>\n                </ng-template>\n\n            </ng-template>\n        </ul>\n    </nav>\n</div>\n<!-- pagination end -->\n\n";
      /***/
    },

    /***/
    "OhqQ":
    /*!********************************************************!*\
      !*** ./src/app/layout/normativas/normativas.module.ts ***!
      \********************************************************/

    /*! exports provided: NormativasModule */

    /***/
    function OhqQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NormativasModule", function () {
        return NormativasModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _normativas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./normativas-routing.module */
      "lSQ9");
      /* harmony import */


      var _normativas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./normativas.component */
      "n8rM");

      var NormativasModule = function NormativasModule() {
        _classCallCheck(this, NormativasModule);
      };

      NormativasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _normativas_routing_module__WEBPACK_IMPORTED_MODULE_6__["NormativasRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        declarations: [_normativas_component__WEBPACK_IMPORTED_MODULE_7__["NormativasComponent"]]
      })], NormativasModule);
      /***/
    },

    /***/
    "lSQ9":
    /*!****************************************************************!*\
      !*** ./src/app/layout/normativas/normativas-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: NormativasRoutingModule */

    /***/
    function lSQ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NormativasRoutingModule", function () {
        return NormativasRoutingModule;
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


      var _normativas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./normativas.component */
      "n8rM");

      var routes = [{
        path: '',
        component: _normativas_component__WEBPACK_IMPORTED_MODULE_3__["NormativasComponent"]
      }];

      var NormativasRoutingModule = function NormativasRoutingModule() {
        _classCallCheck(this, NormativasRoutingModule);
      };

      NormativasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NormativasRoutingModule);
      /***/
    },

    /***/
    "mY6H":
    /*!************************************************************!*\
      !*** ./src/app/layout/normativas/normativas.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function mY6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titles{\n    padding: 0px;\n    padding-left: 20px;\n    font-size: small;\n    font-weight: normal;\n}\n\n.date{\n    padding: 0px;\n    font-size: small;\n    font-weight: normal;\n    vertical-align:middle ;\n\n\n}\n\n.rotate180 {\n    transform: rotate(180deg);\n}\n\np{\n    font-size: small;\n    margin-bottom: 2px;\n    text-align: center;\n}\n\ninput{\n    margin-right: 6px;\n    text-align: center;\n}\n\n.peke {\n    font-size: small;\n    padding-right: 6px;\n    padding-left: 6px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hdGl2YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7O0FBRzFCOztBQUVBO0lBS0kseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoibm9ybWF0aXZhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlc3tcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmRhdGV7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgO1xuXG5cbn1cblxuLnJvdGF0ZTE4MCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cblxucHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0e1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBla2Uge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "n8rM":
    /*!***********************************************************!*\
      !*** ./src/app/layout/normativas/normativas.component.ts ***!
      \***********************************************************/

    /*! exports provided: NormativasComponent */

    /***/
    function n8rM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NormativasComponent", function () {
        return NormativasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_normativas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./normativas.component.html */
      "ENqZ");
      /* harmony import */


      var _normativas_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./normativas.component.css */
      "mY6H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../db.service */
      "nA5i");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NormativasComponent = /*#__PURE__*/function () {
        function NormativasComponent(DB, DATA, router, modalService) {
          _classCallCheck(this, NormativasComponent);

          // this.alerts = this.DB.alerts;
          this.DB = DB;
          this.DATA = DATA;
          this.router = router;
          this.modalService = modalService;
          this.alerts = [];
          this.closeResult = '';
          this.inModal = false;
          this.normativa_search = {
            type: "",
            number: "",
            year: "",
            reference: "",
            agrupation: "",
            order_by: "type_id",
            order: "asc"
          };
          this.new_normativa = {
            name: "",
            type: "",
            number: "",
            year: "",
            reference: "",
            agrupation: "",
            file: ""
          };
        }

        _createClass(NormativasComponent, [{
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            switch (event.key) {
              case 'Enter':
                if (this.inModal) {
                  this.search_normativa();
                } else {
                  this.onSubmit();
                }

                break;

              case "Escape":
                if (this.inModal) {
                  this.router.navigate(['/dashboard']);
                } else {
                  this.modalService.dismissAll('Cross click');
                }

                break;

              default:
                break;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.search_normativa();
            this.DB.Normativas_agrupations_list().subscribe({
              next: function next(data) {
                _this.agrupations = data;
              }
            });
            this.DB.Normativas_types_list().subscribe({
              next: function next(data) {
                _this.types = data;
              }
            });
          }
        }, {
          key: "search_normativa",
          value: function search_normativa() {
            var _this2 = this;

            this.normativas = this.DB.Normativas_search(this.normativa_search).subscribe({
              next: function next(data) {
                _this2.normativas = data;
              }
            });
          }
        }, {
          key: "export",
          value: function _export(name) {
            this.DB.Normativas_export(name);
          }
        }, {
          key: "see",
          value: function see(name) {
            this.DB.Normativas_see(name);
          }
        }, {
          key: "goToUrl",
          value: function goToUrl(url) {
            var _this3 = this;

            this.DB.GoToUrlFile(url, this.normativa_search).subscribe({
              next: function next(data) {
                _this3.normativas = data;
                console.log(_this3.normativas);
              }
            });
          }
        }, {
          key: "invert_order",
          value: function invert_order() {
            var elemento = document.getElementById("arrow");

            if (this.normativa_search.order === "asc") {
              this.normativa_search.order = "desc";
              elemento.classList.remove('rotate180');
            } else {
              this.normativa_search.order = "asc";
              elemento.classList.add('rotate180');
            }
          }
        }, {
          key: "create",
          value: function create() {} //////////////////MODAL/////////////////////

        }, {
          key: "open",
          value: function open(content) {
            var _this4 = this;

            this.modalService.open(content, {
              size: 's',
              backdrop: 'static',
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this4.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this4.closeResult = "Dismissed ".concat(_this4.getDismissReason(reason));
              _this4.new_normativa = {
                name: "",
                type: "",
                number: "",
                year: "",
                reference: "",
                agrupation: "",
                file: ""
              };
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "seleccionarArchivo",
          value: function seleccionarArchivo(event) {
            var files = event.target.files;
            var file = files[0];

            if (file && files) {
              var reader = new FileReader();
              reader.onload = this._handleReaderLoader.bind(this);
              reader.readAsBinaryString(file);
            }
          }
        }, {
          key: "_handleReaderLoader",
          value: function _handleReaderLoader(readerEvent) {
            var binaryString = readerEvent.target.result;
            this.new_normativa.file = btoa(binaryString);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            var tipo = this.types.find(function (x) {
              return x.id == _this5.new_normativa.type;
            });
            this.new_normativa.name = tipo.name + " " + this.new_normativa.number + "-" + this.new_normativa.year + ".pdf";
            this.DB.Nomativas_create(this.new_normativa).subscribe({
              next: function next(data) {
                console.log(data);

                if (data == "Normativa Cargada") {
                  _this5.alerts.push({
                    id: 1,
                    type: 'success',
                    message: "Normativa Cargada"
                  });
                } else {
                  _this5.alerts.push({
                    id: 1,
                    type: 'danger',
                    message: 'La normativa ya existe'
                  });
                }

                _this5.ngOnInit();
              }
            });
            this.modalService.dismissAll();
          }
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }]);

        return NormativasComponent;
      }();

      NormativasComponent.ctorParameters = function () {
        return [{
          type: _db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
        }];
      };

      NormativasComponent.propDecorators = {
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:keyup', ['$event']]
        }]
      };
      NormativasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-normativas',
        template: _raw_loader_normativas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_normativas_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])], NormativasComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=normativas-normativas-module-es5.js.map