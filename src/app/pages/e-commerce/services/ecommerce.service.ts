import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { server_ecommerce } from '../../../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class EcommerceService {

    private server = server_ecommerce;

    constructor(private http: HttpClient) { }

    getAllCategories(data: any): Observable<any> {
        return this.http.get<any>(this.server + `getAllCategories/${data.id_linea}`).pipe(
            map((response) => { return response })
        );
    }

    getAllSubCategories(data: any): Observable<any> {
        return this.http.get<any>(this.server + `getAllSubCategories/${data.id_categoria}`).pipe(
            map((response) => { return response })
        );
    }

    getAllProducts(data: any): Observable<any> {
        return this.http.post<any>(this.server + `getAllProducts`, data).pipe(
            map((response) => { return response })
        );
    }

}