import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResult } from 'app/models/dataResult';
import { Product } from 'app/models/product';
import { Result } from 'app/models/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
path="https://localhost:44314/api/Products/"
  constructor(private http:HttpClient) { }

  createProduct(product:Product):Observable<Result>{
    return this.http.post<Result>(this.path+"add",product);
  }

  getProducts():Observable<DataResult<Product[]>>{
    return this.http.get<DataResult<Product[]>>(this.path+"getall");
  }
  getProductsWithCategory():Observable<DataResult<Product[]>>{
    return this.http.get<DataResult<Product[]>>(this.path+"getproductswithcategory");
  }

  updateProduct(product:Product):Observable<Result>{
    return this.http.post<Result>(this.path+"update",product);
  }

  deleteProduct(product:Product):Observable<Result>{
    return this.http.post<Result>(this.path+"delete",product);
  }

  checkProductCount(product:Product):Observable<DataResult<number>>{
    return this.http.post<DataResult<number>>(this.path+"checkproductcount",product)
  }

  getProductByBarkod(barkod:string):Observable<DataResult<Product>>{
    return this.http.get<DataResult<Product>>(this.path+"getproductbybarkod?barkod="+barkod);
  }

}
