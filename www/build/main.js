webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__private_private__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minimal_minimal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sliding_sliding__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.home = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.private = __WEBPACK_IMPORTED_MODULE_2__private_private__["a" /* PrivatePage */];
        this.minimal = __WEBPACK_IMPORTED_MODULE_3__minimal_minimal__["a" /* MinimalPage */];
        this.sliding = __WEBPACK_IMPORTED_MODULE_4__sliding_sliding__["a" /* SlidingPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/kaino/ionic-credit-card/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="home" tabIcon="card"></ion-tab>\n    <ion-tab [root]="private" tabIcon="lock"></ion-tab>\n    <ion-tab [root]="sliding" tabIcon="finger-print"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/kaino/ionic-credit-card/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                state: 'ON',
                logo: "assets/img/visa.png",
                a: 1234,
                b: 5522,
                c: 8432,
                d: 2264,
                expires: '7/12',
                bank: 'Bank of America'
            },
            {
                state: 'OFF',
                logo: "assets/img/american.png",
                a: 1234,
                b: 5321,
                c: 8283,
                d: 9271,
                expires: '8/19',
                bank: 'JPMorgan'
            },
            {
                state: 'ON',
                logo: "assets/img/mastercard.png",
                a: 8685,
                b: 2445,
                c: 9143,
                d: 7846,
                expires: '11/23',
                bank: 'CityBank'
            }
        ];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/kaino/ionic-credit-card/src/pages/home/home.html"*/'<ion-content padding>\n  <div *ngFor="let card of cards"  class="slide-in" >\n    <ion-grid [class.cardON]="card.state==\'ON\'" [class.cardOFF]="card.state==\'OFF\'">\n      <ion-row>\n        <ion-col class="state">\n          <div class="msg">\n            <span [class.ON]="card.state==\'ON\'" [class.OFF]="card.state==\'OFF\'"></span> Card {{card.state}}\n          </div>\n        </ion-col>\n        <ion-col class="logo">\n          <img class="brand" [src]="card.logo">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="chip">\n          <img src="assets/img/chip.png">\n        </ion-col>\n      </ion-row>\n      <ion-row class="digits">\n        <ion-col class="number">\n          {{card.a}}\n        </ion-col>\n        <ion-col class="number">\n          {{card.b}}\n        </ion-col>\n        <ion-col class="number">\n          {{card.c}}\n        </ion-col>\n        <ion-col class="number">\n          {{card.d}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="date">\n          Expires: {{card.expires}}\n        </ion-col>\n        <ion-col class="bank">\n          {{card.bank}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/kaino/ionic-credit-card/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivatePage = /** @class */ (function () {
    function PrivatePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                state: 'ON',
                logo: "assets/img/visa.png",
                a: 1234,
                b: 5522,
                c: 8432,
                d: 2264,
                expires: '7/12',
                bank: 'Bank of America'
            },
            {
                state: 'OFF',
                logo: "assets/img/american.png",
                a: 1234,
                b: 5321,
                c: 8283,
                d: 9271,
                expires: '8/19',
                bank: 'JPMorgan'
            },
            {
                state: 'ON',
                logo: "assets/img/mastercard.png",
                a: 8685,
                b: 2445,
                c: 9143,
                d: 7846,
                expires: '11/23',
                bank: 'CityBank'
            }
        ];
    }
    PrivatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-private',template:/*ion-inline-start:"/home/kaino/ionic-credit-card/src/pages/private/private.html"*/'<ion-content padding>\n  <div *ngFor="let card of cards" class="slide-in">\n    <ion-grid [class.cardON]="card.state==\'ON\'" [class.cardOFF]="card.state==\'OFF\'">\n      <ion-row>\n        <ion-col class="state">\n          <div class="msg">\n            <span [class.ON]="card.state==\'ON\'" [class.OFF]="card.state==\'OFF\'"></span> Card {{card.state}}\n          </div>\n        </ion-col>\n        <ion-col class="logo">\n          <img class="brand" [src]="card.logo">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="chip">\n          <img src="assets/img/chip.png">\n        </ion-col>\n      </ion-row>\n      <ion-row class="digits">\n        <ion-col class="number">\n          <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>\n        </ion-col>\n        <ion-col class="number">\n          <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>\n        </ion-col>\n        <ion-col class="number">\n          <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>\n        </ion-col>\n        <ion-col class="number">\n          {{card.a}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="date">\n          Expires: {{card.expires}}\n        </ion-col>\n        <ion-col class="bank">\n          {{card.bank}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/kaino/ionic-credit-card/src/pages/private/private.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PrivatePage);
    return PrivatePage;
}());

