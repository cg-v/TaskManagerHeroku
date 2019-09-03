(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit-list/edit-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit-list/edit-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    \n        <div class=\"modal-box \">\n            <h1 class=\"title\">Edit a list</h1>\n    \n            <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name..\">\n            <br><br>\n            <div class=\"buttons is-right\">\n                <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n                <button class=\"button is-primary has-text-white is-medium\" (click)=updateList(listTitleInput.value)>Save</button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit-task/edit-task.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit-task/edit-task.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    \n        <div class=\"modal-box \">\n            <h1 class=\"title\">Edit a task</h1>\n    \n            <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task name..\">\n            <br><br>\n            <div class=\"buttons is-right\">\n                <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n                <button class=\"button is-primary has-text-white is-medium\" (click)=updateTask(taskTitleInput.value)>Save</button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login-page/login-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login-page/login-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n \n    <div class=\"white-box\">\n        <h1 class=\"title has-text-primary\">Login</h1>\n        <div class=\"field\">\n            <p class=\"control has-icons-left has-icons-right\">\n              <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n              </span>\n              \n            </p>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n          </div>\n          <div class=\"field \" style=\"display : flex; justify-content: flex-end\">\n            <p class=\"control\">\n              <button class=\"button is-success has-text-white\" (click)=\"onLoginButtonClicked(emailInput.value, pwInput.value)\">\n                Login\n              </button>\n            </p>\n          </div>\n<br>\n<p class=\"has-text-grey\">Not got an account?<a routerLink=\"/signup\"> Signup </a>now!!</p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/new-list/new-list.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/new-list/new-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    \n    <div class=\"modal-box \">\n        <h1 class=\"title\">Create a new list</h1>\n\n        <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name..\">\n        <br><br>\n        <div class=\"buttons is-right\">\n            <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n            <button class=\"button is-primary has-text-white is-medium\" (click)=createList(listTitleInput.value)>Create</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/new-task/new-task.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/new-task/new-task.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    \n        <div class=\"modal-box \">\n            <h1 class=\"title\">Create a new task</h1>\n    \n            <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task name..\">\n            <br><br>\n            <div class=\"buttons is-right\">\n                <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n                <button class=\"button is-primary has-text-white is-medium\" (click)=createtask(taskTitleInput.value)>Create</button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup-page/signup-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup-page/signup-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    <div class=\"white-box\">\n        <h1 class=\"title has-text-primary\">Sign up</h1>\n        <div class=\"field\">\n            <p class=\"control has-icons-left has-icons-right\">\n              <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n              </span>\n              \n            </p>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n          </div>\n          <div class=\"field\" style=\"display : flex; justify-content: flex-end\">\n            <p class=\"control\">\n              <button class=\"button is-success has-text-white\" (click)=\"onSignupButtonClicked(emailInput.value, pwInput.value)\">\n                Signup\n              </button>\n            </p>\n          </div>\n\n          <p class=\"has-text-grey\">Already got an account??<a routerLink=\"/login\"> Login </a>now!!</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/task-view/task-view.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/task-view/task-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\"> \n    <div class=\"task-manager-container\">\n           \n        <div class=\"sidebar has-background-white\">\n            <h1 class=\"title has-text-primary\">\n                Lists\n            </h1>\n            <div class=\"list-menu\">\n             <a class=\"list-menu-item \" *ngFor=\"let list of lists\" [routerLink]=\"['/lists',list._id]\" routerLinkActive=\"is-active\">\n                        <p>{{list.title}}</p>\n                    </a>\n            </div>\n            <button class=\"button is-primary has-text-white\" routerLink=\"/new-list\">+ New List</button>\n        </div>\n\n        <div class=\"task-list-container has-background-light\" >\n            <div *ngIf=\"tasks\">\n                <div class=\"top-bar\">\n                        <h1 class=\"title has-text-primary\">\n                                Tasks\n                            </h1>\n                            <div class=\"dropdown is-hoverable is-right\">\n                                    <div class=\"dropdown-trigger\">\n                                      <button class=\"button\" aria-haspopup=\"true\" >\n                                       \n                                        <span class=\"icon is-small\">\n                                          <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n                                        </span>\n                                      </button>\n                                    </div>\n                                    <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\n                                            <div class=\"dropdown-content\">\n                                                    <a [routerLink]=\"['/edit-list', selectedListId]\" class=\"dropdown-item\">\n                                                      Edit\n                                                    </a>\n                                                    <a (click)=\"onDeleteListClick()\" class=\"dropdown-item has-text-danger\">\n                                                      Delete\n                                                    </a>\n                                                    <a (click)=\"onlogout()\" class=\"dropdown-item has-text-danger\">\n                                                            Logout\n                                                          </a>\n                                                    \n                                                  </div>\n                                    </div>\n                                  </div>\n                </div>\n\n                \n\n\n                    <!--task elements-->\n            <div class=\"task\" *ngFor=\"let task of tasks\" (click)=\"ontaskClick(task)\" [ngClass]=\"{'completed' : task.completed} \">\n                <div class=\"task-text\">\n                        <p>{{task.title}}</p>\n                </div>\n                       <div class=\"task-buttons\">\n\n                            <button [routerLink] =\"['/lists',selectedListId,'edit-task',task._id]\" class=\"button\" style=\"margin-right : 10px;\">\n                                    <div class=\"icon\">\n                                        <i class=\"fas fa-edit\"></i>\n                                    </div>\n                                </button>\n                           <button class=\"button is-danger\" (click)=\"onDeleteTaskClick(task._id)\" >\n                               <div class=\"icon\">\n                                   <i class=\"fas fa-trash\"></i>\n                               </div>\n                           </button>\n                           \n                       </div>     \n                        </div>\n            \n                        <h1 class=\"empty-state-text\" *ngIf=\"tasks.length === 0\">There are no tasks here.Click the add button to create a new task</h1>\n\n             <button routerLink=\"./new-task\" class=\"circle-add-button button is-primary\"> \n                \n                <img  src=\"../../../assets/plus-icon.svg\" class=\"has-text-white\"> \n            </button>\n        </div>\n\n        <div *ngIf=\"!tasks\"> \n            <h1 class=\"empty-state-text\">Please select a list from sidebar</h1>\n        </div>\n    </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");










