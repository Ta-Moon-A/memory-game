import {Component} from "@angular/core";
import {CardListComponent} from "./card.list.component";
import {SettingComponent} from "./setting.component";
import {GameProperties} from "./gameProp";

@Component({
    selector: "memory-game",
    template: `<card-list *ngIf="gameMode" (settingClicked)="onSettingClicked()" [gameProperties]="gameProps"></card-list>
               <setting *ngIf="!gameMode" (gameStartClicked)="onStartGameClicked($event)"></setting>`,
    directives: [CardListComponent, SettingComponent]
})

export class GameComponent {
    gameMode: boolean = false;
    gameProps: GameProperties;

    onSettingClicked() {
        this.gameMode = false;
    }
    onStartGameClicked(gameProps: GameProperties) {
        this.gameMode = true;
        this.gameProps = gameProps;
    }

}