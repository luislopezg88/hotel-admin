import { RouterModule ,Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { CreateHotelesComponent } from './create-hoteles/create-hoteles.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { TipoHabitacionComponent } from './tipo-habitacion/tipo-habitacion.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { CrearHabitacionComponent } from './crear-habitacion/crear-habitacion.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { EditarHotelComponent } from './editar-hotel/editar-hotel.component';



const pagesRoute: Routes = [
    {
        path:'', 
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            {path:'hoteles', component: HotelesComponent, data: {titulo: 'Hoteles'}},
            {path:'crear-hotel', component: CreateHotelesComponent, data: {titulo: 'Crear Hoteles'}},
            {path:'editar-hotel/:id', component: EditarHotelComponent, data: {titulo: 'Modificar Hotel'}},
            {path:'tipo-habitacion', component: TipoHabitacionComponent, data: {titulo: 'Tipo de habitaciones'}},
            {path:'habitaciones', component: HabitacionesComponent, data: {titulo: 'Habitaciones'}},
            {path:'crear-habitacion', component: CrearHabitacionComponent, data: {titulo: 'Crear Habitaciones'}},
            {path: '', redirectTo:'hoteles', pathMatch:'full'}
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoute);

