import {Component, EventEmitter, ElementRef, Renderer, OnInit} from "@angular/core";
import {CardItem} from "./cardItem";
import {CardType} from "./cardItem";
import {Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
    selector: "card-item",
    template:
    `<button *ngIf="selectedCard.cardType == 1" 
             [ngClass]="{mgCard : true}"  
             [disabled]="selectedCard.isOpen"
             [@cardState]="selectedCard.isOpen ? 'open':'close'"
             (click)="onCardClick()">
      <span  [ngClass]="{mgCardNumber : !selectedCard.isOpen}">{{selectedCard.cardPoint}}</span>  
    </button>

     <button *ngIf="selectedCard.cardType == 2" 
             [ngClass]="{mgCard : true, mgCardBack : !selectedCard.isOpen,
                         cardOpenAnimate:selectedCard.isOpen,
                         cardCloseAnimate:!selectedCard.isOpen}"
             [disabled]="selectedCard.isOpen" 
             (click)="onCardClick()"
             [ngStyle]="selectedCard.isOpen ? {'background': 'url(' + cardBackPicUrl + ')', 
                                               'background-repeat':'no-repeat',
                                               'background-size':'100%'} : {}" >
     </button>

    
    `,
    outputs: ['cardClicked'],
    inputs: ['selectedCard'],
    animations: [
        trigger('cardState', [
            state('open', style({
                backgroundColor: '#30dec6',
            })),
            state('close', style({
                transform: 'rotateY(180deg)',
                backgroundImage: 'url(../images/Card_back.png)',
            })),
            transition('open => close', animate('200ms ease')),
            transition('close => open', animate('500ms ease'))
        ])
    ]

})

export class CardComponent implements OnInit {
    selectedCard: CardItem;
    cardClicked = new EventEmitter<boolean>();
    cardBackPicUrl: string = "";

    ngOnInit(): any {
        this.cardBackPicUrl = 'https://nagasaki1991.github.io/memory-game/test/images/cardBack/' + this.selectedCard.cardPoint + '.png';
    }

    onCardClick() {
        this.selectedCard.isOpen = !this.selectedCard.isOpen;
        this.cardClicked.emit(this.selectedCard.isOpen);
    }
}
