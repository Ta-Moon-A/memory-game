"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TemplateDrivenFormComponent = (function () {
    function TemplateDrivenFormComponent(_router) {
        this._router = _router;
        this.user = { email: '', password: '' };
    }
    TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
        this.user.email = form.value['email'];
        this.user.password = form.value['password'];
    };
    TemplateDrivenFormComponent.prototype.onRedirectClick = function () {
        this._router.navigate(['/DataDrivenForm']);
    };
    TemplateDrivenFormComponent = __decorate([
        core_1.Component({
            selector: "template-driven-form",
            template: " <div>\n                  <h2>Template Driven Form Demo</h2><br>\n                  <form (ngSubmit)=\"onSubmit(f)\" [ngClass]=\"{signUpForm : true}\" #f=\"ngForm\">\n                          <div>\n                             <label for=\"email\">Email</label>\n                             <input ngControl=\"email\" type=\"text\" id=\"email\"  #email=\"ngForm\" required>\n                             <span *ngIf=\"!email.valid\" [ngClass]=\"{validationError: true}\">Not valid!</span>\n                          </div>\n                          <div>\n                             <label for=\"password\">Password</label>\n                             <input ngControl=\"password\" type=\"text\" id=\"password\" #password=\"ngForm\" required>\n                             <span *ngIf=\"!password.valid\" [ngClass]=\"{validationError: true}\">Not valid!</span>\n                          </div>\n                          <div>\n                             <label for=\"confirmPassword\">Confirm password</label>\n                             <input ngControl=\"confirmPassword\" type=\"text\" id=\"confirmPassword\" #confirmPassword=\"ngForm\" required>\n                             <span *ngIf=\"!confirmPassword.valid\" [ngClass]=\"{validationError: true}\">Not valid!</span>\n                          </div>\n                          <button type=\"submit\" [disabled]=\"(!f.valid || password.value !== confirmPassword.value)\">Submit</button>\n                   </form>\n                  <div>\n                    <br>\n                    <label>Submitted User Info</label><br>\n                    Email: <span>{{user.email}}</span><br>\n                    Password: <span>{{user.password}}</span>\n                  </div>\n                    <br><br>\n                    <button (click)=\"onRedirectClick()\">To Data Driven Form</button>\n              </div>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TemplateDrivenFormComponent);
    return TemplateDrivenFormComponent;
}());
exports.TemplateDrivenFormComponent = TemplateDrivenFormComponent;
//# sourceMappingURL=template-driven-form.component.js.map