import { BaseModel } from "./BaseModel";

export interface InventaryTransaction extends BaseModel {
    quatity: number;
    date: string;
    productId: number;
    storeId: number;
    transactionId: number;
}

export interface InventaryTransactionCreateDTO {
    quatity: number;
    productId: number;
    storeId: number;
}

export interface InventaryTransactionUpdateDTO extends InventaryTransactionCreateDTO { }
