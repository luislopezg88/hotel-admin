import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';


import { PAGES_ROUTES } from './pages.routes';

import { CreateHotelesComponent } from './create-hoteles/create-hoteles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { TipoHabitacionComponent } from './tipo-habitacion/tipo-habitacion.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { CrearHabitacionComponent } from './crear-habitacion/crear-habitacion.component';
import { EditarHotelComponent } from './editar-hotel/editar-hotel.component';
import { ModificarHabitacionComponent } from './modificar-habitacion/modificar-habitacion.component';
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { ModificarTipoComponent } from './modificar-tipo/modificar-tipo.component';



@NgModule({
    declarations: [
    PagesComponent,
    DashboardComponent,
    CreateHotelesComponent,
    HotelesComponent,
    UpdateHotelComponent,
    TipoHabitacionComponent,
    HabitacionesComponent,
    CrearHabitacionComponent,
    EditarHotelComponent,
    ModificarHabitacionComponent,
    CrearTipoComponent,
    ModificarTipoComponent
    ],
    exports: [
        
        DashboardComponent,
        HotelesComponent,
        UpdateHotelComponent,
        TipoHabitacionComponent,
        HabitacionesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        RouterModule,
        PipesModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class PagesModule{}