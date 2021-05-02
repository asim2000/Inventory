import { Category } from "./category";

export class Product{
id:number;
barkod:string;
categoryId:number;
category:Category;
name:string;
quantity:number;
purchasePrice:number;
salePrice:number;
}