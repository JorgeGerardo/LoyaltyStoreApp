import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductCartItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  rootUrl = environment.apiUrl;
  constructor(private http:HttpClient) {
    this.rootUrl += "/Sale"
  }


  AddSale(cartItems:ProductCartItem[]){
    return this.http.post(this.rootUrl, cartItems)
  }

}
