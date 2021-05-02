import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'app/models/category';
import { DataResult } from 'app/models/dataResult';
import { Result } from 'app/models/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
path="https://localhost:44314/api/Categories/"
  constructor(private http:HttpClient) { }

  getCategories():Observable<DataResult<Category[]>>{
    return this.http.get<DataResult<Category[]>>(this.path+"getall");
  }

  createCategory(category:Category):Observable<Result>{
    return this.http.post<Result>(this.path+"add",category)
  }
}
