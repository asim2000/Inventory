import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResult } from 'app/models/dataResult';
import { Order } from 'app/models/order';
import { Result } from 'app/models/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
path="https://localhost:44314/api/orders/"
  constructor(private http:HttpClient) { }

  createOrder(order:Order):Observable<Result>{
    return this.http.post<Result>(this.path+"add",order)
  }

  getOrders():Observable<DataResult<Order[]>>{
    return this.http.get<DataResult<Order[]>>(this.path+"getall")
  }

}
