import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeAssessment';
  isAdmin:boolean=false;
  optionSelect : string;
  CheckValid(isvalid:boolean):void
  {
    this.isAdmin=isvalid;
    this.optionSelect="";
  }
}
