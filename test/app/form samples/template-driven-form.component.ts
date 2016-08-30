import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "template-driven-form",
    template: ` <div>
                  <h2>Template Driven Form Demo</h2><br>
                  <form (ngSubmit)="onSubmit(f)" [ngClass]="{signUpForm : true}" #f="ngForm">
                          <div>
                             <label for="email">Email</label>
                             <input ngControl="email" type="text" id="email"  #email="ngForm" required>
                             <span *ngIf="!email.valid" [ngClass]="{validationError: true}">Not valid!</span>
                          </div>
                          <div>
                             <label for="password">Password</label>
                             <input ngControl="password" type="text" id="password" #password="ngForm" required>
                             <span *ngIf="!password.valid" [ngClass]="{validationError: true}">Not valid!</span>
                          </div>
                          <div>
                             <label for="confirmPassword">Confirm password</label>
                             <input ngControl="confirmPassword" type="text" id="confirmPassword" #confirmPassword="ngForm" required>
                             <span *ngIf="!confirmPassword.valid" [ngClass]="{validationError: true}">Not valid!</span>
                          </div>
                          <button type="submit" [disabled]="(!f.valid || password.value !== confirmPassword.value)">Submit</button>
                   </form>
                  <div>
                    <br>
                    <label>Submitted User Info</label><br>
                    Email: <span>{{user.email}}</span><br>
                    Password: <span>{{user.password}}</span>
                  </div>
                    <br><br>
                    <button (click)="onRedirectClick()">To Data Driven Form</button>
              </div>`
})

export class TemplateDrivenFormComponent {
    user = { email: '', password: '' };

    constructor(private _router: Router) { }

    onSubmit(form) {
        this.user.email = form.value['email'];
        this.user.password = form.value['password'];
    }

    onRedirectClick() {
        this._router.navigate(['/DataDrivenForm']);
    }
}
