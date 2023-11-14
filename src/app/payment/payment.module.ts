import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { BillComponent } from './bill/bill.component';
import { PayComponent } from './pay/pay.component';



@NgModule({
  declarations: [
    BillComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
