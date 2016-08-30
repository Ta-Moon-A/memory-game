import {Component, EventEmitter} from "@angular/core";
import {ListItem} from "./listItem";
import {ShoppingListService} from "./shopping.list.service";

@Component({
    selector: "shopping-list-item",
    template: `
                   <label for="name">Name</label>
                   <input type="text" id="name" [(ngModel)]="selectedItem.name" (keyup)="0">

                   <label for="amount">Amount</label>
                   <input type="text" id="amount" [(ngModel)]="selectedItem.amount" (keyup)="0">
                   
                   <button  (click)="DeleteItem()">Delete</button>
                   <button  (click)="CloseItem()">Close</button>
    `,
    outputs: ['itemDeleted', 'itemClosed'],
    inputs: ['selectedItem']
})

export class ShoppingListItemComponent {
    selectedItem: ListItem;
    itemDeleted = new EventEmitter<ListItem>();
    itemClosed = new EventEmitter();

    constructor(private _ShoppingListService: ShoppingListService) { }


    DeleteItem() {
        this._ShoppingListService.deleteItem(this.selectedItem);
        this.itemDeleted.emit(this.selectedItem);
    }

    CloseItem() {
        this.itemClosed.emit({});
    }

}
