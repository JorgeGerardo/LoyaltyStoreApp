import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { StoreInventary } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services/product.service';
import { StoreInventaryService } from 'src/app/api/services/store-inventary.service';

@Component({
  selector: 'app-edit-inventary',
  templateUrl: './edit-inventary.component.html',
  styleUrls: ['./edit-inventary.component.scss']
})
export class EditInventaryComponent implements OnInit{
  stockInventaryId = 0;
  CurrentInventary:StoreInventary = {
    id: 0,
    productId: 0,
    stock: 0,
    storeId: 0
  }

  productImage = "";
  productTitle = "No title";

  constructor(private inventary:StoreInventaryService, private activatedRoute:ActivatedRoute, private productS:ProductService) {
    this.activatedRoute.paramMap.subscribe(v => {
      let stockInventaryId = v.get('storeId');
      this.stockInventaryId = parseInt(stockInventaryId ?? '0' ,10);
    })
  }

  ngOnInit() {
    this.inventary.getById(this.stockInventaryId).pipe(
      tap((v) => {
        this.productS.getById(v.id).subscribe(v => {
          this.productTitle = v.title;
          this.productImage = v.image
        })
      })
    )
      .subscribe(data => {
        this.CurrentInventary = data;
        console.log(data);
      });
  }

  confirmEdit(){
    if (this.CurrentInventary === undefined)
      return;
    
    this.inventary.update(this.stockInventaryId, {
      id: this.stockInventaryId,
      productId: this.CurrentInventary?.productId,
      stock: this.CurrentInventary?.stock,
      storeId: this.CurrentInventary?.storeId
    }).subscribe({
      next: () => alert("Se realizo correctamente"),
      error: () => alert("Ha ocurrido un error")
    });
  }

}
