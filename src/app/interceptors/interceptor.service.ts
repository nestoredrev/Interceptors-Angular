import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Los interceptors son una manera sencilla de manipular nuestras peticiones y respuestas, evitando así realizar dicha modificación en cada servicio que realizamos manualmente. 
// Esto nos ayuda a tener un código más limpio y mantenible.


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Interceptores: Atrapan las peticiones y las procesan
    
    console.log('paso por el inceptor');

    const headers = new HttpHeaders({
      'x-token-user':'BGFBF543FDWEQAADSASDQE2311'
    });


    // la Request no se puede modifar hay que clonarla y modificarla.
    // De esta manera añadimos el token en la cabezera de todas nuestras peticiones
    const reqClone = req.clone({
      headers
    })

    return next.handle( reqClone ).pipe(
      catchError( this.manejarError ) // Manejro de errores para todas las petciones mediante el interceptor
    )
  }

    manejarError(err: HttpErrorResponse) {
      console.log(err);
      return throwError('Error personalizado');
    }

}
