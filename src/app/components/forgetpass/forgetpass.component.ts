import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../../core/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.scss',
})
export class ForgetpassComponent {
  step: number = 1;
  loadingemail: boolean = false;
  loadingcode: boolean = false;
  loadingUpdate: boolean = false;

  msgemail: string = '';
  msgCode: string = '';
  msgUpdate: string = '';

  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _RegisterService = inject(RegisterService);
  private readonly _Router = inject(Router);

  verififyEmail: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });

  verifiycode: FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.required, Validators.pattern(/^\w{6}$/)]],
  });

  verififyUpdate: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });

  setemailverify() {
    
    let email = this.verififyEmail.get('email')?.value;
    this.verififyUpdate.get('email')?.patchValue(email);

    this.loadingemail = true;
    this._RegisterService.verifiyEmail(this.verififyEmail.value).subscribe({
      next: (res) => {
        this.loadingemail = false;
        if (res.statusMsg === 'success') {
          this.step = 2;
        }
      },
      error: (err) => {
        this.loadingemail = false;
          
        this.msgemail = err.error.message;
      },
    });
  }

  setCodeverify() {
    this.loadingcode = true;
    this._RegisterService.verifiyCode(this.verifiycode.value).subscribe({
      next: (res) => {
        this.loadingcode = false;

        if (res.status === 'Success') {
          this.step = 3;
        }
      },
      error: (err) => {
        this.loadingcode = false;

        this.msgCode = err.error.message;
      },
    });
  }

  setUpdatepass() {
    this.loadingUpdate = true;
    this._RegisterService.updatepass(this.verififyUpdate.value).subscribe({
      next: (res) => {
        this.loadingUpdate = false;

        localStorage.setItem('uToken', res.token);
        this._RegisterService.SaveData();
        this._Router.navigate(['/home']);
      },
      error: (err) => {
        this.loadingUpdate = false;
        this.msgUpdate = err.error.message;
      },
    });
  }
  
}
