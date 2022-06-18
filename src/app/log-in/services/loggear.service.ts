import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggearService {
  private url: string = environment.urlLogIn;

  constructor(
    private http: HttpClient
  ) { }

  public buscarUsuario(nombreDeUsuario: string, contrasenia: string){
    return this.http.get(this.url + 'nombreDeUsuario=' + nombreDeUsuario + '&contrasenia=' + contrasenia);
  }
}
