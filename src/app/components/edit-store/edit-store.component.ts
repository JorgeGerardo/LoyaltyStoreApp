import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreUpdateDto } from 'src/app/api/models';
import { StoreService } from 'src/app/api/services/store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
})
export class EditStoreComponent implements OnInit{
  storeId = 0;
  dto:StoreUpdateDto | undefined = undefined;

  constructor(activated:ActivatedRoute, private store:StoreService) {
    activated.paramMap.subscribe(p => {
      this.storeId = parseInt(p.get('storeId') ?? '0', 10);
    })
  }


  ngOnInit(): void {
    this.store.getById(this.storeId).subscribe(v => this.dto = v)
  }

  updateStore(){
    if (this.dto === undefined)
      return;

    this.store.update(this.storeId, this.dto).subscribe({
      next: () => alert('Operación realizada con éxito'),
      error: (er:HttpErrorResponse) => alert('Ha ocurrido un error ' +er.error)
    })
  }
}
