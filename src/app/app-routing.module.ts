import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { AddtrainComponent } from './admin/addtrain/addtrain.component';
import { ViewtrainComponent } from './admin/viewtrain/viewtrain.component';
import { BookticketComponent } from './user/bookticket/bookticket.component';
import { BillComponent } from './payment/bill/bill.component';
import { PayComponent } from './payment/pay/pay.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminRoutingModule },
  { path: 'contact', component: ContactusComponent },
  { path: 'login', component: LoginuserComponent },
  { path: 'register', component: RegisterComponent },
  



  {
    path: 'admin',
    children: [
       { path: 'adminlogin', component: AdminloginComponent },
      { path: 'adminpage', component: AdminpageComponent },
      { path: 'addtrain', component: AddtrainComponent },
      { path: 'viewtrain', component: ViewtrainComponent },
       { path: '', redirectTo: '/addtrain', pathMatch: 'full' },

    ]
  },
  {
    path: 'user',
    children: [
      { path: 'bookticket', component: BookticketComponent },
      
    ]
  },

  {
    path: 'payment',
    children: [
      { path: 'bill/:trainName', component: BillComponent },
      { path: 'pay/:trainName', component: PayComponent },
     //  { path: 'bill', component: BillComponent },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
