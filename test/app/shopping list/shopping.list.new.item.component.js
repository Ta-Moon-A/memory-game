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
var shopping_list_service_1 = require("./shopping.list.service");
var common_1 = require("@angular/common");
var NewItemComponent = (function () {
    function NewItemComponent(_ShoppingListService, _formBuilder) {
        this._ShoppingListService = _ShoppingListService;
        this._formBuilder = _formBuilder;
        this.itemInfo = { name: '', amount: 0 };
        this.itemAdded = new core_1.EventEmitter();
    }
    NewItemComponent.prototype.addItem = function () {
        this.itemInfo = this.myForm.value;
        this._ShoppingListService.insertItem(this.itemInfo);
        this.itemAdded.emit(this.itemInfo);
    };
    NewItemComponent.prototype.ngOnInit = function () {
        this.myForm = this._formBuilder.group({
            'name': ['', common_1.Validators.required],
            'amount': [0, common_1.Validators.compose([
                    common_1.Validators.required,
                    greaterThenZero
                ])],
        });
    };
    NewItemComponent = __decorate([
        core_1.Component({
            selector: "new-item",
            template: " <div>\n                   <form [ngFormControl]=\"myForm\" (ngSubmit)=\"addItem()\">\n                       <label for=\"name\">Name</label>\n                       <input type=\"text\" id=\"name\" [ngFormControl]=\"myForm.controls['name']\">\n\n                       <label for=\"amount\">Amount</label>\n                       <input type=\"text\" id=\"amount\" [ngFormControl]=\"myForm.controls['amount']\">\n                   \n                       <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Item</button>\n                    </form>\n                </div>\n                    ",
            outputs: ['itemAdded'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
    ], NewItemComponent);
    return NewItemComponent;
}());
exports.NewItemComponent = NewItemComponent;
function greaterThenZero(control) {
    if (control.value <= 0) {
        return { "isGreaterThenZero": true };
    }
}
//# sourceMappingURL=shopping.list.new.item.component.js.map