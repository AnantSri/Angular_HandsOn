import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'Models/Employee';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  @Input('emp') employee: Employee=  
 {
  id:1000,
  name:"UnKnown",
  salary:-10000,
  permanent:false,
  department:{id:0,name:""},
  skill:[],
  dateOfBirth:new Date(),
  photoURL:""
};


  
  constructor() { }

  ngOnInit(): void {
    
  }

}
