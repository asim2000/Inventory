import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Customer } from 'app/models/customer';
import { DataResult } from 'app/models/dataResult';
import { Result } from 'app/models/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
path="https://localhost:44314/api/Customers/"
  constructor(private http:HttpClient) { }

  createCustomer(customer:Customer):Observable<Result>{
    return this.http.post<Result>(this.path+"add",customer)
  }

  getCustomers():Observable<DataResult<Customer[]>>{
    return this.http.get<DataResult<Customer[]>>(this.path+"getall")
  }

  updateCustomer(customer:Customer):Observable<Result>{
    return this.http.post<Result>(this.path+"update",customer)
  }
  deleteCustomer(customer:Customer):Observable<Result>{
    return this.http.post<Result>(this.path+"delete",customer)
  }

  getCustomerByIdentity(identity:string):Observable<DataResult<Customer>>{
    return this.http.get<DataResult<Customer>>(this.path+"getcustomerbyidentity?identity="+identity);
  }
}
