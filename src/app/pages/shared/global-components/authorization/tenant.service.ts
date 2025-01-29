import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class TenantService {
    private tenantConfig: any = null;

    constructor(private http: HttpClient, private title: Title) { }

    getTenantConfig(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/administrate/sa_clientemast/tenandId/config').pipe(
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
