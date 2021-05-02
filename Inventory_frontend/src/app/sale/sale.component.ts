import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/models/customer';
import { Order } from 'app/models/order';
import { Product } from 'app/models/product';
import { Result } from 'app/models/result';
import { AlertifyService } from 'app/services/alertify.service';
import { CustomerService } from 'app/services/customer.service';
import { OrderService } from 'app/services/order.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
product:Product=new Product()
customer:Customer=new Customer()
carts:Product[]=[]
products:Product[]
currentProduct:Product
  constructor(private productService:ProductService,
              private customerService:CustomerService,
              private alertifyService:AlertifyService,
              private orderService:OrderService) { }

  ngOnInit(): void {
  }

  getProduct(barkod:string){
    this.productService.getProductByBarkod(barkod)
    .subscribe(response=>{
     if (response.success) {
       if (response.data!=null) {
        this.product=response.data
       }
     }else{
      this.alertifyService.error(response.message)
     }
    })
   }

   getCustomer(identity:string){
    this.customerService.getCustomerByIdentity(identity)
    .subscribe(response=>{
     if (response.success) {
       if (response.data!=null) {
        this.customer=response.data
       }
     }else{
      this.alertifyService.error(response.message)
     }
    })
   }
  
   addToCart(){
     this.currentProduct=this.carts.find(prd=>prd.barkod==this.product.barkod)
     if (this.currentProduct!=null) {
        this.product.quantity+=this.currentProduct.quantity
        this.checkProductCount(this.product)
     }else{
      this.checkProductCount(this.product)
     }
   }

   checkProductCount(product:Product){
    this.productService.checkProductCount(this.product)
    .subscribe(response=>{
      if (response.success) {
        if (this.currentProduct!=null) {
           this.currentProduct.quantity=this.product.quantity
        }else{
          this.carts.push(this.product)
        }
       this.product=new Product()
      }else{
        if (this.currentProduct!=null) {
          let count:number=response.data-this.currentProduct.quantity
          this.alertifyService.error("Movcud mehsul sayi: "+count)
        }else{
          this.alertifyService.error("Movcud mehsul sayi: "+response.data)
        }
      }
    })
   }

   sell(){
    let count=0
    this.carts.forEach(cart=>{
      let order=new Order(cart.id,this.customer.id,cart.salePrice,cart.quantity,cart.salePrice*cart.quantity)
      this.orderService.createOrder(order)
      
      .subscribe(response=>{
        if (response.success) {
          count++
          if (this.carts.length==count) {
            this.carts=[]
            this.customer=new Customer()
            this.alertifyService.success(response.message)
          }
        }
      },err=>this.alertifyService.error(err))
    })
}

deleteCart(id:number){
this.carts.forEach((cart,index)=>{
  if (cart.id==id) {
    this.carts.splice(index,1)
  }
})
}
}







// this.productService.checkProductCount(this.product)
//      .subscribe(response=>{
//        if (this.carts.length>0) {
//         if (response.success) {
//           this.carts.forEach(prd=>{
//             if (prd.product.id===this.product.id) {
//               prd.quantity=prd.quantity+quantity
//               this.product=new Product()
//               return
//             }else{
//                var cart=new Cart(this.product,quantity)
//                 this.carts.push(cart)
//                 this.product=new Product()
//            }
//          })
//          }else{
//            this.alertifyService.warning(response.message)
//          }
//        }else{
//         var cart=new Cart(this.product,quantity)
//                 this.carts.push(cart)
//                 this.product=new Product()
//        }
//      },err=>{
//        this.alertifyService.error(err)
//      })

     