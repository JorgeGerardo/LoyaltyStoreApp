import { Component, OnInit } from '@angular/core';
import { ProductCartItem } from 'src/app/api/models';
import { SalesService } from 'src/app/api/services/sales.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-viewer',
  templateUrl: './cart-viewer.component.html',
  styleUrls: ['./cart-viewer.component.scss']
})
export class CartViewerComponent implements OnInit{
  cartItems:ProductCartItem[] = [];
  
  constructor(private cart:CartService, private sales:SalesService) { }

  updateState(){
    this.cartItems = this.cart.getItems();
  }

  ngOnInit() {
    this.updateState();
  }


  removeItem(product:ProductCartItem){
    this.cart.deleteItem(product);
    this.updateState();
  }


  updateQuantity(product:ProductCartItem, quantity:number){
    product.quantity = quantity;
  }

  total() {
    return this.cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
}

  pay(){
    let newSale = this.cart.getItems();
    this.sales.AddSale(this.cartItems).subscribe({
      next: () => {
        this.cart.removeAll();
        this.updateState();
        alert("Compra realizada");
      }
    });
  }
}
