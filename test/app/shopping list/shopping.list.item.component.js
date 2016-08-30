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
var ShoppingListItemComponent = (function () {
    function ShoppingListItemComponent(_ShoppingListService) {
        this._ShoppingListService = _ShoppingListService;
        this.itemDeleted = new core_1.EventEmitter();
        this.itemClosed = new core_1.EventEmitter();
    }
    ShoppingListItemComponent.prototype.DeleteItem = function () {
        this._ShoppingListService.deleteItem(this.selectedItem);
        this.itemDeleted.emit(this.selectedItem);
    };
    ShoppingListItemComponent.prototype.CloseItem = function () {
        this.itemClosed.emit({});
    };
    ShoppingListItemComponent = __decorate([
        core_1.Component({
            selector: "shopping-list-item",
            template: "\n                   <label for=\"name\">Name</label>\n                   <input type=\"text\" id=\"name\" [(ngModel)]=\"selectedItem.name\" (keyup)=\"0\">\n\n                   <label for=\"amount\">Amount</label>\n                   <input type=\"text\" id=\"amount\" [(ngModel)]=\"selectedItem.amount\" (keyup)=\"0\">\n                   \n                   <button  (click)=\"DeleteItem()\">Delete</button>\n                   <button  (click)=\"CloseItem()\">Close</button>\n    ",
            outputs: ['itemDeleted', 'itemClosed'],
            inputs: ['selectedItem']
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], ShoppingListItemComponent);
    return ShoppingListItemComponent;
}());
exports.ShoppingListItemComponent = ShoppingListItemComponent;
//# sourceMappingURL=shopping.list.item.component.js.map