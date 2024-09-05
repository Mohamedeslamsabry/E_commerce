import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../../services/brands.service';
import { Ibrand } from '../../interfaces/ibrand';

@Component({
  selector: 'app-detailsbrands',
  standalone: true,
  imports: [],
  templateUrl: './detailsbrands.component.html',
  styleUrl: './detailsbrands.component.scss'
})
export class DetailsbrandsComponent {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly BrandsService = inject(BrandsService);




  detailsbrand:Ibrand|null=null;

  ngOnInit(): void {
 /*    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
       let idbrand=param.get('idbrand')
        //!call Api

        this.BrandsService.specificBrands(idbrand).subscribe({
          next:(res)=>{
             this.detailsbrand=res.data;
              
          },
          error:(err)=>{
                console.log(err);
                
          }
        })

        
       
      },
    }); */
  
  this._ActivatedRoute.data.subscribe({
    next:(databrand)=>{
        this.detailsbrand=databrand['datadetailsbrand']['data']
    }
  })
  }
}
