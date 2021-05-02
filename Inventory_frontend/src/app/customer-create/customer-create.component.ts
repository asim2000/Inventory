import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/models/customer';
import { Product } from 'app/models/product';
import { AlertifyService } from 'app/services/alertify.service';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
customer:Customer=new Customer()
  constructor(private customerService:CustomerService,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }

  createCustomer(){
   
    this.customerService.createCustomer(this.customer)
    .subscribe(response=>{
      if (response.success) {
        this.customer=new Customer()
        this.alertifyService.success(response.message)
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }

}
