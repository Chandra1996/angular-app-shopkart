import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ElectronicsComponent } from './product_categories/electronics/electronics.component';
import { MensComponent } from './product_categories/fashion/mens/mens.component';
import { WomensComponent } from './product_categories/fashion/womens/womens.component';
import { JeweleryComponent } from './product_categories/jewelery/jewelery.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'search/:searchTerm', component:ProductsComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'mens_clothing',component:MensComponent},
  {path:'womens_clothing',component:WomensComponent},
  {path:'jewelery', component:JeweleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
