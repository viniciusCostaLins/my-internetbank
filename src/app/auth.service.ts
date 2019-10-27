import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  isAuthenticated() {
    const token = localStorage.getItem('cadastro');

    if (token) {
      return true;
    }

    return false;

  }

}
