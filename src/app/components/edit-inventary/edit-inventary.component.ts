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
  Inventary:StoreInventary | undefined = undefined
  productImage = "";
  productTitle = "No title";

  constructor(private inventary:StoreInventaryService, private activatedRoute:ActivatedRoute, private productS:ProductService) {
    this.activatedRoute.paramMap.subscribe(v => {
      let stockInventaryId = v.get('storeId');
      this.stockInventaryId = parseInt(stockInventaryId ?? '0' ,10);
    })
  }

  ngOnInit(): void {
    this.inventary.getById(this.stockInventaryId).pipe(
      tap((v) => {
        this.productS.getById(v.id).subscribe(v => {
          this.productTitle = v.title;
          this.productImage = v.image
        })
      })
    )
      .subscribe(data => {
        this.Inventary = data;
        console.log(data);
      });
  }


}
