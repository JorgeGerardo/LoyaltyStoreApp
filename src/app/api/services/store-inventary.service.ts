import { Injectable } from '@angular/core';
import { StoreInventary, StoreInventaryCreateDTO, StoreInventaryUpdateDTO } from "../models";
import { HttpClient } from '@angular/common/http';
import { GenericEndpointController } from 'src/app/Core/GenericEndpointController';

@Injectable({
  providedIn: 'root'
})
export class StoreInventaryService extends GenericEndpointController<StoreInventary, StoreInventaryCreateDTO, StoreInventaryUpdateDTO>{
  constructor(http:HttpClient) { 
    super(http);
    this.rootUrl += "/StoreInventary"
  }

}
