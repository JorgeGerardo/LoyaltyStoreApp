import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}
  private TokenName = 'PlanifyToken';
  private UserId = 'UserId';

  saveToken(token: string) {
    localStorage.setItem(this.TokenName, token);
  }

  saveUserId(userId: number) {
    localStorage.setItem(this.UserId, userId.toString());
  }

  getToken(): string | null {
    let token = localStorage.getItem(this.TokenName);
    if (this.isTokenExpired(token)) {
      this.removeToken();
    }

    return localStorage.getItem(this.TokenName);
  }

  getUserId(): number | null {
    let userId = localStorage.getItem(this.UserId);
    if (userId)
      return parseInt(userId, 10);

    return null;
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