const routes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: 'new-list', component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__["NewListComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"] },
    { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"] },
    { path: 'edit-list/:listId', component: _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__["EditListComponent"] },
    { path: 'lists', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
    { path: 'lists/:listId', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
    { path: 'lists/:listId/new-task', component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"] },
    { path: 'lists/:listId/edit-task/:taskId', component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web-req.interceptor */ "./src/app/web-req.interceptor.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"],
            _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__["NewListComponent"],
            _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"],
            _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
            _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__["SignupPageComponent"],
            _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__["EditListComponent"],
            _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__["EditTaskComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__["WebReqInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(http, webService, router) {
        this.http = http;
        this.webService = webService;
        this.router = router;
    }
    login(email, password) {
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            //the auth tokens will be in the response of the header
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log('logged in');
        }));
    }
    signup(email, password) {
        return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            //the auth tokens will be in the response of the header
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log('Successfully signed up and logged in');
        }));
    }
    logOut() {
        this.removeSession();
        this.router.navigate(['/login']);
    }
    getAccesstoken() {
        return localStorage.getItem('x-access-token');
    }
    getRefreshtoken() {
        return localStorage.getItem('x-refresh-token');
    }
    getUserid() {
        return localStorage.getItem('user-id');
    }
    setAccesstoken(accessToken) {
        console.log(accessToken);
        localStorage.setItem('x-access-token', accessToken);
    }
    setSession(userid, accessToken, refreshToken) {
        localStorage.setItem('user-id', userid);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    }
    removeSession() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }
    getNewAccessToken() {
        return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
            headers: {
                'x-refresh-token': this.getRefreshtoken(),
                '_id': this.getUserid()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            this.setAccesstoken(res.headers.get('x-access-token'));
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtbGlzdC9lZGl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.ts ***!
  \********************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");




let EditListComponent = class EditListComponent {
    constructor(route, router, taskService) {
        this.route = route;
        this.router = router;
        this.taskService = taskService;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params.listId;
            console.log(params.listId);
        });
    }
    updateList(title) {
        this.taskService.updateList(this.listId, title).subscribe(() => {
            this.router.navigate(['/lists', this.listId]);
        });
    }
};
EditListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] }
];
EditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-list',
        template: __webpack_require__(/*! raw-loader!./edit-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit-list/edit-list.component.html"),
        styles: [__webpack_require__(/*! ./edit-list.component.scss */ "./src/app/pages/edit-list/edit-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
], EditListComponent);



