import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authorizationService: AuthorizationService,
    //private toastService: ToastService,

  ) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authorizationService.getToken();


    if (!token) {

      // -------- Validamos que sea una plataforma valida0'u78
      if (!this.authorizationService.ifPlatform()) { // Si es desde el terminal
        return EMPTY;

      } else { // Si es desde un navegador

      }

    }


    const request = req.clone({
      setHeaders: {
        //Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-Tenant-ID': this.authorizationService.fetchTenantId()
      },
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleHttpError(error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Manejo centralizado de errores HTTP.
   * @param error El error HTTP capturado
   */
  private handleHttpError(error: HttpErrorResponse): void {
    switch (error.status) {
      case 0:
        /* this.toastService?.addToast({
          type: 'danger',
          message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.',
        }); */
        break;
      case 401:
      case 403:
        /* this.toastService?.addToast({
          type: 'danger',
          message: 'No tienes permisos para acceder a este recurso.',
        }); */
        break;
      /* case 400:
        this.toastService?.addToast({
          type: 'warning',
          message: 'Hubo un error en la solicitud. Por favor verifica los datos.',
        });
        break; */
      /* default:
        this.toastService?.addToast({
          type: 'danger',
          message: 'Ocurrió un error inesperado. Inténtalo más tarde.',
        }); */

    }
  }
}