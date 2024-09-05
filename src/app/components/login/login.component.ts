import { RegisterService } from './../../core/services/register.service';
import { Component, inject, OnDestroy } from '@angular/core';
import {

  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,

} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  
  //! Injection
  private readonly    _RegisterService=inject(RegisterService);
    private readonly  _FormBuilder=inject(FormBuilder);
    private readonly  _Router=inject(Router);

  //! Disabled  Buttton
  isShow:boolean=false ;

  //!============   1-Form Control and Form Group  =============== 
  //! ============   Valiadtors  =============== */

/*   LoginForm:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(/^\w{6,}$/),])
  }) */

  LoginForm:FormGroup=this._FormBuilder.group({
    email: [null,[Validators.required, Validators.email]],
    password:[null,[Validators.required, Validators.pattern(/^\w{6,}$/),]]
  })


  loginsub!:Subscription


  //!Fire Function When Login
  //! Check it is Founded or No
  msgError:string='';
  msgSuccess:boolean=false
    LoginInHome() {
     if(this.LoginForm.valid){
      this.isShow=true;
      this.loginsub= this._RegisterService.CheckLogin(this.LoginForm.value).subscribe({
        next:(res)=>{
        
          if(res.message=='success'){
              //! 1- save a token 
             localStorage.setItem('uToken',res.token)

             // !2-SaveData user ......... jwtDecode 
            this._RegisterService.SaveData()
            this.msgSuccess=true
            setTimeout(() => {
                //! 3 - Navigate  Go To Home 
              this._Router.navigate(['/home'])
            }, 1000);


          }
          this.isShow=false;
  
        },
        error:(err:HttpErrorResponse)=>{
          //! InCorrect
          this.isShow=false;
          this.msgError=err.error.message;
        }
       }) 
     }

     else{
      this.LoginForm.markAllAsTouched()
     }
  } 




  ngOnDestroy(): void {
      this.loginsub?.unsubscribe()
  }

  

}
