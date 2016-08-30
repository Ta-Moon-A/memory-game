import {Component, EventEmitter} from "@angular/core";

@Component({
    selector: "detail-confirm",
    template:
    `<section [ngClass]="{section2:true}">
                    <div>
                            <h2>You submitted the following details. Is this correct? </h2>
                            <p> 
                              <span>your name is <span [ngClass]="{name:true}">{{MyInfo.name}}</span> and you are  <span [ngClass]="{name:true}">{{MyInfo.age}}</span> old.
                              If you made any changes please click on confirm...:)</span>
                            </p>
                    </div>
                    <div>
                        <label>Your Name</label>
                        <input type="text" [(ngModel)] = "MyInfo.name" (keyup)="onKeyup()">
                        <br>
                    </div>

                    <div>
                        <label>Your Age</label> 
                        <input type= "text" [(ngModel)] = "MyInfo.age" (keyup)="onKeyup()">
                       <br><br>
                    </div>
                     <div>
                        <label>Filled out: {{IsFilled? 'Yes' : 'No'}}</label> 
                    </div>

                    <div>
                       <label>Valid: {{IsValid? 'Yes' : 'No'}}</label> 
                    </div>
                    
                    <div>
                    <button [disabled]="!IsValid" (click)="onConfirm()">Confirm</button>
                    <br><br>
                    </div>

                </section>

             `,
    inputs: ['MyInfo'],
    outputs: ['confirmed']
})

export class DetailConfirmComponent {
    MyInfo = { name: '', age: '' }
    IsFilled = false;
    IsValid = false;
    confirmed = new EventEmitter<{ name: string, age: string }>();

    onKeyup() {

        if (this.MyInfo.name !== '' && this.MyInfo.age !== '') {
            this.IsFilled = true;
        }
        else {
            this.IsFilled = false;
        }

        if (/^\d+$/.test(this.MyInfo.age)) {
            this.IsValid = true;
        }
        else {
            this.IsValid = false;
        }
    }

    onConfirm() {
        this.confirmed.emit(this.MyInfo);
    }
}