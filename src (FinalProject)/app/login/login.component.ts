import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  frmGroup : FormGroup;
  constructor(private formBuilder : FormBuilder)
  {              
    //Creating a structure or model for defining the sign up component.
    
    this.frmGroup = this.formBuilder.group({
      'Username' : '',
      'Password': '',
      'Age' : ''
    })

  }

  LoginData(user:any) {
    console.log(user);
  }

  

}
