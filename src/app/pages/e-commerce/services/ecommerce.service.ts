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

    getCategorias(): Observable<any> {
        return this.http.get<any>(this.server + 'sa_categoriamast/all').pipe(
            map((response) => { return response })
        );
    }
    getProducts(): Observable<any> {
        return this.http.get<any>(this.server + 'sa_itemmast/all').pipe(
            map((response) => { return response })
        );
    }

}