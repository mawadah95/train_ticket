import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { RouterModule } from '@angular/router';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { AddtrainComponent } from './admin/addtrain/addtrain.component';
import { ViewtrainComponent } from './admin/viewtrain/viewtrain.component';
import { BookticketComponent } from './user/bookticket/bookticket.component';
import { BillComponent } from './payment/bill/bill.component';
import { PayComponent } from './payment/pay/pay.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    AdminpageComponent,
    AddtrainComponent,
    ViewtrainComponent,
    BookticketComponent,
    BillComponent,
    PayComponent,
    ContactusComponent,
    LoginuserComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule, 
  
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
