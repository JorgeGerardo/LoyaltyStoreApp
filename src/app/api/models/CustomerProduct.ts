import { BaseModel } from "./../models";

export interface CustomerProduct extends BaseModel {
    customerId: number;
    productId: number;
    date: Date;
}
