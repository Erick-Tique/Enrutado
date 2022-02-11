import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "./cursos/cursos.component";
import {GruposComponent} from "./grupos/grupos.component";
import {CalificacionesComponent} from "./calificaciones/calificaciones.component";
import {RecursosComponent} from "./recursos/recursos.component";
import {AccessComponent} from "./login/access/access.component";
import {DatospersonalesComponent} from "./datospersonales/datospersonales.component";
import {DetallesPersonInfoComponent} from "./detalles-person-info/detalles-person-info.component";
import {FormularioReactivoComponent} from "./formulario-reactivo/formulario-reactivo.component";

const routes: Routes = [
  {path:'Cursos',component:CursosComponent},
  {path:'Grupos',component:GruposComponent},
  {path:'Recursos',component:RecursosComponent},
  {path:'Calificaciones',component:CalificacionesComponent},
  {path:'datospersonales',component: DatospersonalesComponent},
  {path: 'detalles/:id',component:DetallesPersonInfoComponent},
  {path:'Login',component: AccessComponent, loadChildren: () => import('./login/login.module').then(m =>m.LoginModule) },
  {path: 'formularioReactivo',component:FormularioReactivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
