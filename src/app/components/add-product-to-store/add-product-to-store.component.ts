import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services/product.service';
import { StoreInventaryService } from 'src/app/api/services/store-inventary.service';

@Component({
  selector: 'app-add-product-to-store',
  templateUrl: './add-product-to-store.component.html',
})
export class AddProductToStoreComponent implements OnInit {

  storeId = 0;
  availableProducts:Product[] = []
  selectedProductId = 0;
  quantity = 0;

  constructor(activated:ActivatedRoute, private products:ProductService, private storeInventary:StoreInventaryService) {
    activated.paramMap.subscribe(
      v => {
        let storeId = v.get("storeId");
        this.storeId = parseInt(storeId ?? '0', 10);
        console.log(storeId);
      }
    )
  }

  
  ngOnInit() {
    this.products.getAll().subscribe(p => this.availableProducts = p);
  }


  addProductToStore(){
    if (this.selectedProductId === 0){
      alert('Seleccione un producto');
      return;
    }

    
    this.storeInventary.addNewStock(this.storeId, {
      productId: this.selectedProductId,
      stock: this.quantity,
      storeId: this.storeId
    }).subscribe({
      next: () => alert('Operación con éxito'),
      error: () => alert('El registro ya existe, si desea agregar más debera ir a la sección de editar')
    })
  }

}
