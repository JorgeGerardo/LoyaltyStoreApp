import { BaseModel } from "./../models";

export interface Store extends BaseModel {
    sucursal: string;
    address: string;
}

export interface StoreCreateDto {
    sucursal: string;
    address: string;
}

export interface StoreUpdateDto extends BaseModel {
    sucursal: string;
    address: string;
}