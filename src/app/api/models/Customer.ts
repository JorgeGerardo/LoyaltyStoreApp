import { BaseModel } from "./../models";


// Modelo principal Customer
export interface Customer extends BaseModel {
    name: string;
    lastName: string;
    address: string;
}

export interface CustomerCreateDto {
    name: string;
    lastName: string;
    address: string;
}

export interface CustomerUpdateDto {
    name: string;
    lastName: string;
    address: string;
}

