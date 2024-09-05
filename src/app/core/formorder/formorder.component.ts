
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-formorder',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formorder.component.html',
  styleUrl: './formorder.component.scss'
})
export class FormorderComponent {

private readonly _ActivatedRoute=inject(ActivatedRoute);
private readonly _OrderService=inject(OrderService);

  shippingAddress:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.maxLength(100),Validators.required]),
    phone:new FormControl(null,[Validators.required,    Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl(null,[Validators.required]),
  });

  idCart:string|null=''

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.idCart=params.get('id');
      }
    })
    
  }



  submitformorder():void{
    this._OrderService.CheackOut(this.idCart,this.shippingAddress.value).subscribe({
      next:(res)=>{
        
        if(res.status==='success'){
          window.open(res.session.url,'_self')
        } 

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
