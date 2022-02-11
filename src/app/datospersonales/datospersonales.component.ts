import { Component, OnInit } from '@angular/core';
import {PersonInfoService} from "../services/person-info.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.scss']
})
export class DatospersonalesComponent implements OnInit {
  /*obj_datospersonales: any [] = [
    {
      nombre: 'persona1',
      foto: 'assets/P.png',
      grado: 'Los ingenieros',
      telefono: '55331312'
    },
    {
      nombre: 'persona2',
      foto: 'assets/P2.jfif',
      grado: 'Los ingenieros',
      telefono: '12323882882'
    },
    {
      nombre: 'persona3',
      foto: 'assets/P3.jfif',
      grado: 'Los ingenieros',
      telefono: '55622622'
    },
    {
      nombre: 'persona4',
      foto: 'assets/P4.jfif',
      grado: 'Los ingenieros',
      telefono: '557272721'
    },
    {
      nombre: 'persona5',
      foto: 'assets/P5.jfif',
      grado: 'Los ingenieros',
      telefono: '557272721'
    }
  ]*/

  personInfo: PersonInfoService [] = [];

  constructor(private personInfoServicio: PersonInfoService,
              private router: Router) {
  this.personInfo = personInfoServicio.RecuperaPersonInfo();
  }
  cargarRuta(id:Number){
    this.router.navigate(['/detalles',id]);
  }
  ngOnInit(): void {
  }

}


