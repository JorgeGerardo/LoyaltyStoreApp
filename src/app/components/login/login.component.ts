import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };


  onSubmit(){
    console.log(this.loginData.email);
    console.log(this.loginData.password);
  }
}
