(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "/2RN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "U5Cf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
          path: '',
          component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
        }]), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "/x2j":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-expense/add-expense.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x2j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Add Expense</ion-title>\n        <ion-button slot=\"end\" fill=\"outline\" (click)=\"dismissModal()\">\n            X\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"addExpenseForm\">\n\n        <ion-item>\n            <ion-input placeholder=\"Type Amount\" type=\"text\" formControlName=\"amount\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-textarea placeholder=\"Type Description\" type=\"text\" formControlName=\"description\"></ion-textarea>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label>Hair Color</ion-label>\n            <ion-select value=\"brown\" okText=\"Ok\" cancelText=\"Cancel\" interface=\"popover\" formControlName=\"type\">\n                <ion-select-option value=\"brown\">Brown</ion-select-option>\n                <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n                <ion-select-option value=\"black\">Black</ion-select-option>\n                <ion-select-option value=\"red\">Red</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-button color=\"primary\" fill=\"solid\" expand=\"block\">Add</ion-button>\n            <ion-button color=\"primary\" fill=\"solid\" expand=\"block\">Cancel</ion-button>\n        </ion-item>\n\n\n    </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "03Xm":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/budget/budget.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Budget</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\nThis is the content area for the budget\n</ion-content>\n";
      /***/
    },

    /***/
    "0Lqo":
    /*!********************************************************!*\
      !*** ./src/app/pages/activity/activity.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function Lqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0eS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "4+IK":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.module.ts ***!
      \*************************************************/

    /*! exports provided: AccountModule */

    /***/
    function IK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return AccountModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.component */
      "EK2B");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AccountModule = function AccountModule() {
        _classCallCheck(this, AccountModule);
      };

      AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
          path: '',
          component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
        }]), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]]
      })], AccountModule);
      /***/
    },

    /***/
    "5LMi":
    /*!******************************************************!*\
      !*** ./src/app/pages/account/account.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function LMi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "5tiE":
    /*!**************************************************!*\
      !*** ./src/app/pages/budget/budget.component.ts ***!
      \**************************************************/

    /*! exports provided: BudgetComponent */

    /***/
    function tiE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BudgetComponent", function () {
        return BudgetComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_budget_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./budget.component.html */
      "03Xm");
      /* harmony import */


      var _budget_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./budget.component.scss */
      "qlQL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BudgetComponent = /*#__PURE__*/function () {
        function BudgetComponent() {
          _classCallCheck(this, BudgetComponent);
        }

        _createClass(BudgetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BudgetComponent;
      }();

      BudgetComponent.ctorParameters = function () {
        return [];
      };

      BudgetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-budget',
        template: _raw_loader_budget_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_budget_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BudgetComponent);
      /***/
    },

    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n<!--  <ion-tab-bar slot=\"bottom\" color=\"secondary\">-->\n<!--    <ion-tab-button tab=\"dashboard\">-->\n<!--      <ion-icon name=\"grid-sharp\"></ion-icon>-->\n<!--      <ion-label>Dashboard</ion-label>-->\n<!--    </ion-tab-button>-->\n\n<!--    <ion-tab-button tab=\"activity\">-->\n<!--      <ion-icon name=\"ellipse\"></ion-icon>-->\n<!--      <ion-label>Activity</ion-label>-->\n<!--    </ion-tab-button>-->\n\n<!--    <ion-tab-button tab=\"budget\">-->\n<!--      <ion-icon name=\"square\"></ion-icon>-->\n<!--      <ion-label>Budget</ion-label>-->\n<!--    </ion-tab-button>-->\n\n<!--    <ion-tab-button tab=\"settings\">-->\n<!--      <ion-icon name=\"person-sharp\"></ion-icon>-->\n<!--      <ion-label>Accounts</ion-label>-->\n<!--    </ion-tab-button>-->\n<!--  </ion-tab-bar>-->\n\n</ion-tabs>\n";
      /***/
    },

    /***/
    "DE8E":
    /*!******************************************************!*\
      !*** ./src/app/pages/activity/activity.component.ts ***!
      \******************************************************/

    /*! exports provided: ActivityComponent */

    /***/
    function DE8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityComponent", function () {
        return ActivityComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_activity_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./activity.component.html */
      "ZeQP");
      /* harmony import */


      var _activity_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity.component.scss */
      "0Lqo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ActivityComponent = /*#__PURE__*/function () {
        function ActivityComponent() {
          _classCallCheck(this, ActivityComponent);
        }

        _createClass(ActivityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ActivityComponent;
      }();

      ActivityComponent.ctorParameters = function () {
        return [];
      };

      ActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activity',
        template: _raw_loader_activity_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_activity_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ActivityComponent);
      /***/
    },

    /***/
    "Db45":
    /*!**********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Db45(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "EK2B":
    /*!****************************************************!*\
      !*** ./src/app/pages/account/account.component.ts ***!
      \****************************************************/

    /*! exports provided: AccountComponent */

    /***/
    function EK2B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
        return AccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account.component.html */
      "vX/9");
      /* harmony import */


      var _account_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account.component.scss */
      "5LMi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccountComponent = /*#__PURE__*/function () {
        function AccountComponent() {
          _classCallCheck(this, AccountComponent);
        }

        _createClass(AccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccountComponent;
      }();

      AccountComponent.ctorParameters = function () {
        return [];
      };

      AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountComponent);
      /***/
    },

    /***/
    "Ixm7":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ixm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"secondary\">\n        <ion-title>Dashboard</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header color=\"primary\">\n            <ion-title class=\"ion-text-center\">\n                Total: 500$\n            </ion-title>\n        </ion-card-header>\n        <ion-footer>\n            <ion-row>\n                <ion-col size=\"3\">\n                    <ion-button expand=\"full\" fill=\"clear\">Today</ion-button>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <ion-button expand=\"full\" fill=\"clear\">Date</ion-button>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <ion-button expand=\"full\" fill=\"clear\">Category</ion-button>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <ion-button expand=\"full\" fill=\"clear\">Amount</ion-button>\n                </ion-col>\n\n            </ion-row>\n        </ion-footer>\n    </ion-card>\n    <ion-card>\n        <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"end\">\n                <ion-button>\n                    <ion-icon size=\"large\" name=\"help-circle-outline\"></ion-icon>\n                </ion-button>\n                <ion-button>\n                    <ion-icon size=\"large\" name=\"create-outline\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <ion-title slot=\"start\">Amount</ion-title>\n        </ion-toolbar>\n        <ion-card-content>\n            Description\n            <ion-footer>\n                <ion-label>\n                    Date and Time\n                </ion-label>\n                <ion-label>\n                    Type\n                </ion-label>\n            </ion-footer>\n        </ion-card-content>\n\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"presentModal()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/add-expense/add-expense.component */
      "pMVO");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_3__["AddExpenseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
        entryComponents: [_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_3__["AddExpenseComponent"]]
      })], SharedModule);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "S5Az":
    /*!***********************************************!*\
      !*** ./src/app/pages/budget/budget.module.ts ***!
      \***********************************************/

    /*! exports provided: BudgetModule */

    /***/
    function S5Az(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BudgetModule", function () {
        return BudgetModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _budget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./budget.component */
      "5tiE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var BudgetModule = function BudgetModule() {
        _classCallCheck(this, BudgetModule);
      };

      BudgetModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_budget_component__WEBPACK_IMPORTED_MODULE_3__["BudgetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
          path: '',
          component: _budget_component__WEBPACK_IMPORTED_MODULE_3__["BudgetComponent"]
        }]), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]]
      })], BudgetModule);
      /***/
    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "Ixm7");
      /* harmony import */


      var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.scss */
      "Db45");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/components/add-expense/add-expense.component */
      "pMVO");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(modalController) {
          _classCallCheck(this, DashboardComponent);

          this.modalController = modalController;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _shared_components_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_5__["AddExpenseComponent"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardComponent);
      /***/
    },

    /***/
    "ZeQP":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity/activity.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZeQP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Activity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\nThis is the content area for the activity\n</ion-content>\n";
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "kB8F");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");
      /* harmony import */


      var _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pages/dashboard/dashboard.module */
      "/2RN");
      /* harmony import */


      var _pages_account_account_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pages/account/account.module */
      "4+IK");
      /* harmony import */


      var _pages_activity_activity_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../pages/activity/activity.module */
      "y5oG");
      /* harmony import */


      var _pages_budget_budget_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../pages/budget/budget.module */
      "S5Az");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"], _pages_account_account_module__WEBPACK_IMPORTED_MODULE_8__["AccountModule"], _pages_activity_activity_module__WEBPACK_IMPORTED_MODULE_9__["ActivityModule"], _pages_budget_budget_module__WEBPACK_IMPORTED_MODULE_10__["BudgetModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "kB8F":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function kB8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../pages/dashboard/dashboard.module */
            "/2RN")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../pages/account/account.module */
            "4+IK")).then(function (m) {
              return m.AccountModule;
            });
          }
        }, {
          path: 'budget',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../pages/budget/budget.module */
            "S5Az")).then(function (m) {
              return m.BudgetModule;
            });
          }
        }, {
          path: 'activity',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../pages/activity/activity.module */
            "y5oG")).then(function (m) {
              return m.ActivityModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/dashboard',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "pEqC":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/add-expense/add-expense.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function pEqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZXhwZW5zZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "pMVO":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/add-expense/add-expense.component.ts ***!
      \************************************************************************/

    /*! exports provided: AddExpenseComponent */

    /***/
    function pMVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddExpenseComponent", function () {
        return AddExpenseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_expense_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-expense.component.html */
      "/x2j");
      /* harmony import */


      var _add_expense_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-expense.component.scss */
      "pEqC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddExpenseComponent = /*#__PURE__*/function () {
        function AddExpenseComponent(modalController) {
          _classCallCheck(this, AddExpenseComponent);

          this.modalController = modalController;
          this.addExpenseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
          });
        }

        _createClass(AddExpenseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalController.dismiss().then()["catch"]();
          }
        }]);

        return AddExpenseComponent;
      }();

      AddExpenseComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      AddExpenseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-expense',
        template: _raw_loader_add_expense_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_expense_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddExpenseComponent);
      /***/
    },

    /***/
    "qlQL":
    /*!****************************************************!*\
      !*** ./src/app/pages/budget/budget.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function qlQL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "vX/9":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function vX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\nThis is the content area for the account\n</ion-content>\n";
      /***/
    },

    /***/
    "y5oG":
    /*!***************************************************!*\
      !*** ./src/app/pages/activity/activity.module.ts ***!
      \***************************************************/

    /*! exports provided: ActivityModule */

    /***/
    function y5oG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityModule", function () {
        return ActivityModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activity.component */
      "DE8E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ActivityModule = function ActivityModule() {
        _classCallCheck(this, ActivityModule);
      };

      ActivityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_activity_component__WEBPACK_IMPORTED_MODULE_3__["ActivityComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
          path: '',
          component: _activity_component__WEBPACK_IMPORTED_MODULE_3__["ActivityComponent"]
        }]), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]]
      })], ActivityModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map