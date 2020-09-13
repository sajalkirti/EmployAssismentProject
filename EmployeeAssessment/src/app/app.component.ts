import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeAssessment';
  isAdmin:boolean=false;
  optionSelect : string;
  constructor(private router:Router)
  {

  }
  CheckValid(isvalid:boolean):void
  {
    this.isAdmin=isvalid;
    this.optionSelect="";
  }

  GetEmployee():void{
    this.router.navigate(['/Employee'])
  }
}
