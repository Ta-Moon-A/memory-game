import { Routes, RouterModule } from '@angular/router';


import { PuzzleComponent } from "./puzzle/puzzle.component";
import { MainDetailComponent } from "./second sample/main.detail.component";
import { ShoppingListComponent } from "./shopping list/shopping.list.component";
import { HttpSampleComponent } from "./http sample/http-sample.component";
import { GameComponent } from "./memory game/game.component";


import {FormSampleRoutes} from "./form samples/form-sample.routes";
//import Formsampleroutes = require("form samples/form-sample.routes"); // sub routing file


export const routes: Routes = [
    { path: '', component: GameComponent },
    { path: 'Puzzle', component: PuzzleComponent },
    { path: 'ShoppingList', component: ShoppingListComponent },
    { path: 'DirectivesSample', component: MainDetailComponent },
    { path: 'HttpSampleComponent', component: HttpSampleComponent },
    { path: 'GameComponent', component: GameComponent },

    ...FormSampleRoutes
];

export const routing = RouterModule.forRoot(routes);