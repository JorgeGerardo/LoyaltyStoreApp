import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCartItem } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsQuantity = 0;
  private Obs = new BehaviorSubject<number>(0);
  itemsCartCount$ = this.Obs.asObservable();
  
  cartItems:ProductCartItem[] = [];

  constructor() { }

  addItem(newCartItem:ProductCartItem){
    const existingItem = this.cartItems.find(product => product.id === newCartItem.id);

    if (existingItem)
      existingItem.quantity += newCartItem.quantity;
    else
      this.cartItems.push(newCartItem);

    // console.log(this.cartItems); // Solo para ver el carrito actualizado    
  }

  getItems(){
    return this.cartItems;
  }
}
