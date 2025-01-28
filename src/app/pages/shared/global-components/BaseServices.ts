import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';




@Injectable({
    providedIn: 'root'
})
export class BaseServices {
    /*  private SERVER_SEGURIDAD = API_SERVER_SEGURIDAD + 'autorizacion/seguridad';
     private SERVER_COMUN = API_SERVER_COMUN + 'spring/core'
     private SERVER_ADMINISTRACION = API_SERVER_ADMINISTRACION + 'spring/core' */

    constructor(
        private http: HttpClient,
        private router: Router,
        /* private toastService: ToastService,
        private loadingService: LoadingService */

    ) { }





    // ------------ IMPLEMENTACIONES DEL SERVER COMUN
    /*  getCompanies(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/selectoresmast/listarCboCompanias');
     }
 
     getSedes(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/selectoresmast/listarCboSedes');
     }
 
     getConvenios(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/selectoresmast/listarCboConvenios');
     }
 
     getModalidadEstudio(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/selectoresmast/listarModalidadEstudio');
     }
 
     getPeriodoAcademico(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/selectoresmast/listarPeriodoAcademico');
     }
 
     getFrecuencias(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/selectoresmast/listarCboFrecuencia');
     }
 
     getMaterias(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/selectoresmast/listarCboMaterias');
     }
 
     getHorarios(data: any): Observable<any> {
         return this.http.put<any>(this.SERVER_COMUN + '/sahorariocomun/listarpaginadoHorarios', data);
     }
 
     getPaises(): Observable<any> {
         return this.http.get<any>(this.SERVER_COMUN + '/paiscomun/listar');
     }
 
     getMiscelaneos(data): Observable<any> {
         return this.http.put<any>(this.SERVER_COMUN + '/mamiscelaneosdetallecomun/listartablaporheader', data);
     }
 
 
     // ------------- SELECTORES PERSONA
     getTipoDocumento(): any[] {
         return [{ nombre: '-- Seleccione --', codigo: null }, { nombre: 'DNI', codigo: 'D' }, { nombre: 'Pasaporte', codigo: 'P' }, { nombre: 'Carnet Extranjeria', codigo: 'C' }, { nombre: 'Otros', codigo: 'O' }];
     }
 
     getGeneros(): any[] {
         return [{ nombre: '-- Seleccione --', codigo: null }, { nombre: 'Masculino', codigo: 'M' }, { nombre: 'Femenino', codigo: 'F' }];
     }
 
     getEstadoCivil(): any[] {
         return [{ nombre: '-- Seleccione --', codigo: null }, { nombre: 'Soltero', codigo: 'S' }, { codigo: 'C', nombre: "Casado" }, { codigo: 'D', nombre: "Divorciado" },];
     }
 
     getUnicaOpcion(): any[] {
         return [{ nombre: '-- Seleccione --', codigo: null }, { nombre: 'SI', codigo: 'S' }, { nombre: 'NO', codigo: 'N' }];
     }
     getOcupacion(): any[] {
         return [{ nombre: '-- Seleccione --', codigo: null }, { nombre: 'Estudiante', codigo: 'E' }, { nombre: 'Trabajador', codigo: 'T' }, { nombre: 'Ninguno', codigo: 'N' }];
     }
     // ------------ INFORMACIÓN DEL USUARIO LOGEADO
     getInfoUser(data: any): Observable<any> {
         return this.http.put<any>(this.SERVER_COMUN + '/personamastcomun/obtenerDtoAlumno', data);
     }
 
     getInfoEstudiante(data: any): Observable<any> {
         return this.http.get<any>(this.SERVER_ADMINISTRACION + '/saestudiantemast/obtenerdto/' + data.idestudiante);
     }
 
     updateInfoEstudiante(data: any): Observable<any> {
         return this.http.put<any>(this.SERVER_ADMINISTRACION + '/saestudiantemast/actualizar', data);
     }
 
     getInfoDocente(data: any): Observable<any> {
         return this.http.get<any>(this.SERVER_ADMINISTRACION + '/sadocentemast/obtenerdto/' + data.iddocente);
     }
 
     updateInfoDocente(data: any): Observable<any> {
         return this.http.put<any>(this.SERVER_ADMINISTRACION + '/sadocentemast/actualizar', data);
     }
 
     // ------------ IMPLEMENTACIONES DE METODOS GENERALES
     getHoraActual(): string {
         const now = new Date();
         const hours = now.getHours().toString().padStart(2, '0');
         const minutes = now.getMinutes().toString().padStart(2, '0');
         return `${hours}:${minutes}`;
     }
 
     checkTransactionMessages(response: any): boolean {
         if (response.transaccionListaMensajes.length === 0) {
             return true;
         } else {
             if (response && Array.isArray(response.transaccionListaMensajes)) {
                 response.transaccionListaMensajes.forEach(element => {
 
                     this.toastService.addToast({
                         type: response.transaccionEstado == 'VA' ? 'warning' : 'danger',
                         message: element.mensaje
                     });
                 });
             }
             return false;
         }
     }
 
     checkTransactionMessagesRafa(response: any): boolean {
         if (response.estadoTransaccion === 0) {
             return true;
         } else {
             if (response && Array.isArray(response.transaccionListaMensajes)) {
                 response.transaccionListaMensajes.forEach(element => {
 
                     this.toastService.addToast({
                         type: response.transaccionEstado == 'VA' ? 'warning' : 'danger',
                         message: element.mensaje
                     });
                 });
             }
             return false;
         }
     }
     showMessageSucces(message: string) { this.toastService.addToast({ type: 'success', message: message }); }
 
     showMessageError(message: string) { this.toastService.addToast({ type: 'danger', message: message }); }
 
     showMessageWarning(message: string) { this.toastService.addToast({ type: 'warning', message: message }); }
 
     showLoading() { this.loadingService.show(); }
 
     hideLoading() { this.loadingService.show(); }
  */
}
