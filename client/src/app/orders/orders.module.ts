import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [OrdersComponent, OrderDetailedComponent],
  imports: [
    SharedModule,
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
