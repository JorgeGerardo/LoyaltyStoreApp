import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}
  private TokenName = 'PlanifyToken';

  saveToken(token: string) {
    localStorage.setItem(this.TokenName, token);
    console.log("Su token es:");
    console.log(token);
  }

  getToken(): string | null {
    let token = localStorage.getItem(this.TokenName);
    if (this.isTokenExpired(token)) {
      this.removeToken();
    }

    return localStorage.getItem(this.TokenName);
  }

  removeToken(){
    localStorage.removeItem(this.TokenName)
  }

  isTokenExpired(token: string | null): boolean {
    if (token == null) return true;

    try {
      const decoded: JwtPayload = jwtDecode<JwtPayload>(token);

      if (!decoded.exp)
        return true;

      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;

    } catch (error) {
      return true;
    }
  }


}
