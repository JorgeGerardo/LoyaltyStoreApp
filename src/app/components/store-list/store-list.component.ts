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

  constructor(private store:StoreService) {
    
  }
  ngOnInit(): void {
    this.store.getAll().subscribe(v => this.stores = v);
  }

  check(){
    console.log(this.stores);
  }

  editStore(id:number){

  }

  deleteStore(id:number){

  }
}
