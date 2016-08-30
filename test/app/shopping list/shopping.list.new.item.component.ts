import {Component, EventEmitter, OnInit} from "@angular/core";
import {ListItem} from "./listItem";
import {ShoppingListService} from "./shopping.list.service";
import {ControlGroup, FormBuilder, Validators, Control, FORM_DIRECTIVES} from "@angular/common";


@Component({
    selector: "new-item",
    template: ` <div>
                   <form [ngFormControl]="myForm" (ngSubmit)="addItem()">
                       <label for="name">Name</label>
                       <input type="text" id="name" [ngFormControl]="myForm.controls['name']">

                       <label for="amount">Amount</label>
                       <input type="text" id="amount" [ngFormControl]="myForm.controls['amount']">
                   
                       <button type="submit" [disabled]="!myForm.valid">Add Item</button>
                    </form>
                </div>
                    `,
    outputs: ['itemAdded'],
    directives: [FORM_DIRECTIVES]
})

export class NewItemComponent implements OnInit {
    itemInfo = { name: '', amount: 0 };
    itemAdded = new EventEmitter<ListItem>();
    myForm: ControlGroup;

    constructor(private _ShoppingListService: ShoppingListService, private _formBuilder: FormBuilder) { }

    addItem() {
        this.itemInfo = this.myForm.value;
        this._ShoppingListService.insertItem(this.itemInfo);
        this.itemAdded.emit(this.itemInfo);
    }

    ngOnInit() {
        this.myForm = this._formBuilder.group({
            'name': ['', Validators.required],
            'amount': [0, Validators.compose([
                Validators.required,
                greaterThenZero
            ])],
        });
    }

}

function greaterThenZero(control: Control): { [s: string]: boolean } {
    if (control.value <= 0) {
        return { "isGreaterThenZero": true };
    }
}
