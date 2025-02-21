import { Component, OnInit } from '@angular/core';
import { ProductCartItem } from 'src/app/api/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-viewer',
  templateUrl: './cart-viewer.component.html',
  styleUrls: ['./cart-viewer.component.scss']
})
export class CartViewerComponent implements OnInit{
  cartItems:ProductCartItem[] = [];
  
  constructor(private cart:CartService) {
    let cartItems = this.cart.getItems();
  }

  ngOnInit() {
    this.cartItems = this.cart.getItems();
  }

  checkCart(){
    console.log(this.cart.getItems());
  }


  removeItem(product:ProductCartItem){
  }


  updateQuantity(product:ProductCartItem, quantity:number){

  }

  total(){
    return 99;
  }

}
