import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList :any;
 

  constructor(private api :ApiService, private cartService : CartService,
   private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{this.productList= res;
    
      this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
      });
      
    })
  }
  nameSearch: string=''

  addToCart(item : any){
    this.cartService.addToCart(item);
  }

  
}
