import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { OrderService } from '../../services/order.service';

import { SharedproductComponent } from "../../components/sharedproduct/sharedproduct.component";
import { Iallproduct } from '../../interfaces/iallproducts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [SharedproductComponent,RouterLink],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent {

  private readonly _RegisterService=inject(RegisterService);
  private readonly _OrderService=inject(OrderService);


  allorders:Iallproduct[]=[];
/*   allorders:WritableSignal<Iallproduct[]>=signal([]); */

  getallordersuser():void{
    this._RegisterService.SaveData();
    this._OrderService.getorderUser(this._RegisterService.userData.id).subscribe({
      next:(res)=>{
        console.log(res);
        
        this.allorders=res;
      },
      error:(err)=>{
        
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
  
  
          this.getallordersuser()
    
  }

}
