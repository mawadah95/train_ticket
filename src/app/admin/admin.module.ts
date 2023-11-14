import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HomeComponent } from '../home/home.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { ViewtrainComponent } from './viewtrain/viewtrain.component';


@NgModule({
  declarations: [
    AdminloginComponent,
    AdminpageComponent,
    HomeComponent,
    AddtrainComponent,
    ViewtrainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule, 
  
  ]
})
export class AdminModule { }
