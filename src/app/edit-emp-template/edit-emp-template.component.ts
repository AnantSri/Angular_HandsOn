import { Component, OnInit } from '@angular/core';
import { Department } from 'Models/Department';
import { Employee } from 'Models/Employee';

@Component({
  selector: 'app-edit-emp-template',
  templateUrl: './edit-emp-template.component.html',
  styleUrls: ['./edit-emp-template.component.css']
})
export class EditEmpTemplateComponent implements OnInit {

  employee:Employee=
  {
     id:3,
     name:"Anant",
     salary:10800,
     permanent:true,
     department:{id:1,name:"PayRoll"},
     skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
     dateOfBirth:new Date("1999-10-13"),
     photoURL:""
  };

  //Creating array for drop down list.
  departments:Department[]=[];
  
  constructor() { }

  ngOnInit(): void 
  {
    this.departments=[{id:1,name:"Payroll"},{id:2,name:"Internal"},{id:3,name:"HR"}];
  }

  onSubmit():void
  {
    console.log(this.employee);
  }

}
