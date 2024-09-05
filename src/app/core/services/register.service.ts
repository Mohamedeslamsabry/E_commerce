import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Iauth, Ilogin } from '../interfaces/iauth';




@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  userData:any;




   /* Inject From HttpClient To Services */
  private  readonly _HttpClient=inject(HttpClient)
  private  readonly _Router=inject(Router)

  

  //!Api Send Data To BackEnd    register
  SenddataFromBack(Data:Iauth):Observable<any>
  {
    return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/signup`,Data)
  }


  //Api Send Data To BackEnd    Login
  CheckLogin(Data:Ilogin):Observable<any>
  {
    return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/signin`,Data)
  }
  



  //!jwt-code
  SaveData():void{
     if(localStorage.getItem('uToken')!==null){
        this.userData= jwtDecode( localStorage.getItem('uToken') !);
     }
  }
  

  //!SignOut
  signout():void{
    localStorage.removeItem('uToken');
    this.userData=null;
    this._Router.navigate(['/login'])
  }


  //!forget
  verifiyEmail(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/forgotPasswords`,data)
  }

  verifiyCode(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/verifyResetCode`,data)
  }
  

  updatepass(data:object):Observable<any>{
    return this._HttpClient.put(`${environment.BaseUrl}/api/v1/auth/resetPassword`,data)
  }


}
