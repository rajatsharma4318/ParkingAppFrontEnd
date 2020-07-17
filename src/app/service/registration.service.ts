import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../AllClasses/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  public loginUser(user:User):Observable<any>{
    return this.http.post("http://localhost:8080/login",user)
  }

  public saveUser(newuser:User):Observable<any>{
    return this.http.post("http://localhost:8080/save-user",newuser)
  }
  
  

  isUserLoggedIn(){
    let usernew=sessionStorage.getItem('newuser');
    return !(usernew===null);
  }

   logout()
   {
     sessionStorage.removeItem('newuser');
   }



}
