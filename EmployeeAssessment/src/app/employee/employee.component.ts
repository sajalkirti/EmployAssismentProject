import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Employees:Employee[]=[];
  heading:string ="Employee Details"
  tableCol:string="2";
  constructor() { 

  }

  ngOnInit(): void {
    this.Employees=[
      {
        EmpId:1,
        EmpName:"sajal kirtiman",
        EmpAddress:"kolkata",
        EmpGender:"Male",
        EmpPhone:"9038595120",
        DOB: "1993-Mar-12",
        Age:40
      },
      {
        EmpId:2,
        EmpName:"sajag kirtiman",
        EmpAddress:"Ragnathpur",
        EmpGender:"Male",
        EmpPhone:"8582881653",
        DOB: "1993-Mar-26",
        Age :50
      },
      {
        EmpId:3,
        EmpName:"satwick kirtiman",
        EmpAddress:"Punjab",
        EmpGender:"Female",
        EmpPhone:"9771045678",
        DOB:"1992-Apr-17",
        Age:35
      },
      {
        EmpId:4,
        EmpName:"Arpita",
        EmpAddress:"chapra",
        EmpGender:"Female",
        EmpPhone:"8904561234",
        DOB: "1991-Jan-15",
        Age:40
      }
    ];
  }

  submitUpdate():void
  {
   
    this.Employees.push(
      {
        EmpId:5,
        EmpName:"Ritu",
        EmpAddress:"Gaya",
        EmpGender:"Female",
        EmpPhone:"6789765566",
        DOB: "1991-Jun-15",
        Age:60
      }
    )
  }
  trackByEmployeeId(index:number, emp:any):string
  {
    return emp.EmpId;
  }
}
