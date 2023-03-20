import { RouterModule ,Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { CreateHotelesComponent } from './create-hoteles/create-hoteles.component';



const pagesRoute: Routes = [
    {
        path:'', 
        component: PagesComponent,
        children: [
            {path:'hoteles', component: HotelesComponent},
            {path:'crear-hotel', component: CreateHotelesComponent},
            {path: '', redirectTo:'hoteles', pathMatch:'full'}
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoute);

