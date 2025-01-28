import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  // --------- Autorizacion de la web
  getUserSesion() {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(sessionStorage.getItem('AuthorizacionEcommerceMultitenand'));
      return user; // Retorna todo el objeto que esta dentro del SessionStorage
    } else {
      return null;
    }
  }

  getToken() {
    if (!isPlatformBrowser(this.platformId)) return null;

    const user = JSON.parse(sessionStorage.getItem('AuthorizacionEcommerceMultitenand'));
    return user?.token || null;
  }

  setUserSesion(token: any) {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('AuthorizacionEcommerceMultitenand', token);
    }
  }

  deleteUserSesion() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('AuthorizacionEcommerceMultitenand');
    }
  }

  // --------- Información temporal para el uso del portal
  setTemporalData(data: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('TempEcommerceMultitenand', JSON.stringify(data));
    }
  }

  getTemporalData() {
    if (isPlatformBrowser(this.platformId)) {
      const data = JSON.parse(localStorage.getItem('TempEcommerceMultitenand'));
      return data; // Retorna todo el objeto que esta dentro del SessionStorage
    }
  }

  deleteTemporalData() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('TempEcommerceMultitenand');
    }
  }


  ifPlatform(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return true;
    } else {
      return false;
    }
  }
}

