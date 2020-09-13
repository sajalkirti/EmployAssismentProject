import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import {MyServiceService} from './my-service.service';
import { FilterAgeGroupPipe } from './filter-age-group.pipe'
import {EmployeeloginComponent } from './company/employeelogin/employeelogin.component';
import { PageNotFoundComponent } from './Common/page-not-found.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FilterAgeGroupPipe,
    EmployeeloginComponent,
    PageNotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(@Inject(MyServiceService) myservice)
  {
    console.log(myservice);
  }
}
