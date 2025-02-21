import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product-to-store',
  templateUrl: './add-product-to-store.component.html',
})
export class AddProductToStoreComponent {
  constructor(private activated:ActivatedRoute) {
    activated.paramMap.subscribe(
      v => {
        let storeId = v.get("storeId");
        console.log(storeId);
      }
    )
  }
}
