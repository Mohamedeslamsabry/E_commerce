import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Subscription } from 'rxjs';
import { Ibrand } from '../../core/interfaces/ibrand';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit , OnDestroy  {


private readonly _BrandsService=inject(BrandsService);
brandsSub!:Subscription;

Allbrand:Ibrand[]=[];

loadbrands:boolean=false;

ngOnInit(): void {
    this._BrandsService.AllBrands().subscribe({
      next:(res)=>{
        this.loadbrands=true;
           this.Allbrand=res.data
      },
      error:(err)=>{
           console.log(err);
      }
    })
}


ngOnDestroy(): void {
    this.brandsSub?.unsubscribe();
}



}
