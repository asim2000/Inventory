import { Customer } from "./customer";
import { Product } from "./product";

export class Order{
    id:number;
    productId:number;
    product:Product;
    customerId:number;
    customer:Customer;
    price:number;
    quantity:number;
    total:number;
    constructor(productId:number,customerId:number,price:number,quantity:number,total:number){
     this.productId=productId
     this.customerId=customerId
     this.price=price
     this.quantity=quantity
     this.total=total
    }
}