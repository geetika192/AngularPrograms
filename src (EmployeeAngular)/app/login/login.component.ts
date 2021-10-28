import { Component} from '@angular/core';
import {Router  } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router)
  {

  }
  RegisterData(user: any) {
    console.log(user);// at this point we have to call register end Point to submit the data in the backend if service return 0 means unable to create membership otherwise......
    this.router.navigate(['./EmpProductList']);
  }

  

}
