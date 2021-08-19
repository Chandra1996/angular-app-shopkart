import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  public productList :any;

  constructor(private api :ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{this.productList= res;
    
      this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
      });
      
    })
  }

  // electronics:string ='electronics';
  addToCart(item : any){
    this.cartService.addToCart(item);
  }


}
