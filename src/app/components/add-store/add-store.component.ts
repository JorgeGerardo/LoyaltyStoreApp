import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreCreateDto, StoreUpdateDto } from 'src/app/api/models';
import { StoreService } from 'src/app/api/services/store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
})
export class AddStoreComponent {
  storeId = 0;

  dto:StoreCreateDto = {
    address: "",
    sucursal: ''
  };

  constructor(private store:StoreService) { }

  createStore(){
    if (this.dto && this.dto.address.trim() !== '' && this.dto.sucursal.trim() !== '') {
      this.store.post(this.dto).subscribe({
        next: () => {
          alert('Agregados correctamente');
          this.dto.address = '';
          this.dto.sucursal = '';
        },
        error: (er:HttpErrorResponse) => alert('Error: '+ '/n' + er.error),
      });
    }
  }


}
