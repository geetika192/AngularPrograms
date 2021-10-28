import { Component } from '@angular/core';
import {  FormBuilder,FormControl,FormGroup,Validator } from '@angular/forms';
import {Router  } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  frmGroup:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router) 
  {
  this.frmGroup=this.formBuilder.group({
      'Username' : '',
      'Password': '',
      'Age' : '',
  })
  
  }
  LoginData(user:any) {
    console.log(user);
    this.router.navigate(['./EmpLogin']);
  }


 

}
