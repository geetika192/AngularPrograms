import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  data:any;

  userSignInData={
    Name:'',
    password:''
  };
 
  constructor(private userService: UserServiceService ,private router:Router ) 
  {
    
    
  }

  userSignIn(): void
  {
    console.log(this.userSignInData);
    this.userService.loginAccount(this.userSignInData).subscribe(response=>{
   
     this.data=response;
     console.log(this.data.name);
    // sessionStorage.setItem('username',this.data.name);
    // this.router.navigate(['/home']);
    },err=>
    {
      console.log(err);
    })
    }
}

