import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category';
import { Product } from 'app/models/product';
import { AlertifyService } from 'app/services/alertify.service';
import { CategoryService } from 'app/services/category.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  currentProduct:Product
  categories:Category[]=[]
  constructor(private productService:ProductService,
              private alertifyService:AlertifyService,
              private categoryService:CategoryService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProductsWithCategory()
    .subscribe(response=>{
      if (response.success) {
        this.products=response.data
      }else{
        this.alertifyService.error(response.message)
      }
    },err=>{
     this.alertifyService.error(err)
    })
  }

  editProduct(){
    this.productService.updateProduct(this.currentProduct)
    .subscribe(response=>{
      if (response.success) {
        this.getProducts()
        this.currentProduct=null
        this.alertifyService.success(response.message)
      }else{
        this.alertifyService.error(response.message)
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }

  setCurrentProduct(product:Product){
     this.currentProduct=product
     this.getCategories()
  }

  deleteProduct(product:Product){
    this.productService.deleteProduct(product)
    .subscribe(response=>{
      if (response.success) {
        this.getProducts()
        this.alertifyService.success(response.message)
      }else{
        this.alertifyService.error(response.message)
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(response=>{
      if (response.success) {
        this.categories=response.data
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }

}
