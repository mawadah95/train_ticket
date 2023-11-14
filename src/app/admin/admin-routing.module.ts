import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HomeComponent } from '../home/home.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { ViewtrainComponent } from './viewtrain/viewtrain.component';


const routes: Routes = [
  

       { path: 'adminlogin', component: AdminloginComponent },
       { path: 'adminpage', component: AdminpageComponent },
       { path: '', component: HomeComponent },
       { path: 'addtrain', component: AddtrainComponent },
       { path: 'viewtrain', component: ViewtrainComponent },
       { path: '', redirectTo: '/addtrain', pathMatch: 'full' },

      
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
