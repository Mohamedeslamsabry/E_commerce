import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Icategory } from '../../interfaces/icategory';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detaiscat',
  standalone: true,
  imports: [],
  templateUrl: './detaiscat.component.html',
  styleUrl: './detaiscat.component.scss',
})
export class DetaiscatComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _CategoriesService = inject(CategoriesService);

  detailsCat:Icategory|null=null 

  ngOnInit(): void {
 /*    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
       let idCat=param.get('idCat')
        //!call Api

        this._CategoriesService.specificCategories(idCat).subscribe({
          next:(res)=>{
              this.detailsCat=res.data;
          },
          error:(err)=>{
                console.log(err);
                
          }
        })

        
       
      },
    }); */
   
   
    this._ActivatedRoute.data.subscribe({
      next:(datacat)=>{
           this.detailsCat= datacat['datadetailscat']['data']
      }
    })
  }



}
