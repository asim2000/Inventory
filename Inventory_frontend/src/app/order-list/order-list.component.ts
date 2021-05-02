import { Component, OnInit } from '@angular/core';
import { Order } from 'app/models/order';
import { AlertifyService } from 'app/services/alertify.service';
import { OrderService } from 'app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders:Order[]=[]

  constructor(private orderService:OrderService,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orderService.getOrders()
    .subscribe(response=>{
      if (response.success) {
        this.orders=response.data
      }else{
        this.alertifyService.error(response.message)
      }
    },err=>{
      this.alertifyService.error(err)
    })
  }



}
