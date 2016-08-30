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
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
var router_1 = require("@angular/router");
var DataDrivenFormComponent = (function () {
    function DataDrivenFormComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.user = { email: '', password: '' };
    }
    DataDrivenFormComponent.prototype.onSubmit = function (form) {
        this.user = this.myForm.value;
    };
    DataDrivenFormComponent.prototype.ngOnInit = function () {
        this.myForm = this._formBuilder.group({
            'email': ['', common_2.Validators.compose([
                    common_2.Validators.required,
                ])],
            'password': ['', common_2.Validators.compose([
                    common_2.Validators.required,
                    hasNumbers])
            ],
            'confirmPassword': ['', common_2.Validators.required],
        });
    };
    DataDrivenFormComponent.prototype.onRedirectClick = function () {
        this._router.navigate(['/TemplateDrivenForm']);
    };
    DataDrivenFormComponent = __decorate([
        core_1.Component({
            selector: "data-driven-form",
            template: " <div>\n                  <h2>Data Driven Form Demo</h2><br>\n                  <form (ngSubmit)=\"onSubmit()\" [ngFormModel]=\"myForm\" [ngClass]=\"{signUpForm : true}\">\n                          <div>\n                             <label for=\"email\">Email</label>\n                             <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"email\" #email=\"ngForm\"  required>\n                             <span  [ngClass]=\"{validationError: true}\" *ngIf=\"!email.valid\">Not valid!</span>\n                          </div>\n                          <div>\n                             <label for=\"password\">Password</label>\n                             <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\" #password=\"ngForm\" required>\n                             <span  [ngClass]=\"{validationError: true}\" *ngIf=\"!password.valid\">Not valid!</span>\n                          </div>\n                          <div>\n                             <label for=\"confirmPassword\">Confirm password</label>\n                             <input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirmPassword\" #confirmPassword=\"ngForm\" required>\n                             <span  [ngClass]=\"{validationError: true}\" *ngIf=\"!confirmPassword.valid\">Not valid!</span>\n                          </div>\n                          <button type=\"submit\" [disabled]=\"(!myForm.valid || password.value !== confirmPassword.value)\">Submit</button>\n                   </form>\n                  <div>\n                    <br>\n                    <label>Submitted User Info</label><br>\n                    Email: <span>{{user.email}}</span><br>\n                    Password: <span>{{user.password}}</span>\n                  </div>\n                  <br><br>\n                    <button (click)=\"onRedirectClick()\">To Template Driven Form</button>\n                       \n              </div>"
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router])
    ], DataDrivenFormComponent);
    return DataDrivenFormComponent;
}());
exports.DataDrivenFormComponent = DataDrivenFormComponent;
function hasNumbers(control) {
    if (!control.value.match('\\d+')) {
        return { 'noNumbers': true };
    }
}
function isEmail(control) {
    if (!control.value.match('')) {
        return { 'isEmail': true };
    }
}
//# sourceMappingURL=data-driven-form.component.js.map