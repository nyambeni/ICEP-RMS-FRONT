(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["applynow-applynow-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applynow/applynow.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applynow/applynow.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar    color=\"dark\"  >\r\n \r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n\r\n    <ion-title  align=\"center\" > \r\n    \r\n      Apply Now\r\n     \r\n    \r\n    </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/process\">previous</ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  style=\"background-image: url('assets/pics/student.jpg');  background-repeat: no-repeat; background-attachment: fixed;\">\r\n\r\n  <ion-grid style=\"background-image: url('assets/pics/student.jpg');  background-repeat: no-repeat; background-attachment: fixed;\">\r\n \r\n      \r\n    <ion-row>\r\n       <ion-col col=12> \r\n    \r\n<br>\r\n\r\n  <ion-item style=\"opacity: 0.8;\">\r\n    <ion-label position=\"floating\">ID Number:</ion-label>\r\n     <ion-input  [(ngModel)] = \"stuApply.id\"   name=\"id\"  type=\"Number\" required></ion-input>\r\n   </ion-item>\r\n   <br>\r\n   <ion-item style=\"opacity: 0.8;\">\r\n   <ion-label position=\"floating\">Student Number:</ion-label>\r\n   <ion-input  [(ngModel)] = \"stuApply.studno\"  FormControl=\"studno\" type=\"Number\" required></ion-input>\r\n </ion-item>\r\n<br>\r\n  \r\n <ion-item style=\"opacity: 0.8;\">\r\n\r\n<ion-label>\r\n  Upload Proof of registration & ID copy as one Pdf\r\n</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"opacity: 0.8;\" >\r\n    <ion-input  style=\" opacity: 0.8;\"  [(ngModel)] = \"stuApply.stuapplication\" type=\"file\" name=\"stuapplication\" accept=\".pdf\"  required >\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n\r\n    <ion-button type=\"submit\"    (click)=\" add()\">submit</ion-button>\r\n  \r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n \r\n</ion-col >\r\n</ion-row>\r\n\r\n</ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/applynow/applynow-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/applynow/applynow-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ApplynowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplynowPageRoutingModule", function() { return ApplynowPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _applynow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applynow.page */ "./src/app/applynow/applynow.page.ts");




const routes = [
    {
        path: '',
        component: _applynow_page__WEBPACK_IMPORTED_MODULE_3__["ApplynowPage"]
    }
];
let ApplynowPageRoutingModule = class ApplynowPageRoutingModule {
};
ApplynowPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApplynowPageRoutingModule);



/***/ }),

/***/ "./src/app/applynow/applynow.module.ts":
/*!*********************************************!*\
  !*** ./src/app/applynow/applynow.module.ts ***!
  \*********************************************/
/*! exports provided: ApplynowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplynowPageModule", function() { return ApplynowPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _applynow_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applynow-routing.module */ "./src/app/applynow/applynow-routing.module.ts");
/* harmony import */ var _applynow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applynow.page */ "./src/app/applynow/applynow.page.ts");







let ApplynowPageModule = class ApplynowPageModule {
};
ApplynowPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _applynow_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplynowPageRoutingModule"]
        ],
        declarations: [_applynow_page__WEBPACK_IMPORTED_MODULE_6__["ApplynowPage"]]
    })
], ApplynowPageModule);



/***/ }),

/***/ "./src/app/applynow/applynow.page.scss":
/*!*********************************************!*\
  !*** ./src/app/applynow/applynow.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHlub3cvQzpcXFVzZXJzXFxtYWQgcG93ZXItYyBMYW5nYVxcRGVza3RvcFxcdHJlc1xcUk1TVVBEQVRFL3NyY1xcYXBwXFxhcHBseW5vd1xcYXBwbHlub3cucGFnZS5zY3NzIiwic3JjL2FwcC9hcHBseW5vdy9hcHBseW5vdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSyw0QkFBQTtFQUE4Qiw0QkFBQTtBQ0NuQyIsImZpbGUiOiJzcmMvYXBwL2FwcGx5bm93L2FwcGx5bm93LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/applynow/applynow.page.ts":
/*!*******************************************!*\
  !*** ./src/app/applynow/applynow.page.ts ***!
  \*******************************************/
/*! exports provided: ApplynowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplynowPage", function() { return ApplynowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ApplynowPage = class ApplynowPage {
    constructor(alertCtrl, _serviceService) {
        this.alertCtrl = alertCtrl;
        this._serviceService = _serviceService;
        this.loading = false;
        this.stuApply = { id: " ", studno: " ", stuapplication: " " };
        this.addstu = [];
        this.studno = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
    }
    // id=new FormControl;
    ngOnInit() {
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.stuApply.id.length == 1 || this.stuApply.studno.length == 1) {
                const alert = yield this.alertCtrl.create({
                    message: ' please fill in all the fields ',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
            }
            else if (this.stuApply.stuapplication.length < 2) {
                const alert = yield this.alertCtrl.create({
                    message: ' please  Upload Your Documents ',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
            }
            else {
                this._serviceService.poststu(this.stuApply).subscribe(data => console.log(data));
                console.log(this.stuApply.stuapplication.length);
                console.log(this.stuApply.studno);
                console.log(this.stuApply.id);
                const alert = yield this.alertCtrl.create({
                    message: ' Application Sent successfully  ',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
                this.stuApply.stuapplication = " ";
                this.stuApply.studno = " ";
                this.stuApply.id = " ";
            }
        });
    }
};
ApplynowPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApplynowPage.prototype, "stuApply", void 0);
ApplynowPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-applynow',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./applynow.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applynow/applynow.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./applynow.page.scss */ "./src/app/applynow/applynow.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
], ApplynowPage);



/***/ })

}]);
//# sourceMappingURL=applynow-applynow-module-es2015.js.map