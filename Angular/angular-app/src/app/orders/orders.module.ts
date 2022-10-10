import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';


@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule ],
  declarations: [ OrdersComponent ]
})
export class OrdersModule { }
