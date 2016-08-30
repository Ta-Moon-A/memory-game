import {Component, EventEmitter} from "@angular/core";
import {CardComponent} from "./card.component";
import {GameProperties} from "./gameProp";

import {CardItem} from "./cardItem";
import {CardType} from "./cardItem";

import {SharedService} from "./sharedService";
import {OnInit} from "@angular/core";



@Component({
    selector: "card-list",
    template:

    `<div class="mgMainBoard">
          <div class="mgTitle">Memory Game !</div><br>
          <div>
             <ul style="list-style-type:none">  
                  <li *ngFor="let card of cardList">
                    <div class="col-xs-3" >
                        <card-item [selectedCard]="card" (cardClicked)="onCardClicked($event)"></card-item>
                    </div>
                  </li>
            </ul>
          </div>
          
          <div class="mgFooter col-md-12">
            <div class="center">
             <button class="leftBtn btn btn-mg" type="button" (click)="onSettingClicked()">Setting</button>
             <span [ngClass]="{ mgSolved : gameSolved }">Timer : {{timer}} </span>
             <span [ngClass]="{ mgSolved : !gameSolved }">Well Done! ({{gameSolvedTime}} second)</span>
             <button class="rightBtn btn btn-mg" type="button" (click)="onResetClicked()">Reset</button>
            </div> 
          </div>

     </div>
    `,
    directives: [CardComponent],
    providers: [SharedService],
    outputs: ['settingClicked'],
    inputs: ['gameProperties']

})

export class CardListComponent implements OnInit {
    timer: number = 0;
    gameSolved: boolean = false;
    gameSolvedTime: number;
    cardList: Array<CardItem> = new Array<CardItem>();
    refreshIntervalId: any;
    refreshTimeoutlId: any;
    settingClicked = new EventEmitter<boolean>();
    gameProperties: GameProperties;

    constructor(private _SharedService: SharedService) { }


    ngOnInit(): any {
        console.log(this.gameProperties.dimension + ' ' + this.gameProperties.type);
        this.cardInitiate();
    }

    onCardClicked(cardInfo: boolean) {

        var opened = new Array<CardItem>();
        var closed = new Array<CardItem>();
        var nonSolved = 0;


        this.cardList.forEach((card) => {
            (card.isOpen && !card.isSolved) ? opened.push(card) : closed.push(card);
        });

        setTimeout(() => {
            if (opened.length > 1) {
                if (opened[0].cardPoint == opened[1].cardPoint) {
                    opened[0].isSolved = true;
                    opened[1].isSolved = true;
                }
                else {
                    opened[0].isOpen = false;
                    opened[1].isOpen = false;
                }
            }

            this.cardList.forEach((card) => {
                if (!card.isSolved) { nonSolved++; }
            });

            if (nonSolved < 2) {
                this.gameSolved = true;
                this.gameSolvedTime = this.timer;
            }
        }, 500);
    }

    onResetClicked() {
        this.cardList = [];
        this.timer = 0;
        this.gameSolved = false;
        this.gameSolvedTime = 0;
        clearInterval(this.refreshIntervalId);
        clearTimeout(this.refreshTimeoutlId);

        this.cardInitiate();
    }

    onSettingClicked() {
        this.settingClicked.emit();
    }

    cardInitiate() {
        var cardSybmols = this._SharedService.getCardSymbols(this.gameProperties);

        for (var i = 0; i < this._SharedService.getGameDimension(this.gameProperties); i++) {
            this.cardList.push({
                cardNumber: i,
                isOpen: true,
                isSolved: false,
                cardPoint: cardSybmols[i],
                cardType: (this.gameProperties.type == 3 ? CardType.picture : CardType.symbol)
            })
        }

        this.refreshIntervalId = setInterval(() => {
            this.timer++;
        }, 1000);

        this.refreshTimeoutlId = setTimeout(() => {
            this.cardList.forEach((card) => {
                card.isOpen = false;
            });
        }, 5000);

    }


}