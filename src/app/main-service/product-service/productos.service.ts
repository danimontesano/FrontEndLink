import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlProductox: string = environment.urlProducto

  constructor(
    private http: HttpClient
  ) { }

  public buscarProducto(id:number){
    return this.http.get(this.urlProductox + id).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 404){
      var mensajeError: string = "Error 404.";
    }

    return throwError(() => new Error(mensajeError));
  }
}
