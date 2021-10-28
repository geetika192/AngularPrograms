import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserServiceService } from "../Service/user-service.service";

@Injectable({
    providedIn:'root'
})
export class SecureRoute implements CanActivate
{
  
    constructor(private userservice: UserServiceService ,private routernav:Router ) 
    {  
       
    }
    canActivate():boolean
    {
        if(this.userservice.loggedIn()){
          return true;
        }
        else{
          this.routernav.navigate(['/signin'])
          return false;
        }
      }
}