(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n   <ion-button (click)=\"loginBtnClick()\">Login with Salesforce</ion-button>\n   <ion-button (click)=\"getCodeFromLS()\">getCodeFromLS</ion-button>\n\n\n   <!--\n   <button ion-button (click)=\"openWithSystemBrowser('https://www.techiediaries.com')\">Open with System browser</button>\n   <button ion-button (click)=\"openWithInAppBrowser('https://www.techiediaries.com')\">Open with In App browser</button>\n   <button ion-button (click)=\"openWithCordovaBrowser('https://www.techiediaries.com')\">Open with Cordova browser</button>\n\n-->\n   \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var HomePage = /** @class */ (function () {
    // that:any;
    function HomePage(theInAppBrowser, http, storage) {
        // this.that=this;
        this.theInAppBrowser = theInAppBrowser;
        this.http = http;
        this.storage = storage;
        console.log("cons called...");
    }
    HomePage.prototype.getURLParam = function (url, name) {
        if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(url))
            return decodeURIComponent(name[1]);
    };
    HomePage.prototype.appBrowserLoadStopEvent = function (event) {
        console.log("appBrowserLoadStopEvent called.");
        /*
        let OAUTH_SUCCESS_CALLBACK="https://siriusvoice.herokuapp.com/pages/oauth/success/callback";
    
    
        alert(event.type + ' - ' + event.url);
        if (event.url.indexOf(OAUTH_SUCCESS_CALLBACK) > -1) {
              var code = this.getURLParam(event.url, "code");
              alert("got code" + code);
          }
          */
    };
    HomePage.prototype.loaderrorCallback = function (error) {
        alert('Loading error: ' + error.message);
    };
    HomePage.prototype.getCodeFromLS = function () {
        // Or to get a key/value pair
        this.storage.get('code').then(function (val) {
            alert("code from LS :" + val);
        });
    };
    HomePage.prototype.loginBtnClick = function () {
        try {
            var that_1 = this;
            that_1.http.post("https://siriusvoice.herokuapp.com/auth/oauth/url/login", "").subscribe(function (response) {
                alert("url ==" + JSON.stringify(response));
                var url = response.results;
                var appInBrowser = window.open(url, '_blank', 'location=yes');
                appInBrowser.addEventListener('loaderror', that_1.loaderrorCallback);
                appInBrowser.addEventListener('loadstop', that_1.appBrowserLoadStopEvent);
                appInBrowser.addEventListener('loadstart', function (event) {
                    //setTimeout(function(){ alert("Hello"); }, 3000);
                    var OAUTH_SUCCESS_CALLBACK = "http://192.168.43.167/siriusvoice/index.html?code=";
                    if (event.url.indexOf(OAUTH_SUCCESS_CALLBACK) > -1) {
                        alert("hii..." + event.url);
                        var code = that_1.getURLParam(event.url, "code");
                        alert("code" + code);
                        if (code != "") {
                            that_1.storage.set('code', code);
                            alert("code saved in local storage");
                        }
                        // set a key/value
                        appInBrowser.close();
                    }
                });
            });
            //  let url = "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9d8..z.hDcPI3Wo20qCaLCGHp_fL_KuzDpKqdgUUFH3R4yGArt3tYOcxgJPsCYiwA1t20S2Oxk0Vm82ZD&redirect_uri=http://localhost:8100/oauth/success/callback&code_callback.jsp&state=mystate";
        }
        catch (err) {
            alert(" err msg ==" + err.message);
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map