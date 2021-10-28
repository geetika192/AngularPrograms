import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginUserData={             //array for binding name , Password and email
    email:'',
    password:''
  };
  loginUser():void
  {
    console.log(this.loginUserData.email);
    console.log(this.loginUserData.password);

  }

}
