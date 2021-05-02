import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductCreateComponent } from 'app/product-create/product-create.component';
import { CustomerCreateComponent } from 'app/customer-create/customer-create.component';
import { CategoryCreateComponent } from 'app/category-create/category-create.component';
import { ProductListComponent } from 'app/product-list/product-list.component';
import { CustomerListComponent } from 'app/customer-list/customer-list.component';
import { OrderListComponent } from 'app/order-list/order-list.component';
import { LoginComponent } from 'app/login/login.component';
import { LoginGuard } from 'app/guards/login.guard';
import { SaleComponent } from 'app/sale/sale.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {path:'',component:SaleComponent},
    {path:'login',component:LoginComponent},
    {path:'sale',component:SaleComponent,canActivate:[LoginGuard]},
    {path:'product-create',component:ProductCreateComponent,canActivate:[LoginGuard]},
    {path:'product-list',component:ProductListComponent,canActivate:[LoginGuard]},
    {path:'customer-list',component:CustomerListComponent,canActivate:[LoginGuard]},
    {path:'order-list',component:OrderListComponent,canActivate:[LoginGuard]},
    {path:'customer-create',component:CustomerCreateComponent,canActivate:[LoginGuard]},
    {path:'category-create',component:CategoryCreateComponent,canActivate:[LoginGuard]},
];
