import { provideRouter, RouterConfig } from '@angular/router';

import { TemplateDrivenFormComponent } from "./template-driven-form.component";
import { DataDrivenFormComponent } from "./data-driven-form.component";


export const FormSampleRoutes: RouterConfig = [
    { path: 'TemplateDrivenForm', component: TemplateDrivenFormComponent },
    { path: 'DataDrivenForm', component: DataDrivenFormComponent }
];


