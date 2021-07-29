import { Injectable } from '@angular/core';
import { Employee } from 'Models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService 
{
  
  employeeList:Employee[]=
  [
    {
      id:1,
      name:"Jack Ma",
      salary:20000,
      permanent:true,
      department:{id:1,name:"PayRoll"},
      skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
      dateOfBirth:new Date("2000-07-15"),
      photoURL:"assets/Images/Jack.jpg"
    },
    {
      id:2,
      name:"Gautam Adani",
      salary:30000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"PHP"},{id:2,name:"MYSQL"},{id:3,name:"React"}],
      dateOfBirth:new Date("1999-06-15"),
      photoURL:"assets/Images/Gautam_Adani.jpg"
    },
    {
      id:3,
      name:"Jeff Bezos",
      salary:10000,
      permanent:false,
      department:{id:3,name:"HR"},
      skill:[{id:1,name:"JAVA"},{id:2,name:"SpringBoot"},{id:3,name:"Angular"}],
      dateOfBirth:new Date("1993-08-15"),
      photoURL:"assets/Images/jeff.jpg"
    },
    {
      id:4,
      name:"Mukesh Ambani",
      salary:30000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"C#"},{id:2,name:"ASP.NET MVC"},{id:3,name:"VUE"}],
      dateOfBirth:new Date("1993-08-15"),
      photoURL:"assets/Images/Mukesh.jpg"
    },
    {
      id:5,
      name:"Ratan Tata",
      salary:25000,
      permanent:false,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"Go"},{id:2,name:"ASP.NET CORE"},{id:3,name:"Python"}],
      dateOfBirth:new Date("1993-08-15"),
      photoURL:"assets/Images/Ratan.jpg"
    }
  ];

  constructor() { }
  
  
  empty_emp:any={};

  
  getAllEmployees():Employee[]
  {
    return this.employeeList;
  }

  
  getEmployee(employeeId:number):Employee
  {
    

    this.employeeList.forEach(item => {
      if(item.id==employeeId)
      this.empty_emp=item;  
    });

    return this.empty_emp;
  }

}
