import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GameComponent } from "./memory game/game.component";

@Component({
    selector: "my-app",
    template: ` 
                    <br><br>
                 <router-outlet></router-outlet>
              `,
    directives: [ROUTER_DIRECTIVES, GameComponent]
    
})

export class AppComponent {

}
