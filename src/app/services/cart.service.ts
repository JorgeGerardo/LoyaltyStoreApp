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
  }

  getItems(){
    return this.cartItems;
  }

  removeAll(){
    this.cartItems = [];
  }


  updateState(newCartItem:ProductCartItem){
    const existingItem = this.cartItems.find(product => product.id === newCartItem.id);

    if (existingItem)
      existingItem.quantity = newCartItem.quantity;
  }

  deleteItem(newCartItem:ProductCartItem){
    let index = this.cartItems.findIndex(i => i.id === newCartItem.id);

    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
