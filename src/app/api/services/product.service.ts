import { Injectable } from '@angular/core';
import { GenericEndpointController } from 'src/app/Core/GenericEndpointController';
import { Product, ProductCreateDto, ProductUpdateDto } from "../models";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericEndpointController<Product, ProductCreateDto, ProductUpdateDto>{
  constructor(http:HttpClient) { 
    super(http);
    this.rootUrl += "/Product"
  }

}
