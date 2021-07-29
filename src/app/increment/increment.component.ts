import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  
  value:number=0;
  result:string="";
  quantity:number=0;
  flag:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
 
  
  click():void
  {
    this.result="Click Me button clicked!";  
  }

  //inc function invoked on the Add button click.
  inc():void
  {
    this.value+=1;
  }

  //minus function invoked when minus button is clicked.
  minus():void
  {
    this.quantity-=1;
    if(this.quantity==0)
    this.flag=true;
    
  }

  //plus function invoked when plus button is clicked.
  plus():void
  {
    this.quantity+=1;
    if(this.quantity>0)
    this.flag=false;
  }

}
