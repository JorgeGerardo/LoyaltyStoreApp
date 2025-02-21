import { BaseModel } from "./../models";

export interface Product extends BaseModel {
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface ProductCreateDto {
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface ProductUpdateDto extends Partial<Product> {
    id?: number;
}

export interface ProductCartItem extends Product {
    quantity: number;
}
