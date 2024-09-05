import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetalisComponent } from './components/detalis/detalis.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundedComponent } from './components/notfounded/notfounded.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsbrandsComponent } from './core/component/detailsbrands/detailsbrands.component';
import { DetaiscatComponent } from './core/components/detaiscat/detaiscat.component';
import { FormcashComponent } from './core/components/formcash/formcash.component';
import { FormorderComponent } from './core/formorder/formorder.component';
import { authGuard } from './core/guards/auth.guard';
import { guardBlankGuard } from './core/guards/guard-blank.guard';
import { detailsbrandResolver } from './detailsbrand.resolver';
import { detailscatResolver } from './detailscat.resolver';
import { detailsdataResolver } from './detailsdata.resolver';


export const routes: Routes = [

    {path:'',  component:AuthLayoutComponent,canActivate:[authGuard],children:
        [    
            {path:'',redirectTo:'login',pathMatch:'full'},
            {path:'login',component:LoginComponent,title:'Login'},
            {path:'register',component:RegisterComponent,title:'Register'},
            {path:'forget',component:ForgetpassComponent,title:'Register'},
        ]
    },



    {path:''   ,component:BlankLayoutComponent,canActivate:[guardBlankGuard],children:
        [
            {path:'home',component:HomeComponent,title:'Home'},
            {path:'cart',component:CartComponent,title:'Cart'},
            {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:'Products'},
            {path:'categories',component:CategoriesComponent,title:'Categories'},
            {path:'prands',component:BrandsComponent,title:'Brands'},
            {path:'wishlist',loadComponent:()=>import('./core/components/wishlist/wishlist.component').then((m)=>m.WishlistComponent),title:'wishlist'},
            {path:'allorders',loadComponent:()=>import('./core/component/allorders/allorders.component').then((m)=>m.AllordersComponent),title:'allorders'},
            {path:'formorder/:id',component:FormorderComponent,title:'formorder'},
            {path:'formcash/:id',component:FormcashComponent,title:'formcash'},
            {path:'details/:id',component:DetalisComponent,resolve:{datadetails:detailsdataResolver},title:'details'},
            {path:'CatDetails/:idCat',component:DetaiscatComponent,resolve:{datadetailscat:detailscatResolver},title:'details'},
            {path:'brandDetails/:idbrand',component:DetailsbrandsComponent,resolve:{datadetailsbrand:detailsbrandResolver},title:'details'},
        ]
    },

    {path:'**',component:NotfoundedComponent,title:'Nout Founded'},

     
];
