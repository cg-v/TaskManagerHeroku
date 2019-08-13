import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, empty, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) { }
  refreshingAccessToken :boolean;
  accessTokenRefreshed : Subject<any> = new Subject();

  intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<any>{
    //handle the request
    request = this.AddAuthHeader(request);

    //call next and handle response
    return next.handle(request).pipe(
      catchError((error : HttpErrorResponse) =>{
        console.log(error);
        if(error.status === 401 && ! this.refreshingAccessToken){
          //401 so we are unauthorised
          console.log('err');
          //refrsh access token
          return this.refreshAccessToken()
          .pipe(
            switchMap(() =>{
              request = this.AddAuthHeader(request);
              return next.handle(request);
            }),
            catchError((err: any) =>{
              console.log(err);
              this.authService.logOut();
              return empty();
              
            })
          )
          
        }
        return throwError(error);
      })
    )
  }

  refreshAccessToken(){if(this.refreshingAccessToken){
    return new Observable(observer =>{
      this.accessTokenRefreshed.subscribe(()=>{
        //this code will run when the access token has been refreshed
        observer.next();
        observer.complete();
      })
    })
  }else{
    this.refreshingAccessToken= true;
    //we want to call a method in authservice to send a request to refresh access token
    return this.authService.getNewAccessToken().pipe(
      tap(() =>{
        console.log('Access token refreshed');
        this.refreshingAccessToken= false;
        this.accessTokenRefreshed.next();
      })
    )
  }
    
  }

  AddAuthHeader( request : HttpRequest<any>){
//get the access token
const token = this.authService.getAccesstoken();

if(token){
//append the access token to the request header
return request.clone({
  setHeaders: {
    'x-access-token' :token
  }
})
}
  return request;
  }
}
