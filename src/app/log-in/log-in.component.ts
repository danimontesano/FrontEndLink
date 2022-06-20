import { UserServiceService } from './../main-service/user-service/user-service.service';
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
    private formBuilder: FormBuilder,
    private userService: UserServiceService
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
    console.log(this.formulario?.controls["nombreDeUsuario"].status);

    var nombreDeUsuario = this.formulario?.get("nombreDeUsuario")?.value;
    var contrasenia = this.formulario?.get("contrasenia")?.value;

    this.loggearService.buscarUsuario(nombreDeUsuario, contrasenia).subscribe((usuario: any) => {
      //localStorage.setItem("id", usuario.id);
      //localStorage.setItem("nombre", usuario.nombre);
      //localStorage.setItem("apellido", usuario.apellido);
      this.userService.settearUser(usuario);
      console.log(usuario.id);
    }, (error) => {
      //localStorage.removeItem("id");
      //localStorage.removeItem("nombre");
      //localStorage.removeItem("apellido");
      this.userService.settearUser(null);
      alert('Nombre de usuario o contraseña incorrectas');
    })
  }

}
