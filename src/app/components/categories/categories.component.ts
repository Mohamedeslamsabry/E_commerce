import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interfaces/icategory';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit , OnDestroy {

private readonly _CategoriesService=inject(CategoriesService)


/* Allcategories:Icategory[]=[]; */
Allcategories:WritableSignal<Icategory[]>=signal([])

categoriesSub!:Subscription;

loadCat:boolean=false;

ngOnInit(): void {
    this._CategoriesService.AllCategories().subscribe({
      next:(res)=>{
        this.loadCat=true;
        this.Allcategories.set(res.data);
      },
      error:(err)=>{
           console.log(err);
      }

    })
}

ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe();
};


}
