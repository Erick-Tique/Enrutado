import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from "./registro/registro.component";
import {RecuperarComponent} from "./recuperar/recuperar.component";

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'registro',component: RegistroComponent},
      {path:'recuperar', component: RecuperarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
