import { afterNextRender, afterRender, Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Iproductcart, Product } from '../../core/interfaces/iproductcart';
import { Data, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly _CartService=inject(CartService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _Router=inject(Router);

  cartItemsDisplay:Iproductcart={} as Iproductcart;



  cartnumber:number=0;

  cartItem:number=0;

  displaycart(){
    this._CartService.displayproductToCart().subscribe({
      next:(res)=>{
        this.cartItem=res.numOfCartItems;
        this.cartnumber=res.numOfCartItems;
           this.cartItemsDisplay=res.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  RomovespecificCart(id:string){
   if( window.confirm('Do You Sure Delete this product in cart')==true){
    this._CartService.removeproductToCart(id).subscribe({
      next:(res)=>{
        this.displaycart()
        if(res.status=='success'){
        /*   this._CartService.numberofcart.next(res.numOfCartItems); */
        this._CartService.numberofcart.set(res.numOfCartItems)

          this._ToastrService.success('Ok')
          this.cartItemsDisplay=res.data;
        }
      },
      error:(err)=>{
        console.log(err);
      }
     })
   }

  }


  updateCart(id:string,count:number){
   if(count>0){
    this._CartService.UpdatproductToCart(id,`${count}`).subscribe({
      next:(res)=>{
        this.displaycart()
        this._ToastrService.success('Ok')
        this.cartItemsDisplay=res.data; 
      },
      error:(err)=>{
        console.log(err);
      }
     })
   }
  }




  ClearCart(){
    if(window.confirm('Do You Sure Delete all products in cart')==true){
      this._CartService.removeAllproductToCart().subscribe({
        next:(res)=>{
        this.displaycart()


          if(res.message==='success'){
            /* this._CartService.numberofcart.next(0); */
        this._CartService.numberofcart.set(0)

               this.cartItemsDisplay= {} as Iproductcart;
               this._Router.navigate(['\home'])
          }
        },
        error:(err)=>{
          console.log(err);
        }
       })
    }

  }


  ngOnInit(): void {
     this.displaycart();
  }




}


