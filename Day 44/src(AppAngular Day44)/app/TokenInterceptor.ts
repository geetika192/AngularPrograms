import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserServiceService } from "./Service/user-service.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    Tokencall: any;
    constructor(private Users: UserServiceService) {
        this.Tokencall = Users.loggedIn();

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.Tokencall) });
        console.log("MyInterceptor");
        return next.handle(req).pipe(
            catchError((error) => {
                console.log('error is intercept')
                console.error(error);
                return throwError(error.message);
            })
        )
    }
}