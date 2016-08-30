import {Component} from "@angular/core";
import { DetailComponent } from "./detail.component";
import { DetailConfirmComponent } from "./detail.confirm.component";

@Component({
    selector: "main-detail",
    template: ` <detail-info (submitted)="onsubmit($event)" [MyInfo]="MyConfirmedInfo"></detail-info>
                <br><br>
                <detail-confirm (confirmed)="onconfirm($event)" [MyInfo]="MyInfo"></detail-confirm>`,
    directives: [DetailComponent, DetailConfirmComponent]


})

export class MainDetailComponent {

    MyInfo = { name: '', age: '' }
    MyConfirmedInfo = { name: '', age: '' }

    onsubmit(myInfo: { name: string, age: string }) {
        this.MyInfo = myInfo;
    }

    onconfirm(myConfirmedInfo: { name: string, age: string }) {
        this.MyConfirmedInfo = myConfirmedInfo;
    }

}