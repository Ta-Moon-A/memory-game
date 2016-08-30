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
var DetailComponent = (function () {
    function DetailComponent() {
        this.MyInfo = { name: '', age: '' };
        this.IsFilled = false;
        this.IsValid = false;
        this.submitted = new core_1.EventEmitter();
    }
    DetailComponent.prototype.onKeyup = function () {
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
    DetailComponent.prototype.onSubmit = function () {
        this.submitted.emit(this.MyInfo);
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: "detail-info",
            template: "<section [ngClass]=\"{section1:true}\">\n                   <h2>Enter your details, please</h2>\n                   <div>\n                       <label>Your Name</label> \n                       <input type=\"text\" [(ngModel)]=\"MyInfo.name\"  (keyup)=\"onKeyup()\">\n                       <br>\n                   </div>\n                   <div>\n                       <label>Your Age</label> \n                       <input type=\"text\" [(ngModel)]=\"MyInfo.age\"  (keyup)=\"onKeyup()\">\n                       <br><br>\n                   </div>\n                   <div>\n                      <label>Filled out: {{IsFilled ? 'Yes' : 'No'}}</label> \n                    </div>\n                   <div>\n                      <label>Valid: {{IsValid  ? 'Yes' : 'No'}}</label> \n                   </div>\n                   <div>\n                      <button [disabled]=\"!IsValid\" (click)=\"onSubmit()\">Submit</button>\n                      <br><br>\n                   </div>\n               </section>\n             ",
            inputs: ['MyInfo'],
            outputs: ['submitted']
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map