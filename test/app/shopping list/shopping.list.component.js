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
var shopping_list_new_item_component_1 = require("./shopping.list.new.item.component");
var shopping_list_item_component_1 = require("./shopping.list.item.component");
var shopping_list_service_1 = require("./shopping.list.service");
var ShoppingListComponent = (function () {
    function ShoppingListComponent(_ShoppingListService) {
        this._ShoppingListService = _ShoppingListService;
    }
    ShoppingListComponent.prototype.onItemAdded = function (itemInfo) {
        this.selectedItem = null;
    };
    ShoppingListComponent.prototype.onItemSelect = function (selectedItem) {
        this.selectedItem = selectedItem;
    };
    ShoppingListComponent.prototype.onItemDeleted = function (itemInfo) {
        this.selectedItem = null;
    };
    ShoppingListComponent.prototype.onItemClosed = function () {
        this.selectedItem = null;
    };
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.itemList = this._ShoppingListService.getData();
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: "shopping-list",
            template: " <section [ngClass]=\"{shoppingSection : true}\">\n                       <div>\n                            <new-item (itemAdded)=\"onItemAdded($event)\"></new-item>\n                       </div>\n                       <hr>\n                       <div>\n                               <label> Item List</label>\n                               <ul>\n                                    <li *ngFor=\"let item of itemList\" (click)=\"onItemSelect(item)\">\n                                        {{item.name }} - {{item.amount }}\n                                   </li>\n                              </ul>  \n                       </div>\n                       \n                       <div *ngIf=\"selectedItem != null\">\n                               <hr>\n                               <label>Edit Item</label><br>\n                               <shopping-list-item   [selectedItem]=\"selectedItem\" (itemDeleted)=\"onItemDeleted($event)\" (itemClosed)=\"onItemClosed()\"></shopping-list-item>\n                       </div>\n                  </section>",
            directives: [shopping_list_new_item_component_1.NewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
            providers: [shopping_list_service_1.ShoppingListService]
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping.list.component.js.map