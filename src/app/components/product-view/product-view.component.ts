import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductCartItem } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent  implements OnInit {
  productId:string | null = null ;
  product:Product | undefined = undefined;
  quantity = 1;
  
  constructor(private activedRoute:ActivatedRoute, private productService:ProductService, private cart:CartService){
    this.activedRoute.paramMap
      .subscribe(v => this.productId = v.get('id'))
  }

  ngOnInit(): void {
    if (this.productId !== null) {
      this.productService.getById(parseInt(this.productId, 10))
        .subscribe(product => this.product = product);
    }
  }

  addToCart(){
    if (this.product !== undefined) {
      let newCartItem:ProductCartItem = {
        ...this.product,
        quantity: this.quantity
      }
      this.cart.addItem(newCartItem);
    }
  }
  
}
