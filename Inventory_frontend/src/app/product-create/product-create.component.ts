import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category';
import { Product } from 'app/models/product';
import { AlertifyService } from 'app/services/alertify.service';
import { CategoryService } from 'app/services/category.service';
import { ProductService } from 'app/services/product.service';
import { error } from 'jquery';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:Product=new Product()
  currentProduct=new Product()
  categories:Category[]=[]
  constructor(
    private productService:ProductService,
    private categoryService:CategoryService,
    private alertifyService:AlertifyService
    ) { }

  ngOnInit(): void {
    this.getCategories()
  }
  createProduct(){
    this.productService.createProduct(this.product)
    .subscribe(response=>{
      if (response.success) {
        this.alertifyService.success(response.message);
      }else{
        this.alertifyService.error(response.message);
      }
    })
    this.product=new Product()
  }
 getCategories(){
  this.categoryService.getCategories()
  .subscribe(response=>{
    if (response.success) {
      this.categories=response.data
    }else{
    alert(response.message)
    }
  })
 }

 getProduct(barkod:string){
  this.productService.getProducts()
  .subscribe(response=>{
    response.data.forEach(prd=>{
    if (prd.barkod==barkod) {
      this.currentProduct=prd
    }
    })
  })
 }

 addExistProduct(quantity:number){
   this.currentProduct.quantity+=+quantity;
   this.productService.updateProduct(this.currentProduct)
   .subscribe(response=>{
     if (response.success) {
      this.currentProduct=new Product()
       this.alertifyService.success(response.message)
     }else{
      this.alertifyService.error(response.message)
     }
   })
   
 }
 
}
