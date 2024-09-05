import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedproductComponent } from "../../core/components/sharedproduct/sharedproduct.component";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';
import { WishlistService } from '../../core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, SharedproductComponent,FormsModule,SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit , OnDestroy {
private readonly _ProductService=inject(ProductService)


text:string='';

allproducts:Iproduct[]=[];

productsSub!:Subscription

 productloading:boolean=false; 

ngOnInit(): void {
  this.page1();
}


page1():void{
  this._ProductService.Allproduct().subscribe({
    next:(res)=>{
      this.productloading=true;
      this.allproducts=res.data;
     
      
    },
    error:(err)=>{
        console.log(err);
    }
})
}

page2():void{

  
  this._ProductService.Allproductpage2().subscribe({
    next:(res)=>{
      this.productloading=true;
      this.allproducts=res.data;
     
      
    },
    error:(err)=>{
        console.log(err);
    }
})
}

ngOnDestroy(): void {
  this.productsSub?.unsubscribe()
}

private readonly _WishlistService=inject(WishlistService);
private readonly _ToastrService=inject(ToastrService);




}
