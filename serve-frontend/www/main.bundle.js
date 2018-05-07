webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userM_auth_guard_service__ = __webpack_require__("../../../../../src/app/userM/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', redirectTo: '/questions', pathMatch: 'full' },
    { path: 'chat', canActivate: [__WEBPACK_IMPORTED_MODULE_4__userM_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__["a" /* ChatComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"ui inverted menu\">\n    \n    <a class='item' routerLinkActive='active' \n    routerLink=\"/questions\" >Active questions</a>\n \n  <a class='item' routerLinkActive='active' \n    routerLink=\"/addquestion\" >Pose a new question</a>\n    <a *ngIf='(currentUser | async) else loginlink' class=\"item\" routerLinkActive='active' routerLink=\"/logout\">Logout: {{currentUser |async}}</a>\n    <ng-template #loginlink>\n      <a class=\"item\" routerLinkActive='active' routerLink=\"/login\">log in</a>\n    </ng-template>\n</div>\n\n<div class=\"ui container\">\n  \n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userM_authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    Object.defineProperty(AppComponent.prototype, "currentUser", {
        get: function () {
            return this.authService.username$;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__userM_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionM_question_module__ = __webpack_require__("../../../../../src/app/questionM/question.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userM_user_module__ = __webpack_require__("../../../../../src/app/userM/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interceptors__ = __webpack_require__("../../../../../src/app/interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http_interceptors__ = __webpack_require__("../../../../../src/app/http-interceptors/index.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__questionM_question_module__["a" /* QuestionModule */],
                __WEBPACK_IMPORTED_MODULE_7__userM_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__http_interceptors__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_10__interceptors__["a" /* basehttpInterceptorProviders */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"ui form\">\n      <h2>DavChat </h2>\n      <hr>\n      <div>\n  <div class=\"ui field\">\n     \n        \n              <label for=\"username\">Username</label>\n              <input type=\"text\" [(ngModel)]=\"user\" id=\"username\" placeholder=\"Enter username\">\n              <!-- <small id=\"userHelp\" class=\"form-text text-muted\">Type your username.</small> -->\n         \n      </div>\n\n      <div class=\"ui field\">\n          <label for=\"roomInput\">Choose room</label>\n          <select name=\"roomInput\" id=\"roomInput\"  [(ngModel)]=\"room\">\n              <option value=\"Lobby\">Lobby</option>\n              <option value=\"Hall\">Hall</option>\n              <option value=\"Deluxe\">Deluxe</option>\n          </select>\n      </div>\n    </div>\n      <div class=\"ui\">\n          <div style=\"margin-top:19px;\" class=\"pull-right\"> \n              <button type=\"button\" class=\"ui button paddedbutton\" (click)=\"join()\">Join</button>\n              <button type=\"button\" class=\"ui button paddedbutton\" (click)=\"leave()\">Leave</button>\n          </div>\n      </div>\n\n\n  <div class=\"row\">\n      <div class=\"well\" style=\"height:200px; padding:15px;\">\n          <div *ngFor=\"let item of messageArray\">\n          <span><strong>{{item.user}} : </strong> {{item.message}}</span>\n          </div>\n      </div>\n  </div>\n  <div class=\"ui field\">\n     \n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"messageText\">            \n  </div>\n      <div>\n              <button type=\"button\" class=\"ui button paddedbutton\" (click)=\"sendMessage()\">Send</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userM_authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(_chatservice, _authservice) {
        var _this = this;
        this._chatservice = _chatservice;
        this._authservice = _authservice;
        this.messageArray = [];
        this._chatservice.newUserJoined().subscribe(function (data) {
            _this.messageArray.push(data);
        });
        this._chatservice.userLeftRoom().subscribe(function (data) {
            _this.messageArray.push(data);
        });
        this._chatservice.messageRecieved().subscribe(function (data) {
            _this.messageArray.push(data);
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.join = function () {
        console.log();
        this._chatservice.joinRoom({ user: this._authservice.username$.getValue(), room: this.room });
    };
    ChatComponent.prototype.leave = function () {
        this._chatservice.leaveRoom({ user: this._authservice.username$.getValue(), room: this.room });
    };
    ChatComponent.prototype.sendMessage = function () {
        this._chatservice.sendMessage({ user: this._authservice.username$.getValue(), room: this.room, message: this.messageText });
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__userM_authentication_service__["a" /* AuthenticationService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://localhost:3001");
    }
    ChatService.prototype.joinRoom = function (data) {
        this.socket.emit("join", data);
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.socket.emit("leave", data);
    };
    ChatService.prototype.sendMessage = function (data) {
        console.log(data);
        this.socket.emit("message", data);
    };
    ChatService.prototype.newUserJoined = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("new user joined", function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.userLeftRoom = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("left room", function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.messageRecieved = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("new message", function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/http-interceptors/AuthenticationInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userM_authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationInterceptor = /** @class */ (function () {
    function AuthenticationInterceptor(authService) {
        this.authService = authService;
    }
    AuthenticationInterceptor.prototype.intercept = function (req, next) {
        if (this.authService.token.length) {
            // Clone the request to add the new header
            var clonedRequest = req.clone({
                headers: req.headers.set('Authorization', "Bearer " + this.authService.token)
            });
            //   // Clone the request and set the new header in one step.
            //   const authReq = req.clone({
            //     setHeaders: { Authorization: `Bearer ${this.authService.token}` }
            //   });
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    };
    AuthenticationInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__userM_authentication_service__["a" /* AuthenticationService */]])
    ], AuthenticationInterceptor);
    return AuthenticationInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/http-interceptors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AuthenticationInterceptor__ = __webpack_require__("../../../../../src/app/http-interceptors/AuthenticationInterceptor.ts");
/* "Barrel" of Http Interceptors */


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
        useClass: __WEBPACK_IMPORTED_MODULE_1__AuthenticationInterceptor__["a" /* AuthenticationInterceptor */],
        multi: true
    }
];


/***/ }),

/***/ "../../../../../src/app/interceptors/base-url.interceptors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrlInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseUrlInterceptor = /** @class */ (function () {
    function BaseUrlInterceptor() {
    }
    BaseUrlInterceptor.prototype.intercept = function (req, next) {
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* BACKEND_URL */]) {
            req = req.clone({
                url: "" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* BACKEND_URL */] + req.url
            });
            // console.log('set to ', `${BACKEND_URL}${req.url}`);
        }
        return next.handle(req);
    };
    BaseUrlInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaseUrlInterceptor);
    return BaseUrlInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basehttpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_url_interceptors__ = __webpack_require__("../../../../../src/app/interceptors/base-url.interceptors.ts");


