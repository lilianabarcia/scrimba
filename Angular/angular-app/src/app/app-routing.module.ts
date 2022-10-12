import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersRoutingModule } from './orders/orders-routing.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  //{ path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [
    OrdersRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
