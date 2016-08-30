import {Component} from "@angular/core";
import {NewItemComponent } from "./shopping.list.new.item.component";
import {ShoppingListItemComponent } from "./shopping.list.item.component";
import {ListItem} from "./listItem";
import {ShoppingListService} from "./shopping.list.service";
import {OnInit} from "@angular/core";


@Component({
    selector: "shopping-list",
    template: ` <section [ngClass]="{shoppingSection : true}">
                       <div>
                            <new-item (itemAdded)="onItemAdded($event)"></new-item>
                       </div>
                       <hr>
                       <div>
                               <label> Item List</label>
                               <ul>
                                    <li *ngFor="let item of itemList" (click)="onItemSelect(item)">
                                        {{item.name }} - {{item.amount }}
                                   </li>
                              </ul>  
                       </div>
                       
                       <div *ngIf="selectedItem != null">
                               <hr>
                               <label>Edit Item</label><br>
                               <shopping-list-item   [selectedItem]="selectedItem" (itemDeleted)="onItemDeleted($event)" (itemClosed)="onItemClosed()"></shopping-list-item>
                       </div>
                  </section>`,
    directives: [NewItemComponent, ShoppingListItemComponent],
    providers: [ShoppingListService]
})

export class ShoppingListComponent implements OnInit {

    itemList: Array<ListItem>;
    selectedItem: ListItem;

    constructor(private _ShoppingListService: ShoppingListService) { }

    onItemAdded(itemInfo: ListItem) {
        this.selectedItem = null;
    }

    onItemSelect(selectedItem: ListItem) {
        this.selectedItem = selectedItem;
    }

    onItemDeleted(itemInfo: ListItem) {
        this.selectedItem = null;
    }

    onItemClosed() {
        this.selectedItem = null;
    }


    ngOnInit(): any {
        this.itemList = this._ShoppingListService.getData();
    }
}



