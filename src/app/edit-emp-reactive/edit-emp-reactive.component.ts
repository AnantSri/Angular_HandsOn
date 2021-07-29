import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'Models/Department';
import { Skills } from 'Models/Skill';
import { EmployeeService } from '../employeeservice.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

 
 departments:Department[]=[];

 
 skills:Skills[]=[];

 
 employee:any={};

 edit_emp: FormGroup;

 constructor(public fb:FormBuilder,private route:ActivatedRoute,private obj:EmployeeService) 
 {
   
   const employeeId=Number(this.route.snapshot.paramMap.get('id'));
   
   
   this.employee=this.obj.getEmployee(employeeId);

    this.edit_emp=this.fb.group(
     {
       name:[this.employee.name,[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
       salary:[this.employee.salary,[Validators.required,Validators.min(5000),Validators.max(50000)]],
       permanent:[this.employee.permanent,[Validators.required]],
       department:[this.employee.department,[Validators.required]],
       empskills:new FormArray([],[Validators.required])
     });

     this.skills=
     [
       {id:4,name:"Kotlin"},
       {id:5,name:"AI"},
       {id:6,name:"ML"},
       {id:7,name:"IOT"},
       {id:8,name:"Node JS"},
       {id:9,name:"Graphics Design"},
       {id:10,name:"FireBase"},
       {id:11,name:"Flutter"}
     ];
 }

 ngOnInit(): void 
 {
   this.departments=
   [
     {id:1,name:"PayRoll"},
     {id:2,name:"Internal"},
     {id:3,name:"HR"}
   ];

   
   
 }

 
 onSubmit(data:any):void
 {
   console.log(data);
 }

 
 onCheckBoxChange(e:any):void
 {
   
   const temp=<FormArray> this.edit_emp.get('empskills');
   
   
   if(e.target.checked)
   temp.push(new FormControl(e.target.value));
   
   else
   {
     let i:number=0;
     
     temp.controls.forEach((item)=>{
       if(item.value==e.target.value)
       {
         temp.removeAt(i);
         return;
       }
       i++;
     });
   }
  
 }

}
