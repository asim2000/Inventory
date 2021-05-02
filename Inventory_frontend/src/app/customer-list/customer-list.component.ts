import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/models/customer';
import { AlertifyService } from 'app/services/alertify.service';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customers:Customer[]=[]
currentCustomer:Customer
  constructor(private customerService:CustomerService,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(){
    this.customerService.getCustomers()
    .subscribe(response=>{
      if (response.success) {
        this.customers=response.data
      }else{
        this.alertifyService.error(response.message)
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }

  deleteCustomer(customer:Customer){
    this.customerService.deleteCustomer(customer)
    .subscribe(response=>{
      if (response.success) {
        this.getCustomers()
        this.alertifyService.success(response.message)
      }else{
        this.alertifyService.error(response.message)
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }

  editCustomer(){
    this.customerService.updateCustomer(this.currentCustomer)
    .subscribe(response=>{
      if (response.success) {
        this.currentCustomer=null
        this.getCustomers()
        this.alertifyService.success(response.message)
      }else{
        this.alertifyService.error(response.message)
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }

  setCurrentCustomer(customer:Customer){
    this.currentCustomer=customer
  }

}
