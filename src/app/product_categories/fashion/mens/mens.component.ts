import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit { 
  public productList :any;

  constructor(private api :ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{this.productList= res;
    
      this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
      });
      
    })
  }

  mens : string = "men's clothing"
  addToCart(item : any){
    this.cartService.addToCart(item);
  }

}
