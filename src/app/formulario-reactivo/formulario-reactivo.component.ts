import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {
  formulario1=new FormGroup(
    {
      correo: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',
                                [
                                  Validators.required,
                                  Validators.minLength(5),
                                  Validators.pattern('([A-Z]+[0-9])')
        ]),
      telefono: new FormControl('')
    }
  );

  get correo():any{
    return this.formulario1.get('correo');
  }
  get password():any{
    return this.formulario1.get('password');
  }
  get telefono():any{
    return this.formulario1.get('telefono');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
