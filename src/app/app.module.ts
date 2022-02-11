import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CursosComponent } from './cursos/cursos.component';
import { GruposComponent } from './grupos/grupos.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { RecursosComponent } from './recursos/recursos.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { DetallesPersonInfoComponent } from './detalles-person-info/detalles-person-info.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    GruposComponent,
    CalificacionesComponent,
    RecursosComponent,
    DatospersonalesComponent,
    DetallesPersonInfoComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
