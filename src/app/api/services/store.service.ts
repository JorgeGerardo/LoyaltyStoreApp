import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericEndpointController } from 'src/app/Core/GenericEndpointController';
import { Store, StoreCreateDto, StoreUpdateDto } from "../models";

@Injectable({
  providedIn: 'root'
})
export class StoreService extends GenericEndpointController<Store, StoreCreateDto, StoreUpdateDto> {

  constructor(private http:HttpClient) { 
    super(http);
  }




}
