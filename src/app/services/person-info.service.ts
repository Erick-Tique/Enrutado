import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonInfoService {
  personInfo: any [] = [
    {
      id: 1,
      nombre: 'persona1',
      foto: 'assets/P.png',
      grado: 'Los ingenieros',
      telefono: '55331312'
    },
    {
      id: 2,
      nombre: 'persona2',
      foto: 'assets/P2.jfif',
      grado: 'Los ingenieros',
      telefono: '12323882882'
    },
    {
      id: 3,
      nombre: 'persona3',
      foto: 'assets/P3.jfif',
      grado: 'Los ingenieros',
      telefono: '55622622'
    },
    {
      id: 4,
      nombre: 'persona4',
      foto: 'assets/P4.jfif',
      grado: 'Los ingenieros',
      telefono: '557272721'
    },
    {
      id: 5,
      nombre: 'persona5',
      foto: 'assets/P5.jfif',
      grado: 'Los ingenieros',
      telefono: '557272721'
    }
  ]
  id:any;
  foto: any;
  nombre: any;
  grado: any;
  telefono: any;

  constructor() {}

  RecuperaPersonInfo (): PersonInfoService[]{
    return this.personInfo;
  }
  recuperaPersonInfoId (id:any) : PersonInfoService {
    return this.personInfo[ (id - 1)];
  }
}
  export interface datosinterface{
  id: Number;
  nombre:string;
  foto: string;
  grado: string;
  telefono: string;
}
