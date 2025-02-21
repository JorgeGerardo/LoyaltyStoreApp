import { BaseModel } from "./../models";

export enum Role {
    Customer = 'Customer',
    Admin = 'Admin'
}

export interface User extends BaseModel {
    email: string;
    hashPassword: string;
    customerId?: number;
    role: Role;
}

export interface UserLoginDTO {
    email: string;
    password: string;
}

