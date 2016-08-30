import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: "my-puzzle",
    templateUrl: "../templates/puzzle.html"

})

export class PuzzleComponent implements OnInit {

    Switch1Number: number;
    Switch2Number: number;
    Switch3Number: number;
    Switch4Number: number;
    name: string;

    ngOnInit(): any {
        this.Switch1Number = Math.round(Math.random());
        this.Switch2Number = Math.round(Math.random());
        this.Switch3Number = Math.round(Math.random());
        this.Switch4Number = Math.round(Math.random());

        console.log(this.Switch1Number,
            this.Switch2Number,
            this.Switch3Number,
            this.Switch4Number);
    }
}