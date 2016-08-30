"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require('@angular/core');
var CardComponent = (function () {
    function CardComponent() {
        this.cardClicked = new core_1.EventEmitter();
        this.cardBackPicUrl = "";
    }
    CardComponent.prototype.ngOnInit = function () {
        this.cardBackPicUrl = '../images/cardBack/' + this.selectedCard.cardPoint + '.png';
    };
    CardComponent.prototype.onCardClick = function () {
        this.selectedCard.isOpen = !this.selectedCard.isOpen;
        this.cardClicked.emit(this.selectedCard.isOpen);
    };
    CardComponent = __decorate([
        core_1.Component({
            selector: "card-item",
            template: "<button *ngIf=\"selectedCard.cardType == 1\" \n             [ngClass]=\"{mgCard : true}\"  \n             [disabled]=\"selectedCard.isOpen\"\n             [@cardState]=\"selectedCard.isOpen ? 'open':'close'\"\n             (click)=\"onCardClick()\">\n      <span  [ngClass]=\"{mgCardNumber : !selectedCard.isOpen}\">{{selectedCard.cardPoint}}</span>  \n    </button>\n\n     <button *ngIf=\"selectedCard.cardType == 2\" \n             [ngClass]=\"{mgCard : true, mgCardBack : !selectedCard.isOpen,\n                         cardOpenAnimate:selectedCard.isOpen,\n                         cardCloseAnimate:!selectedCard.isOpen}\"\n             [disabled]=\"selectedCard.isOpen\" \n             (click)=\"onCardClick()\"\n             [ngStyle]=\"selectedCard.isOpen ? {'background': 'url(' + cardBackPicUrl + ')', \n                                               'background-repeat':'no-repeat',\n                                               'background-size':'100%'} : {}\" >\n     </button>\n\n    \n    ",
            outputs: ['cardClicked'],
            inputs: ['selectedCard'],
            animations: [
                core_2.trigger('cardState', [
                    core_2.state('open', core_2.style({
                        backgroundColor: '#30dec6',
                    })),
                    core_2.state('close', core_2.style({
                        transform: 'rotateY(180deg)',
                        backgroundImage: 'url(../images/Card_back.png)',
                    })),
                    core_2.transition('open => close', core_2.animate('200ms ease')),
                    core_2.transition('close => open', core_2.animate('500ms ease'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map