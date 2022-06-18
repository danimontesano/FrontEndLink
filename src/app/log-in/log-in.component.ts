import { LoggearService } from './services/loggear.service';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formulario: FormGroup|null;

  constructor(
    private loggearService: LoggearService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = null;
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      nombreDeUsuario:['', Validators.required],
      contrasenia:['', Validators.required]
    })
  }

  loggear(){
    var nombreDeUsuario = this.formulario?.get("nombreDeUsuario")?.value;
    var contrasenia = this.formulario?.get("contrasenia")?.value;

    this.loggearService.buscarUsuario(nombreDeUsuario, contrasenia).subscribe((usuario: any) => {
      localStorage.setItem("id", usuario.id);
      localStorage.setItem("nombre", usuario.nombre);
      localStorage.setItem("apellido", usuario.apellido);
      console.log(usuario.id);
    })
  }

}
