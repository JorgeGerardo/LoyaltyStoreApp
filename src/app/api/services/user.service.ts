import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuth, UserLoginDTO } from '../models';
import { tap } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private token:TokenService) { }


  login(userData:UserLoginDTO){
    return this.http.post<UserAuth>(environment.apiUrl+"/login", userData).pipe(
      tap(u => {
        this.token.saveToken(u.token);
        this.token.saveUserId(u.userId);
      })
    );
  }
}
