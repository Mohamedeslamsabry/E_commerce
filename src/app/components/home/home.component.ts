import { Component, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedproductComponent } from '../../core/components/sharedproduct/sharedproduct.component';
import { JsonPipe, NgClass } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    RouterLink,
    SharedproductComponent,
    SearchPipe,
    FormsModule,
    NgClass,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _ProductService = inject(ProductService);
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);

  text: string = '';

  loadproduct: boolean = false;
  loadCategory: boolean = false;

  Allproduct: Iproduct[] = [];
  productSub!: Subscription;
  AllCategores: Icategory[] = [];

  msgErrorApi: string = '';
  msgErrorApicat: string = '';
  allproductsinwislist: [] = [];

  coloricon: boolean = false;
  ngOnInit(): void {
    this._NgxSpinnerService.show('loading');

    /*  this._WishlistService.GetproductToWishlist().subscribe({
      next:(res)=>{
        this.allproductsinwislist=res.data;
        console.log(this.allproductsinwislist);
      },
      error:(err)=>{
        console.log(err);
      }
    }) */

    //! category
    this._CategoriesService.AllCategories().subscribe({
      next: (res) => {
        this._NgxSpinnerService.hide('loading');
        this.loadCategory = true;
        this.AllCategores = res.data;
      },
      error: (err) => {
        this._NgxSpinnerService.hide('loading');

        this.msgErrorApicat = err.error.message;
      },
    });

    //! product
    this.productSub = this._ProductService.Allproduct().subscribe({
      next: (res) => {
        this._NgxSpinnerService.hide('loading');

        this.loadproduct = true;
        this.Allproduct = res.data;
      },
      error: (err: HttpErrorResponse) => {
        this._NgxSpinnerService.hide('loading');

        console.log(err);
        this.msgErrorApi = err.error.message;
      },
    });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  //! option
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    rtl: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1100: {
        items: 6,
      },
    },
    nav: true,
  };

  //! option Main slider static
  customOptionsmain: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    rtl: true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
  };
}
