import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/api/models';
import { StoreService } from 'src/app/api/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit{

  stores:Store[] = []

  constructor(private storeService:StoreService) {
    
  }
  ngOnInit(): void {
    this.storeService.getAll().subscribe(v => this.stores = v);
  }

  check(){
    console.log(this.stores);
  }

  editStore(id:number){
    //TODO: Debería ser un routerlink
  }

  deleteStore(id:number){
    this.storeService.delete(id).subscribe({
      next: () => {
        this.stores = this.stores.filter(store => store.id !== id);      
      }
    })
  }
}