var basehttpInterceptorProviders = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
        useClass: __WEBPACK_IMPORTED_MODULE_1__base_url_interceptors__["a" /* BaseUrlInterceptor */],
        multi: true
    }
];


/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        console.log("not found");
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/add-answer/add-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionM/add-answer/add-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Submit a new answer</h3>\n<form class=\"mainform\" [formGroup]=\"answer\" (ngSubmit)=\"onSubmit()\">\n<div class=\"ui form\">\n  <div class=\"field\">\n    <label for=\"body\">Body: </label>\n    <textarea rows=\"3\" id=\"body\" formControlName=\"body\"></textarea>\n  </div>\n</div>\n<p>{{errorMessage}}</p>\n<button class=\"ui button paddedbutton\" type=\"submit\">Submit answer</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/questionM/add-answer/add-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/questionM/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__answer_answer_model__ = __webpack_require__("../../../../../src/app/questionM/answer/answer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_question_model__ = __webpack_require__("../../../../../src/app/questionM/question/question.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userM_authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAnswerComponent = /** @class */ (function () {
    function AddAnswerComponent(fb, questionService, router, authService) {
        this.fb = fb;
        this.questionService = questionService;
        this.router = router;
        this.authService = authService;
    }
    AddAnswerComponent.prototype.ngOnInit = function () {
        this.answer = this.createFormGroup();
    };
    AddAnswerComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("submit");
        var body = this.answer.value.body;
        /*body = body.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        body = body.replace(new RegExp("<script>", 'g'), "<^script^>");
        body = body.replace(new RegExp("</script>", 'g'), "<^/script^>");*/
        var answer = new __WEBPACK_IMPORTED_MODULE_4__answer_answer_model__["a" /* Answer */](body);
        answer.poster = this.authService.user$.getValue();
        console.log(this.authService.user$.getValue());
        this.questionService.addAnswerToQuestion(this.question.id, answer).subscribe(function (item) { _this.question.addAnswer(item); }, function (err) {
            _this._errorMessage = "Please login";
        }, function () {
            _this.answer = _this.createFormGroup();
        });
        /*this.questionService.addNewQuestion(question).subscribe(
          (item) => this.answer.id = item.id,
        () => {},
      ()=>  this.router.navigate(["/question", question.id]));*/
    };
    Object.defineProperty(AddAnswerComponent.prototype, "id", {
        get: function () {
            return this.question.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddAnswerComponent.prototype, "errorMessage", {
        get: function () {
            return this._errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    AddAnswerComponent.prototype.createFormGroup = function () {
        return this.fb.group({
            body: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(10)]]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__question_question_model__["a" /* Question */])
    ], AddAnswerComponent.prototype, "question", void 0);
    AddAnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-answer',
            template: __webpack_require__("../../../../../src/app/questionM/add-answer/add-answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionM/add-answer/add-answer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__userM_authentication_service__["a" /* AuthenticationService */]])
    ], AddAnswerComponent);
    return AddAnswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/add-question/add-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionM/add-question/add-question.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Pose a new question</h1>\n<form [formGroup]=\"question\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"ui form\">\n\n        <div class=\"field\">\n    <label for=\"title\">Question: </label>\n    <input type=\"text\" id=\"title\" formControlName=\"title\">\n        </div>\n        <div class=\"field\">\n    <label for=\"body\">Body: </label>\n    <textarea rows=\"3\" id=\"body\" formControlName=\"body\"></textarea>\n        </div>\n</div>\n<button class=\"ui button paddedbutton\" type=\"submit\">Pose question</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/questionM/add-question/add-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/questionM/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question_model__ = __webpack_require__("../../../../../src/app/questionM/question/question.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userM_authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddQuestionComponent = /** @class */ (function () {
    function AddQuestionComponent(fb, questionService, router, authService) {
        this.fb = fb;
        this.questionService = questionService;
        this.router = router;
        this.authService = authService;
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
        this.question = this.fb.group({
            title: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(10)]],
            body: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(10)]]
        });
    };
    AddQuestionComponent.prototype.onSubmit = function () {
        var _this = this;
        var question = new __WEBPACK_IMPORTED_MODULE_3__question_question_model__["a" /* Question */](this.authService.user$.getValue(), this.question.value.body, this.question.value.title, new Date());
        this.questionService.addNewQuestion(question).subscribe(function (item) { return question.id = item.id; }, function () { }, function () { return _this.router.navigate(["/question", question.id]); });
    };
    AddQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-question',
            template: __webpack_require__("../../../../../src/app/questionM/add-question/add-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionM/add-question/add-question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__userM_authentication_service__["a" /* AuthenticationService */]])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionM/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id={{id}} class=\"ui comment borderedcomment\"> \n    \n        <a class=\"avatar padded\">\n                <img src=\"assets/images/person.png\">\n             </a>\n             <div class=\"vote\">\n             <button class=\"ui icon button vote\">\n              <i class=\"cloud icon\"></i>\n            </button>\n            <div class=\"ui mini horizontal statistic vote\">\n              <div class=\"value\">\n                2,204\n              </div>\n              </div>\n            <button class=\"ui icon button vote\">\n              <i class=\"cloud icon\"></i>\n            </button>\n          </div>\n    <div class=\"content paddedcontent\">\n    \n        <a class=\"author\">{{poster}}</a>\n        <div class=\"metadata\">\n          <span class=\"date\">{{datePosted | date : 'longDate'}}</span>\n        </div>\n        <div class=\"text\" [innerHtml]=\"body\">\n        </div>\n        <div style=\"float:left\" class=\"actions quote\">\n          <a class=\"reply\">Quote</a>\n        </div>\n        \n      </div>\n    \n      \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/questionM/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_model__ = __webpack_require__("../../../../../src/app/questionM/answer/answer.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerComponent = /** @class */ (function () {
    function AnswerComponent() {
        this.quoteText = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AnswerComponent.prototype, "id", {
        get: function () {
            return this.answer.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerComponent.prototype, "body", {
        get: function () {
            return this.answer.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerComponent.prototype, "datePosted", {
        get: function () {
            return this.answer.datePosted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerComponent.prototype, "poster", {
        get: function () {
            return this.answer.poster.name;
        },
        enumerable: true,
        configurable: true
    });
    AnswerComponent.prototype.quote = function () {
        this.quoteText.emit(this.answer.body);
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AnswerComponent.prototype, "quoteText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__answer_model__["a" /* Answer */])
    ], AnswerComponent.prototype, "answer", void 0);
    AnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-answer',
            template: __webpack_require__("../../../../../src/app/questionM/answer/answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionM/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/answer/answer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userM_user_model__ = __webpack_require__("../../../../../src/app/userM/user.model.ts");

var Answer = /** @class */ (function () {
    function Answer(_body) {
        this._body = _body;
    }
    Object.defineProperty(Answer.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "poster", {
        get: function () {
            return this._poster;
        },
        set: function (poster) {
            this._poster = poster;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "datePosted", {
        get: function () {
            return this._datePosted;
        },
        enumerable: true,
        configurable: true
    });
    Answer.fromJSON = function (json) {
        var answer = new Answer(json.body);
        console.log("poster " + json.poster);
        if (json.poster) {
            answer.poster = new __WEBPACK_IMPORTED_MODULE_0__userM_user_model__["a" /* User */](json.poster.id, json.poster.username);
            console.log(json.poster.id, json.poster.username);
        }
        answer._id = json._id;
        answer._datePosted = json.posted;
        return answer;
    };
    Answer.prototype.toJSON = function () {
        console.log("posterid " + this._poster.id);
        return {
            _id: this._id,
            poster: this.poster.id,
            body: this._body,
            posted: this._datePosted,
        };
    };
    return Answer;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/question-detail/question-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionM/question-detail/question-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"borderedcontent\">\n<div>\n<h1>{{question.title}}</h1>\n<h2>by {{postername}}</h2>\n<hr>\n<div class=\"questionbody\">\n  <div class=\"ui form\">\n  <div class=\"field\">\n  <textarea disabled>{{question.body}}</textarea>\n</div>\n</div>\n</div>\n</div>  \n<div class=\"addanwser\">\n  <app-add-answer [question]='question'></app-add-answer>\n</div>\n<div class=\"anwsers ui comments\">\n  ANWSERS\n  <app-answer class=\"answer\" *ngFor=\"let answer of question.answers\" [answer]='answer'></app-answer>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/questionM/question-detail/question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/questionM/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionDetailComponent = /** @class */ (function () {
    function QuestionDetailComponent(route, _questionService, router) {
        this.route = route;
        this._questionService = _questionService;
        this.router = router;
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (item) {
            return _this._question = item['question'];
        }, function () { return _this.router.navigate["**"]; });
        console.log(this._question);
    };
    Object.defineProperty(QuestionDetailComponent.prototype, "id", {
        get: function () {
            return this._question.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionDetailComponent.prototype, "question", {
        get: function () {
            return this._question;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionDetailComponent.prototype, "postername", {
        get: function () {
            return this._question.poster.name;
        },
        enumerable: true,
        configurable: true
    });
    QuestionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-detail',
            template: __webpack_require__("../../../../../src/app/questionM/question-detail/question-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionM/question-detail/question-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], QuestionDetailComponent);
    return QuestionDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/question-list/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionM/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui\">\n  <app-question *ngFor='let localQuestion of questions'\n    [question]='localQuestion'></app-question>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/questionM/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/questionM/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(_questionDataService) {
        this._questionDataService = _questionDataService;
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this._questions = this._questionDataService.questions;
        //this._questionDataService.questions..pipe(takeUntil(this.unsubscribe(items => this._questions = items);
        console.log("tst");
        this._questionDataService.questions.subscribe(function (data) {
            console.log(data);
            _this._questions = data;
            console.log(_this._questions);
        }, function (error) {
            _this.errorMsg = "Error " + error.status + " while trying to retrieve questions: " + error.error;
        });
        console.log(this._questions + "test");
    };
    Object.defineProperty(QuestionListComponent.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        enumerable: true,
        configurable: true
    });
    QuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-list',
            template: __webpack_require__("../../../../../src/app/questionM/question-list/question-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionM/question-list/question-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/question-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/questionM/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionResolver = /** @class */ (function () {
    function QuestionResolver(_questionService) {
        this._questionService = _questionService;
    }
    QuestionResolver.prototype.resolve = function (route, state) {
        console.log("resolve");
        return this._questionService.getQuestion(route.params['id']);
    };
    QuestionResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], QuestionResolver);
    return QuestionResolver;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/question.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_question_add_question_component__ = __webpack_require__("../../../../../src/app/questionM/add-question/add-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_list_question_list_component__ = __webpack_require__("../../../../../src/app/questionM/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_detail_question_detail_component__ = __webpack_require__("../../../../../src/app/questionM/question-detail/question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_question_component__ = __webpack_require__("../../../../../src/app/questionM/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_service__ = __webpack_require__("../../../../../src/app/questionM/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_resolver__ = __webpack_require__("../../../../../src/app/questionM/question-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__ = __webpack_require__("../../../../../src/app/questionM/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_answer_add_answer_component__ = __webpack_require__("../../../../../src/app/questionM/add-answer/add-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__http_interceptors__ = __webpack_require__("../../../../../src/app/http-interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__userM_auth_guard_service__ = __webpack_require__("../../../../../src/app/userM/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__interceptors__ = __webpack_require__("../../../../../src/app/interceptors/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_3__question_list_question_list_component__["a" /* QuestionListComponent */] },
    { path: 'addquestion', canActivate: [__WEBPACK_IMPORTED_MODULE_14__userM_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_2__add_question_add_question_component__["a" /* AddQuestionComponent */] },
    { path: 'question/:id', component: __WEBPACK_IMPORTED_MODULE_4__question_detail_question_detail_component__["a" /* QuestionDetailComponent */], resolve: { question: __WEBPACK_IMPORTED_MODULE_10__question_resolver__["a" /* QuestionResolver */] } },
];
var QuestionModule = /** @class */ (function () {
    function QuestionModule(_questionDataService) {
        this._questionDataService = _questionDataService;
    }
    QuestionModule.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this._questions = this._questionDataService.questions;
        //this._questionDataService.questions..pipe(takeUntil(this.unsubscribe(items => this._questions = items);
        this._questionDataService.questions.subscribe(function (data) { _this._questions = data; }, function (error) {
            _this.errorMsg = "Error " + error.status + " while trying to retrieve questions: " + error.error;
        });
    };
    Object.defineProperty(QuestionModule.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        enumerable: true,
        configurable: true
    });
    QuestionModule.prototype.newQuestionAdded = function (question) {
        var _this = this;
        // this._questionDataService.addNewQuestion(question).subscribe();
        this._questionDataService.addNewQuestion(question)
            .subscribe(function (item) { return _this._questions.push(item); });
    };
    QuestionModule.prototype.questionDeleted = function (question) {
    };
    QuestionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__question_detail_question_detail_component__["a" /* QuestionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__["a" /* AnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__question_list_question_list_component__["a" /* QuestionListComponent */],
                __WEBPACK_IMPORTED_MODULE_2__add_question_add_question_component__["a" /* AddQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__add_answer_add_answer_component__["a" /* AddAnswerComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__question_service__["a" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_10__question_resolver__["a" /* QuestionResolver */],
                __WEBPACK_IMPORTED_MODULE_13__http_interceptors__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_15__interceptors__["a" /* basehttpInterceptorProviders */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__question_service__["a" /* QuestionService */]])
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_question_model__ = __webpack_require__("../../../../../src/app/questionM/question/question.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__answer_answer_model__ = __webpack_require__("../../../../../src/app/questionM/answer/answer.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionService = /** @class */ (function () {
    /**
     *
     */
    function QuestionService(http) {
        this.http = http;
        this._appUrl = '/API';
    }
    Object.defineProperty(QuestionService.prototype, "questions", {
        get: function () {
            /* return this.http.get(this._appUrl+"/questions")
                  .pipe(map((list: any[]):Question[] => list.map(item =>
                    new Question(new User("Iemand"), item.body, item.title, item.date)
                  )));*/
            return this.http
                .get(this._appUrl + "/questions/")
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (list) { return list.map(__WEBPACK_IMPORTED_MODULE_1__question_question_model__["a" /* Question */].fromJSON); }));
        },
        enumerable: true,
        configurable: true
    });
    QuestionService.prototype.addNewQuestion = function (question) {
        return this.http
            .post(this._appUrl + "/questions/", question)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(__WEBPACK_IMPORTED_MODULE_1__question_question_model__["a" /* Question */].fromJSON));
    };
    QuestionService.prototype.addAnswerToQuestion = function (id, answer) {
        //   let question;
        //this.getQuestion(id).subscribe(item => question = item);
        //  question.addAnswer(answer);
        return this.http
            .post(this._appUrl + "/question/" + id + "/answers", answer).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(__WEBPACK_IMPORTED_MODULE_4__answer_answer_model__["a" /* Answer */].fromJSON));
    };
    QuestionService.prototype.deleteQuestion = function (question) {
        console.log("deleting");
        console.log(this._appUrl + "/question/" + question.id);
        return this.http
            .delete(this._appUrl + "/question/" + question.id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(__WEBPACK_IMPORTED_MODULE_1__question_question_model__["a" /* Question */].fromJSON));
    };
    QuestionService.prototype.getQuestion = function (id) {
        var theUrl = this._appUrl + "/question/" + id;
        return this.http.get(theUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(__WEBPACK_IMPORTED_MODULE_1__question_question_model__["a" /* Question */].fromJSON));
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionM/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui black segment\" (click)=\"test()\">\n  <p>Question: {{title}}</p>\n\n  <div>\n  </div>\n    <div class=\"ui mini statistic\">\n      <div class=\"value\">\n          <i class=\"comments icon\"></i>\n        {{answerAmount}}\n      </div>\n      <div class=\"label\">\n        Answers\n      </div>\n    </div>\n  \n</div>\n<div></div>\n"

/***/ }),

/***/ "../../../../../src/app/questionM/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_model__ = __webpack_require__("../../../../../src/app/questionM/question/question.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/questionM/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(_questionDataService, _router) {
        this._questionDataService = _questionDataService;
        this._router = _router;
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(QuestionComponent.prototype, "title", {
        get: function () {
            return this.question.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionComponent.prototype, "body", {
        get: function () {
            return this.question.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionComponent.prototype, "answerAmount", {
        get: function () {
            return this.question.answerAmount;
        },
        enumerable: true,
        configurable: true
    });
    QuestionComponent.prototype.test = function () {
        this._router.navigate(["/question", this.question.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__question_model__["a" /* Question */])
    ], QuestionComponent.prototype, "question", void 0);
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/questionM/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionM/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questionM/question/question.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userM_user_model__ = __webpack_require__("../../../../../src/app/userM/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_answer_model__ = __webpack_require__("../../../../../src/app/questionM/answer/answer.model.ts");


var Question = /** @class */ (function () {
    function Question(poster, body, title, date) {
        this._poster = poster;
        this._body = body;
        this._title = title;
        this._datePosted = date;
        this._answers = new Array();
        console.log(body);
    }
    Object.defineProperty(Question.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "poster", {
        get: function () {
            return this._poster;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "body", {
        get: function () {
            return this._body;
        },
        set: function (body) {
            this._body = body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answers", {
        get: function () {
            return this._answers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answerAmount", {
        get: function () {
            return this._answers.length;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.addAnswer = function (answer) {
        this._answers.push(answer);
    };
    Question.fromJSON = function (json) {
        var question = new Question(new __WEBPACK_IMPORTED_MODULE_0__userM_user_model__["a" /* User */]("Niemand", "Iemand"), json.body, json.title, json.date);
        question._id = json._id;
        question._answers = json.answers.map(__WEBPACK_IMPORTED_MODULE_1__answer_answer_model__["a" /* Answer */].fromJSON);
        return question;
    };
    Question.prototype.toJSON = function () {
        return {
            _id: this._id,
            poster: this._poster.id,
            body: this._body,
            title: this._title,
            date: this._datePosted,
            answers: this._answers.map(function (i) { return i.toJSON(); })
        };
    };
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/userM/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import our authentication service
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.user$.getValue()) {
            return true;
        }
        // Retain the attempted URL for redirection
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/userM/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_model__ = __webpack_require__("../../../../../src/app/userM/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function parseJwt(token) {
    if (!token) {
        return null;
    }
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._tokenKey = 'currentUser';
        this._url = '/API/users';
        var parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
        if (parsedToken) {
            var expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
            if (expires) {
                localStorage.removeItem(this._tokenKey);
                parsedToken = null;
            }
        }
        this._user$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](parsedToken && new __WEBPACK_IMPORTED_MODULE_4__user_model__["a" /* User */](parsedToken._id, parsedToken.username));
        this._username$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](parsedToken && parsedToken.username);
    }
    Object.defineProperty(AuthenticationService.prototype, "user$", {
        get: function () {
            return this._user$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "username$", {
        get: function () {
            return this._username$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "token", {
        get: function () {
            var localToken = localStorage.getItem(this._tokenKey);
            return !!localToken ? localToken : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/login", { username: username, password: password }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            var token = res.token;
            if (token) {
                console.log("result " + res.id);
                console.log("token" + res.token);
                localStorage.setItem(_this._tokenKey, token);
                _this._user$.next(new __WEBPACK_IMPORTED_MODULE_4__user_model__["a" /* User */](res.id, username));
                _this._username$.next(username);
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.user$.getValue()) {
            localStorage.removeItem(this._tokenKey);
            setTimeout(function () { return _this._user$.next(null); });
        }
    };
    AuthenticationService.prototype.register = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/register", { username: username, password: password }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem(_this._tokenKey, token);
                _this._user$.next(new __WEBPACK_IMPORTED_MODULE_4__user_model__["a" /* User */](res.id, username));
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.checkUserNameAvailability = function (username) {
        return this.http.post(this._url + "/checkusername", { username: username }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (item) {
            if (item.username === 'alreadyexists') {
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/userM/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userM/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='errorMsg' class=\"ui error message\">{{errorMsg}}</div>\n<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment\">\n  <h3 class=\"ui header\">login</h3>\n  <div class=\"field\">\n    <label for=\"username\">username:</label>\n    <input type=\"text\" id=\"username\" formControlName='username'>\n  </div>\n  <div class=\"field\">\n    <label for=\"password\">password:</label>\n    <input type=\"password\" id=\"password\" formControlName='password'>\n  </div>\n  <button type='submit' [disabled]='!user.valid' class=\"ui positive right floated button\" id='loginbtn'>log in</button>\n</form>\n<a class='item' routerLink=\"/register\">register</a>"

/***/ }),

/***/ "../../../../../src/app/userM/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator() {
    return function (control) {
        console.log(control.value);
        return control.value.length < 12
            ? { passwordTooShort: { value: control.value.length } }
            : null;
    };
}
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService
            .login(this.user.value.username, this.user.value.password)
            .subscribe(function (val) {
            if (val) {
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                    _this.authService.redirectUrl = undefined;
                }
                else {
                    _this.router.navigate(['/questions']);
                }
            }
            else {
                _this.errorMsg = "Could not login";
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.errorMsg = "Error while trying to login user " + _this.user.value.username + ": " + err.error.message;
            }
            else {
                _this.errorMsg = "Error " + err.status + " while trying to login user " + _this.user.value.username + ": " + err.error;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/userM/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userM/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userM/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userM/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/userM/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.router.navigate(['logout']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/userM/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userM/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userM/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userM/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='errorMsg' class=\"ui error message\">{{errorMsg}}</div>\n<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment\">\n  <h3 class=\"ui header\">register new user</h3>\n  <div class=\"field\">\n    <label for=\"username\">username:</label>\n    <input type=\"text\" id=\"username\" formControlName='username'>\n    <div class='ui pointing red basic label' *ngIf=' user.get(\"username\").errors?.required && user.get(\"username\").touched'>\n      a username is required\n    </div>\n    <div class='ui pointing red basic label' *ngIf='user.get(\"username\").errors?.minlength && user.get(\"username\").touched'>\n      the username should be at least {{user.get(\"username\").errors?.minlength.requiredLength }} letters\n    </div>\n    <div class='ui pointing red basic label' *ngIf='user.get(\"username\").errors?.userAlreadyExists && user.get(\"username\").touched'>\n      a user with that name already exists\n    </div>\n  </div>\n  <div formGroupName='passwordGroup'>\n    <div class=\"field\">\n      <label for=\"password\">password:</label>\n      <input type=\"password\" id=\"password\" formControlName='password'>\n      <div class='ui pointing red basic label' *ngIf=' passwordControl.errors?.passwordTooShort && passwordControl.touched'>\n        password too short, please use at least {{passwordControl.errors?.passwordTooShort.requiredLength}} letters (got {{passwordControl.errors?.passwordTooShort.actualLength}})\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"confirmpassword\">confirm password:</label>\n      <input type=\"password\" id=\"confirmpassword\" formControlName='confirmPassword'>\n    </div>\n    <div class='ui pointing red basic label' *ngIf=' user.get(\"passwordGroup\").errors?.passwordsDiffer && user.get(\"passwordGroup\").get(\"confirmPassword\").touched  && user.get(\"passwordGroup\").get(\"password\").touched'>\n      the two passwords should be the same\n    </div>\n  </div>\n  <button type='submit' [disabled]='!user.valid' class=\"ui positive right floated button\">register</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/userM/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function passwordValidator(length) {
    return function (control) {
        return control.value.length < length
            ? {
                passwordTooShort: {
                    requiredLength: length,
                    actualLength: control.value.length
                }
            }
            : null;
    };
}
function comparePasswords(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value
        ? null
        : { passwordsDiffer: true };
}
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticationService, router, fb) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.fb = fb;
    }
    Object.defineProperty(RegisterComponent.prototype, "passwordControl", {
        get: function () {
            return this.user.get('passwordGroup').get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: [
                '',
                [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(4)],
                this.serverSideValidateUsername()
            ],
            passwordGroup: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, passwordValidator(6)]],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
            }, { validator: comparePasswords })
        });
    };
    RegisterComponent.prototype.serverSideValidateUsername = function () {
        var _this = this;
        return function (control) {
            return _this.authenticationService
                .checkUserNameAvailability(control.value)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* map */])(function (available) {
                if (available) {
                    return null;
                }
                return { userAlreadyExists: true };
            }));
        };
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService
            .register(this.user.value.username, this.passwordControl.value)
            .subscribe(function (val) {
            if (val) {
                _this.router.navigate(['/questions']);
            }
        }, function (error) {
            _this.errorMsg = "Error " + error.status + " while trying to register user " + _this.user.value.username + ": " + error.error;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/userM/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userM/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userM/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userM/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/userM/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/userM/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userM/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userM/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(id, name) {
        this._id = id;
        this._name = name;
        console.log("naam " + name + " id: " + id);
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/userM/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/userM/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/userM/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_service__ = __webpack_require__("../../../../../src/app/userM/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__ = __webpack_require__("../../../../../src/app/userM/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard_service__ = __webpack_require__("../../../../../src/app/userM/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interceptors__ = __webpack_require__("../../../../../src/app/interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_interceptors__ = __webpack_require__("../../../../../src/app/http-interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_component__ = __webpack_require__("../../../../../src/app/userM/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__["a" /* LogoutComponent */], __WEBPACK_IMPORTED_MODULE_11__user_component__["a" /* UserComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_10__http_interceptors__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_9__interceptors__["a" /* basehttpInterceptorProviders */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_URL; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
var BACKEND_URL = null;


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["b" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map