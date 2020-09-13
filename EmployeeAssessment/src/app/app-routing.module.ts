import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeloginComponent} from './company/employeelogin/employeelogin.component'
import { PageNotFoundComponent } from './Common/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo:'Employee', pathMatch:'full'},
  {
    path:'Employee',component: EmployeeComponent
  },
  {
    path:'EmployeeloginComponent',component:EmployeeloginComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
