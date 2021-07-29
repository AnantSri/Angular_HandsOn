import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'Models/Employee';
import { EmployeeService } from '../employeeservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employeeList:Employee[]=[];

  
  filteredEmployees:Employee[]=[];

  
  searchKey:string="";

  
  constructor(private obj:EmployeeService,private router:ActivatedRoute){}

  ngOnInit(): void 
  {
    this.employeeList=this.obj.getAllEmployees();
  }

  
  search():void
  {
    
    if(this.searchKey!="")
    this.filteredEmployees=this.employeeList.filter((emp_item)=>emp_item.name.toLowerCase().indexOf(this.searchKey.toLocaleLowerCase())!=-1);
    else
    this.filteredEmployees=[];
    
  }

}
