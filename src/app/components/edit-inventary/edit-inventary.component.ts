import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreInventary } from 'src/app/api/models';
import { StoreInventaryService } from 'src/app/api/services/store-inventary.service';

@Component({
  selector: 'app-edit-inventary',
  templateUrl: './edit-inventary.component.html',
  styleUrls: ['./edit-inventary.component.scss']
})
export class EditInventaryComponent implements OnInit{
  stockInventaryId = 0;
  Inventary:StoreInventary | undefined = undefined

  constructor(private inventary:StoreInventaryService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(v => {
      let stockInventaryId = v.get('storeId');
      this.stockInventaryId = parseInt(stockInventaryId ?? '0' ,10);
    })
  }

  ngOnInit(): void {
    this.inventary.getById(this.stockInventaryId)
      .subscribe(data => {
        this.Inventary = data;
        console.log(data);
      });
  }


}
