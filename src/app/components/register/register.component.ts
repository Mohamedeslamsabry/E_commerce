import { Component, inject, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../../core/services/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent  implements OnDestroy {

    /* Inject From services To Register */
   private readonly _RegisterService=inject(RegisterService);
   private readonly _Router=inject(Router);


   /* Subscibe */
   registerSub!:Subscription


   //! 
   retriveControl(name:string){
    return this.RegisterForm.get(name)
   }


     //! ============   1-Form Control and Form Group  =============== */
     //!============   Valiadtors  =============== */


   private readonly _FormBuilder=inject(FormBuilder);

   RegisterForm:FormGroup=this._FormBuilder.group({
     name:[null,[ Validators.required,  Validators.minLength(3),  Validators.maxLength(20),]],
     email:[null,[ Validators.required,  Validators.email]],
     password:[null,[ Validators.required,  Validators.pattern(/^\w{6,}$/),]],
     rePassword:[null,],
     phone:[null,[ Validators.required,    Validators.pattern(/^01[0125][0-9]{8}$/)]],
   },{validators:[this.confirmRepassowrd]})

  //  ! ============   Fire When Submit On Register  =============== //
  msgError:string=''
  msgSuccess:boolean=false;





  RegisterSubmit() {
      //!Clear Form
/*      this.RegisterForm.patchValue({'name':'','email':'','password':'','phone':'','rePassword':''}) */

    if (this.RegisterForm.valid) {
      this.msgError='';
      this.isLoading=true;
     this.registerSub= this._RegisterService.SenddataFromBack(this.RegisterForm.value).subscribe({
        next:(res)=>{
          //Message --------> Success -------> Go To Login
          if(res.message=='success'){
             /* msg succsess when user Registertion true */
            this.msgSuccess=true;
            setTimeout(() => {
            //!Navigate to Login
              this._Router.navigate(['/login'])
            }, 1000);
          }



          this.isLoading=false;
        },
        error:(err:HttpErrorResponse)=>{
            //!Message --------> Errorr   -----> Show Errorr In Html
         this.msgError=err.error.message;
         this.isLoading=false;
        }
      })
    }

    else{
      this.RegisterForm.setErrors({misMatch:true})
      this.RegisterForm.markAllAsTouched()
    }

  }

  /* ============  confirm RePassowrd  =============== */

  confirmRepassowrd(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { misMatch: true };
    }
  }


  /* ============  loading on Input =============== */
  isLoading:boolean=false;


  /* ============  UnSubscribe =============== */
  ngOnDestroy(): void {
      this.registerSub?.unsubscribe()
  }



}
