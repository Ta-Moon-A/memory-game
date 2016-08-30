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
var card_component_1 = require("./card.component");
var cardItem_1 = require("./cardItem");
var sharedService_1 = require("./sharedService");
var CardListComponent = (function () {
    function CardListComponent(_SharedService) {
        this._SharedService = _SharedService;
        this.timer = 0;
        this.gameSolved = false;
        this.cardList = new Array();
        this.settingClicked = new core_1.EventEmitter();
    }
    CardListComponent.prototype.ngOnInit = function () {
        console.log(this.gameProperties.dimension + ' ' + this.gameProperties.type);
        this.cardInitiate();
    };
    CardListComponent.prototype.onCardClicked = function (cardInfo) {
        var _this = this;
        var opened = new Array();
        var closed = new Array();
        var nonSolved = 0;
        this.cardList.forEach(function (card) {
            (card.isOpen && !card.isSolved) ? opened.push(card) : closed.push(card);
        });
        setTimeout(function () {
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
            _this.cardList.forEach(function (card) {
                if (!card.isSolved) {
                    nonSolved++;
                }
            });
            if (nonSolved < 2) {
                _this.gameSolved = true;
                _this.gameSolvedTime = _this.timer;
            }
        }, 500);
    };
    CardListComponent.prototype.onResetClicked = function () {
        this.cardList = [];
        this.timer = 0;
        this.gameSolved = false;
        this.gameSolvedTime = 0;
        clearInterval(this.refreshIntervalId);
        clearTimeout(this.refreshTimeoutlId);
        this.cardInitiate();
    };
    CardListComponent.prototype.onSettingClicked = function () {
        this.settingClicked.emit();
    };
    CardListComponent.prototype.cardInitiate = function () {
        var _this = this;
        var cardSybmols = this._SharedService.getCardSymbols(this.gameProperties);
        for (var i = 0; i < this._SharedService.getGameDimension(this.gameProperties); i++) {
            this.cardList.push({
                cardNumber: i,
                isOpen: true,
                isSolved: false,
                cardPoint: cardSybmols[i],
                cardType: (this.gameProperties.type == 3 ? cardItem_1.CardType.picture : cardItem_1.CardType.symbol)
            });
        }
        this.refreshIntervalId = setInterval(function () {
            _this.timer++;
        }, 1000);
        this.refreshTimeoutlId = setTimeout(function () {
            _this.cardList.forEach(function (card) {
                card.isOpen = false;
            });
        }, 5000);
    };
    CardListComponent = __decorate([
        core_1.Component({
            selector: "card-list",
            template: "<div class=\"mgMainBoard\">\n          <div class=\"mgTitle\">Memory Game !</div><br>\n          <div>\n             <ul style=\"list-style-type:none\">  \n                  <li *ngFor=\"let card of cardList\">\n                    <div class=\"col-xs-3\" >\n                        <card-item [selectedCard]=\"card\" (cardClicked)=\"onCardClicked($event)\"></card-item>\n                    </div>\n                  </li>\n            </ul>\n          </div>\n          \n          <div class=\"mgFooter col-md-12\">\n            <div class=\"center\">\n             <button class=\"leftBtn btn btn-mg\" type=\"button\" (click)=\"onSettingClicked()\">Setting</button>\n             <span [ngClass]=\"{ mgSolved : gameSolved }\">Timer : {{timer}} </span>\n             <span [ngClass]=\"{ mgSolved : !gameSolved }\">Well Done! ({{gameSolvedTime}} second)</span>\n             <button class=\"rightBtn btn btn-mg\" type=\"button\" (click)=\"onResetClicked()\">Reset</button>\n            </div> \n          </div>\n\n     </div>\n    ",
            directives: [card_component_1.CardComponent],
            providers: [sharedService_1.SharedService],
            outputs: ['settingClicked'],
            inputs: ['gameProperties']
        }), 
        __metadata('design:paramtypes', [sharedService_1.SharedService])
    ], CardListComponent);
    return CardListComponent;
}());
exports.CardListComponent = CardListComponent;
//# sourceMappingURL=card.list.component.js.map