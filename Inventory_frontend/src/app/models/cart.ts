import { Product } from "./product"

export class Cart{
    id:number
    product:Product
    quantity:number

    constructor(product:Product,quantity:number){
        this.id=Math.floor(Math.random()*100)
        this.product=product
        this.quantity=quantity
    }
}