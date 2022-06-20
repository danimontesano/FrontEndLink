import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  @Output() cambioSesion: EventEmitter<any>;
  private usuario: any;

  constructor() {
    this.cambioSesion = new EventEmitter();
    if(localStorage.getItem("id") == null){
      this.usuario = null;
    }
    this.usuario = {
      id: localStorage.getItem("id"),
      nombre: localStorage.getItem("nombre"),
      apellido: localStorage.getItem("apellido")
    }
    console.log(this.usuario.nombre + "asa");
    this.notificarCambios();
  }

  obtenerUsuario(){
    if(localStorage.getItem("id") == null){
      return null;
    }
    this.usuario = {
      id: localStorage.getItem("id"),
      nombre: localStorage.getItem("nombre"),
      apellido: localStorage.getItem("apellido")
    }
    return this.usuario;
  }

  settearUser(usuario: any){
    //Si llega null, desloggueo a la persona
    if(usuario == null){
      localStorage.removeItem("id");
      localStorage.removeItem("nombre");
      localStorage.removeItem("apellido");
      this.usuario = null;
      this.notificarCambios();
      return;
    }

    //Caso contrario lo loggueo con los datos recibidos
    localStorage.setItem("id", usuario.id);
    localStorage.setItem("nombre", usuario.nombre);
    localStorage.setItem("apellido", usuario.apellido);

    this.usuario = {
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido
    }

    this.notificarCambios();
  }

  notificarCambios() {
    this.cambioSesion.emit(this.usuario);
  }
}
