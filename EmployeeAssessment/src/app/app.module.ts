import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {CompanyModule} from './company/company.module'
import {MyServiceService} from './my-service.service';
import { FilterAgeGroupPipe } from './filter-age-group.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FilterAgeGroupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
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
