import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/sale', title: 'Sale',  icon: 'dashboard', class: '' },
    { path: '/product-create', title: 'Product Create',  icon:'person', class: '' },
    { path: '/product-list', title: 'Product List',  icon:'content_paste', class: '' },
    { path: '/category-create', title: 'Category Create',  icon:'library_books', class: '' },
    { path: '/customer-create', title: 'Customer Create',  icon:'bubble_chart', class: '' },
    { path: '/customer-list', title: 'Customer List',  icon:'location_on', class: '' },
    { path: '/order-list', title: 'Order List',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
