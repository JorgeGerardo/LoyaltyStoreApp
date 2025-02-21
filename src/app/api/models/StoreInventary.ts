import { BaseModel } from "./../models";

export interface StoreInventary extends BaseModel {
    productId: number;
    storeId: number;
    stock: number;
}

export interface StoreInventaryCreateDTO {
    productId: number;
    storeId: number;
    stock: number;
}

export interface StoreInventaryUpdateDTO extends BaseModel {
    productId: number;
    storeId: number;
    stock: number;
}

export interface StoreInventaryView {
    stockId: number;
    title: string;
    image: string;
    productId: number;
    storeId: number;
    stock: number;
  }
  