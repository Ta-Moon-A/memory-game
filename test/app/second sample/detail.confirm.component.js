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
var DetailConfirmComponent = (function () {
    function DetailConfirmComponent() {
        this.MyInfo = { name: '', age: '' };
        this.IsFilled = false;
        this.IsValid = false;
        this.confirmed = new core_1.EventEmitter();
    }
    DetailConfirmComponent.prototype.onKeyup = function () {
        if (this.MyInfo.name !== '' && this.MyInfo.age !== '') {
            this.IsFilled = true;
        }
        else {
            this.IsFilled = false;
        }
        if (/^\d+$/.test(this.MyInfo.age)) {
            this.IsValid = true;
        }
        else {
            this.IsValid = false;
        }
    };
    DetailConfirmComponent.prototype.onConfirm = function () {
        this.confirmed.emit(this.MyInfo);
    };
    DetailConfirmComponent = __decorate([
        core_1.Component({
            selector: "detail-confirm",
            template: "<section [ngClass]=\"{section2:true}\">\n                    <div>\n                            <h2>You submitted the following details. Is this correct? </h2>\n                            <p> \n                              <span>your name is <span [ngClass]=\"{name:true}\">{{MyInfo.name}}</span> and you are  <span [ngClass]=\"{name:true}\">{{MyInfo.age}}</span> old.\n                              If you made any changes please click on confirm...:)</span>\n                            </p>\n                    </div>\n                    <div>\n                        <label>Your Name</label>\n                        <input type=\"text\" [(ngModel)] = \"MyInfo.name\" (keyup)=\"onKeyup()\">\n                        <br>\n                    </div>\n\n                    <div>\n                        <label>Your Age</label> \n                        <input type= \"text\" [(ngModel)] = \"MyInfo.age\" (keyup)=\"onKeyup()\">\n                       <br><br>\n                    </div>\n                     <div>\n                        <label>Filled out: {{IsFilled? 'Yes' : 'No'}}</label> \n                    </div>\n\n                    <div>\n                       <label>Valid: {{IsValid? 'Yes' : 'No'}}</label> \n                    </div>\n                    \n                    <div>\n                    <button [disabled]=\"!IsValid\" (click)=\"onConfirm()\">Confirm</button>\n                    <br><br>\n                    </div>\n\n                </section>\n\n             ",
            inputs: ['MyInfo'],
            outputs: ['confirmed']
        }), 
        __metadata('design:paramtypes', [])
    ], DetailConfirmComponent);
    return DetailConfirmComponent;
}());
exports.DetailConfirmComponent = DetailConfirmComponent;
//# sourceMappingURL=detail.confirm.component.js.map