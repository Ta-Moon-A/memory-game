import {Component, EventEmitter} from "@angular/core";

@Component({
    selector: "detail-info",
    template:
    `<section [ngClass]="{section1:true}">
                   <h2>Enter your details, please</h2>
                   <div>
                       <label>Your Name</label> 
                       <input type="text" [(ngModel)]="MyInfo.name"  (keyup)="onKeyup()">
                       <br>
                   </div>
                   <div>
                       <label>Your Age</label> 
                       <input type="text" [(ngModel)]="MyInfo.age"  (keyup)="onKeyup()">
                       <br><br>
                   </div>
                   <div>
                      <label>Filled out: {{IsFilled ? 'Yes' : 'No'}}</label> 
                    </div>
                   <div>
                      <label>Valid: {{IsValid  ? 'Yes' : 'No'}}</label> 
                   </div>
                   <div>
                      <button [disabled]="!IsValid" (click)="onSubmit()">Submit</button>
                      <br><br>
                   </div>
               </section>
             `,
    inputs: ['MyInfo'],
    outputs: ['submitted']
})

export class DetailComponent {
    MyInfo = { name: '', age: '' }
    IsFilled = false;
    IsValid = false;
    submitted = new EventEmitter<{ name: string, age: string }>();

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

    onSubmit() {
        this.submitted.emit(this.MyInfo);
    }
}