//# sourceMappingURL=private.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinimalPage = /** @class */ (function () {
    function MinimalPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                state: 'ON',
                logo: "assets/img/visa.png",
                a: 1234,
                b: 5522,
                c: 8432,
                d: 2264,
                expires: '7/12',
                bank: 'Bank of America'
            },
            {
                state: 'OFF',
                logo: "assets/img/american.png",
                a: 1234,
                b: 5321,
                c: 8283,
                d: 9271,
                expires: '8/19',
                bank: 'JPMorgan'
            },
            {
                state: 'ON',
                logo: "assets/img/mastercard.png",
                a: 8685,
                b: 2445,
                c: 9143,
                d: 7846,
                expires: '11/23',
                bank: 'CityBank'
            },
            {
                state: 'ON',
                logo: "assets/img/mastercard.png",
                a: 8685,
                b: 2445,
                c: 9143,
                d: 7846,
                expires: '11/23',
                bank: 'CityBank'
            }
        ];
    }
    MinimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minimal',template:/*ion-inline-start:"/home/kaino/ionic-credit-card/src/pages/minimal/minimal.html"*/'<ion-content padding>\n  <div *ngFor="let card of cards">\n    <ion-grid [class.cardON]="card.state==\'ON\'" [class.cardOFF]="card.state==\'OFF\'">\n      <ion-row>\n        <ion-col class="state">\n          <div class="msg">\n            <span [class.ON]="card.state==\'ON\'" [class.OFF]="card.state==\'OFF\'"></span>{{card.state}}\n          </div>\n        </ion-col>\n        <ion-col class="logo">\n          <img class="brand" [src]="card.logo">\n        </ion-col>\n      </ion-row>\n      <ion-row class="digits">\n        <ion-col class="number">\n          <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>\n        </ion-col>\n        <ion-col class="number">\n          <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>\n        </ion-col>\n        <ion-col class="number">\n          <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>\n        </ion-col>\n        <ion-col class="number">\n          {{card.a}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="date">\n          Expires: {{card.expires}}\n        </ion-col>\n        <ion-col class="bank">\n          {{card.bank}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/kaino/ionic-credit-card/src/pages/minimal/minimal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MinimalPage);
    return MinimalPage;
}());