/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
  \********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");




let EditTaskComponent = class EditTaskComponent {
    constructor(route, router, taskService) {
        this.route = route;
        this.router = router;
        this.taskService = taskService;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.taskId = params.taskId;
            this.listId = params.listId;
        });
    }
    updateTask(title) {
        this.taskService.updateTask(this.listId, this.taskId, title).subscribe(() => {
            this.router.navigate(['/lists', this.listId]);
        });
    }
};
EditTaskComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] }
];
EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-task',
        template: __webpack_require__(/*! raw-loader!./edit-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit-task/edit-task.component.html"),
        styles: [__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/pages/edit-task/edit-task.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
], EditTaskComponent);



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginPageComponent = class LoginPageComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginButtonClicked(email, password) {
        this.authservice.login(email, password).subscribe((res) => {
            if (res.status == 200) {
                //we have logged in successfully
                this.router.navigate(['/lists']);
            }
            console.log(res);
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login-page/login-page.component.html"),
        styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1saXN0L25ldy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.ts ***!
  \******************************************************/
/*! exports provided: NewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListComponent", function() { return NewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewListComponent = class NewListComponent {
    constructor(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
    }
    createList(title) {
        this.taskService.createList(title).subscribe((list) => {
            console.log('dsffd');
            //navigate to /lists/response._id
            this.router.navigate(['/lists', list._id]);
        });
    }
};
NewListComponent.ctorParameters = () => [
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-list',
        template: __webpack_require__(/*! raw-loader!./new-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/new-list/new-list.component.html"),
        styles: [__webpack_require__(/*! ./new-list.component.scss */ "./src/app/pages/new-list/new-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NewListComponent);



/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.ts ***!
  \******************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewTaskComponent = class NewTaskComponent {
    constructor(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params['listId'];
        });
    }
    createtask(title) {
        this.taskService.createTask(title, this.listId).subscribe((newtask) => {
            this.router.navigate(['../'], { relativeTo: this.route });
        });
    }
};
NewTaskComponent.ctorParameters = () => [
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-task',
        template: __webpack_require__(/*! raw-loader!./new-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/new-task/new-task.component.html"),
        styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/pages/new-task/new-task.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NewTaskComponent);



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupPageComponent = class SignupPageComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    ngOnInit() {
    }
    onSignupButtonClicked(email, password) {
        this.authservice.signup(email, password).subscribe((res) => {
            //if sign in is successful
            if (res.status == 200) {
                this.router.navigate(['/lists']);
            }
            console.log('res');
        });
    }
};
SignupPageComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-page',
        template: __webpack_require__(/*! raw-loader!./signup-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup-page/signup-page.component.html"),
        styles: [__webpack_require__(/*! ./signup-page.component.scss */ "./src/app/pages/signup-page/signup-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SignupPageComponent);



/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml {\n  background: linear-gradient(to right top, #44ddd0, #27d7a1);\n}\nhtml, body {\n  height: 100%;\n}\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.modal-box {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.title {\n  font-family: \"Lato\";\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.white-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px;\n}\n.task-manager-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 680px;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  background: white;\n  padding: 42px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.task-list-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 42px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.task-list-container .top-bar {\n  margin-bottom: 20px;\n  display: flex;\n}\n.task-list-container .top-bar .title {\n  flex-grow: 1;\n  margin: 0;\n}\n.list-menu {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  flex-grow: 1;\n}\n.list-menu .list-menu-item {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  width: 100%;\n  color: #5f5f5f;\n  margin-bottom: 5px;\n}\n.list-menu .list-menu-item:hover {\n  background: #f8f8f8;\n}\n.list-menu .list-menu-item.is-active {\n  background-color: #cff8ef;\n  color: #006450;\n}\n.task {\n  display: flex;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 10px;\n  align-items: center;\n}\n.task:not(.complete) {\n  cursor: pointer;\n  transition: box-shadow 0.2s ease, -webkit-transform 0.2s ease;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  transition: box-shadow 0.2s ease, transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n.task:not(.complete):active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.task:not(.complete):hover {\n  box-shadow: 0 0 0 5px #eeeeee;\n}\n.task:not(.complete):hover .task-buttons {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.task.completed .task-text {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.task .task-text {\n  display: flex;\n  flex-grow: 1;\n}\n.task .task-buttons {\n  transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: opacity 0.2s, transform 0.2s;\n  transition: opacity 0.2s, transform 0.2s, -webkit-transform 0.2s;\n  opacity: 0;\n  -webkit-transform: scale(0.85);\n          transform: scale(0.85);\n}\n.circle-add-button {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n.empty-state-text {\n  font-size: 20px;\n  color: #777;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXNhbi9EYXRhL1dvcmsvVGFza01hbmFnZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy90YXNrLXZpZXcvdGFzay12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YXNrLXZpZXcvdGFzay12aWV3LmNvbXBvbmVudC5zY3NzIiwiL21lZGlhL2Rhc2FuL0RhdGEvV29yay9UYXNrTWFuYWdlci9mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUSxrRkFBQTtBQTBCUjtFQUNJLDJEQUFBO0FDMUJKO0FENkJBO0VBQ0ksWUFBQTtBQzFCSjtBRDZCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUMxQko7QUQ2QkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDMUJKO0FENkJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQzFCSjtBRDZCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0FDM0JKO0FDckNBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRHdDSjtBQ3JDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFFQSwyQkFBQTtFQUNBLDhCQUFBO0FEcUNKO0FDbENBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDRCQUFBO0VBQ0EsK0JBQUE7QURvQ0o7QUNqQ0k7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QURtQ1I7QUNsQ1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtBRG9DWjtBQzlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRGlDSjtBQy9CSTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEK0JSO0FDN0JRO0VBQ0ksbUJGdERKO0FDcUZSO0FDNUJRO0VBQ0kseUJBQUE7RUFDQSxjRjdEQztBQzJGYjtBQ3pCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FEMkJKO0FDekJJO0VBQ0ksZUFBQTtFQUNBLDZEQUFBO0VBQUEscURBQUE7RUFBQSxrRkFBQTtBRDJCUjtBQ3pCUTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUQyQlo7QUN4QlE7RUFDSSw2QkFBQTtBRDBCWjtBQ3hCWTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FEMEJoQjtBQ3JCSztFQUNHLDZCQUFBO0VBQ0EsWUFBQTtBRHVCUjtBQ2xCSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEb0JSO0FDakJJO0VBQ0ksZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QURtQlI7QUNmQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEa0JKO0FDZEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEaUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFzay12aWV3L3Rhc2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZ2xvYmFsIHN0eWxlcyBhbmQgY2hhbmdlIHZhcmlhYmxlcyB2YWx1ZXNcbi8vIEltcG9ydCBGb250cyAoTGF0byBhbmQgTnVuaXRvKVxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TnVuaXRvOjQwMCw3MDAnKTtcblxuJHR1cnF1b2lzZTogIzQ0ZGRkMDtcbiRncmVlbjogIzI3ZDdhMTtcbiRsaWdodC1ncmVlbjogIzQ1ZjY5ZTsgXG4kZGFyay1ncmVlbjogcmdiKDAsIDEwMCwgODApO1xuXG4kbGlnaHQ6ICNmOGY4Zjg7XG5cblxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuJHByaW1hcnk6ICRncmVlbjtcblxuJGxpbms6ICR0dXJxdW9pc2U7XG5cblxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXG5cbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kaW5wdXQtc2hhZG93OiBub25lO1xuXG5cbi8vIFNldCBjdXN0b20gZ2xvYmFsIHN0eWxlcyAod2lsbCBiZSBhcHBsaWVkIHRvIHdob2xlIGFwcClcblxuaHRtbCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJHR1cnF1b2lzZSwgJGdyZWVuKTtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWJveCB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMzVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi53aGl0ZS1ib3gge1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwXCIpO1xuaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICM0NGRkZDAsICMyN2Q3YTEpO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtYm94IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDU4MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLndoaXRlLWJveCB7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cblxuLnRhc2stbWFuYWdlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWF4LWhlaWdodDogNjgwcHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDQycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG4udGFzay1saXN0LWNvbnRhaW5lciAudG9wLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGFzay1saXN0LWNvbnRhaW5lciAudG9wLWJhciAudGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxpc3QtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0uaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjhlZjtcbiAgY29sb3I6ICMwMDY0NTA7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhc2s6bm90KC5jb21wbGV0ZSkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuLnRhc2s6bm90KC5jb21wbGV0ZSk6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbi50YXNrOm5vdCguY29tcGxldGUpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNlZWVlZWU7XG59XG4udGFzazpub3QoLmNvbXBsZXRlKTpob3ZlciAudGFzay1idXR0b25zIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi50YXNrLmNvbXBsZXRlZCAudGFzay10ZXh0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi50YXNrIC50YXNrLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4udGFzayAudGFzay1idXR0b25zIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbn1cblxuLmNpcmNsZS1hZGQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lbXB0eS1zdGF0ZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL21haW4tc3R5bGUuc2Nzcyc7XG5cbi50YXNrLW1hbmFnZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBtYXgtaGVpZ2h0OiA2ODBweDtcbn1cblxuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIHdpZHRoOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIHBhZGRpbmc6IDQycHg7XG5cbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xufVxuXG4udGFzay1saXN0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogNDJweDtcblxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcblxuXG4gICAgLnRvcC1iYXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5saXN0LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZsZXgtZ3JvdzogMTsgXG5cbiAgICAubGlzdC1tZW51LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pcy1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjhlZjtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAmOm5vdCguY29tcGxldGUpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICBcbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2VlZWVlZTtcblxuICAgICAgICAgICAgLnRhc2stYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgICYuY29tcGxldGVkIC50YXNrLXRleHQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH0gXG4gICBcblxuXG4gICAgLnRhc2stdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICAudGFzay1idXR0b25zIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgICB9XG59XG5cbi5jaXJjbGUtYWRkLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzVweDtcbiAgICByaWdodDogMzVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIFxufVxuXG4uZW1wdHktc3RhdGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.ts ***!
  \********************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");





let TaskViewComponent = class TaskViewComponent {
    constructor(taskService, route, router, authService) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            // console.log(params);
            if (params.listId) {
                this.selectedListId = params.listId;
                this.taskService.getTasks(params.listId).subscribe((tasks) => {
                    this.tasks = tasks;
                });
            }
            else {
                this.tasks = undefined;
            }
        });
        this.taskService.getLists().subscribe((lists) => {
            this.lists = lists;
        });
    }
    ontaskClick(task) {
        //when clicked set to complete
        this.taskService.complete(task).subscribe(() => {
            console.log("completed successfully");
            task.completed = !task.completed;
        });
    }
    onDeleteListClick() {
        this.taskService.deleteList(this.selectedListId).subscribe((res) => {
            this.router.navigate(['/lists']);
            console.log(res);
        });
    }
    onDeleteTaskClick(id) {
        this.taskService.deleteTask(this.selectedListId, id).subscribe((res) => {
            this.tasks = this.tasks.filter(val => val._id !== id);
            //this.router.navigate(['/lists']);
            console.log(res);
        });
    }
    onlogout() {
        this.authService.logOut();
    }
};
TaskViewComponent.ctorParameters = () => [
    { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
TaskViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-view',
        template: __webpack_require__(/*! raw-loader!./task-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/task-view/task-view.component.html"),
        styles: [__webpack_require__(/*! ./task-view.component.scss */ "./src/app/pages/task-view/task-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], TaskViewComponent);



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");



let TaskService = class TaskService {
    constructor(webRequestService) {
        this.webRequestService = webRequestService;
    }
    //list section
    createList(title) {
        return this.webRequestService.post('lists', { title });
    }
    getLists() {
        return this.webRequestService.get('lists');
    }
    updateList(id, title) {
        return this.webRequestService.patch(`lists/${id}`, { title });
    }
    getTasks(listId) {
        return this.webRequestService.get(`lists/${listId}/tasks`);
    }
    ///tasks section
    createTask(title, listId) {
        return this.webRequestService.post(`lists/${listId}/tasks`, { title });
    }
    deleteList(id) {
        return this.webRequestService.delete(`lists/${id}`);
    }
    updateTask(listId, taskId, title) {
        return this.webRequestService.patch(`lists/${listId}/tasks/${taskId}`, { title });
    }
    deleteTask(listId, taskId) {
        return this.webRequestService.delete(`lists/${listId}/tasks/${taskId}`);
    }
    complete(task) {
        return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed });
    }
};
TaskService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]])
], TaskService);



