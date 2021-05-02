import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ProductCreateComponent } from 'app/product-create/product-create.component';
import { CustomerCreateComponent } from 'app/customer-create/customer-create.component';
import { CategoryCreateComponent } from 'app/category-create/category-create.component';
import { CustomerListComponent } from 'app/customer-list/customer-list.component';
import { OrderListComponent } from 'app/order-list/order-list.component';
import { ProductListComponent } from 'app/product-list/product-list.component';
import { LoginComponent } from 'app/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/interceptors/auth.interceptor';
import { SaleComponent } from 'app/sale/sale.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CustomerCreateComponent,
    CategoryCreateComponent,
    ProductCreateComponent,
    CustomerListComponent,
    OrderListComponent,
    ProductListComponent,
    LoginComponent,
    SaleComponent
  ],
  providers:[
  ]
})

export class AdminLayoutModule {}
