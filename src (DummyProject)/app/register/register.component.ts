import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
    registerUserData={             //array for binding name , Password and email
    Username:'',
    Age:'',
    password:''
  };
  constructor(public fromBuilder:FormBuilder,private userservice :UserServiceService)
  {

  }
  registerUser():void
  {
    console.log(this.registerUserData);
  }
  onSubmit(){
    console.log(this.registerUserData);
      this.userservice.createAccount(this.registerUserData).subscribe(x=>{
        // data comes here
        console.log(x);
        
      },err=>{
  
         //error goes here
        console.log(err);
      }) // signupform have data
}
}
