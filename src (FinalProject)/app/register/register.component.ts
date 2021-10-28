import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{

  constructor(private router:Router)
  {

  }

  RegisterData(user: any) {
    console.log(user);               //At this point we have to call register endpoint to submit the data in the backend, if service returns 0 means unable to create membership otherwise ....
    this.router.navigate(['/Login']);
  }


}
