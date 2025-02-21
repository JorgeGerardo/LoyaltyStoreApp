import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreInventary, StoreInventaryView } from 'src/app/api/models';
import { StoreInventaryService } from 'src/app/api/services/store-inventary.service';

@Component({
  selector: 'app-store-inventary-viewer',
  templateUrl: './store-inventary-viewer.component.html',
  styleUrls: ['./store-inventary-viewer.component.scss']
})
export class StoreInventaryViewerComponent implements OnInit{
  inventary:StoreInventaryView[] = [];
  inventaryId = 0;

  constructor(private InventaryService:StoreInventaryService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(v => {
      let x = v.get('storeId');
      console.log(x);
      this.inventaryId = parseInt(x ?? '0' ,10);
    })
  }

  ngOnInit(): void {
    this.InventaryService.getInventary(this.inventaryId).subscribe(v => this.inventary = v);
  }

  editItem(item:StoreInventaryView){

  }

}
