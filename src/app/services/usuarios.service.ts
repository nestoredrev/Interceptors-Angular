import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    
    let data = {
      'page':'2',
      'nombre': 'Nestor'
    };

    let params = new HttpParams();

    for (const [key, value] of Object.entries(data)) {
      params = params.append(key, value);
    }
    
    // Manejar errores con el catchError y trowError de rxjs
    return this.http.get('https://reqres.in/api/users',{
      params
    }).pipe (
      map(( resp:any ) => {
        return resp.data;
      }),
      catchError( err => {
        console.log(err.message);
        return throwError('retorno mi error personalizado');
      })
    )
  }


  obtenerUsuario() {
    
    // Añadir los parametos del metodo get a mano
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Edrev');
    


    // Manejar errores con el catchError y trowError de rxjs
    return this.http.get('https://reqres.in/api/users',{
      params
    }).pipe (
      map(( resp:any ) => {
        return resp.data;
      }),
      //catchError( this.manejarError )
    )
  }

  // Unificar la captura de errores en un unico metodo
  manejarError(err: HttpErrorResponse) {
    console.log(err);
    return throwError('Error personalizado');
  }




}
