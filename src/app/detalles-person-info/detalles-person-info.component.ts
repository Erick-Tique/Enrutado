import { Component, OnInit } from '@angular/core';
import {PersonInfoService} from "../services/person-info.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalles-person-info',
  templateUrl: './detalles-person-info.component.html',
  styleUrls: ['./detalles-person-info.component.scss']
})
export class DetallesPersonInfoComponent implements OnInit {
  personInfo: { grado: string; foto: string; id: number; telefono: string; nombre: string } = {
  id:0,
  nombre: '',
  foto: '',
  grado: '',
  telefono: ''
};

  constructor(private PersonInfoServices: PersonInfoService,
              private activateRoute: ActivatedRoute) {
                this.activateRoute.params.subscribe(params => {
                  this.personInfo = this.PersonInfoServices.recuperaPersonInfoId(params.id)
    })

  }

  ngOnInit(): void {
  }

}
