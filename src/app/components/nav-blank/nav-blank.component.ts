import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RegisterService } from '../../core/services/register.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslationService } from '../../core/services/mytranslation.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent {
  public readonly _RegisterService=inject(RegisterService)
  public readonly _CartService=inject(CartService)
   _MytranslationService=inject(MytranslationService)
   _TranslateService=inject(TranslateService)


numercartuser=computed(()=>this._CartService.numberofcart())

ngOnInit(): void {
  this._CartService.displayproductToCart().subscribe({
    next:(res)=>{
    /*   this._CartService.numberofcart.next(res.numOfCartItems) */
    this._CartService.numberofcart.set(res.numOfCartItems)

      
    }
  })
/* this.numercartuser=this._CartService.numberofcart; */

/* this._CartService.numberofcart.subscribe({
  next:(data)=>{
    this.numercartuser=data;
  }
}) */
}

signOutt(){
 this._RegisterService.signout();
}

selectlangugue(id:string){
   this._MytranslationService.selectlang(id)
}

}
