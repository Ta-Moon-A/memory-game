import {Component} from "@angular/core";
import {FormBuilder} from "@angular/common";
import {OnInit} from "@angular/core";
import {ControlGroup} from "@angular/common";
import {Validators} from "@angular/common";
import {Control} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: "data-driven-form",
    template: ` <div>
                  <h2>Data Driven Form Demo</h2><br>
                  <form (ngSubmit)="onSubmit()" [ngFormModel]="myForm" [ngClass]="{signUpForm : true}">
                          <div>
                             <label for="email">Email</label>
                             <input [ngFormControl]="myForm.controls['email']" type="text" id="email" #email="ngForm"  required>
                             <span  [ngClass]="{validationError: true}" *ngIf="!email.valid">Not valid!</span>
                          </div>
                          <div>
                             <label for="password">Password</label>
                             <input [ngFormControl]="myForm.controls['password']" type="text" id="password" #password="ngForm" required>
                             <span  [ngClass]="{validationError: true}" *ngIf="!password.valid">Not valid!</span>
                          </div>
                          <div>
                             <label for="confirmPassword">Confirm password</label>
                             <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirmPassword" #confirmPassword="ngForm" required>
                             <span  [ngClass]="{validationError: true}" *ngIf="!confirmPassword.valid">Not valid!</span>
                          </div>
                          <button type="submit" [disabled]="(!myForm.valid || password.value !== confirmPassword.value)">Submit</button>
                   </form>
                  <div>
                    <br>
                    <label>Submitted User Info</label><br>
                    Email: <span>{{user.email}}</span><br>
                    Password: <span>{{user.password}}</span>
                  </div>
                  <br><br>
                    <button (click)="onRedirectClick()">To Template Driven Form</button>
                       
              </div>`
})

export class DataDrivenFormComponent implements OnInit {
    user = { email: '', password: '' };
    myForm: ControlGroup;

    constructor(private _formBuilder: FormBuilder, private _router: Router) { }

    onSubmit(form) {
        this.user = this.myForm.value;
    }

    ngOnInit(): any {
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.compose([
                Validators.required,

            ])],
            'password': ['', Validators.compose([
                Validators.required,
                hasNumbers])
            ],
            'confirmPassword': ['', Validators.required],
        });

    }

    onRedirectClick() {
        this._router.navigate(['/TemplateDrivenForm']);
    }
}


function hasNumbers(control: Control): { [s: string]: boolean } {
    if (!control.value.match('\\d+')) {
        return { 'noNumbers': true };
    }

}

function isEmail(control: Control): { [s: string]: boolean } {
    if (!control.value.match('')) {
        return { 'isEmail': true };
    }

}