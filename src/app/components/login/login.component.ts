import { Component } from '@angular/core';
import { UserLoginDTO } from 'src/app/api/models';
import { UserService } from 'src/app/api/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private user:UserService) { }
  

  loginData:UserLoginDTO = {
    email: 'jorguito@example.com',
    password: 'jorguito',
  };


  onSubmit(){
    this.user.login(this.loginData).subscribe({
      error: () => alert("Error al iniciar sesión, verifique sus datos")
    });
  }
}