//# sourceMappingURL=minimal.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlidingPage = /** @class */ (function () {
    function SlidingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                state: 'ON',
                logo: "assets/img/visa.png",
                a: 1234,
                b: 5522,
                c: 8432,
                d: 2264,
                expires: '7/12',
                bank: 'Bank of America'
            },
            {
                state: 'OFF',
                logo: "assets/img/american.png",
                a: 1234,
                b: 5321,
                c: 8283,
                d: 9271,
                expires: '8/19',
                bank: 'JPMorgan'
            },
            {
                state: 'ON',
                logo: "assets/img/mastercard.png",
                a: 8685,
                b: 2445,
                c: 9143,
                d: 7846,
                expires: '11/23',
                bank: 'CityBank'
            }
        ];
    }
    SlidingPage.prototype.update = function (card) {
        if (card.state == 'ON') {
            card.state = 'OFF';
        }
        else {
            card.state = 'ON';
        }
    };
    SlidingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sliding',template:/*ion-inline-start:"/home/kaino/ionic-credit-card/src/pages/sliding/sliding.html"*/'<ion-content class="slide-in">\n    <ion-list>\n        <ion-item-sliding *ngFor="let card of cards" #item>\n            <ion-item no-lines>\n                <ion-grid [class.cardON]="card.state==\'ON\'" [class.cardOFF]="card.state==\'OFF\'">\n                    <ion-row>\n                        <ion-col class="state">\n                            <div class="msg">\n                                <span [class.ON]="card.state==\'ON\'" [class.OFF]="card.state==\'OFF\'"></span> Card {{card.state}}\n                            </div>\n                        </ion-col>\n                        <ion-col class="logo">\n                            <img class="brand" [src]="card.logo">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="chip">\n                            <img src="assets/img/chip.png">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="digits">\n                        <ion-col class="number">\n                            {{card.a}}\n                        </ion-col>\n                        <ion-col class="number">\n                            {{card.b}}\n                        </ion-col>\n                        <ion-col class="number">\n                            {{card.c}}\n                        </ion-col>\n                        <ion-col class="number">\n                            {{card.d}}\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="date">\n                            Expires: {{card.expires}}\n                        </ion-col>\n                        <ion-col class="bank">\n                            {{card.bank}}\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n\n            <ion-item-options side="right">\n                <button ion-button icon-only large outline (click)="update(card)">\n          <ion-icon id="power" [color]="card.state==\'ON\' ? \'danger\' : \'success\'" name="power"></ion-icon>\n        </button>\n            </ion-item-options>\n\n        </ion-item-sliding>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/kaino/ionic-credit-card/src/pages/sliding/sliding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SlidingPage);
    return SlidingPage;
}());

//# sourceMappingURL=sliding.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_private_private__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dark_dark__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sliding_sliding__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_private_private__["a" /* PrivatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dark_dark__["a" /* DarkPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sliding_sliding__["a" /* SlidingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_private_private__["a" /* PrivatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dark_dark__["a" /* DarkPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sliding_sliding__["a" /* SlidingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/kaino/ionic-credit-card/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/kaino/ionic-credit-card/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DarkPage = /** @class */ (function () {
    function DarkPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                state: 'ON',
                logo: "assets/img/visa.png",
                a: 1234,
                b: 5522,
                c: 8432,
                d: 2264,
                expires: '7/12',
                bank: 'Bank of America'
            },
            {
                state: 'OFF',
                logo: "assets/img/american.png",
                a: 1234,
                b: 5321,
                c: 8283,
                d: 9271,
                expires: '8/19',
                bank: 'JPMorgan'
            },
            {
                state: 'ON',
                logo: "assets/img/mastercard.png",
                a: 8685,
                b: 2445,
                c: 9143,
                d: 7846,
                expires: '11/23',
                bank: 'CityBank'
            }
        ];
    }
    DarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dark',template:/*ion-inline-start:"/home/kaino/ionic-credit-card/src/pages/dark/dark.html"*/'<ion-content color=red padding>\n  <div *ngFor="let card of cards">\n    <ion-grid [class.cardON]="card.state==\'ON\'" [class.cardOFF]="card.state==\'OFF\'">\n      <ion-row>\n        <ion-col class="state">\n          <div class="msg">\n            <span [class.ON]="card.state==\'ON\'" [class.OFF]="card.state==\'OFF\'"></span> Card {{card.state}}\n          </div>\n        </ion-col>\n        <ion-col class="logo">\n          <img class="brand" [src]="card.logo">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="chip">\n          <img src="assets/img/chip.png">\n        </ion-col>\n      </ion-row>\n      <ion-row class="digits">\n        <ion-col class="number">\n          {{card.a}}\n        </ion-col>\n        <ion-col class="number">\n          {{card.b}}\n        </ion-col>\n        <ion-col class="number">\n          {{card.c}}\n        </ion-col>\n        <ion-col class="number">\n          {{card.d}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="date">\n          Expires: {{card.expires}}\n        </ion-col>\n        <ion-col class="bank">\n          {{card.bank}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/kaino/ionic-credit-card/src/pages/dark/dark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DarkPage);
    return DarkPage;
}());

//# sourceMappingURL=dark.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map