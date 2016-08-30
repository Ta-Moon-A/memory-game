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
var shopping_list_test_data_1 = require("./shopping.list.test.data");
var ShoppingListService = (function () {
    function ShoppingListService() {
    }
    ShoppingListService.prototype.getData = function () {
        return shopping_list_test_data_1.shoppingTestDataList;
    };
    ShoppingListService.prototype.insertItem = function (item) {
        shopping_list_test_data_1.shoppingTestDataList.push({ name: item.name, amount: item.amount });
    };
    ShoppingListService.prototype.deleteItem = function (item) {
        shopping_list_test_data_1.shoppingTestDataList.splice(shopping_list_test_data_1.shoppingTestDataList.indexOf(item), 1);
    };
    ShoppingListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShoppingListService);
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping.list.service.js.map