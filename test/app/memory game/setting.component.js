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
var SettingComponent = (function () {
    function SettingComponent() {
        this.gameStartClicked = new core_1.EventEmitter();
        this.gameProperties = { dimension: 1, type: 1 };
    }
    SettingComponent.prototype.onStartGameClick = function () {
        this.gameStartClicked.emit(this.gameProperties);
    };
    SettingComponent.prototype.onTypeChange = function (typevalue) {
        this.gameProperties.type = typevalue;
    };
    SettingComponent.prototype.onDimensionChange = function (dimensionValue) {
        this.gameProperties.dimension = dimensionValue;
    };
    SettingComponent = __decorate([
        core_1.Component({
            selector: "setting",
            template: "<div class=\"mgMainBoard\">\n                  <div class=\"mgTitle\">Memory Game !</div><br>\n                  <div>\n                     <label class=\"settingLabel\">Dimension</label>\n                     <select class=\"form-control settingParamSelect\" [ngModel]=\"gameProperties.dimension\" (change)=\"onDimensionChange($event.target.value)\">\n                       <option value=\"1\">3x4</option>\n                       <option value=\"2\">4x5</option>\n                     </select>\n                  </div>\n                  <div>\n                     <label class=\"settingLabel\">Type</label>\n                     <select class=\"form-control settingParamSelect\" [ngModel]=\"gameProperties.type\" (change)=\"onTypeChange($event.target.value)\">\n                       <option value=\"1\">Numbers</option>\n                       <option value=\"2\">Letters</option>\n                       <option value=\"3\">Pictures</option>\n                     </select>\n                  </div>\n                  <br>\n                  <div class=\"settingFooter\">\n                    <button class=\"settingBtn btn btn-mg\" type=\"button\" (click)=\"onStartGameClick()\">Start</button>\n                  </div>\n             </div>",
            outputs: ['gameStartClicked'],
        }), 
        __metadata('design:paramtypes', [])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=setting.component.js.map