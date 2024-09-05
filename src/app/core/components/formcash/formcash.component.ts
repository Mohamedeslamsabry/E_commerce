import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-formcash',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formcash.component.html',
  styleUrl: './formcash.component.scss'
})
export class FormcashComponent {
  private readonly _ActivatedRoute=inject(ActivatedRoute);
   private readonly _OrderService=inject(OrderService);
   private readonly _ToastrService=inject(ToastrService);
   private readonly _Router=inject(Router);
   private readonly _CartService=inject(CartService);

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



  submitCash():void{
    this._OrderService.createCash(this.idCart,this.shippingAddress.value).subscribe({
      next:(res)=>{
      this._ToastrService.success(res.status);
      this._Router.navigate(['/allorders'])
      this._CartService.numberofcart.set(0)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
