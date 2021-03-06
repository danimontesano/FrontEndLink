import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
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
    return this.http.get(this.url + 'nombreDeUsuario=' + nombreDeUsuario + '&contrasenia=' + contrasenia).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){

    if(error.status === 404){


      var mensajeError: string = "Error 404.";
    }

    return throwError(() => new Error(mensajeError));
  }

}
