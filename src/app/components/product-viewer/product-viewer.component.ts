import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services/product.service';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.scss']
})
export class ProductViewerComponent implements OnInit{
  products:Product[] = [];
  constructor(private store:ProductService) { }

  ngOnInit(): void {
    this.store.getAll().subscribe(products => this.products = products);
  }

  get(){
    this.store.getAll().subscribe(c => console.log(c));
  }

  post(){
    // this.store.post({
    //   address: '444',
    //   sucursal: "Walmart 444",
    // }).subscribe(console.log);
  }

  update(){
    // this.store.update(2, {
    //   address: 'Santa Catarina, NL',
    //   sucursal: "Walmart 222",
    //   id: 2
    // }).subscribe(v => console.log(v));
  }

  getById(){
    // this.store.getById(2).subscribe(v => {
    //   console.log(v.id);
    //   console.log(v.address);
    //   console.log(v.sucursal);
    // });
  }

  count(){
    this.store.count().subscribe(console.log);
  }

  remove(){
    this.store.delete(3).subscribe(console.log);
  }
}
