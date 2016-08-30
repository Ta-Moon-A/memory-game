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
var detail_component_1 = require("./detail.component");
var detail_confirm_component_1 = require("./detail.confirm.component");
var MainDetailComponent = (function () {
    function MainDetailComponent() {
        this.MyInfo = { name: '', age: '' };
        this.MyConfirmedInfo = { name: '', age: '' };
    }
    MainDetailComponent.prototype.onsubmit = function (myInfo) {
        this.MyInfo = myInfo;
    };
    MainDetailComponent.prototype.onconfirm = function (myConfirmedInfo) {
        this.MyConfirmedInfo = myConfirmedInfo;
    };
    MainDetailComponent = __decorate([
        core_1.Component({
            selector: "main-detail",
            template: " <detail-info (submitted)=\"onsubmit($event)\" [MyInfo]=\"MyConfirmedInfo\"></detail-info>\n                <br><br>\n                <detail-confirm (confirmed)=\"onconfirm($event)\" [MyInfo]=\"MyInfo\"></detail-confirm>",
            directives: [detail_component_1.DetailComponent, detail_confirm_component_1.DetailConfirmComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainDetailComponent);
    return MainDetailComponent;
}());
exports.MainDetailComponent = MainDetailComponent;
//# sourceMappingURL=main.detail.component.js.map