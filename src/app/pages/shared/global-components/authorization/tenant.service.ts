import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { server_administration } from '../../../../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class TenantService {
    private tenantConfig: any = null;
    private logoSubject = new BehaviorSubject<string | null>(null);

    constructor(private http: HttpClient, private title: Title) { }

    getTenantConfig(): Observable<any> {
        return this.http.get<any>(`${server_administration}sa_clientemast/tenandId/config`).pipe(
            tap(config => {
                this.tenantConfig = config;
            })
        );
    }

    getStoredConfig() {
        return this.tenantConfig;
    }

    updateTitle(newTitle: string) {
        this.title.setTitle(newTitle || 'Default Title');

    }

    updateLogo(newLogo: string) {
        //this.tenantConfig.logo = newLogo;
        this.logoSubject.next(newLogo); // Notificar cambios
    }
    getLogo(): Observable<string | null> {
        return this.logoSubject.asObservable();
    }
    updateFavicon(iconUrl: string) {
        let link: HTMLLinkElement = document.querySelector("link[rel~='icon']")!;
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = iconUrl;
    }


}
