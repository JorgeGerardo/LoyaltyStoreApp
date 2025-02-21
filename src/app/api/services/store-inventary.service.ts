import { Injectable } from '@angular/core';
import { StoreInventary, StoreInventaryCreateDTO, StoreInventaryUpdateDTO, StoreInventaryView } from "../models";
import { HttpClient } from '@angular/common/http';
import { GenericEndpointController } from 'src/app/Core/GenericEndpointController';

@Injectable({
  providedIn: 'root'
})
export class StoreInventaryService extends GenericEndpointController<StoreInventary, StoreInventaryCreateDTO, StoreInventaryUpdateDTO>{
  constructor(private http:HttpClient) { 
    super(http);
    this.rootUrl += "/StoreInventary"
  }

  getInventary(storeId:number){
    return this.http.get<StoreInventaryView[]>(`${this.rootUrl}/store-inventary/${storeId}`);
  }

}
