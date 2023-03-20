import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { CreateHotelesComponent } from './create-hoteles/create-hoteles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelesComponent } from './hoteles/hoteles.component';




@NgModule({
    declarations: [
    PagesComponent,
    DashboardComponent,
    CreateHotelesComponent,
    HotelesComponent
    ],
    exports: [
        
        DashboardComponent,
        CreateHotelesComponent,
        HotelesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{}