import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category';
import { AlertifyService } from 'app/services/alertify.service';
import { CategoryService } from 'app/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
category:Category=new Category()
  constructor(private http:CategoryService,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    
  }

  createCategory(){
    this.http.createCategory(this.category)
    .subscribe(response=>{
     if (response.success) {
      this.alertifyService.success(response.message)
     }else{
      this.alertifyService.error(response.message)
     }
    })
    this.category=new Category()
  }

}