/***/ }),

/***/ "./src/app/web-req.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/web-req.interceptor.ts ***!
  \****************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WebReqInterceptor = class WebReqInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    intercept(request, next) {
        //handle the request
        request = this.AddAuthHeader(request);
        //call next and handle response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log(error);
            if (error.status === 401 && !this.refreshingAccessToken) {
                //401 so we are unauthorised
                console.log('err');
                //refrsh access token
                return this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
                    request = this.AddAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                    console.log(err);
                    this.authService.logOut();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                this.accessTokenRefreshed.subscribe(() => {
                    //this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            //we want to call a method in authservice to send a request to refresh access token
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
                console.log('Access token refreshed');
                this.refreshingAccessToken = false;
                this.accessTokenRefreshed.next();
            }));
        }
    }
    AddAuthHeader(request) {
        //get the access token
        const token = this.authService.getAccesstoken();
        if (token) {
            //append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    }
};
WebReqInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
WebReqInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], WebReqInterceptor);



/***/ }),

/***/ "./src/app/web-request.service.ts":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WebRequestService = class WebRequestService {
    constructor(http) {
        this.http = http;
        //this.ROOT_URL = 'http://localhost:4000';
    }
    get(uri) {
        console.log(uri);
        return this.http.get(`${uri}`);
    }
    post(uri, payload) {
        return this.http.post(`${uri}`, payload);
    }
    patch(uri, payload) {
        return this.http.patch(`${uri}`, payload);
    }
    delete(uri) {
        return this.http.delete(`${uri}`);
    }
    login(email, password) {
        return this.http.post(`users/login`, {
            email,
            password
        }, { observe: 'response' });
    }
    signup(email, password) {
        return this.http.post(`users`, {
            email,
            password
        }, { observe: 'response' });
    }
};
WebRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], WebRequestService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/dasan/Data/Work/TaskManager/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map