import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private webService: WebRequestService, private router : Router) { }

  login(email : string, password : string){
    return this.webService.login(email,password).pipe(
      shareReplay(),
      tap((res : HttpResponse<any>) =>{
        //the auth tokens will be in the response of the header
        this.setSession(res.body._id, res.headers.get('x-access-token'),res.headers.get('x-refresh-token'));
        console.log('logged in');
        
      })
    )
  }

  signup(email : string, password : string){
    return this.webService.signup(email,password).pipe(
      shareReplay(),
      tap((res : HttpResponse<any>) =>{
        //the auth tokens will be in the response of the header
        this.setSession(res.body._id, res.headers.get('x-access-token'),res.headers.get('x-refresh-token'));
        console.log('Successfully signed up and logged in');
        
      })
    )
  }

  logOut(){
    this.removeSession();
    this.router.navigate(['/login']);
  }

  getAccesstoken(){
    return localStorage.getItem('x-access-token');
  }
  getRefreshtoken(){ 
    return localStorage.getItem('x-refresh-token');
  }
  getUserid(){
    return localStorage.getItem('user-id');
  }

  setAccesstoken(accessToken : string){console.log(accessToken);
     localStorage.setItem('x-access-token', accessToken);
  }

  private setSession(userid : string,accessToken: string, refreshToken : string){
    localStorage.setItem('user-id',userid);
    localStorage.setItem('x-access-token',accessToken);
    localStorage.setItem('x-refresh-token',refreshToken);
  }

  private removeSession(){
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  getNewAccessToken(){ 
    return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`,{
headers :{
  'x-refresh-token': this.getRefreshtoken(),
  '_id': this.getUserid()
},
observe:'response'
    }).pipe(
      tap((res : HttpResponse<any>)=>{ 
        this.setAccesstoken(res.headers.get('x-access-token'));
      })
    )
    
  }

  
}
