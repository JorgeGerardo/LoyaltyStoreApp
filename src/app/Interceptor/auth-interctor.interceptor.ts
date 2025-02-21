import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


export const CHECK_LOGIN = new HttpContextToken<boolean>(() => true);

@Injectable()
export class AuthInterctorInterceptor implements HttpInterceptor {

  constructor(private auth:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Add token:
    if (request.context.get(CHECK_LOGIN)) {
      const token = this.auth.getToken();
      if (token) {
        const clonedRequest = this.addToken(request, token);
        return next.handle(clonedRequest);
      }
    }
    next.handle(request);

    //Without token
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>, token: string) {
    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

}
