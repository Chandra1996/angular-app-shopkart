import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { ElectronicsComponent } from './product_categories/electronics/electronics.component';
import { JeweleryComponent } from './product_categories/jewelery/jewelery.component';
import { FashionComponent } from './product_categories/fashion/fashion.component';
import { MensComponent } from './product_categories/fashion/mens/mens.component';
import { WomensComponent } from './product_categories/fashion/womens/womens.component';
import { CategoriesListComponent } from './header/categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    CategoryPipe,
    ElectronicsComponent,
    JeweleryComponent,
    FashionComponent,
    MensComponent,
    WomensComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
