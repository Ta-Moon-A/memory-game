import {Component, EventEmitter} from "@angular/core";
import {GameProperties} from "./gameProp";


@Component({
    selector: "setting",
    template: `<div class="mgMainBoard">
                <div class="mgTitle">Memory Game !</div><br>
                <div class="settingBoard">
                  <br>
                  <div class="settingElement">
                     <label class="settingLabel">Dimension</label>
                     <select class="form-control settingParamSelect" [ngModel]="gameProperties.dimension" (change)="onDimensionChange($event.target.value)">
                       <option value="1">3x4</option>
                       <option value="2">4x5</option>
                     </select>
                  </div>
                  <div class="settingElement">
                     <label class="settingLabel">Type</label>
                     <select class="form-control settingParamSelect" [ngModel]="gameProperties.type" (change)="onTypeChange($event.target.value)">
                       <option value="1">Numbers</option>
                       <option value="2">Letters</option>
                       <option value="3">Pictures</option>
                     </select>
                  </div>
                  <br>
                  <div class="settingFooter">
                    <button class="settingBtn btn btn-mg" type="button" (click)="onStartGameClick()">Start</button>
                  </div>
                </div>
             </div>`,
    outputs: ['gameStartClicked'],
})

export class SettingComponent {
    gameStartClicked = new EventEmitter<GameProperties>();
    gameProperties: GameProperties = { dimension: 1, type: 1 };

    onStartGameClick() {
        this.gameStartClicked.emit(this.gameProperties);
    }

    onTypeChange(typevalue) {
        this.gameProperties.type = typevalue;
    }

    onDimensionChange(dimensionValue) {
        this.gameProperties.dimension = dimensionValue;
    }


}